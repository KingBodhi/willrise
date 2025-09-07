# Willrise Unlimited — Licensing Site (Next.js 14)

**Fonts:** Mokoto (display) and Bicubik (body). Add WOFF2 files to `public/fonts` and update `styles/globals.css` @font-face src URLs.

**Brand colors**
- Midnight `#010b19`
- Deep Navy `#021631`
- Signal Blue `#042c62`
- Alloy `#c0c0c0`

## Develop
```bash
npm install
npm run dev
```

## Routes
- `/` Home
- `/military` `/construction` `/pleasure`
- `/patents` `/licensing` `/videos` `/contact`
- `/blog` `/blog/[slug]`

## Blog
Posts are defined in `content/blog/posts.ts` for simplicity (no CMS).
Replace with MDX or a headless CMS later.

## Lead handling
`/api/contact` currently logs to server console. Wire to your email/CRM when ready.
