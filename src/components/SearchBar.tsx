import { useState } from "react";

const SearchBar = ({ loading, searchWeather }: { loading: boolean; searchWeather: (city: string) => Promise<void> }) => {
  const [city, setCity] = useState("");

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await searchWeather(city)
    setCity(""); // Clear the input field after search
  };

  return (
    <div className="flex justify-center items-center my-4">
      <form onSubmit={handleSearch}>
        <input
          className="border rounded-xm border-gray-300 p-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500  "
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 text-md font-bold w-2xl text-white p-2 rounded-md hover:bg-blue-600">
          {loading ? "Searching...": "Search"}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
