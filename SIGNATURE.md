# Top Health Spa — SIGNATURE

- Slug: top-health-spa
- Live: https://top-health-spa.vercel.app
- Repo: https://github.com/semajzandrews/top-health-spa (private)
- Business: massage spa, 28 Washington St, Bloomfield NJ 07003 · 4.0★ Google (4 reviews) · phone (973) 743-5282 → tap-to-call is the money button
- Built: 07-04-2026 · batch: Bloomfield Center #1 (parallel build 2)

## Design fingerprint
- Palette: dusk wellness — deep pine (#16241f/#1d2f28/#274038) + eucalyptus (#7fa393) + linen/sand (#efe9dd/#d9cfbc) + soft blush (#d9a596/#b97f6f). No gold, no ink+champagne, no purple.
- Signature move (ONE per site): scroll-linked "breath" — a fixed blush circle at the right edge that inhales/exhales (4 sinusoid cycles across page scroll, CSS-var driven) with a counter-breathing hairline ring. Hidden on <sm to keep 375px clear.
- Sections (typographic hero, NO hero photo/video): type-only hero on pine → The Ritual (breathing narrative + services as flowing editorial list, hairline rows, not cards) → single large atmospheric image moment → CTA (phone = the whole booking system) → Visit/map → footer. Negative space is the layout.
- Phone on record → tap-to-call primary CTA everywhere; mobile fixed call dock collapses to 52px circle.

## Arsenal Manifest
- Primary medium: photography (stills) + typographic hero — a serene massage spa sells quiet, not motion; big serif type + three graded stills read calmer and more premium than stock video (category + Bloomfield walk-in clientele)
- Video considered: yes — used: no — reason: contract-permitted still/typographic approach; a looping video fights the "breath/stillness" concept and the scroll-breath signature IS the motion moment [BUILD_RULES §7]
- Media used (all self-hosted in public/img, no hotlinks) — ONE image per slot, grep-verified unique 07-04-2026 (each ID count == 1 on the page):
  - photo — Pexels 6187418 — candlelit spa room, therapist at massage table, moody warm interior — the single large atmospheric image moment; unmistakably "massage spa"
  - photo — Pexels 6187645 — warm basalt stone placement close-up, dark dusk tones — CTA section portrait
  - photo — Pexels 19641818 — therapist's hands on client's upper back, warm tones, brown skin — Visit section; community match (Bloomfield NJ is diverse, imagery not default-white)
  - All banked + verified in image-library registry under top-health-spa; none previously used by any other project (checked against registry before download)
- Motion / WebGL technique: scroll-linked CSS-var breath (custom rAF-throttled scroll listener) + IntersectionObserver reveals + Lenis smooth scroll — all custom, no library defaults; prefers-reduced-motion respected everywhere
- Custom icons: single inline phone glyph (original path) — license: original work — used via one React component: yes
- Fontshare pairing: Gambetta (display serif) + Synonym (body) — first use across the registry, self-hosted woff2 via next/font/local
- GPU-verified: n/a — no shader/WebGL (2D motion only, per bundle doctrine)

## Image-uniqueness gate
- PASS — `grep -rn "img/" src/` → 3 references, 3 distinct IDs (6187418, 6187645, 19641818), each in exactly one slot.

## Email enrichment (recon 07-04-2026)
- Public email: NONE FOUND (searched web + Yelp/Cylex/Foursquare listings).
- Instagram: @tophealthspanj — provably exact (Instagram's own page title: "Top Health Spa (@tophealthspanj) · Bloomfield, NJ") → included on site.
- Yelp: yelp.com/biz/top-health-spa-bloomfield-2 (13 photos) — noted for upsell intel, not on site.
- tophealthspa28.com appears in old listings but is DEAD (connection fails) — consistent with "no website" lead status; good pitch angle.

## Verification
- 375px audit: code-level PASS — no fixed widths >375 (widest fixed element 52px call dock); all type clamp()-fluid; sections max-w + px-5; breath widget hidden <sm; map min 360px tall portrait-friendly. No preview server used per contract.
- Prod build: clean static prerender (`npm run build` ✓, `vercel build --prod` ✓, deployed --prebuilt).
- Map: keyless Google output=embed (Ramos pattern) with brand-tint ::after (pine 0.12 + bottom vignette) — verify on live in real Chrome.
- Facts on site: verified lead data only (name, address, phone, category). Hours shown ONLY as "Open late · 7 days" (Google listing shows 9am–10pm daily; specific times intentionally omitted per contract). No invented services-as-menu: services framed as modalities with "call to confirm" language; no invented prices.
