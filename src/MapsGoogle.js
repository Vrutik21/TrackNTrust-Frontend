import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Map from "./Map";
import axios from "axios";
import { LoadScript } from "@react-google-maps/api";

const MapComponent = () => {
  const { latitude, longitude, radius, driver_id } = useParams();
  const location = { lat: Number(latitude), lng: Number(longitude) };
  const { lat, lng } = location;
  const [responseData, setResponseData] = useState([]);
  // const defaultProps = {
  //   center: {
  //     lat: lat,
  //     lng: lng,
  //   },
  //   zoom: 15,
  // };

  useEffect(() => {
    fetchDriverPath();
  }, [latitude, longitude]);

  const fetchDriverPath = async () => {
    try {
      const response = await axios.get(
        "https://6a61-174-91-95-63.ngrok-free.app/user/driver/efadf31d-5556-49e5-afb8-29319f7a71cc",
        {
          headers: {
            "ngrok-skip-browser-warning": "69420",
          },
        }
      );
      setResponseData(response.data.driver_path);
    } catch (err) {
      console.log(`Error finding the driver path: `, err);
    }
  };

  const data = [
    {
      id: 1,
      name: "Park Slope",
      latitude: lat,
      longitude: lng,
      circle: {
        radius: Number(radius),
        options: {
          strokeColor: "#ff0000",
        },
      },
    },
  ];

  console.log(responseData, "responseData");

  const data_driver = responseData.map((item, index) => {
    return {
      id: index + 1,
      name: "Driver Current Location",
      latitude: `${item.latitude}`,
      longitude: `${item.longitude}`,
    };
  });

  console.log(data_driver, "data_driver");

  // console.log(data_driver, "data_driver");

  // const data_driver = [
  //   {
  //     id: 10,
  //     name: "Driver current Location",
  //     latitude: "42.29846304308531",
  //     longitude: "-83.0539618702739",
  //   },
  //   {
  //     id: 11,
  //     name: "Driver current Location",
  //     latitude: "42.298930",
  //     longitude: "-83.054027",
  //   },
  //   {
  //     id: 12,
  //     name: "Driver current Location",
  //     latitude: "42.299157",
  //     longitude: "-83.053376",
  //   },
  //   {
  //     id: 13,
  //     name: "Driver current Location",
  //     latitude: "42.299388",
  //     longitude: "-83.052842",
  //   },
  //   {
  //     id: 14,
  //     name: "Driver current Location",
  //     latitude: "42.299556",
  //     longitude: "-83.052328",
  //   },
  //   {
  //     id: 15,
  //     name: "Driver current Location",
  //     latitude: "42.299912",
  //     longitude: "-83.052577",
  //   },
  //   {
  //     id: 16,
  //     name: "Driver current Location",
  //     latitude: "42.300252",
  //     longitude: "-83.052794",
  //   },
  // ];

  return (
    data_driver?.length > 0 && (
      <LoadScript googleMapsApiKey={process.env.REACT_APP_MAPS_KEYS}>
        <Map
          center={{ lat, lng }}
          zoom={15}
          places={[data, data_driver]}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAPS_KEYS}`}
          loadingElement={<div style={{ height: "100% " }} />}
          containerElement={<div style={{ height: "800px" }} />}
          mapElement={<div style={{ height: "100%" }} />}
        />
      </LoadScript>
    )
    // <div style={{ height: "100vh", width: "100%" }}>

    // </div>
  );
};

// const Marker = () => (
//   <div
//     style={{
//       width: "10px",
//       height: "10px",
//       backgroundColor: "red",
//       borderRadius: "50%",
//       border: "1px solid white",
//     }}
//   />
// );

export default MapComponent;
