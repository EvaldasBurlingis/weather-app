import React, { useState } from "react";
import moment from "moment";
import { IconSearch } from "../../icons";
import PropTypes from 'prop-types';
import SearchInput from "./search";


const Header = ({ city, country, setCity, errors }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = e => {
    setIsSearchOpen(!isSearchOpen)
    e.preventDefault();
  }
  return (
    <header className="header">
      {isSearchOpen && <SearchInput setIsSearchOpen={setIsSearchOpen} setCity={setCity} city={city}/>}
      <div className="header--main">
        <span className="header--city">{city}, {country}</span>
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
  city: PropTypes.string,
  country: PropTypes.string
}

