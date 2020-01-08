import React from "react";
import PropTypes from 'prop-types';

const SearchInput = ({ setIsSearchOpen, setCity }) => {

    // const handleClick = e => {
    //     // setCity(city);
    //     setIsSearchOpen(false);

    //     e.preventDefault();
    // }

    return (
      <div className="search">
        <div className="search--header">
          <button
            className="search--btn__close"
            onClick={() => setIsSearchOpen(false)}
          >
            Close
          </button>
          <input type="text" id="autocomplete" placeholder=""/>
        </div>
      </div>
    );
}

export default SearchInput

SearchInput.propTypes = {
    setIsSearchOpen: PropTypes.func
}