# App Store Generator

A lightweight, GitHub Pages-hosted web app for creating App Store-style application information and previews.

The project is designed to be **GitHub Codespaces-ready**, **GitHub Pages-ready**, and usable as an installable web app from Safari on iPad.

## Live Demo

**App Store Generator:**

[Open App Store Generator](https://skylerdufour429.github.io/app-store-generator/?utm_source=chatgpt.com)

## Features

* App name input
* Bundle ID input
* Version input
* Platform selection
* Minimum OS input
* File size input
* App Store-style preview generation
* Installation instructions
* iPad Home Screen installation guidance
* Responsive interface
* Web App Manifest
* GitHub Codespaces development support
* GitHub Pages deployment
* No backend required
* No database required
* No external server required

## Important

This project is a **web application**.

It does not create or install a native iOS `.ipa` application and does not submit applications to Apple's App Store.

The Home Screen installation feature uses Safari's web-app/Home Screen functionality.

---

# Getting Started with GitHub Codespaces

## 1. Open the Repository

Open the repository on GitHub and select:

**Code → Codespaces → Create codespace on main**

GitHub will create a cloud development environment for the repository.

## 2. Start Developing

Once the Codespace opens, the project files will be available in the VS Code environment.

The primary application files are:

```text
index.html
css/styles.css
js/app.js
manifest.webmanifest
```

Edit these files directly in Codespaces.

## 3. Preview the Application

If the project uses a local development server, start it from the Codespaces terminal.

For a simple static project, you can use:

```bash
python3 -m http.server 8080
```

Then open the forwarded port in the Codespaces interface.

Alternatively, use the built-in browser preview provided by your development environment.

## 4. Save Your Changes

After making changes:

```bash
git status
git add .
git commit -m "Update App Store Generator"
git push
```

Your changes will be pushed back to the GitHub repository.

---

# GitHub Pages Deployment

The project is designed to deploy through GitHub Pages.

The deployment flow is:

```text
GitHub Codespaces
       ↓
Edit project
       ↓
Commit changes
       ↓
Push to GitHub
       ↓
GitHub Actions
       ↓
GitHub Pages
       ↓
Public web app
       ↓
iPad Safari
```

The iPad does **not** connect directly to the Codespace.

Codespaces is the development environment.

GitHub Pages is the public hosting environment.

---

# Repository Structure

```text
app-store-generator/
│
├── .devcontainer/
│   └── devcontainer.json
│
├── .github/
│   └── workflows/
│       └── deploy-pages.yml
│
├── assets/
│   ├── icons/
│   │   └── app-icon.svg
│   │
│   └── screenshots/
│
├── css/
│   └── styles.css
│
├── js/
│   └── app.js
│
├── index.html
├── manifest.webmanifest
├── README.md
├── LICENSE
└── .gitignore
```

---

# App Information Fields

The generator supports the following application information:

| Field      | Example           |
| ---------- | ----------------- |
| App Name   | My Example App    |
| Bundle ID  | com.example.myapp |
| Version    | 1.0.0             |
| Platform   | iOS               |
| Minimum OS | iOS 18.0          |
| File Size  | 25 MB             |

These values are used to generate the App Store-style preview.

---

# iPad Home Screen Installation

## 1. Open Safari

Open Safari on your iPad and visit the App Store Generator.

[App Store Generator](https://skylerdufour429.github.io/app-store-generator/?utm_source=chatgpt.com)

## 2. Create Your App Preview

Enter the requested information:

* App Name
* Bundle ID
* Version
* Platform
* Minimum OS
* File Size

Then tap:

**Generate App Store Preview**

## 3. Review the Preview

Review the generated application information and preview.

## 4. Get the Installation Instructions

Tap the **Get** button.

The generator displays instructions for adding the web app to the iPad Home Screen.

## 5. Add to Home Screen

In Safari:

1. Tap **Share**.
2. Select **Add to Home Screen**.
3. Enter the desired app name.
4. Tap **Add**.

## 6. Launch

Return to the iPad Home Screen.

Tap the newly created icon to launch the web app.

---

# Development Workflow

A typical development workflow looks like this:

```text
1. Open GitHub repository
          ↓
2. Create/open Codespace
          ↓
3. Edit HTML/CSS/JavaScript
          ↓
4. Test in Codespaces
          ↓
5. Commit changes
          ↓
6. Push to GitHub
          ↓
7. GitHub Actions deploys
          ↓
8. GitHub Pages updates
          ↓
9. Open the updated site on iPad
```

---

# Git Commands

Check your changes:

```bash
git status
```

Stage changes:

```bash
git add .
```

Create a commit:

```bash
git commit -m "Update App Store Generator"
```

Push to GitHub:

```bash
git push
```

Pull the latest repository changes:

```bash
git pull
```

---

# GitHub Pages Configuration

If using the included GitHub Actions workflow, configure GitHub Pages to use the GitHub Actions deployment source.

In the repository:

**Settings → Pages → Build and deployment → Source → GitHub Actions**

The deployment workflow will publish the site after changes are pushed.

---

# Progressive Web App

The project includes a Web App Manifest:

```text
manifest.webmanifest
```

The manifest allows compatible browsers to treat the website as an installable web application.

Typical manifest properties include:

```json
{
  "name": "App Store Generator",
  "short_name": "App Generator",
  "start_url": "/app-store-generator/",
  "display": "standalone"
}
```

The actual manifest should match the repository's GitHub Pages path.

---

# Security and Privacy

This project is intended to operate entirely in the browser.

Application information entered into the generator should remain client-side unless additional network functionality is deliberately added.

Do not enter passwords, authentication tokens, private keys, or other sensitive information into the generator.

---

# Customization

You can customize:

* Application name
* Colors
* Typography
* App Store preview layout
* Buttons
* Icons
* Installation instructions
* Form fields
* Platform options
* Preview cards
* Responsive layouts

The primary files to modify are:

```text
index.html
css/styles.css
js/app.js
manifest.webmanifest
```

---

# Troubleshooting

## GitHub Pages is not updating

Check:

1. The latest changes were pushed to GitHub.
2. The GitHub Actions workflow completed successfully.
3. GitHub Pages is configured to use GitHub Actions.
4. The correct repository and branch are being deployed.
5. Safari/browser cache is not displaying an older version.

## The app works in Codespaces but not GitHub Pages

Check that the project does not depend on:

* `localhost`
* Codespaces-specific URLs
* Local filesystem paths
* Server-side APIs that are not deployed
* Absolute paths that do not work under `/app-store-generator/`

GitHub Pages is a static hosting environment, so client-side HTML, CSS, and JavaScript should be used unless an external backend is intentionally configured.

## The Home Screen icon does not appear correctly

Check:

* `manifest.webmanifest`
* icon paths
* icon file formats
* `<link rel="manifest">` in `index.html`
* the deployed HTTPS URL

---

# License

Add the project's chosen license in `LICENSE`.

If you want to make the project open source, a permissive license such as MIT may be appropriate depending on your intended use.

---

# Project Status

**Development:** GitHub Codespaces

**Hosting:** GitHub Pages

**Client:** Safari / modern web browsers

**Target:** iPad and responsive web browsers

**Backend:** None required

**Native iOS application:** No

**App Store submission:** No

---

## License

Copyright © 2026.

See `LICENSE` for the terms governing use and distribution of this project.
