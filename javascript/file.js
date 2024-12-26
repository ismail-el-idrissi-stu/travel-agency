const themeToggleBtn = document.getElementById("theme-toggle");
const body = document.body;
function toggleTheme(){
    body.classList.toggle("dark-theme");
    const isDark = body.classList.contains("dark-theme");
    localStorage.setItem("theme", isDark ? "dark": "light");
    themeToggleBtn.textContent = isDark ? "Light Mode" : "Dark Mode";

}
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark"){
        body.classList.add("dark-theme");
        themeToggleBtn.textContent = "Light Mode";

    }else {
        themeToggleBtn.textContent = "Dark Mode";
    }
});
themeToggleBtn.addEventListener("click", toggleTheme);