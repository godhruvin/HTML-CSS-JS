// script.js
const toggle = document.getElementById('toggle');
const body = document.body;
const icon = document.getElementById('icon');

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.classList.add(currentTheme);
    icon.classList.toggle('fa-toggle-on', currentTheme === 'light-mode');
    icon.classList.toggle('fa-toggle-off', currentTheme === 'dark-mode');
}

toggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    const isDarkMode = body.classList.contains('dark-mode');
    icon.classList.toggle('fa-toggle-on', !isDarkMode);
    icon.classList.toggle('fa-toggle-off', isDarkMode);

    localStorage.setItem('theme', isDarkMode ? 'dark-mode' : 'light-mode');
});
