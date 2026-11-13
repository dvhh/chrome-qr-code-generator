"use strict";

const MAX_QR_BYTES = 2953;

function showMessage(text) {
  const status = document.getElementById('status');
  status.textContent = text;
  status.hidden = false;
}

(async () => {
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    const url = tab && tab.url;
    if (!url) return showMessage('No URL is available for this page.');
    if (url.length > MAX_QR_BYTES) return showMessage('This URL is too long for a QR code.');
    new QRious({ element: document.getElementById('qr-canvas'), value: url, size: 500 });
    document.querySelector('.canvas-container').hidden = false;
  } catch (error) {
    showMessage('Could not generate the QR code: ' + error.message);
  }
})();
