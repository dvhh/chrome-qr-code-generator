# Simple Chrome QR Code generator Extension

![Wikipedia QR code entry](icon.png)

## Overview
Simple QR code generator for Chrome. Works fully offline and only requests the `activeTab` permission.

## Installation
1. Open the Extensions page by typing `chrome://extensions` in the address bar
2. Toggle `Developer mode` to `on`
3. Click the `Load unpacked` button
4. In the file browser, navigate to and select the root folder of the extension
5. Click `Select Folder` (or `Open`)

The extension `Pure JS QR Generator 1.1` should appear in your list of extensions.

## Usage
Click the QR code button in the toolbar to generate a QR code for the current page.
The generated image in the popup should be scannable by any smartphone camera or QR scanner.

URLs longer than 2953 characters (the QR code limit) show an error message instead of a QR code.

## Acknowledgement
Uses:
- [QRious](https://github.com/airmrcr/qrious) version 4.0.2 ([homepage](https://neocotic.com/qrious)) for generating QR codes, bundled unmodified as `qrious.min.js`; refer to the link to obtain the source code
- The QR code image is obtained from the Wikipedia page for [QR Code](https://en.wikipedia.org/wiki/QR_code)
