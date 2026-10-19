import { useState, useCallback, useEffect } from "react";
import { getForecast, getWeather } from "../services/weatherService";

import type { CurrentWeather, ForecastResponse } from "../types/weather";

interface useWeatherReturn {
  weather: CurrentWeather | null;
  forecast: ForecastResponse | null;
  loading: boolean;
  error: string | null;
  searchWeather: (city: string) => Promise<void>;
}

function useWeather(initialCity = "Abuja"): useWeatherReturn {
  const [weather, setWeather] = useState<CurrentWeather | null>(null);
  const [forecast, setForecast] = useState<ForecastResponse | null>(null);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const searchWeather = useCallback(async (city: string) => {
    const trimmedCity = city.trim().toLowerCase();

    // Check if city exists or null
    if (!trimmedCity) {
      setError("Please enter a city name");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const [currentWeather, currentForecast] = await Promise.all([
        getWeather(trimmedCity),
        getForecast(trimmedCity),
      ]);
      setWeather(currentWeather);
      setForecast(currentForecast);
    } catch (error: unknown) {
      const message =
        error instanceof Error
          ? error.message
          : "Something unexpected has happened";
      setError(message);
    } finally {
        setLoading(false)
    }
  }, []);

  useEffect(() => {
    void searchWeather(initialCity);
  }, [initialCity, searchWeather]);

  return {
    weather,
    forecast,
    loading,
    searchWeather,
    error,
  };
}

export { useWeather };
