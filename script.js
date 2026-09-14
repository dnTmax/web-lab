const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
  const body = document.body;
  
  // Vérifie si le mode sombre est actuellement actif
  if (body.getAttribute('data-theme') === 'dark') {
    body.removeAttribute('data-theme');
    themeToggleBtn.textContent = '🌙';
  } else {
    body.setAttribute('data-theme', 'dark');
    themeToggleBtn.textContent = '☀️';
  }
});

