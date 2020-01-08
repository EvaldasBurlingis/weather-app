import React from "react";
import PropTypes from 'prop-types';
import Autocomplete from "./autocomplete";


const SearchInput = ({ setIsSearchOpen, setCity }) => {
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
        <div className="search--body">
          <Autocomplete setCity={setCity} setIsSearchOpen={setIsSearchOpen}/>
        </div>
      </div>
    );
}

export default SearchInput

SearchInput.propTypes = {
    setIsSearchOpen: PropTypes.func
}