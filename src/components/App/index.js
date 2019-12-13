import React, { useState, useEffect } from "react";
import Header from "../Header";
import IconCloudy from "../../icons/cloudy";

const BigScreen = () => <div>This works best on mobile</div>;

const MobileApp = ({ data }) => {
  console.log(data.wind.speed);

  return (
    <>
      <Header city={data.name} />
      <main>
        <section className="current">
          <h2 className="current--title">Today</h2>
          <div className="current--temperature">
            <IconCloudy />
            <span className="current--temp-big">
              {Math.round(data.main.temp)}&deg;
            </span>
          </div>
          <p className="current--description">Partly Cloudy</p>
          <div className="current-details">
            <div className="current-details--box">
              <span className="current-details--detail">11km/h</span>
              <span className="current-details--desc">Wind</span>
            </div>
            <div className="current-details--box">
              <span className="current-details--detail">78%</span>
              <span className="current-details--desc">Humidity</span>
            </div>
            <div className="current-details--box">
              <span className="current-details--detail">32</span>
              <span className="current-details--desc">Feels Like</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [weatherData, setWeatherData] = useState({});

  const fetchData = () => {
    fetch(API + APPID)
      .then(response => response.json())
      .then(data => setWeatherData(data))
      .catch(error => console.error(error));
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });

    fetchData();
  }, []);

  return width > 450 ? <BigScreen /> : <MobileApp data={weatherData} />;
};

export default App;
