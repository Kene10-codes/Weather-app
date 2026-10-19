
import type { ForecastResponse } from "../types/weather";

interface ForecastListProps {
  forecast: ForecastResponse;
}

function ForecastList({ forecast }: ForecastListProps) {
  // OpenWeather returns forecast entries every 3 hours.
  const dailyForecast = forecast.list.reduce<
    Record<string, (typeof forecast.list)[number]>
  >((days, item) => {
    const date = item.dt_txt.split(" ")[0];

    if (!days[date]) {
      days[date] = item;
    }

    return days;
  }, {});

  const forecastDays = Object.values(dailyForecast).slice(0, 5);

  function formatDay(dateString: string): string {
    const date = new Date(`${dateString}T12:00:00`);

    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  }

  if (forecastDays.length === 0) {
    return (
      <p className="text-slate-500">
        No forecast data available.
      </p>
    );
  }

  return (
    <section className="mt-8">
      <h2 className="mb-4 text-xl font-bold text-slate-900">
        5 Days Forecast
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {forecastDays.map((day) => {
          const date = day.dt_txt.split(" ")[0];
          const weather = day.weather[0];

          return (
            <article
              key={date}
              className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="font-semibold text-slate-800">
                {formatDay(date)}
              </h3>

              {weather && (
                <>
                  <img
                    src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                    alt={weather.description}
                    className="mx-auto h-20 w-20"
                  />

                  <p className="mb-2 text-center text-sm capitalize text-slate-600">
                    {weather.description}
                  </p>
                </>
              )}

              <p className="text-center text-3xl font-bold text-slate-900">
                {Math.round(day.main.temp)}°C
              </p>

              <div className="mt-4 space-y-2 border-t border-slate-100 pt-3 text-sm text-slate-600">
                <div className="flex justify-between gap-2">
                  <span>Feels like</span>
                  <span className="font-medium text-slate-800">
                    {Math.round(day.main.feels_like)}°C
                  </span>
                </div>

                <div className="flex justify-between gap-2">
                  <span>Humidity</span>
                  <span className="font-medium text-slate-800">
                    {day.main.humidity}%
                  </span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
  
}

export default ForecastList;