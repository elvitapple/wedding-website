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
    e.key === 'F12' // Developer tools
  ) {
    e.preventDefault();
  }
});
