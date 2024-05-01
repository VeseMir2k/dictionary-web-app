if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.body.classList.add('dark');
} else {
  document.body.classList.remove('dark');
}

// localStorage.theme = 'light';

// localStorage.theme = 'dark';

// localStorage.removeItem('theme');
