// Disable right-click
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

// Disable dragging of images and elements
document.addEventListener('dragstart', function(e) {
  e.preventDefault();
});

// Disable keyboard shortcuts (Ctrl+S, Ctrl+P, Ctrl+C, Ctrl+U, F12)
document.addEventListener('keydown', function(e) {
  if (
    (e.ctrlKey && (e.key === 's' || e.key === 'S')) || // Save
    (e.ctrlKey && (e.key === 'p' || e.key === 'P')) || // Print
    (e.ctrlKey && (e.key === 'c' || e.key === 'C')) || // Copy
    (e.ctrlKey && (e.key === 'u' || e.key === 'U')) || // View source
    e.key === 'F12' || // Developer tools
    e.key === 'PrintScreen' // Screenshot
  ) {
    e.preventDefault();
  }
});

// ------------------------------------------------------------------
// ANTI-SCREENSHOT / BANK-APP SECURITY BEHAVIOR
// ------------------------------------------------------------------

// 1. Create a black overlay div
const secureOverlay = document.createElement('div');
secureOverlay.style.position = 'fixed';
secureOverlay.style.top = '0';
secureOverlay.style.left = '0';
secureOverlay.style.width = '100vw';
secureOverlay.style.height = '100vh';
secureOverlay.style.backgroundColor = '#000000';
secureOverlay.style.color = '#ffffff';
secureOverlay.style.display = 'flex';
secureOverlay.style.flexDirection = 'column';
secureOverlay.style.alignItems = 'center';
secureOverlay.style.justifyContent = 'center';
secureOverlay.style.zIndex = '99999999';
secureOverlay.style.fontFamily = 'Arial, sans-serif';
secureOverlay.style.opacity = '0';
secureOverlay.style.pointerEvents = 'none';
secureOverlay.style.transition = 'opacity 0.2s ease';
secureOverlay.innerHTML = '<h2>Security Policy</h2><p>Screenshots and background viewing are disabled.</p>';
document.documentElement.appendChild(secureOverlay);

// 2. Hide content when window loses focus (e.g. Snipping tool, mobile app switcher)
window.addEventListener('blur', function() {
    secureOverlay.style.opacity = '1';
    secureOverlay.style.pointerEvents = 'all';
});

// 3. Restore content when window regains focus
window.addEventListener('focus', function() {
    secureOverlay.style.opacity = '0';
    secureOverlay.style.pointerEvents = 'none';
});

// 4. Overwrite clipboard if user tries to copy (fallback)
document.addEventListener('keyup', (e) => {
    if (e.key === 'PrintScreen') {
        navigator.clipboard.writeText('Screenshots disabled.');
    }
});
