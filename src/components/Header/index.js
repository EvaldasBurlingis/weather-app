import React from "react";
import moment from "moment";

const Header = ({ city }) => (
  <header className="header">
    <span className="header--city">{city}</span>
    <span className="header--date">
      {moment().format("dddd, Do MMMM YYYY")}
    </span>
  </header>
);

export default Header;
