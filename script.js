// script.js

document.addEventListener("DOMContentLoaded", function () {
  // Function to set cookies
  function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  // Function to get cookies
  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  // Function to handle form submission
  function handleFormSubmit(event) {
    event.preventDefault();

    // Get values from the form
    var fontSize = document.getElementById("fontsize").value;
    var fontColor = document.getElementById("fontcolor").value;

    // Set CSS variables and update styles
    document.documentElement.style.setProperty("--fontsize", fontSize + "px");
    document.documentElement.style.setProperty("--fontcolor", fontColor);

    // Save preferences in cookies
    setCookie("fontsize", fontSize, 365);
    setCookie("fontcolor", fontColor, 365);
  }

  // Function to apply saved preferences on page load
  function applySavedPreferences() {
    var savedFontSize = getCookie("fontsize");
    var savedFontColor = getCookie("fontcolor");

    if (savedFontSize) {
      document.getElementById("fontsize").value = savedFontSize;
      document.documentElement.style.setProperty("--fontsize", savedFontSize + "px");
    }

    if (savedFontColor) {
      document.getElementById("fontcolor").value = savedFontColor;
      document.documentElement.style.setProperty("--fontcolor", savedFontColor);
    }
  }

  // Add event listener to the form for submission
  document.querySelector("form").addEventListener("submit", handleFormSubmit);

  // Apply saved preferences on page load
  applySavedPreferences();
});
