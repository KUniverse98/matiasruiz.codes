const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
} else if (prefersDark) {
  document.documentElement.setAttribute('data-theme', 'dark');
}

const toggleBtn = document.createElement('button');
toggleBtn.innerText = document.documentElement.getAttribute('data-theme') === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
toggleBtn.className = 'toggle-theme-btn';
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener('click', () => {
  toggleBtn.style.transform = 'scale(0.9)';
  setTimeout(() => toggleBtn.style.transform = 'scale(1)', 100);

  const current = document.documentElement.getAttribute('data-theme');
  const newTheme = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);

  toggleBtn.innerText = newTheme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
  console.log("Theme set to:", newTheme);
});
