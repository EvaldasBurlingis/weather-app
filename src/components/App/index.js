import React, { useState, useEffect } from "react";
import Header from "../Header";
import IconCloudy from "../../icons/cloudy";

const API_URL = "https://api.openweathermap.org/data/2.5/weather?q="
const APPID = process.env.REACT_APP_APPID

const BigScreen = () => <div>App works only on mobile</div>;

const MobileApp = ({ data, isLoading }) => {
  const [height, setHeight] = useState(window.innerHeight);
  
  useEffect(() => {
    window.addEventListener("resize", () => {
      setHeight(window.innerHeight);
    });
  }, []);

  return (
    <div style={{ height: `${height}px`, padding: "1rem 0.5rem" }}>
      {!isLoading && <Header city={data.name} />}
      <main>
        <section className="current">
          <h2 className="current--title">Today</h2>
          <div className="current--temperature">
            <IconCloudy />
            <span className="current--temp-big">
              {!isLoading && Math.round(data.main.temp)}&deg;
            </span>
          </div>
          <p className="current--description"> {!isLoading && data.weather[0].description}</p>
          <div className="current-details">
            <div className="current-details--box">
              <span className="current-details--detail">{!isLoading && Math.round(data.wind.speed)}km/h</span>
              <span className="current-details--desc">Wind</span>
            </div>
            <div className="current-details--box">
              <span className="current-details--detail"> {!isLoading && Math.round(data.main.humidity)}%</span>
              <span className="current-details--desc">Humidity</span>
            </div>
            <div className="current-details--box">
              <span className="current-details--detail">{!isLoading && Math.round(data.main.feels_like)}&deg;</span>
              <span className="current-details--desc">Feels Like</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [weatherData, setWeatherData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = () => {
    fetch(`${API_URL}vilnius&units=metric&appid=${process.env.REACT_APP_APPID}`)
      .then(response => response.json())
      .then(data => {
        setWeatherData(data)
        setIsLoading(false)
      })
      .catch(error => console.error(error));
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });

    fetchData();
  }, []);

  return width > 450 ? <BigScreen /> : <MobileApp data={weatherData} isLoading={isLoading} />;
};

export default App;
