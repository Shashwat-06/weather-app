import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import "./SearchBox.css";
import { useState } from "react";
export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const GEO_API_URL = `https://nominatim.openstreetmap.org/search?q=${city},india&format=json`;

  async function getWeatherInfo() {
    try {
      const data = await fetch(GEO_API_URL, {
        headers: {
          "User-Agent": "MyTestApp",
        },
      });

      const geoData = await data.json();

      const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${geoData[0].lat}&lon=${geoData[0].lon}&appid=<YOUR OPEN WEATHER MAP API KEY HERE>&units=metric`;

      const weatherData = await fetch(API_URL);
      const weatherInfo = await weatherData.json();

      // console.log(weatherInfo);
      let result = {
        city: city,
        temp: weatherInfo.main.temp,
        tempMin: weatherInfo.main.temp_min,
        tempMax: weatherInfo.main.temp_max,
        humidity: weatherInfo.main.humidity,
        feelsLike: weatherInfo.main.feels_like,
        weather: weatherInfo.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  }

  let handleChange = (event) => {
    setCity(event.target.value);
  };
  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(city);

      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="SearchBox">
      <h3>Search for the weather</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          value={city}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
