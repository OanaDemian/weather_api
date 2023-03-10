const apiKey = require("./apiKey");

class WeatherClient {
  fetchWeatherData(cityName) {
    return fetch(
      `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${apiKey}`
    ).then((response) => response.json());
    // .then((weatherData) => (weatherData))
    // {
    //   console.log(`Weather data for ${weatherData.name}:`);
    //   console.log(weatherData);
    //   return weatherData;
    // }
  }
}

module.exports = WeatherClient;
// const client = new WeatherClient();
// client.fetchWeatherData("Bristol");
