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
    <section>
      <div>
        <div>
          <h2>
            {weather.name}, {weather.sys.country}
          </h2>

          <p>{weatherCondition.description}</p>
        </div>

        <img
          src={`https://openweathermap.org/img/wn/${weatherCondition.icon}@2x.png`}
          alt={weatherCondition.description}
        />
      </div>

      <div>
        <span>{Math.round(weather.main.temp)}*C</span>
      </div>

      <p>Feels like {Math.round(weather.main.feels_like)} *C</p>

      <div>
        <span>High: {Math.round(weather.main.temp_max)}*C</span>

        <span>Low: {Math.round(weather.main.temp_min)}*C</span>
      </div>

      <div>
        <div>
          <span>Humidity</span>
          <strong>{weather.main.humidity}%</strong>
        </div>

        <div>
          <span>Wind speed</span>
          <strong>{weather.wind.speed}m/s</strong>
        </div>

        <div>
          <span>Pressure</span>
          <strong>{weather.main.pressure}hPa</strong>
        </div>

          <div>
          <span>Visibility</span>
          <strong>{(weather.visibility / 1000).toFixed(1)}km</strong>
        </div>
      </div>
    </section>
  );
};

export default CurrentWeather;
