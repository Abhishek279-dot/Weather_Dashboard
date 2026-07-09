// dark mode and dark mode btn switching 


const toggleBtn = document.querySelector(".theme-toggle");

const savedMode = localStorage.getItem("mode");

if(savedMode === "dark"){
    document.body.classList.add("dark-mode");
}



toggleBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");



    const themeIcon = document.getElementById("themeIcon");

    if (document.body.classList.contains("dark-mode")) {
        
        themeIcon.setAttribute("data-lucide", "sun");
        localStorage.setItem("mode","dark");

    } else {

        themeIcon.setAttribute("data-lucide", "moon");
        localStorage.setItem("mode","light");
    }

    lucide.createIcons();
});



let search = document.querySelector("#search-box")

search.addEventListener("click", function () {
    search.classList.toggle("active");
})