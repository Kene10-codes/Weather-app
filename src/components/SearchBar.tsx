import { useState } from "react";
import { useWeather } from "../hooks/useWeather";

const SearchBar = () => {
  const [city, setCity] = useState("");
  const { searchWeather, loading } = useWeather("Abuja");

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await searchWeather(city)
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">{loading ? "Searching...": "Search"}</button>
      </form>
    </div>
  );
};

export default SearchBar;
