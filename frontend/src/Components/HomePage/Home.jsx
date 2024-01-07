import NavBar from "../NavBar/Navbar";
import axios from "axios";
import React, { useState, useEffect } from "react";
import HeroSection from "../Hero/HeroSection";
import FooterCon from "../Footer/FooterCon";
import Places from "../Places/Places";

const Home = () => {
  const [result, setResult] = useState([]);
  const baseURL =
    "https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants%20in%20Sydney&key=AIzaSyA3pAqddClbAT-GzSbGaFF6vJgeq3iu6-k";

  const getResult = async () => {
    try {
      const response = await axios.post(baseURL).then((data) => {
        setResult(data);
      });
    } catch (error) {
      console.log("Error fetching restaurant details:", error);
    }
  };

  useEffect(() => {
    getResult();
  }, []);

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
    <>
      <NavBar />
      <HeroSection />
      <Places props={{ name: "Popular Places" }} />
      <Places props={{ name: "Hotels Nearby" }} />
      <FooterCon />
    </>
  );
};

export default Home;
