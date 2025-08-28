// import "./App.css";
import Button from "@mui/material/Button";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import WeatherApp from "./WeatherApp";

function App() {
  let handleClick = () => {
    console.log("button was clicked");
  };
  return (
    <>
      <WeatherApp></WeatherApp>
    </>
  );
}

export default App;
