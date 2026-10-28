# Qarma Labs

The standalone v2 public company website for **Qarma Labs**: a technology studio helping businesses and individuals navigate technology through expert consultation, AI and ICT solutions.

- **V2 website:** https://qarma-labs.github.io/qarma-labs-v2/
- **Original homepage:** https://qarma-labs.github.io/ (remains hosted in `Qarma-Labs/Qarma-Labs.github.io`)
- **Organization:** https://github.com/Qarma-Labs
- **Instagram:** https://www.instagram.com/qarmalabs/

## About the site

This responsive company website introduces Qarma Labs’ services—custom software, AI and automation, and ICT consultation—along with open-source tools explored in its public GitHub organization. Its wording follows Qarma Labs’ own public profile and posts. It avoids invented clients, testimonials, statistics and contact details. QM is explicitly identified as a public fork, not presented as entirely Qarma-authored upstream work.

The visual direction takes inspiration from Wabi.ai’s friendly editorial type, colorful cards and conversational storytelling, while using Qarma Labs’ own brand and original copy. The official GitHub organization avatar is bundled locally in `site/public/assets/`.

The workflow examples are illustrative concepts, not a functioning AI product. The site has no sign-in, enquiry backend, external API or analytics. Contact links open Qarma Labs’ public Instagram profile.

## Develop

Requires Node.js 24.15 or newer.

```bash
npm ci
npm run dev
```

Editable source lives in `site/`. Do not edit root `index.html` or `assets/`: these are generated production files.

```bash
npm run typecheck
npm test
npm run build
npm run preview
```

The build outputs `dist/`, then synchronizes the production HTML, assets and `.nojekyll` file to the repository root. Commit those generated files along with source changes.

## Publish

GitHub Pages publishes this repository at https://qarma-labs.github.io/qarma-labs-v2/. The original homepage at https://qarma-labs.github.io/ remains in the separate `Qarma-Labs/Qarma-Labs.github.io` repository. The root always contains a compiled site, so the default branch publisher and the custom [Pages workflow](.github/workflows/pages.yml) publish the same result rather than raw React source. The workflow checks types and tests, rebuilds, verifies the committed output, and deploys `dist/`.
