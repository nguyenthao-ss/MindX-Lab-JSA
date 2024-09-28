const API_KEY = '4269652c5e1b6a66a34f9d3d16ecc098';
const DEFAULT_VALUE = '--';
const searchInput = document.getElementById("search-input");
const cityName = document.querySelector(".city-name");
const weatherState = document.querySelector(".weather-state");
const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");
const sunrise = document.querySelector(".sunrise");
const sunset = document.querySelector(".sunset");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind-speed");

searchInput.addEventListener("keyup", function(event) {
    if(event.key == "Enter" && searchInput.value != "") {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${API_KEY}&lang=vi&units=metric`)
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            cityName.innerHTML = data.name;
            weatherState.innerHTML = data.weather[0].description;
            weatherIcon.innerHTML =`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            temperature.innerHTML = Math.round(data.main.temp);
            sunrise.innerHTML = moment.utc(data.sys.sunrise, 'X').add(3600, 'seconds').format('HH:mm a');
            sunset.innerHTML = moment.utc(data.sys.sunset, 'X').add(3600, 'seconds').format('HH:mm a');
            humidity.innerHTML = data.main.humidity;
            windSpeed.innerHTML = data.wind.speed;
        });
    }
});
