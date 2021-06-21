const API_KEY = "8af8f119784460e90ef03c134c6107d4";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const log = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            weather.innerText= `${data.weather[0].main} / ${data.main.temp} degrees in`;
            city.innerText = data.name;
        });
}

function onGeoError() {
    alert("Can't find you. No weather for yoy.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);