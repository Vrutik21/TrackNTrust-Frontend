// import React, { Fragment } from "react";
// import {
//   GoogleMap,
//   Marker,
//   Circle,
//   Polyline,
//   useJsApiLoader,
// } from "@react-google-maps/api";

// const Map = (props) => {
//   const { isLoaded } = useJsApiLoader({
//     id: "google-map-script",
//     googleMapsApiKey: `${process.env.REACT_APP_MAPS_KEYS}`,
//   });

//   const [map, setMap] = React.useState(null);

//   // const onLoad = React.useCallback(function callback(map) {
//   //   // This is just an example of getting and using the map instance!!! don't just blindly copy!
//   //   const bounds = new window.google.maps.LatLngBounds(center);
//   //   map.fitBounds(bounds);

//   //   setMap(map)
//   // }, [])

//   const containerStyle = {
//     width: "100%",
//     height: "100vh",
//   };

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null);
//   }, []);

//   return (
//     isLoaded && (
//       <GoogleMap
//         zoom={props.zoom}
//         center={props.center}
//         mapContainerStyle={containerStyle}
//       >
//         {props.places.map((placeArray, index) => {
//           return (
//             <Fragment key={index}>
//               {placeArray.map((place, innerIndex) => {
//                 if (place.hasOwnProperty("circle")) {
//                   return (
//                     <Fragment key={place.id}>
//                       <Marker
//                         position={{
//                           lat: parseFloat(place.latitude),
//                           lng: parseFloat(place.longitude),
//                         }}
//                       />
//                       {place.circle && (
//                         <Circle
//                           defaultCenter={{
//                             lat: parseFloat(place.latitude),
//                             lng: parseFloat(place.longitude),
//                           }}
//                           radius={place.circle.radius}
//                           options={place.circle.options}
//                         />
//                       )}
//                     </Fragment>
//                   );
//                 } else {
//                   // For driver's path
//                   return null; // No marker for driver's location
//                 }
//               })}
//               {/* Create Polyline for driver's path */}
//               <Polyline
//                 path={placeArray.map((place) => ({
//                   lat: parseFloat(place.latitude),
//                   lng: parseFloat(place.longitude),
//                 }))}
//                 options={{
//                   strokeColor: "blue",
//                   strokeOpacity: 1.0,
//                   strokeWeight: 3,
//                 }}
//               />
//             </Fragment>
//           );
//         })}
//       </GoogleMap>
//     )
//   );
// };

// export default Map;
