import type { CurrentWeather, ForecastResponse } from "../types/weather";

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;

async function requestApi<T>(url: string): Promise<T> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return (await response.json()) as T;
}

const getWeather = async (city: string): Promise<CurrentWeather | null> => {
  const url = `${API_URL}weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
  return requestApi<CurrentWeather | null>(url);
};

const getForecast = async (city: string): Promise<ForecastResponse> => {
  const url = `${API_URL}forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
  return requestApi<ForecastResponse>(url);
};
export { getWeather, getForecast };
