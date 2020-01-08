import React, { useState } from 'react';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';
import PropTypes from "prop-types";

const options = {
  types: ['(cities)']
};

const Autocomplete = ({ setCity, setIsSearchOpen }) => {
  const [address, setAddress] = useState('');

  const handleChange = address => {
    setAddress(address);
  };

  const handleSelect = address => {
    geocodeByAddress(address)
      .then(result => {
        setCity(result[0].formatted_address);
        setIsSearchOpen(false);
      })
      .catch(error => console.error('Error', error));
  };

  return (
    <PlacesAutocomplete
      value={address}
      onChange={handleChange}
      onSelect={handleSelect}
      searchOptions={options}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <input
            {...getInputProps({
              placeholder: 'Enter City'
            })}
            className="search-input"
          />
          <div>
            {loading && <div>Loading...</div>}
            {suggestions.map(suggestion => {
              const className = suggestion.active
                ? 'suggestion-item suggestion-item--active'
                : 'suggestion-item';
              const style = suggestion.active
                ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                : { backgroundColor: '#ffffff', cursor: 'pointer' };
              return (
                <div
                  {...getSuggestionItemProps(suggestion, {
                    className,
                    style
                  })}
                >
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
};

export default Autocomplete

Autocomplete.propTypes = {
  setCity: PropTypes.func,
  setIsSearchOpen: PropTypes.func
}