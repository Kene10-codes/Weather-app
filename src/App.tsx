import CurrentWeather from "./components/CurrentWeather";
import ForecastList from "./components/ForecastList";
import { useWeather } from "./hooks/useWeather";
import SearchBar from "./components/SearchBar";

import "./index.css";


function App() {
  const { weather, searchWeather, forecast, loading, error } = useWeather();
  return (
    <div className="min-h-screen">
      <main className="mx-auto p-4">
        <h1 className="text-4xl text-center font-bold text-blue-500">
          Weather Application
        </h1>
        <SearchBar searchWeather={searchWeather} loading={loading} />
        {loading && <p>Loading Weather...</p>}
        {error && <p>{error}</p>}
        {!loading && weather && !error && <CurrentWeather weather={weather} />}
        {!loading && forecast && !error && <ForecastList forecast={forecast} />}
      </main>
    </div>
  );
}

export default App;
