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

  compareWith(cityName) {

    const newCity = this.weatherClient.fetchWeatherData(cityName);
    return newCity.then((weatherData) => {
      if (
        this.cityWeatherData[0].main.temp > weatherData.main.temp
      ) {
        return `${this.cityWeatherData[0].name} is warmer than ${cityName}.`;
      } else {
        return `${cityName} is warmer than ${this.cityWeatherData[0].name} .`;
      }
    });
  }

  displayWeather(cityName) {
    return this.weatherClient
      .fetchWeatherData(cityName)
      .then((weatherData) =>
        console.log(
          `City: ${weatherData.name}\n`,
          `Weather: ${weatherData.weather[0].main}\n`,
          `Temperature: ${weatherData.main.temp}\n`,
          `Temperature: ${weatherData.main.temp}\n`,
          `Feels like: : ${weatherData.main.feels_like}\n`,
          `Humidity: ${weatherData.main.humidity}\n`
        )
      );
  }
}
module.exports = Weather;

// In terminal:
// const WeatherClient = require('./weatherClient');
// const weatherClient = new WeatherClient();
// const Weather = require('./weather');
// const weather = new Weather(weatherClient);
// weather.load("Bristol");
// weather.compareWith("London");
// weather.getWeatherData();

// console.log("this is the last thing");
