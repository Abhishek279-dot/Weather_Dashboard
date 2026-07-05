// dark mode and dark mode btn switching 


const toggleBtn = document.querySelector(".theme-toggle");

toggleBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const themeIcon = document.getElementById("themeIcon");

    if (document.body.classList.contains("dark-mode")) {
        themeIcon.setAttribute("data-lucide", "sun");
    } else {
        themeIcon.setAttribute("data-lucide", "moon");
    }

    lucide.createIcons();
});