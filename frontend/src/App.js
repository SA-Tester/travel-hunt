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
import AdminHome from "./Pages/Admin/AdminHome/AdminHome";
import Profile from "./Components/Profile/Profile";
import HotelDetails from "./Components/Places/HotelDetails";
import Location from "./Components/SearchResults/Location";
import Tripinfo from "./Components/Profile/Tripinfo";
import Test from "./Components/Test/Test";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/city" element={<City />} />
          <Route path="/location" element={<Location />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signup" element={<UserSignup />} />
          <Route path="/admin-signup" element={<AdminSignup />} />
          <Route path="/traveller_home" element={<TravllerHome />} />
          <Route path="/business_home" element={<BusinessHome />} />
          <Route path="/planner" element={<TripBuilder />} />
          <Route path="/allplaces" element={<AllPlaces />} />
          <Route path="/admin" element={<AdminHome />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/hotel" element={<HotelDetails />} />
          <Route path="/tripinfo" element={<Tripinfo />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/trip_info" element={<Tripinfo />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
