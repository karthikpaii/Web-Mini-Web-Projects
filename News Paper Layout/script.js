const modeSwitch = document.querySelector(".mode-switch");
const modeIcon = document.querySelector("#mode-icon");
const pageBody = document.body;

const updateModeIcon = () => {
    modeIcon.textContent = pageBody.classList.contains("light-mode") ? "\u{1F31E}" : "\u{1F319}";
};

updateModeIcon();

modeSwitch.addEventListener("click", () => {
    pageBody.classList.toggle("light-mode");
    updateModeIcon();
});
