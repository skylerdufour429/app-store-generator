# App Store Generator

A lightweight, static App Store-style preview generator designed for **GitHub Pages** and **GitHub Codespaces**.

## Live site

If this repository is named `app-store-generator` under the account `skylerdufour429`, GitHub Pages can serve it at:

`https://skylerdufour429.github.io/app-store-generator/`

## Features

- App name, Bundle ID, version, platform, minimum OS, and file size fields
- App Store-style preview
- iPad/iOS Home Screen installation instructions
- Responsive layout
- Dark-mode support
- PWA manifest
- GitHub Pages deployment workflow
- No server or build step required

## GitHub Codespaces

1. Create/import the repository on GitHub.
2. Open **Code → Codespaces → Create codespace on main**.
3. Edit `index.html`, `styles.css`, and `app.js`.
4. Preview the static site using any local static server.

For example, if Python is available:

```bash
python3 -m http.server 8000
```

Then open port 8000 from the Codespaces **Ports** panel.

## GitHub Pages

1. Push the repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **GitHub Actions**.
4. Push to `main`.
5. The included `.github/workflows/pages.yml` workflow deploys the site.

## Important distinction

This project generates a **web-based App Store-style preview** and provides instructions for installing the site as a Home Screen web app/PWA.

It does **not** create a signed `.ipa`, submit an app to Apple's App Store, or replace Apple's App Store Connect workflow.

## iPad Home Screen installation

1. Open Safari on your iPad.
2. Visit the deployed GitHub Pages URL.
3. Enter the app information.
4. Tap **Generate App Store Preview**.
5. Tap **Get** to show the installation instructions.
6. In Safari, tap **Share → Add to Home Screen**.
7. Choose the desired name and tap **Add**.
8. Launch the new Home Screen icon.
