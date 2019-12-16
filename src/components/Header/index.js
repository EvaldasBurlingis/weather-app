import React, { useState } from "react";
import moment from "moment";
import { IconSearch } from "../../icons";
import PropTypes from 'prop-types';

const SearchInput = ({ setIsSearchOpen }) => {
  return (
    <div className="search">
      <div className="search--header">
        <button
          className="search--btn__close"
          onClick={() => setIsSearchOpen(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
}

const Header = ({ city }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(true);

  const toggleSearch = e => {
    setIsSearchOpen(!isSearchOpen)
    e.preventDefault();
  }
  return (
    <header className="header">
      {isSearchOpen && <SearchInput setIsSearchOpen={setIsSearchOpen}/>}
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

SearchInput.propTypes = {
  setIsSearchOpen: PropTypes.func
}