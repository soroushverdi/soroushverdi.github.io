
# Deploy this site to GitHub Pages (NO terminal)

## 1) Create a repository
- Go to GitHub → New → **Repository**
- Name it e.g. `marketing-phd-site` (public)
- Click **Create repository**

## 2) Upload these files
- On your new repo page, click **Add file → Upload files**
- Drag *all files and folders* from this project into the drop area (including the `.github` folder)
- Click **Commit changes**

## 3) Set the correct base path
- Open `vite.config.ts` in GitHub (click the file → pencil icon)
- Change `'/REPO_NAME/'` to `'/marketing-phd-site/'` (or your repo name)
- Click **Commit changes**

> If your repo is named `<username>.github.io`, set base to `'/'`

## 4) Enable Pages
- Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**

A workflow will run and publish your site to:
- `https://<username>.github.io/<repo>/` (project site), or
- `https://<username>.github.io/` (profile site)

## 5) Change your photo
- Click **Add file → Upload files**
- Upload your headshot as `public/headshot.jpg`
