# Kipkorir Amos — portfolio

The revamped portfolio runs from this repository root using **Next.js App Router, React, and TypeScript**. The previous Vue site remains in `amosp/` for reference.

## Local preview

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:3002. `npm run build` creates the production build. `npm run typecheck` checks TypeScript. Use Node 24 (the existing `.nvmrc`). The dev server uses Webpack polling for compatibility with local filesystem watchers.

## Update the portfolio

- `lib/content.ts`: projects, categories, technology tags, project links, contact profiles, résumé URL.
- `app/page.tsx`: introduction, about section, toolkit, approach.
- `app/globals.css`: typography, colours, layout and responsive styles.
- `components/project-gallery.tsx`: filtering and expandable implementation notes.
- `public/images/amos.svg`: the portrait illustration extracted from the original Vue source.

Project content and links come from the supplied Vue portfolio. Projects use text descriptions, implementation notes, technology lists, and links to the application or source. Invented interface previews have been removed. The résumé uses the original header's Google Drive link; the old Vue résumé component had a different link.

No employment history, education, client quotes, user counts, or performance results have been invented. No email is sent automatically. Email actions open the visitor's email app; the copy action copies the published address.

## Deployment configuration

`vercel.json` now selects Next.js from the repository root, replacing the old nested Vue static-build configuration. Existing hosted project root settings may also need to be set to the repository root before deployment. No deployment was made during this revamp.

## Visual direction

A restrained personal portfolio: a desktop navigation rail, serif name heading, readable project rows, and understated green accents. On mobile the rail becomes a small header. No decorative hero illustrations, mock dashboards, marketing slogans, or philosophy cards. Eight projects and the secondary e-learning interest are retained.

## Live demo review — 6 November 2026

The gallery now contains only four projects with accessible live demos: Resolva Africa (Pelini), QuickAI, SmartSeason, and Plan-Do. The first three require sign-in for protected functionality; no authenticated workflows were tested. Pinvent returned a deployment 404. Edemy rendered a backend request failure. Mini Job Board had no live URL in its repository metadata, and LMS → PDF is a CLI project without a live demo. These four projects were removed from the gallery. Photo: supplied `public/images/amos.jpg`.

## Project visuals

Each retained project now includes an actual browser screenshot from its live deployment, stored under `public/images/projects/`. Resolva Africa and QuickAI show public landing pages, SmartSeason shows the public sign-in screen, and Plan-Do shows task creation. Screenshots were captured on 6 November 2026. Application context, implementation details, feature summaries, and visible live/source links accompany each image. No private dashboards or fictional interfaces are shown.

## Readability and responsive review

Body/project explanation text is now 16px; project introductions are 18px. Supporting text and controls have been enlarged too. Tested widths: 320, 390, 768, 1024, and 1440px, with no horizontal overflow. The sidebar becomes a header at 900px; project explanations stack at 1100px.

FlowDock is now the first project, linked to its verified live website at https://www.flowdock.space/ with an actual screenshot. Its repository is private and not exposed as a public source link.
