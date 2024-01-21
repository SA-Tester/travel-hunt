import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/HomePage/Home";
// import City from "./Components/SearchResults/City";
import Login from "./Components/Login/Login";
import TripBuilder from "./Pages/TripBuilder";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/city" element={<City />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/planner" element={<TripBuilder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
