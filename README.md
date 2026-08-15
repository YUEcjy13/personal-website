# Jiangyue Chen Academic Homepage

A dependency-free, static academic homepage for Jiangyue Chen.

## Local preview

```bash
npm run build
npm run dev
```

Open `http://localhost:3000` in a browser.

## Build

```bash
npm run build
```

The deployable site is written to `dist/`. The build copies only `index.html`, `data/`, `scripts/`, `styles/`, and `assets/`; it never includes the private `materials/` directory.

## Update content

Edit `data/site-content.js` to update profile details, news, publications, projects, education, and honors. Public files belong in `assets/`.
