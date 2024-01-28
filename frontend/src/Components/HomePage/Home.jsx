import NavBar from "../NavBar/Navbar";
import axios from "axios";
import React, { useState, useEffect } from "react";
import HeroSection from "../Hero/HeroSection";
import FooterCon from "../Footer/FooterCon";
import Places from "../Places/Places";
import Hotels from "../Places/Hotels";


const Home = () => {
 
  return (
    // <div>
    //   <h3>Restaurant Name: {result.name}</h3>
    //   {/* Render additional restaurant details here */}
    // </div>
    <div className="dark:bg-slate-900">
      <NavBar />
      <HeroSection />
      <Places props={{ name: "Popular Places" }} />
      <Hotels />

      <FooterCon />
      {/* <Helloworld /> */}
    </div>
  );
};

export default Home;
