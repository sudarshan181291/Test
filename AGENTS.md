# AGENTS.md

## Cursor Cloud specific instructions

This repo is a single-page **React 19 + Vite 8** app (a hosting-provider dashboard). There is no
backend — everything runs client-side with mock data in `src/data.js`.

Dependencies are installed automatically on VM startup via the update script (`npm install`), so you
normally don't need to install anything manually.

Standard scripts are defined in `package.json`; use those rather than ad-hoc commands:

- `npm run dev` — start the Vite dev server (defaults to `http://localhost:5173`). Long-running; run it
  in a background/tmux session, not a blocking foreground call.
- `npm run lint` — lint with **oxlint** (config in `.oxlintrc.json`), not ESLint.
- `npm run build` — production build to `dist/`.
- `npm run preview` — serve the built `dist/` output.

Notes / gotchas:

- Linting uses `oxlint`, not ESLint — there is no `.eslintrc`. Run `npm run lint`.
- The dev server binds to `localhost`. When testing from the Desktop/browser in this VM, use
  `http://localhost:5173`.
- Core interactive flow to smoke-test: the sidebar switches sections, and the "+ Provision server"
  button prepends a node to the Server Fleet table and recomputes the KPI cards live (KPIs are derived
  from fleet state in `src/data.js`).
