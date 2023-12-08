import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./Components/NavBar/Navbar";

const Helloworld = () => {
  const [msg, setMessage] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/sasith")
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return <>{msg}</>;
};

export default Helloworld;
