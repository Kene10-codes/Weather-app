import CurrentWeather from "./components/CurrentWeather";
import { useWeather } from "./hooks/useWeather";
import SearchBar from "./components/SearchBar";

import "./App.css";

function App() {
  const { weather, loading, error } = useWeather("Abuja");
  return (
    <>
      <main>
        <h1>Weather Application</h1>
        <SearchBar />
        {loading && <p>Loading Weather...</p>}
        {error && <p>{error}</p>}
        {!loading && weather && !error && <CurrentWeather weather={weather} />}
      </main>
    </>
  );
}

export default App;
