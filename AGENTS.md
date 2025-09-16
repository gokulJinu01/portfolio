# Repository Guidelines

## Project Structure & Module Organization
- App code lives in `src/`.
  - Components in `src/components/` (e.g., `Navbar.js`, `HeroSection.js`).
  - Styles in `src/styles/` (CSS per component, e.g., `Navbar.css`).
  - Entry points: `src/index.js`, `src/App.js`.
  - Tests colocated as `*.test.js` (e.g., `src/App.test.js`).
- Static assets in `public/` (HTML, icons, manifest) and fonts in `src/fonts/`.

## Build, Test, and Development Commands
- `npm start` — Run local dev server at `http://localhost:3000` with live reload.
- `npm test` — Run Jest in watch mode (React Testing Library enabled).
- `npm run build` — Production build to `build/` (minified, hashed assets).
- `npm run eject` — One‑way eject; avoid unless absolutely necessary.

## Coding Style & Naming Conventions
- Follow CRA ESLint config (`react-app`, `react-app/jest`). Fix warnings before PRs.
- Indentation: 2 spaces; prefer trailing commas where valid; keep files free of unused exports.
- Components: `PascalCase` filenames and exports (e.g., `AboutSection.js`).
- CSS modules are not used; keep component styles in `src/styles/Name.css` and import in the component.
- Keep functions small and pure; lift shared UI into `src/components/`.

## Testing Guidelines
- Frameworks: Jest + React Testing Library (`src/setupTests.js`).
- Co‑locate tests next to code or in `src/` with `*.test.js` suffix.
- Cover rendering and key interactions; mock network/UI-only concerns.
- Run coverage locally with `npm test -- --coverage`.

## Commit & Pull Request Guidelines
- Commits: Imperative, concise subject (≤72 chars). Example: `Add contact form validation`.
- PRs: Include a summary, linked issues (e.g., `Closes #123`), and screenshots/GIFs for UI changes.
- Ensure `npm start` works, tests pass, and no ESLint warnings.

## Security & Configuration Tips
- Environment vars must be prefixed with `REACT_APP_` in CRA (e.g., `.env.local`).
- Do not commit secrets. If using EmailJS (`@emailjs/browser`), keep keys in env.
- Validate user input in forms; never trust client‑side validation alone.

## Agent‑Specific Notes
- Respect this AGENTS.md across the repo scope; keep changes minimal and focused.
- When adding code, mirror existing patterns and place tests alongside changes.
