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

cityInput.addEventListener('keydown', async (e) => {
  let cn = document.querySelector("#city");
  if(e.key === 'Enter'){
    const cityName = cityInput.value.trim();


    if(cityName === ""){
      alert("please enter any city name")
    }
    cn.innerHTML = `${cityName}`;
    if(cityName){

      const apiKey = "23814881fd5ca7424c1c9d94f4f024c6"
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric` 

    
        const response = await fetch(url);
        const data = await response.json()
        console.log(data)

        // temprature updation
        let temp = document.querySelector(".temperature");
        const temperature = data.main.temp;
        console.log(temperature); // Output: 24.67
        temp.innerHTML = temperature;

        //Wind updation
        let w = document.querySelector("#wind-speed")
        const wind = data.wind.speed;
        w.innerHTML = wind + " km/h";

        //humidity updation
        let h = document.querySelector("#humidity")
        const humidity = data.main.humidity;
        h.innerHTML = humidity + "%";

        //visibility updation
        let v = document.querySelector("#visibility")
        const visibility = data.visibility;
        console.log(visibility)
        v.innerHTML = visibility + " km";


      
    }


    cityInput.value = '';
    cityInput.classList.remove('show');
  }      
});



