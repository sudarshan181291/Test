# NimbusHost — Hosting Provider Dashboard

A React + Vite single-page dashboard for a hosting provider console. It features a
simple sidebar for navigation and a KPI-driven overview of the server fleet.

## Features

- Collapsible-friendly **sidebar** navigation (Dashboard, Servers, Domains, Billing, Support, Settings)
- **KPI cards**: Active Servers, Avg CPU Load, Bandwidth, Fleet Uptime — derived live from fleet state
- **Server Fleet** table with region, plan, CPU usage bars and status badges
- **Provision server** action that adds a node and recomputes KPIs in real time
- Recent activity feed

## Tech stack

- React 19
- Vite 8 (dev server + build)
- oxlint (linting)
- Plain CSS (no UI framework)

## Getting started

```bash
npm install     # install dependencies
npm run dev     # start the dev server (http://localhost:5173)
npm run lint    # run oxlint
npm run build   # production build to dist/
npm run preview # preview the production build
```
