let darkMode = document.querySelectorAll(".item-theme");
let posterHeader = document.querySelector(".poster-header");
let iconDarkModeMobile = document.querySelector(".icon-dark-mode-mobile");
let iconDarkMode = document.querySelector(".icon-dark-mode");
let nav = document.querySelector("nav");
let containerLoader = document.querySelector(".container-loader");
let date = new Date();
let hours = date.getHours();
let dark = false;

function lightDark() {
  if (!dark) {
    dark = true;
    document.documentElement.style.setProperty("--body-color", "#0e161a");
    document.documentElement.style.setProperty("--body-color2", "#131d22");
    document.documentElement.style.setProperty("--black", "#f3f4f6");
    document.documentElement.style.setProperty("--black2", "#f7f7fa");
    posterHeader.setAttribute(
      "style",
      "box-shadow: 9px 19px 32px var(--body-color2), -9px -9px 32px var(--body-color);"
    );
    nav.setAttribute(
      "style",
      "box-shadow: 0px 0px 12px var(--body-color2), -0px -0px 12px var(--body-color);"
    );
    iconDarkModeMobile.className = "";
    iconDarkMode.className = "";
    iconDarkModeMobile.className = "bi bi-moon-stars-fill icon-dark-mode";
    iconDarkMode.className = "bi bi-moon-stars-fill icon-dark-mode";
  } else {
    dark = false;
    document.documentElement.style.setProperty("--body-color", "#f3f4f6");
    document.documentElement.style.setProperty("--body-color2", "#f7f7fa");
    document.documentElement.style.setProperty("--black", "#0e161a");
    document.documentElement.style.setProperty("--black2", "#131d22");
    posterHeader.setAttribute(
      "style",
      "box-shadow: 9px 19px 32px #b1b1b1, -9px -9px 32px #ffffff;"
    );
    nav.setAttribute(
      "style",
      "box-shadow: 0px 0px 8px #bababa, -0px -0px 8px #ffffff;"
    );
    iconDarkModeMobile.className = "";
    iconDarkMode.className = "";
    iconDarkModeMobile.className = `
        <i class="bi bi-brightness-high-fill icon-dark-mode"></i>
    `;
    iconDarkMode.className = `
        <i class="bi bi-brightness-high-fill icon-dark-mode"></i>
    `;
  }
}

if (hours >= 18 || hours < 6) {
  document.documentElement.style.setProperty("--body-color", "#17242a");
  document.documentElement.style.setProperty("--body-color2", "#131d22");
  document.documentElement.style.setProperty("--black", "#f7f7fa");
  document.documentElement.style.setProperty("--black2", "#f3f4f6");
  document.documentElement.style.setProperty("--text-color2", "#929294");
  posterHeader.setAttribute(
    "style",
    "box-shadow: 9px 19px 32px var(--body-color2), -9px -9px 32px var(--body-color);"
  );
  nav.setAttribute(
    "style",
    "box-shadow: 0 0 1px var(--body-color2), -0 -0 1px var(--body-color);"
  );
  iconDarkModeMobile.className = "";
  iconDarkMode.className = "";
  iconDarkModeMobile.className = "bi bi-moon-stars-fill icon-dark-mode";
  iconDarkMode.className = "bi bi-moon-stars-fill icon-dark-mode";
  lightDark();
}

function blurWindow() {
  document.title = "نرووو برگرد";
}

function focusWindow() {
  document.title = "ROSE Hat";
}

darkMode.forEach(function (event) {
  event.addEventListener("click", lightDark);
});

window.addEventListener("load", function () {
  containerLoader.setAttribute("style", "opacity: 0; transition: .4s;");
  setTimeout(function () {
    containerLoader.setAttribute("style", "display: none;");
  }, 500);
});

window.addEventListener("blur", blurWindow);
window.addEventListener("focus", focusWindow);
window.addEventListener("DOMContentLoaded", function () {
  nav.setAttribute("style", "backgroundColor: red;");
});
