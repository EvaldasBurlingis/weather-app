import React, { useState, useEffect } from "react";
import Header from "../Header";
import IconCloudy from "../../icons/cloudy";

const BigScreen = () => <div>This works best on mobile</div>;

const MobileApp = () => (
  <>
    <Header />
    <main>
      <section className="current">
        <h2 className="current--title">Today</h2>
        <div className="current--temperature">
          <IconCloudy />
          <span className="current--temp-big">38</span>
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

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  return width > 450 ? <BigScreen /> : <MobileApp />;
};

export default App;
