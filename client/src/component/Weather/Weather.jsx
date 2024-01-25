import { useEffect, useState } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import cloudImg from "../../images/cloudy.jpg";
import rainImg from "../../images/rain.jpeg";
import clearImg from "../../images/clear.jpeg";
import drizzleImg from "../../images/drizzle.jpeg";
import mistImg from "../../images/mist.webp";

import "./Weather.css";

const Weather = () => {
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [weatherData, setWeatherData] = useState({
    name: "",
    temp: "",
    condition: "",
    img: cloudImg,
    desc: "",
  });
  const apiKey = process.env.REACT_APP_WEATHERAPI_KEY;

  const fetchWeather = async (e) => {
    e.preventDefault();

    try {
      if (name !== "") {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}&units=metric`;
        const data = await axios.get(url).then((res) => res.data);

        let imgPath = "";
        if (data.weather[0].main === "Clear") {
          imgPath = clearImg;
        } else if (data.weather[0].main === "Clouds") {
          imgPath = cloudImg;
        } else if (data.weather[0].main === "Rain") {
          imgPath = rainImg;
        } else if (data.weather[0].main === "Drizzle") {
          imgPath = drizzleImg;
        } else if (data.weather[0].main === "Mist") {
          imgPath = mistImg;
        } else {
          imgPath = cloudImg;
        }

        setWeatherData({
          ...weatherData,
          name: data.name,
          temp: data.main.temp,
          condition: data.weather[0].main,
          desc: data.weather[0].description,
          img: imgPath,
        });
        setName("");
        setError("");
      }
    } catch (error) {
      if (error.response.status === 404) {
        setError("City not found, enter a valid city!");
      } else {
        setError("");
      }
      console.log(error);
    }
  };
  return (
    <div className="weather">
      <h2 className="h2 h21">check weather condition in your location</h2>
      <div className="weather-container">
        <div className="weather-wrapper">
          <form onSubmit={fetchWeather}>
            <div className="input-container">
              <input
                type="text"
                placeholder="Search location"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <button className="btn" type="submit">
                <FaSearch />
              </button>
            </div>
          </form>
          <div className="weather-item">
            <div className="weather-img-con">
              <img src={weatherData.img} alt="cloud" />
            </div>
            <p className="err">{error}</p>
            <h3>Temperature: {Math.round(weatherData.temp)}°C</h3>
            <div>
              <h3>Location: {weatherData.name}</h3>
              <p> Condition: {weatherData.condition}</p>

              <p> Description: {weatherData.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
