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

//  search button functionality  

const searchIconBox = document.getElementById('search-icon-box');
const cityInput = document.getElementById('city-input');

searchIconBox.addEventListener('click', () => {
  cityInput.classList.toggle('show');
  if(cityInput.classList.contains('show')){
    cityInput.focus();
  }
});

cityInput.addEventListener('keydown', (e) => {
  if(e.key === 'Enter'){
    const cityName = cityInput.value.trim();
    if(cityName){
      console.log('Searching for:', cityName); //  fetch/logic put here
    }
    cityInput.value = '';
    cityInput.classList.remove('show');
  }
});



