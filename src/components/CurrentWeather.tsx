import type { CurrentWeather as CurrentWeatherType } from "../types/weather";

interface CurrentWeatherTypeProps {
  weather: CurrentWeatherType;
}

const CurrentWeather = ({ weather }: CurrentWeatherTypeProps) => {
  const weatherCondition = weather.weather[0];

  if (!weatherCondition) {
    return <p>Weather condition is unavailable</p>;
  }
  return (
    <section className="my-4 w-full max-w-5xl mx-auto p-8 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl m-0">
            {weather.name}, {weather.sys.country}
          </h2>

          <p className="my-2 mr-0 ml-0">{weatherCondition.description}</p>
        </div>

        <img
          src={`https://openweathermap.org/img/wn/${weatherCondition.icon}@2x.png`}
          alt={weatherCondition.description}
          className="w-20 h-20"
        />
      </div>

      <div className="mt-2 text-2xl font-bold letter-spacing-wide">
        <span>{Math.round(weather.main.temp)}°C</span>
      </div>

      <p className="my-4 mx-0 font-semibold text-md">Feels like {Math.round(weather.main.feels_like)} °C</p>

      <div className="flex flex-col md:flex-row justify-between gap-4 font-semibold text-lg mt-4">
        <span>High: {Math.round(weather.main.temp_max)}°C</span>

        <span>Low: {Math.round(weather.main.temp_min)}°C</span>
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-lg font-semibold">
        <div className="flex flex-col gap-2 py-4 rounded-2xl bg-white">
          <span>Humidity</span>
          <strong>{weather.main.humidity}%</strong>
        </div>

        <div className="flex flex-col gap-2 py-4 rounded-2xl bg-white">
          <span>Wind speed</span>
          <strong>{weather.wind.speed}m/s</strong>
        </div>

        <div className="flex flex-col gap-2 py-4 rounded-2xl bg-white">
          <span>Pressure</span>
          <strong>{weather.main.pressure}hPa</strong>
        </div>

        <div className="flex flex-col gap-2 py-4 rounded-2xl bg-white">
          <span>Visibility</span>
          <strong>{(weather.visibility / 1000).toFixed(1)}km</strong>
        </div>
      </div>
    </section>
  );
};

export default CurrentWeather;
