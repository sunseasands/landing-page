# Sun Sea Sands — Landing Page

Self-hosted replacement for the Squarespace site at sunseasands.com. Independent
project — no shared code with `sunseasands/sun-sea-sands-app` (the internal
project dashboard). Meant to be deployed as its own Vercel project on the
apex domain, with the dashboard app living on a subdomain/path later.

## Stack

React 19 + TypeScript + Vite + Tailwind CSS v4 + React Router.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Content

All copy lives in `src/data/content.ts`. Sections sourced from screenshots of
the live site are real; anything else is a clearly marked placeholder
(gray image tiles, a couple of artist bios) pending real assets/copy from the
client. Fonts are temporary substitutes (PT Serif / Inter) standing in for the
site's actual brand typefaces — swap the `@font-face`/Google Fonts setup in
`index.html` and `src/index.css` once the real fonts are supplied.

## Deploy

Configured for Vercel with the Vite preset. `vercel.json` adds the SPA
rewrite needed for client-side routes (`/artists/:slug`, etc.) to resolve
correctly on refresh/direct link.
