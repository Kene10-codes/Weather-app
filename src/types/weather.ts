
// Weather conditions such as Clear, Clouds, Rain, etc.
export interface WeatherCondition {
  id: number;
  main: string;
  description: string;
  icon: string;
}

// Temperature, humidity, pressure, and feels-like temperature
export interface MainWeather {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

// Wind information
export interface Wind {
  speed: number;
  deg: number;
  gust?: number;
}

// Geographic coordinates
export interface Coordinates {
  lon: number;
  lat: number;
}

// Country and cityv information
export interface Sys {
  country: string;
  sunrise: number;
  sunset: number;
}

// Current weather API response
export interface CurrentWeather {
  coord: Coordinates;
  weather: WeatherCondition[];
  base: string;
  main: MainWeather;
  visibility: number;
  wind: Wind;
  clouds: {
    all: number;
  };
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string; 
  cod: number;
}

// Forecast data for an individual time period
export interface ForecastItem {
  dt: number;
  main: MainWeather;
  weather: WeatherCondition[];
  clouds: {
    all: number;
  };
  wind: Wind; 
  visibility: number;
  pop: number;
  dt_txt: string;
}

// Five-day forecast API response
export interface ForecastResponse {
  cod: string;
  message: number;
  cnt: number;
  list: ForecastItem[];
  city: {
    id: number;
    name: string;
    coord: Coordinates;
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
}

