const API_KEY = "24d4633bc89e9c1ad81d7670e50f73c7";

function onGeoOk(position) {
 const lat = position.coords.latitude;
 const lon = position.coords.longitude;
 const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
 fetch(url)  //promise
 .then(response => response.json())
 .then(data => {
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    city.innerText = `@${data.name}`;
    weather.innerText = `${data.weather[0].main} `;
 });
}

function onGeoError() {
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

