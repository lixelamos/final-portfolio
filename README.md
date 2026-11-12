# Kipkorir Amos — portfolio

Next.js App Router, React, and TypeScript. The previous Vue site remains in `amosp/`.

## Local development

Use Node 24 (see `.nvmrc`), run `npm ci`, then `npm run dev`. The preview runs at http://127.0.0.1:3002. The dev script uses Webpack polling for local filesystem compatibility.

- `npm run build`: production build and TypeScript checks.
- `npm run typecheck`: TypeScript only.

## Updating content

- `lib/content.ts`: project descriptions, live and source links, contact profiles, résumé, screenshots.
- `app/page.tsx`: hero, about, and secondary e-learning interest.
- `components/project-gallery.tsx`: featured project, paired project layouts, filters, expandable explanations.
- `app/globals.css`: navy/cobalt/lime design, typography, responsive layouts, light/dark themes.
- `public/images/amos.jpg`: supplied portrait photograph.
- `public/images/projects/`: real browser screenshots captured from each project’s live deployment.

The hero uses bold name typography and the supplied photograph. FlowDock has a featured split layout; the other projects use paired screenshots. Screenshots show public pages; SmartSeason’s screen is explicitly labelled as sign-in within its expanded description. Application context, implementation details, and feature summaries remain available under “A closer look”.

## Live project policy

Only projects with accessible live entry pages are listed. Five projects are retained: FlowDock, Resolva Africa (Pelini), QuickAI, SmartSeason, and Plan-Do. Private source is not linked. Protected workflows require an account and were not tested after authentication. No accounts, paid actions, download transactions, or test submissions were created during verification.

Prior review removed Pinvent (deployment 404), Edemy (visible backend request failure), Mini Job Board (no live URL identified), and LMS → PDF (CLI without a live web demo). The e-learning portfolio is a secondary interest, not the primary role.

## Deployment

The root `vercel.json` selects Next.js. A hosted project must use the repository root, rather than `amosp/`. The résumé uses the Google Drive URL from the original portfolio header.
