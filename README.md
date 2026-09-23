# App Store Generator

A GitHub Pages and GitHub Codespaces-ready static web application
that generates an App Store-style preview for a web app.

## Features

- App name
- Bundle ID
- Version
- Platform
- Minimum OS
- File size
- App Store-style preview
- iPad Safari installation instructions
- PWA web manifest
- No backend required
- No build system required

## GitHub Pages

1. Create a GitHub repository named:

   `app-store-generator`

2. Upload the project files.

3. Open:

   **Settings → Pages**

4. Under **Build and deployment**, select:

   - Source: Deploy from a branch
   - Branch: `main`
   - Folder: `/ (root)`

5. Save.

The site will be available at:

https://skylerdufour429.github.io/app-store-generator/

## GitHub Codespaces

Open the repository in GitHub Codespaces.

Because this is a static application, no package installation is required.

A simple local server can be used:

```bash
python3 -m http.server 8000
