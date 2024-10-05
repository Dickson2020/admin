'use client'
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


const OnGoingRIdesMap = () => {
  const containerStyle = {
    width: '100%',
    height: '100%'
  };
  
  const centre = {
    lat: 37.437041393899676,
    lng: -4.191635586788259
  };
  
  const locations = [
    { lat: 37.437041393899676, lng: -4.191635586788259 },
    { lat: 37.440575591901045, lng: -4.231433159434073 },
    // Add more locations here
  ];
  
  const GOOGLE_MAPS_API_KEY = 'AIzaSyBiA5XxC4ncL4L8OgABn-x9YV0wkK2cDx4'

  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={centre}
        zoom={10}
      >
        {locations.map((location, index) => (
          <Marker key={index} position={location} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default OnGoingRIdesMap;