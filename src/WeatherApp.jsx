import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "pune",
    feelsLike: 37.59,
    humidity: 81,
    temp: 30.59,
    tempMax: 30.59,
    tempMin: 30.59,
    weather: "overcast clouds",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        <b>Weather App</b>
      </h1>
      <SearchBox updateInfo={updateInfo}></SearchBox>
      <InfoBox info={weatherInfo}></InfoBox>
    </div>
  );
}
