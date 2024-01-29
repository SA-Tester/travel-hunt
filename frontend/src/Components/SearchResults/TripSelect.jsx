import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const TripSelect = ({ isLoggedIn }) => {
  const [loggedIn, setLoginStatus] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // Get query string parameter from the URL to redirect user to location after saving the trip
  const locationID = new URLSearchParams(location.search).get("l");

  useEffect(() => {
    if (localStorage.getItem("access_token") !== null) {
      (async () => {
        try {
          await axios.get("http://localhost:8000/api/login", {
            headers: { "Content-Type": "application/json" },
          });
          setLoginStatus(true);
        } catch {
          console.log("Unauthorized");
          setLoginStatus(false);
        }
      })();
    } else {
      setLoginStatus(false);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    if(formData.get("trip_name") === "new"){
        // Trip has to be saved first
        navigate("/planner?l=" + locationID, {replace: true});
    }
    else{
        // Trip is already saved
    }
  };

  if (loggedIn) {
    return (
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="container grid grid-cols-2 gap-3 w-fit">
            <div>
              <select name="trip_name" className="w-fit rounded-lg">
                <option value="new">Create New Trip</option>
              </select>
            </div>
            <div>
              <input
                type="submit"
                name="submit"
                value="Add to Trip"
                className="bottom-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              />
            </div>
          </div>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <a
          href="/login"
          class="absolute bottom-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add to Trip
        </a>
      </div>
    );
  }
};

export default TripSelect;
