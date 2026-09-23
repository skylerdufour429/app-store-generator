const form = document.getElementById('appForm');
const previewSection = document.getElementById('previewSection');
const instructions = document.getElementById('instructions');
const getButton = document.getElementById('getButton');

const fieldIds = ['appName', 'bundleId', 'version', 'platform', 'minimumOS', 'fileSize'];

function saveState() {
  const formValues = {};
  fieldIds.forEach((id) => {
    formValues[id] = document.getElementById(id).value;
  });
  localStorage.setItem('appStoreGeneratorState', JSON.stringify(formValues));
}

function restoreState() {
  const saved = localStorage.getItem('appStoreGeneratorState');
  if (!saved) return;

  try {
    const values = JSON.parse(saved);
    fieldIds.forEach((id) => {
      if (values[id] !== undefined) {
        document.getElementById(id).value = values[id];
      }
    });
  } catch (error) {
    console.warn('Unable to restore saved state', error);
  }
}

function updatePreview() {
  const appName = document.getElementById('appName').value.trim() || 'My Awesome App';
  const bundleId = document.getElementById('bundleId').value.trim() || 'com.example.myapp';
  const version = document.getElementById('version').value.trim() || '1.0.0';
  const platform = document.getElementById('platform').value || 'iOS';
  const minimumOS = document.getElementById('minimumOS').value.trim() || 'iOS 17.0';
  const fileSize = document.getElementById('fileSize').value.trim() || '12.4 MB';

  const icon = document.getElementById('iconPreview');
  const initial = appName.charAt(0).toUpperCase() || 'A';
  icon.textContent = initial;

  document.getElementById('previewName').textContent = appName;
  document.getElementById('previewBundle').textContent = bundleId;
  document.getElementById('previewVersion').textContent = version;
  document.getElementById('previewOS').textContent = minimumOS;
  document.getElementById('previewSize').textContent = fileSize;
  document.getElementById('platformBadge').textContent = platform;

  previewSection.hidden = false;
}

function showInstructions() {
  const siteUrl = document.getElementById('siteUrl');
  siteUrl.textContent = window.location.href;
  instructions.hidden = false;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  saveState();
  updatePreview();
  showInstructions();
});

getButton.addEventListener('click', () => {
  saveState();
  updatePreview();
  showInstructions();
});

fieldIds.forEach((id) => {
  document.getElementById(id).addEventListener('input', saveState);
  document.getElementById(id).addEventListener('change', saveState);
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch((error) => {
      console.warn('Service worker registration failed:', error);
    });
  });
}

restoreState();
updatePreview();
