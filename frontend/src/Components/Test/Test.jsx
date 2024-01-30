import React from "react";
import axios from "axios";
import { useEffect } from "react";

const Test = () => {
    useEffect(() => {
        (async () => {
          await axios
            .post("http://localhost:8000/api/get_user_detials")
            .then((response) => {
                console.log(response.data["data"]["user_id"])
            })
            .catch((error) => {});
        })();
      }, []);
}

export default Test;