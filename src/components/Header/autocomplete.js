import React, { useState } from 'react';
import PlacesAutocomplete, 
{
  geocodeByAddress,
  getLatLng
} from 'react-places-autocomplete';

const options = {
  types: ['(cities)']
};

const Autocomplete = ({ setCity, setIsSearchOpen }) => {
  const [address, setAddress] = useState('');
  console.log(address);

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
          />
          <div className="autocomplete-dropdown-container">
            {loading && <div>Loading...</div>}
            {suggestions.map(suggestion => {
              const className = suggestion.active
                ? 'suggestion-item--active'
                : 'suggestion-item';
              // inline style for demonstration purpose
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