import NavBar from "../NavBar/Navbar";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Helloworld from "../../HelloWorld";

const Home = () => {
  const [result, setResult] = useState(null);
  const baseURL =
    "https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyA3pAqddClbAT-GzSbGaFF6vJgeq3iu6-k";

  const getResult = async () => {
    try {
      const response = await axios.post(baseURL, {
        includedTypes: ["restaurant"],
        maxResultCount: 10,
        locationRestriction: {
          circle: {
            center: {
              latitude: 37.7937,
              longitude: -122.3965,
            },
            radius: 500.0,
          },
        },
      });
      setResult(response.data);
    } catch (error) {
      console.log("Error fetching restaurant details:", error);
    }
  };

  // useEffect(() => {
  //   getResult();
  // }, []);

  // if (!result) {
  //   return (
  //     <div>
  //       <div>Loading...</div>
  //     </div>
  //   );
  // }

  return (
    // <div>
    //   <h3>Restaurant Name: {result.name}</h3>
    //   {/* Render additional restaurant details here */}
    // </div>
    <Helloworld />
  );
};

export default Home;
