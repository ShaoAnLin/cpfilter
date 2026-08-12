import test from 'node:test';
import assert from 'node:assert/strict';
import { chromium } from 'playwright';
import { startSiteServer } from './helpers/server.mjs';
import { stubExternalRequests } from './helpers/cdn-stubs.mjs';

const DESKTOP_VIEWPORT = { width: 1280, height: 900 };
const MOBILE_VIEWPORT = { width: 375, height: 750 };

// Largest font size a section heading (`.block-title`) may use. Headings are
// styled by the component class, so a page that picks a different tag (h1, h2…)
// must still render at the shared size.
const MAX_BLOCK_TITLE_FONT_SIZE = 40;

const PAGES = [
  { name: 'home', url: 'index.html' },
  { name: 'about us', url: 'aboutus.html' },
  { name: 'products', url: 'products.html' },
  { name: 'product detail', url: 'product-detail.html?item=ALS' },
  { name: 'product detail (unknown item)', url: 'product-detail.html?item=does-not-exist' },
  { name: 'news', url: 'news.html' },
  { name: 'contact', url: 'contact.html' }
];

let server;
let browser;

test.before(async () => {
  server = await startSiteServer();
  browser = await chromium.launch();
});

test.after(async () => {
  await browser?.close();
  await server?.close();
});

async function openPage(url, viewport = DESKTOP_VIEWPORT) {
  const context = await browser.newContext({ viewport });
  const page = await context.newPage();
  const problems = { consoleErrors: [], pageErrors: [], failedRequests: [] };

  page.on('console', (message) => {
    if (message.type() === 'error') {
      problems.consoleErrors.push(message.text());
    }
  });
  page.on('pageerror', (error) => problems.pageErrors.push(String(error)));
  page.on('requestfailed', (request) => problems.failedRequests.push(request.url()));
  page.on('response', (response) => {
    if (response.status() >= 400) {
      problems.failedRequests.push(`${response.status()} ${response.url()}`);
    }
  });

  await stubExternalRequests(page);
  await page.goto(server.baseUrl + url, { waitUntil: 'load' });
  // The site renders its header, footer and page content with React after the
  // preloader finishes, so wait for that instead of a fixed timeout.
  await page.waitForFunction(() => !document.body.classList.contains('preloading'), null, { timeout: 15000 });
  await page.waitForFunction(() => document.querySelector('.footer')?.children.length > 0, null, { timeout: 15000 });

  return { context, page, problems };
}

for (const { name, url } of PAGES) {
  test(`${name} page renders without errors or broken assets`, async () => {
    const { context, page, problems } = await openPage(url);

    try {
      assert.deepEqual(problems.pageErrors, [], 'unexpected JavaScript errors');
      assert.deepEqual(problems.consoleErrors, [], 'unexpected console errors');
      assert.deepEqual(problems.failedRequests, [], 'failed or missing requests');

      const state = await page.evaluate(() => ({
        title: document.title,
        description: document.querySelector('meta[name="description"]')?.getAttribute('content') ?? '',
        canonical: document.querySelector('link[rel="canonical"]')?.getAttribute('href') ?? '',
        wrapperVisibility: getComputedStyle(document.querySelector('.page-wrapper')).visibility,
        headerLinks: document.querySelectorAll('.header a').length,
        footerText: document.querySelector('.footer')?.textContent.trim() ?? '',
        mainText: document.querySelector('main')?.innerText.trim() ?? ''
      }));

      assert.ok(state.title.length > 0, 'page title must not be empty');
      assert.ok(state.description.length > 0, 'meta description must not be empty');
      assert.ok(state.canonical.startsWith('https://cpfilter.com/'), 'canonical URL must be absolute');
      assert.equal(state.wrapperVisibility, 'visible', 'preloader must reveal the page');
      assert.ok(state.headerLinks > 0, 'header navigation must be rendered');
      assert.ok(state.footerText.includes(String(new Date().getFullYear())), 'footer must show the current year');
      assert.ok(state.mainText.length > 0, 'main content must not be empty');
    } finally {
      await context.close();
    }
  });

  test(`${name} page renders images with their natural aspect ratio`, async () => {
    const { context, page } = await openPage(url);

    try {
      const images = await page.evaluate(() =>
        [...document.images]
          // Images that are cropped on purpose (object-fit) keep their aspect
          // ratio no matter which box they are painted into.
          .filter((image) => image.clientWidth > 0 && image.clientHeight > 0 && getComputedStyle(image).objectFit === 'fill')
          .map((image) => ({
            src: image.currentSrc || image.src,
            complete: image.complete,
            naturalWidth: image.naturalWidth,
            naturalHeight: image.naturalHeight,
            clientWidth: image.clientWidth,
            clientHeight: image.clientHeight
          }))
      );

      for (const image of images) {
        assert.ok(image.complete && image.naturalWidth > 0, `image failed to load: ${image.src}`);

        const naturalRatio = image.naturalWidth / image.naturalHeight;
        const renderedRatio = image.clientWidth / image.clientHeight;
        const drift = Math.abs(renderedRatio - naturalRatio) / naturalRatio;
        assert.ok(
          drift < 0.05,
          `image is distorted: ${image.src} rendered ${image.clientWidth}x${image.clientHeight} for a ` +
            `${image.naturalWidth}x${image.naturalHeight} source`
        );
      }
    } finally {
      await context.close();
    }
  });

  test(`${name} page uses consistent section heading sizes`, async () => {
    const { context, page } = await openPage(url);

    try {
      const headings = await page.evaluate(() =>
        [...document.querySelectorAll('.block-title')].map((heading) => ({
          tag: heading.tagName,
          text: heading.textContent.trim().slice(0, 20),
          fontSize: Number.parseFloat(getComputedStyle(heading).fontSize)
        }))
      );

      for (const heading of headings) {
        assert.ok(
          heading.fontSize <= MAX_BLOCK_TITLE_FONT_SIZE,
          `section heading "${heading.text}" (${heading.tag}) renders at ${heading.fontSize}px, ` +
            `above the ${MAX_BLOCK_TITLE_FONT_SIZE}px limit`
        );
      }

      const distinctSizes = new Set(headings.map((heading) => heading.fontSize));
      assert.ok(distinctSizes.size <= 1, `section headings use mixed sizes: ${[...distinctSizes].join(', ')}`);
    } finally {
      await context.close();
    }
  });

  test(`${name} page has no horizontal overflow on mobile`, async () => {
    const { context, page } = await openPage(url, MOBILE_VIEWPORT);

    try {
      const offenders = await page.evaluate(() => {
        const viewportWidth = document.documentElement.clientWidth;
        const canvas = document.querySelector('[canvas=container]');
        const results = [];

        for (const element of document.body.querySelectorAll('*')) {
          const box = element.getBoundingClientRect();
          if (box.width === 0 || box.height === 0 || box.right <= viewportWidth + 1) {
            continue;
          }

          // Carousels and other components deliberately park content outside
          // their own clipped box, so only unclipped content counts as overflow.
          let ancestor = element.parentElement;
          let clipped = false;
          while (ancestor && ancestor !== canvas) {
            if (getComputedStyle(ancestor).overflowX !== 'visible') {
              clipped = true;
              break;
            }
            ancestor = ancestor.parentElement;
          }

          if (!clipped) {
            results.push(
              `${element.tagName.toLowerCase()}${element.className ? '.' + String(element.className).split(' ')[0] : ''} ` +
                `reaches ${Math.round(box.right)}px`
            );
          }
        }

        return results.slice(0, 5);
      });

      assert.deepEqual(offenders, [], `content overflows the ${MOBILE_VIEWPORT.width}px viewport`);
    } finally {
      await context.close();
    }
  });
}
