# App Store Generator

A static HTML/CSS/JS app that runs on GitHub Pages and can be edited in GitHub Codespaces.

## GitHub Pages

1. Create a GitHub repository.
2. Add these files to the repository root.
3. In **Settings → Pages**, choose **Deploy from a branch**.
4. Select the `main` branch and `/ (root)`.
5. Save and wait for the Pages deployment.
6. Open the published Pages URL.

For a repository named `app-store-generator` under `skylerdufour429`, the expected URL is:

`https://skylerdufour429.github.io/app-store-generator/`

## GitHub Codespaces

Open the repository and choose **Code → Codespaces → Create codespace on main**. No build step or package installation is required.

## iPad Home Screen

1. Open Safari on your iPad.
2. Visit the published App Store Generator URL.
3. Enter the requested app information.
4. Tap **Generate App Store Preview**.
5. Tap **Get** to display the installation instructions.
6. In Safari, tap **Share → Add to Home Screen → Add**.
7. Launch the web app from the iPad Home Screen.

### Important compatibility note

The Home Screen installation flow described above is a modern Safari/PWA feature. It is not a native iOS 3.1 installation mechanism. If “iOS 3.1” is entered as the minimum OS, the generator treats it as app metadata only; it does not make a modern PWA compatible with iOS 3.1.
