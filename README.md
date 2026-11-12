# Crescent Smile Dental Studio

Modern, production-grade website for **Crescent Smile Dental Studio** located in Crescent Arcade, G-8 Markaz, Islamabad, Pakistan. Built with React 19, Vite, and Tailwind CSS.

---

## Why GitHub Pages Shows a Blank White Screen

There are 3 common reasons React + Vite sites show a blank white page on GitHub Pages:

1. **Deploying the raw source instead of the built `dist` folder**:
   In GitHub Pages settings, selecting **"Deploy from a branch: main / (root)"** causes GitHub Pages to serve the unbuilt `index.html` from the root, which references `/src/main.tsx`. Modern browsers cannot run `.tsx` files directly, causing a fatal error and leaving `<div id="root"></div>` completely blank.

2. **Absolute Base URL vs Repository Subdirectory**:
   On GitHub Pages, apps are hosted at `https://<username>.github.io/<repository-name>/`. If the base path is not configured, the browser looks for scripts at `https://<username>.github.io/assets/...` instead of inside your repository, resulting in 404s.

3. **Jekyll Processing**:
   By default, GitHub Pages processes files through Jekyll, which ignores certain static asset paths and files.

---

## How It's Fixed in This Project

- **`.nojekyll` added**: Tells GitHub Pages to serve all assets directly without Jekyll interference.
- **Configurable `base`**: Set to auto-detect the repository path in GitHub Actions or fallback to relative `./`.
- **Bundled asset images**: All images are imported as ES modules so Vite compiles and hashes them into `dist/assets/`.
- **SPA `404.html` fallback**: Preserves routing and prevents 404s.
- **`gh-pages` tool installed**: Enables 1-command deployment with `npm run deploy`.
- **Automated GitHub Actions workflow**: Ready in `.github/workflows/deploy.yml`.

---

## How to Deploy to GitHub Pages (Choose Option 1 or Option 2)

### Option 1: One-Command Deployment with `npm run deploy` (Fastest & Easiest)

1. Make sure your local git repo has your GitHub remote added:
   ```bash
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   ```
2. Run the deploy script:
   ```bash
   npm run deploy
   ```
   *This automatically builds the project (`npm run build`) and pushes the `dist` folder directly to the `gh-pages` branch on GitHub with `.nojekyll` included.*

3. On GitHub:
   - Go to your repository **Settings** → **Pages** (in the left sidebar).
   - Under **Build and deployment** → **Source**, select **"Deploy from a branch"**.
   - Under **Branch**, select **`gh-pages`** and **`/(root)`**, then click **Save**.
   - Your site will be live at `https://<your-username>.github.io/<your-repo-name>/`!

---

### Option 2: Automated GitHub Actions (Push-to-Deploy)

1. Push your code to your repository:
   ```bash
   git add .
   git commit -m "Deploy Crescent Smile website"
   git push origin main
   ```
2. On GitHub:
   - Go to your repository **Settings** → **Pages**.
   - Under **Build and deployment** → **Source**, change the dropdown from "Deploy from a branch" to **"GitHub Actions"**.
3. That's it! GitHub Actions will run `.github/workflows/deploy.yml`, build your project, configure the base path automatically, and publish your website.
