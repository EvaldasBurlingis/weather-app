import React, { useState } from "react";
import moment from "moment";
import { IconSearch } from "../../icons";
import PropTypes from 'prop-types';

const Header = ({ city }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = e => {
    setIsSearchOpen(!isSearchOpen)

    console.log(isSearchOpen)
    e.preventDefault();
  }
  return (
    <header className="header">
      <div className="header--main">
        <span className="header--city">{city}</span>
        <span onClick={toggleSearch} style={{display: "flex", alignItems: "center"}}><IconSearch /></span>
      </div>
      <span className="header--date">
        {moment().format("dddd, Do MMMM YYYY")}
      </span>
    </header>
  );
}
export default Header;

Header.propTypes = {
  city: PropTypes.string
}