const WeatherClient = require("./weatherClient");
class Weather {
  constructor(weatherClient) {
    this.weatherClient = weatherClient;
    this.cityWeatherData = [];
  }
  load(cityName) {
    return this.weatherClient.fetchWeatherData(cityName).then((weatherData) => {
      this.cityWeatherData.push(weatherData);
      // console.log(this.cityWeatherData[0].weather[0].description);
    });
  }
  getWeatherData() {
    return this.cityWeatherData;
  }
}
module.exports = Weather;

// const weatherClient = new WeatherClient();
// const weather = new Weather(weatherClient);
// weather.load("Bristol");
// console.log(weather.getWeatherData());

// console.log("this is the last thing");
