import React, { Fragment } from "react";
import {
  GoogleMap,
  Marker,
  Circle,
  Polyline,
  withGoogleMap,
} from "react-google-maps";

const Map = withGoogleMap((props) => {
  return (
    <GoogleMap defaultZoom={props.zoom} defaultCenter={props.center}>
      {props.places.map((placeArray, index) => {
        return (
          <Fragment key={index}>
            {placeArray.map((place, innerIndex) => {
              if (place.hasOwnProperty("circle")) {
                return (
                  <Fragment key={place.id}>
                    <Marker
                      position={{
                        lat: parseFloat(place.latitude),
                        lng: parseFloat(place.longitude),
                      }}
                    />
                    {place.circle && (
                      <Circle
                        defaultCenter={{
                          lat: parseFloat(place.latitude),
                          lng: parseFloat(place.longitude),
                        }}
                        radius={place.circle.radius}
                        options={place.circle.options}
                      />
                    )}
                  </Fragment>
                );
              } else {
                // For driver's path
                return null; // No marker for driver's location
              }
            })}
            {/* Create Polyline for driver's path */}
            <Polyline
              path={placeArray.map((place) => ({
                lat: parseFloat(place.latitude),
                lng: parseFloat(place.longitude),
              }))}
              options={{
                strokeColor: "blue",
                strokeOpacity: 1.0,
                strokeWeight: 3,
              }}
            />
          </Fragment>
        );
      })}
    </GoogleMap>
  );
});

export default Map;
