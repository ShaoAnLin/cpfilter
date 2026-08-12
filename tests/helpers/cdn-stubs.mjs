import fs from 'node:fs/promises';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

// The published pages load a handful of libraries from public CDNs. The tests
// answer those requests with the matching packages from node_modules so the
// suite is deterministic and runs without internet access.
const CDN_REPLACEMENTS = [
  {
    match: /cdnjs\.cloudflare\.com\/ajax\/libs\/jquery\//,
    file: () => require.resolve('jquery/dist/jquery.min.js'),
    contentType: 'text/javascript; charset=utf-8'
  },
  {
    match: /cdnjs\.cloudflare\.com\/ajax\/libs\/require\.js\//,
    file: () => path.join(path.dirname(require.resolve('requirejs/package.json')), 'require.js'),
    contentType: 'text/javascript; charset=utf-8'
  },
  {
    match: /unpkg\.com\/react-dom@/,
    file: () => require.resolve('react-dom/umd/react-dom.production.min.js'),
    contentType: 'text/javascript; charset=utf-8'
  },
  {
    match: /unpkg\.com\/react@/,
    file: () => require.resolve('react/umd/react.production.min.js'),
    contentType: 'text/javascript; charset=utf-8'
  }
];

const STUBBED_HOSTS = [
  { match: /fonts\.googleapis\.com/, body: '', contentType: 'text/css; charset=utf-8' },
  { match: /fonts\.gstatic\.com/, body: '', contentType: 'font/woff2' },
  { match: /maps\.google\.[a-z.]+/, body: '<!DOCTYPE html><title>map</title>', contentType: 'text/html; charset=utf-8' }
];

export async function stubExternalRequests(page) {
  await page.route('**/*', async (route) => {
    const url = route.request().url();

    if (url.startsWith('http://127.0.0.1') || url.startsWith('data:') || url.startsWith('blob:')) {
      await route.continue();
      return;
    }

    const replacement = CDN_REPLACEMENTS.find((entry) => entry.match.test(url));
    if (replacement) {
      await route.fulfill({
        status: 200,
        contentType: replacement.contentType,
        body: await fs.readFile(replacement.file())
      });
      return;
    }

    const stub = STUBBED_HOSTS.find((entry) => entry.match.test(url));
    if (stub) {
      await route.fulfill({ status: 200, contentType: stub.contentType, body: stub.body });
      return;
    }

    await route.abort();
  });
}
