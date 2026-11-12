# Kipkorir Amos — portfolio

Next.js App Router, React, and TypeScript. The previous Vue site remains in `amosp/`.

## Local development

Use Node 24 (see `.nvmrc`), run `npm ci`, then `npm run dev`. The preview runs at http://127.0.0.1:3002. The dev script uses Webpack polling for local filesystem compatibility.

- `npm run build`: production build and TypeScript checks.
- `npm run typecheck`: TypeScript only.

## Updating content

- `lib/content.ts`: project descriptions, live and source links, contact profiles, résumé, screenshots.
- `app/page.tsx`: hero, about, and secondary e-learning interest.
- `components/project-gallery.tsx`: interactive project index, project viewer, filters, and expandable feature summaries.
- `app/globals.css`: editorial typography, warm neutral and green palette, responsive layouts, and light/dark themes.
- `public/images/amos.jpg`: supplied portrait photograph.
- `public/images/projects/`: real browser screenshots captured from each project’s live deployment.

The hero introduces the developer’s work alongside a real FlowDock website preview. A selectable project index reveals larger screenshots, application context, implementation details, and source links where public. The supplied portrait appears in the hero and About section. E-learning remains a secondary interest.

## Live project policy

Only projects with accessible live entry pages are listed. Six projects are retained: FlowDock, Resolva Africa (Pelini), QuickAI, SmartSeason, Plan-Do, and EV Charging Dashboard. Private source is not linked. Protected workflows are labelled. EV Charging Dashboard was entered through its demo sign-in; other account-only workflows were not exercised. No paid actions or charging-device commands were issued during verification.

Prior review removed Pinvent (deployment 404), Edemy (visible backend request failure), Mini Job Board (no live URL identified), and LMS → PDF (CLI without a live web demo). The e-learning portfolio is a secondary interest, not the primary role.

## Deployment

The root `vercel.json` selects Next.js. A hosted project must use the repository root, rather than `amosp/`. The résumé uses the Google Drive URL from the original portfolio header.

## EV dashboard verification

The screenshot shows the signed-in dashboard, accessed with a sample email and password. Its source repository is private, so no public source link is exposed.

Source inspection confirmed Axios integration with charging-infrastructure resources and dashboard polling every 30 seconds. The deployed JavaScript contains the same backend and resource names. Read-only requests returned HTTP 200 for charge-point status, charge points, heartbeats, and meter values. Status counts matched the displayed dashboard; meter values returned an empty collection at verification time.

The integration is real, but some visualisations and workflow values are sample data: energy charts and charging information contain constants, history includes simulated durations, and user bookings are stored locally. No physical-device command was tested. API responses alone do not independently establish the physical provenance or freshness of every record.

The deployed EV app returns 404 when a nested route is refreshed directly; enter through its homepage and demo sign-in. This portfolio links to that working entry page.
