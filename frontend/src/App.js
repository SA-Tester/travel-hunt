import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Toasts/Layout";
import Home from "./Components/HomePage/Home";
// import City from "./Components/SearchResults/City";

import TripBuilder from "./Pages/TripBuilder";
import TravllerHome from "./Components/HomePage/TravellerHome";
// import City from "./Components/SearchResults/City";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import { Logout } from "./Components/Login/Logout";
import AllPlaces from "./Components/Places/AllPlaces";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/city" element={<City />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/traveller_home" element={<TravllerHome />} />
          <Route path="/planner" element={<TripBuilder />} />
          <Route path="/allplaces" element={<AllPlaces />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
