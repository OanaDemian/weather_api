// file: index.js
const apiKey = 'a3d9eb01d4de82b9b8d0849ef604dbed'; // include our key
const city = 'London';
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

let weatherData = null;

fetch(apiUrl)
  .then((response) => response.json())
  .then((weatherData) => {
    console.log(weatherData);
    console.log(weatherData.main.temp);
    console.log(weatherData.weather[0].main);
  });

console.log('Requesting weather data');
// const apiKey = require('./apiKey');
