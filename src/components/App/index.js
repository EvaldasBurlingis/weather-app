import React, { useState, useEffect } from "react";
import Header from "../Header";

const BigScreen = () => <div>This works best on mobile</div>;

const MobileApp = () => (
  <>
    <Header />
    <h1>Hello from app</h1>
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
