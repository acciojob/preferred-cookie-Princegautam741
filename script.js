// script.js

// Function to apply user preferences and store them in cookies
function applyPreferences(fontSize, fontColor) {
    document.body.style.fontSize = `${fontSize}px`;
    document.body.style.color = fontColor;

    // Store preferences in cookies
    document.cookie = `fontsize=${fontSize}; expires=Sun, 31 Dec 2023 12:00:00 UTC; path=/`;
    document.cookie = `fontcolor=${fontColor}; expires=Sun, 31 Dec 2023 12:00:00 UTC; path=/`;
}

// Function to retrieve user preferences from cookies
function getPreferences() {
    const cookies = Object.fromEntries(document.cookie.split('; ').map(cookie => cookie.split('=')));
    return cookies;
}

// Apply stored preferences on page load
window.onload = function () {
    const preferences = getPreferences();

    if (preferences.fontsize) {
        const { fontsize, fontcolor } = preferences;
        document.getElementById('fontsize').value = fontsize;
        applyPreferences(fontsize, fontcolor);
    }
};

// Event listener for form submission
document.getElementById('preferences-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const fontSize = document.getElementById('fontsize').value;
    const fontColor = document.getElementById('fontcolor').value;

    applyPreferences(fontSize, fontColor);
});
