const Weather = require("./weather");
const WeatherClient = require("./weatherClient");
jest.mock("./weatherClient"); // WeatherClient is now a mock constructor

describe("Weather", () => {
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    WeatherClient.mockClear();
  });
  it("Loads data from the weatherClient", (done) => {
    const mockClient = {
      fetchWeatherData: jest.fn(), // This is a jest mock function
    };

    // Set the resolved value of the mock function.
    // We use `mockResolvedValue` and not `mockReturnValue` because this
    // is mocking an asynchronous method, which returns a promise.
    mockClient.fetchWeatherData.mockResolvedValueOnce({
      timezone: -18000,
      id: 4931378,
      name: "Bristol",
      cod: 200,
    });
    const weather = new Weather(mockClient);
    weather.load("Bristol").then(() => {
      expect(mockClient.fetchWeatherData).toHaveBeenCalledWith("Bristol");
      const cityWeatherData = weather.getWeatherData();
      expect(cityWeatherData[0].name).toBe("Bristol");
      expect(cityWeatherData[0].cod).toBe(200);
      done();
    });
  });
});
