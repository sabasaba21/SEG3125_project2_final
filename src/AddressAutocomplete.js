import React, { useState } from 'react';
import { GoogleMap, LoadScript, Autocomplete } from '@react-google-maps/api';

const AddressAutocomplete = ({ onPlaceSelected }) => {
  const [autocomplete, setAutocomplete] = useState(null);

  const onLoad = (autocomplete) => {
    setAutocomplete(autocomplete);
  };

  const onPlaceSelect = () => {
    if (autocomplete !== null) {
      onPlaceSelected(autocomplete.getPlace());
    } else {
      console.error('Autocomplete is not loaded yet!');
    }
  };

  return (
    <LoadScript
      googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY"
      libraries={['places']}
    >
      <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceSelect}>
        <input
          type="text"
          placeholder="Enter your address"
          style={{
            boxSizing: 'border-box',
            border: '1px solid transparent',
            width: '240px',
            height: '32px',
            padding: '0 12px',
            borderRadius: '3px',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
            fontSize: '14px',
            outline: 'none',
            textOverflow: 'ellipses',
            position: 'absolute',
            left: '50%',
            marginLeft: '-120px'
          }}
        />
      </Autocomplete>
    </LoadScript>
  );
};

export default AddressAutocomplete;
