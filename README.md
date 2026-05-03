# Emmanuel Danladi — Portfolio

A personal portfolio site built with **Vite + React + TypeScript**, deployed via **GitHub Pages**.

Dark editorial aesthetic: pitch-black background, cream serif typography (Instrument Serif), warm coral accent. Fully responsive, with scroll-triggered reveals, a custom cursor, a live Lagos clock, and a press-`i`-to-invert easter egg.

---

## Stack

- **Vite 5** — fast dev server + production build
- **React 18** + **TypeScript** (strict)
- Vanilla CSS with CSS custom properties (no CSS-in-JS, no Tailwind — keeps the bundle tiny)
- `IntersectionObserver` for scroll reveals (custom hook)
- Google Fonts: Instrument Serif, Manrope, JetBrains Mono

No runtime dependencies beyond `react` and `react-dom`.

---

## Local development

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

```bash
npm run build       # type-check + production build into ./dist
npm run preview     # preview the production build locally
```

---

## Deploy to GitHub Pages

Two paths are wired up. Pick one — don't run both.

### Option A — GitHub Actions (recommended, auto-deploy on push)

1. In your repo on github.com → **Settings → Pages**
2. Under **Source**, select **GitHub Actions**
3. Push to `main`. The workflow at `.github/workflows/deploy.yml` builds and deploys automatically.

### Option B — Manual deploy with `gh-pages`

```bash
npm run deploy
```

This builds the site and pushes `./dist` to a `gh-pages` branch. Then in GitHub:

1. **Settings → Pages**
2. **Source: Deploy from a branch**, select `gh-pages` / `(root)`

---

## Configuring the base path

`vite.config.ts` is currently set to `base: "./"` which uses **relative paths** and works for both:

- A user site (`<your-username>.github.io`)
- A project site (`<your-username>.github.io/<repo-name>/`)

If you ever add `react-router` (or any routing library), switch to an absolute base:

```ts
// User site:
base: "/",
// Project site (replace <repo-name>):
base: "/<repo-name>/",
```

---

## Editing content

All copy and data lives in **`src/data/portfolio.ts`** — name, role, email, work items, stack categories, marquee items, etc. Edit the data, save, and the components re-render. No need to touch the components themselves for routine updates.

Visual tokens (colors, fonts, spacing) live as CSS custom properties at the top of **`src/styles/global.css`**.

---

## File structure

```
.
├── .github/workflows/deploy.yml   # GitHub Actions auto-deploy
├── public/                        # static assets (favicon, images)
├── src/
│   ├── components/                # one file per section
│   │   ├── Cursor.tsx
│   │   ├── Masthead.tsx
│   │   ├── Hero.tsx
│   │   ├── CurrentlyBuilding.tsx
│   │   ├── SelectedWork.tsx
│   │   ├── About.tsx
│   │   ├── TheStack.tsx
│   │   ├── Marquee.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── hooks/
│   │   ├── useReveal.ts           # IntersectionObserver-based reveal
│   │   ├── useLocalTime.ts        # live clock for masthead
│   │   └── useInvertEasterEgg.ts  # press 'i' to invert
│   ├── data/
│   │   └── portfolio.ts           # all editable content
│   ├── styles/
│   │   └── global.css             # tokens + section styles
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## License

Personal portfolio. The aesthetic and code are mine to share.
