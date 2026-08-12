# Overview
This repository contains the source files for the official [CPFilter.com](https://cpfilter.com) website.

GitHub Pages preview: https://shaoanlin.github.io/cpfilter/

# Development
## Publish
The site consists of static files and uses relative asset paths, so the repository root can be published directly with GitHub Pages.

There are currently two publishing targets:

1. **GitHub Pages preview** — publish the `master` branch from the repository root.
2. **Production website** — upload the repository with `git-ftp`. The hosting provider and FTP connection details are configured outside this repository.

After merging a change into `master`, verify the preview before publishing production:

1. Open https://shaoanlin.github.io/cpfilter/.
2. Confirm that the home, about, products, product detail, news, and contact pages load.
3. Confirm that navigation, product images, mobile layout, and the contact form behave correctly.
4. Publish the verified files to the production web host:

   ```sh
   git-ftp push
   ```

## Local Development
Use Browser Sync to visualize website locally.

```sh
browser-sync start --server --directory --files "**/*"
```

## Tools and Dependencies
### ReactJS
Reuse components with ReactJS. Files in `js/` are generated from the matching JSX files in `src/`.

```sh
npm run build
npm run check:generated
```

### RequireJS
RequireJS manages third-party JavaScript libraries. See `js/main.js` and `js/main-<page>.js`.

### CSS
Sass/SCSS source files are under `stylesheets/sass/`. Compile `stylesheets/sass/styles.scss` to `stylesheets/theme.min.css`.

Prepros can perform this preprocessing.

### Package
Use npm to manage development packages.

```sh
npm ls package-name
```

Review vulnerable npm packages before applying updates:

```sh
npm audit
```

# Improvement TODO

Each section should be handled in a separate, focused pull request. Verify every pull request locally and on the GitHub Pages preview before publishing it to production.

## PR 1 — Product navigation stability

- [x] Parse query parameters with `URLSearchParams`.
- [x] Validate product, category, subgroup, and housing parameters.
- [x] Show a useful not-found state instead of throwing an error for invalid product links.
- [x] Remove development-only console output.

## PR 2 — Build and dependency maintenance

- [x] Add documented npm scripts for compiling JSX and checking generated files.
- [x] Upgrade supported development dependencies after reviewing breaking changes.
- [x] Audit the runtime CDN dependencies, starting with jQuery 2.
- [x] Add integrity and cross-origin attributes where external CDN assets remain necessary.

## PR 3 — Contact form reliability

- [ ] Confirm the current Formspree endpoint is active.
- [x] Use semantic form markup and browser validation.
- [x] Display clear submitting, success, and failure states.
- [x] Make the phone number, email address, and map accessible links.

## PR 4 — Analytics and privacy

- [x] Decide whether analytics and advertising are still required.
- [x] Replace Universal Analytics with GA4, or remove analytics.
- [x] Remove unused AdSense scripts.
- [x] Document any required consent and privacy behavior.

Universal Analytics (`UA-132312070-1`) stopped processing data in July 2023, and no
AdSense ad units were ever rendered on the site despite the loader script being present.
Both were removed rather than replaced, since the site no longer loads any third-party
analytics or advertising scripts. No cookie/consent banner is required as a result; if
analytics or advertising are reintroduced in the future, add the appropriate consent
mechanism at that time.

## PR 5 — SEO and content

- [ ] Add unique page descriptions and dynamic product titles.
- [ ] Add `lang="zh-Hant"`, canonical URLs, and social sharing metadata.
- [ ] Add `robots.txt` and `sitemap.xml`.
- [ ] Confirm and consistently use the company's official legal name.
- [ ] Update or remove the empty news page.
- [ ] Generate the footer year dynamically.

## PR 6 — Accessibility

- [ ] Allow browser zoom by removing the restrictive viewport settings.
- [ ] Add meaningful alternative text to content images.
- [ ] Add labels and accessible validation messages to form controls.
- [ ] Make sliders, navigation controls, and menus keyboard accessible.
- [ ] Add an accessible title to the embedded map.

## PR 7 — Performance

- [ ] Load only the scripts and styles required by each page.
- [ ] Lazy-load below-the-fold images.
- [ ] Optimize large images and evaluate WebP or AVIF variants.
- [ ] Measure the GitHub Pages preview with Lighthouse and address major regressions.