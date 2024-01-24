import NavBar from "../NavBar/Navbar";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const City = () => {
  const [data, setData] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  // Get query string parameter from the URL
  //console.log(location.search);
  const cityName = new URLSearchParams(location.search).get("c");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/get_city/" + cityName)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // console.log(data);

  if (data != undefined) {
    return (
      <div>
        <NavBar></NavBar>
        <div className="flex py-28 px-10 md:flex-wrap sm:flex-wrap md:py-32">
          <div className="flex-auto mr-6 md:w-8/12 sm:w-full">
            <div>
              <h1 className="text-5xl font-extrabold">
                <span>Explore </span>
                <span className="text-emerald-500">{data["city_name"]}</span>
              </h1>
            </div>

            <div className="container grid grid-cols-2 my-5 gap-1">
              <div>
                <img
                  src={data["image1"]}
                  className="object-cover w-full h-full"
                  alt="..."
                />
              </div>
              <div>
                <img
                  src={data["image2"]}
                  className="object-cover w-full h-full"
                  alt="..."
                />
              </div>
              <div>
                <img
                  src={data["image3"]}
                  className="object-cover w-full h-full"
                  alt="..."
                />
              </div>
            </div>

            <div className="grid container border-solid border-gray-950 border-2 w-6/12 md:8/12 sm:w-full">
              <h2 className="font-bold text-xl py-3 text-center">
                Country Information
              </h2>

              <div className="container grid justify-center">
                <div
                  dangerouslySetInnerHTML={{ __html: data["country_flag"] }}
                />
              </div>

              <div className="grid self-center">
                <div className="container grid">
                  <div className="grid grid-cols-2 container">
                    <h2 className="py-3 mx-3 font-bold text-sm text-center">
                      Name
                    </h2>
                    <h6 className="py-3 text-sm">{data["country_name"]}</h6>
                  </div>
                  <div className="grid grid-cols-2 container">
                    <h2 className="py-3 mx-3 font-bold text-sm text-center">
                      Code
                    </h2>
                    <h6 className="py-3 text-sm">{data["country_code"]}</h6>
                  </div>
                  <div className="grid grid-cols-2 container">
                    <h2 className="py-3 mx-3 font-bold text-sm text-center">
                      Description
                    </h2>
                    <h6 className="py-3 text-sm">
                      {data["country_description"]}
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h1 className="text-3xl font-extrabold py-3 pt-5">
                <span>About </span>
                <span>{data["city_name"]}</span>
              </h1>

              <p>{data["city_description"]}</p>
            </div>

            <div>
              <h1 className="text-3xl font-extrabold pt-5">
                <span>Things to do in </span>
                <span>{data["city_name"]}</span>
              </h1>
            </div>

            <div>
              <h1 className="text-3xl font-extrabold pt-5">
                <span>Places to stay in </span>
                <span>{data["city_name"]}</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    navigate("/", { replace: true });
  }
};

export default City;
