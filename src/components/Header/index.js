import React, { useState } from "react";
import moment from "moment";
import { IconSearch } from "../../icons";
import PropTypes from 'prop-types';

const SearchInput = ({ setIsSearchOpen, setCity, errors }) => {
  let city;

  const handleChange = e => {
    city = e.target.value

    e.preventDefault();
  }

  const handleClick = e => {
    setCity(city);
    setIsSearchOpen(false);

    e.preventDefault();
  }

  return (
    <div className="search">
      <div className="search--header">
        <button
          className="search--btn__close"
          onClick={() => setIsSearchOpen(false)}
        >
          Close
        </button>
        <input type="text" onChange={handleChange}/>
        <button onClick={handleClick}>Confirm</button>
      </div>
    </div>
  );
}

const Header = ({ city, country, setCity, errors }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = e => {
    setIsSearchOpen(!isSearchOpen)
    e.preventDefault();
  }
  return (
    <header className="header">
      {isSearchOpen && <SearchInput setIsSearchOpen={setIsSearchOpen} setCity={setCity} city={city} errors={errors}/>}
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

SearchInput.propTypes = {
  setIsSearchOpen: PropTypes.func
}