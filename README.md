# App Store Generator

A simple GitHub Pages + GitHub Codespaces-ready web application for generating
App Store-style previews and iPad Home Screen installation instructions.

## Live Website

https://skylerdufour429.github.io/app-store-generator/

## Features

- App Name
- Bundle ID
- Version
- Platform
- Minimum OS
- File Size
- App Store-style preview
- Get button
- iPad installation instructions
- Local storage
- PWA manifest
- GitHub Pages compatibility

## iOS Home Screen installation instructions

For the live site:

1. Open Safari on your iPad.
2. Visit the App Store Generator.
3. Enter the requested information:
   - App Name
   - Bundle ID
   - Version
   - Platform
   - Minimum OS
   - File Size
4. Tap Generate App Store Preview.
5. Review the generated app information.
6. Tap Get.
7. Safari will display the Home Screen installation instructions.
8. Tap Safari's Share button.
9. Choose Add to Home Screen.
10. Enter the desired app name.
11. Tap Add.
12. Return to the iPad Home Screen and tap the new icon.

One important addition: if you want this to behave as a fully installable PWA, add a sw.js service worker and the actual 192x192 and 512x512 PNG icons referenced by the manifest. The basic generator itself works without those optional PWA files.

## Run in GitHub Codespaces

Open the repository in GitHub Codespaces.

Then start a local HTTP server.

For example:

```bash
python3 -m http.server 8000
