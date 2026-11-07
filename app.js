// ── StudyHub · Core App Logic ──────────────────────────

// ── Theme Manager ──
function initTheme() {
  const saved = localStorage.getItem('studyhub_theme');
  if (saved === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.removeAttribute('data-theme'); // default dark
  }
}
// Run synchronously to prevent flash
initTheme();

function toggleTheme() {
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  if (isLight) {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('studyhub_theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('studyhub_theme', 'light');
  }
}

// ── Shared Logout Helper ──
// This function can be called from any page to log the user out safely
function logout() {
  if (confirm('Are you sure you want to log out of StudyHub?')) {
    sessionStorage.removeItem('studyhub_user');
    localStorage.removeItem('studyhub_user');
    localStorage.removeItem('studyhub_token');
    window.location.href = 'index.html';
  }
}
