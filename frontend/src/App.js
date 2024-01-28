import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Toasts/Layout";
import Home from "./Components/HomePage/Home";
import TripBuilder from "./Pages/TripBuilder";
import TravllerHome from "./Components/HomePage/TravellerHome";
import BusinessHome from "./Components/HomePage/BusinessHome";

import Login from "./Components/Login/Login";
import AdminLogin from "./Components/Login/AdminLogin";
import UserSignup from "./Components/Signup/UserSignup";
import AdminSignup from "./Components/Signup/AdminSignup";
import { Logout } from "./Components/Login/Logout";
import AllPlaces from "./Components/Places/AllPlaces";
import City from "./Components/SearchResults/City";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/city" element={<City />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signup" element={<UserSignup />} />
          <Route path="/admin-signup" element={<AdminSignup />} />
          <Route path="/traveller_home" element={<TravllerHome />} />
          <Route path="/business_home" element={<BusinessHome />} />
          <Route path="/planner" element={<TripBuilder />} />
          <Route path="/allplaces" element={<AllPlaces />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
