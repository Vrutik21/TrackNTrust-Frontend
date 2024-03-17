import React from "react";
import GoogleMapReact from "google-map-react";
import { useParams } from "react-router-dom";

const MapComponent = () => {
  const { latitude, longitude } = useParams();
  const location = { lat: Number(latitude), lng: Number(longitude) };
  const { lat, lng } = location;
  const defaultProps = {
    center: {
      lat: lat,
      lng: lng,
    },
    zoom: 15,
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_KEYS }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        draggable={false}
      >
        <Marker lat={lat} lng={lng} />
      </GoogleMapReact>
    </div>
  );
};

const Marker = () => (
  <div
    style={{
      width: "10px",
      height: "10px",
      backgroundColor: "red",
      borderRadius: "50%",
      border: "1px solid white",
    }}
  />
);

export default MapComponent;
