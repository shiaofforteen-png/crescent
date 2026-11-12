# Crescent Smile Dental Studio

Modern, production-grade single-page website for **Crescent Smile Dental Studio** located in Crescent Arcade, G-8 Markaz, Islamabad, Pakistan. Built with React 19, Vite, and Tailwind CSS.

---

## Why GitHub Pages Showed a Blank Page & How It's Fixed

When deploying Vite apps to GitHub Pages, the default Vite configuration uses an absolute root base path (`base: '/'`). On GitHub Pages, repositories are hosted under a subpath (e.g., `https://<username>.github.io/<repository-name>/`). 

Because of the absolute path, the browser searched for the JavaScript and CSS bundles at `https://<username>.github.io/assets/...` instead of `https://<username>.github.io/<repository-name>/assets/...`, returning **404 Not Found** errors and leaving the page blank (`<div id="root"></div>`).

### Fixes Applied:
1. **Configured Relative Base Path (`vite.config.ts`)**:
   - Added `base: './'` so that Vite outputs relative asset links (`./assets/...`). The site now works on any GitHub Pages repository name, subfolder, or custom domain.
2. **Bundled Image Imports (`src/assets/images/index.ts`)**:
   - Replaced raw string paths with proper ES module asset imports. Vite now bundles, hashes, and exports all clinical images into `dist/assets/`, preventing broken images in production builds.
3. **Automated GitHub Actions Deployment Workflow (`.github/workflows/deploy.yml`)**:
   - Created an automated CI/CD workflow that builds and deploys directly to GitHub Pages on every push.

---

## How to Deploy to GitHub Pages (2 Easy Options)

### Option 1: Automatic GitHub Actions (Recommended)
1. Push your repository code to GitHub:
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```
2. In your GitHub repository:
   - Go to **Settings** > **Pages** (under Code and automation).
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. That's it! GitHub will automatically run the `.github/workflows/deploy.yml` workflow and publish your site at:
   `https://<your-username>.github.io/<repo-name>/`

---

### Option 2: Deploying via `dist` Folder (Manual)
1. Build the production site locally:
   ```bash
   npm run build
   ```
2. Deploy the `dist` folder to your `gh-pages` branch or configure GitHub Pages to serve from the `dist` folder.
