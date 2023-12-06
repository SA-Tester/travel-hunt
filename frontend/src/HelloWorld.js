import React, { useState, useEffect } from "react";
import axios from "axios";

function HelloWorld() {
  const [message, setMessage] = useState(""); //const [state, setToState] = useState(initialValue);

  useEffect(() => {
    axios
      .get("<http://localhost:8000/hello-world/>")
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <p>{message}</p>
    </div>
  );
}

export default HelloWorld;
