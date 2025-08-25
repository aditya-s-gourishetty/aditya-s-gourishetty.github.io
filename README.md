# Next.js + MDX Portfolio/Blog Starter

## Quickstart
```bash
npm i
npm run dev
```

Write posts in `content/blog/*.mdx`

## Static export for GitHub Pages
- If your repo is `<username>.github.io`, no extra config needed.
- If it's a sub-repo (e.g., `personal-site`), set a repo path when deploying:
  - In GitHub Actions, configure repository Environment Variables or Secrets to set `NEXT_BASE_PATH=/personal-site`
  - or locally: `NEXT_BASE_PATH=/personal-site npm run export`

## Deploy
- **Vercel**: import the repo; it will build automatically.
- **GitHub Pages**: workflow `.github/workflows/gh-pages.yml` publishes the `out/` folder.
