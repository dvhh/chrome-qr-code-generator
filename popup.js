"use strict";
(async ()=>{
  const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
  const target = document.getElementById('qr-canvas');
  const ctx = target.getContext('2d');
  ctx.fillStyle = isDarkMode ? "black" : "white"; 
  ctx.fillRect(0, 0, target.width, target.height); 
  if (tabs && tabs.length > 0 && tabs[0].url) {
    const currentUrl = tabs[0].url;
    //input.value = currentUrl
    let qr = new QRious({
      element: target,
      value: currentUrl,
      //background: isDarkMode ? "black" : "white",
      //backgroundAlpha: 0.0,
      //foreground:isDarkMode ? "gray" : "black",
      size:500
    });
  }
})();
