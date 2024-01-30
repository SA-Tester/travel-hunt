import { Button } from "flowbite-react";
import PlacesCard from "./PlacesCard";
import HotelCard from "./HotelCard";
import axios from "axios";
import { useEffect, useState } from "react";

const Hotels = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:8000/api/get_hotels/")
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container mx-auto my-5 md:px-2 lg:px-24 sm:px-2">
      <div className="container ">
        <div className="container md:px-2 lg:px-24 sm:px-2">
          <div className="flex flex-column justify-between items-center py-2">
            <h2 class="py-4 text-3xl font-medium leading-none tracking-tight text-gray-700 md:text-3xl md:font-bold dark:text-white">
              Nearby Hotels
              <hr className="w-[10vw] border-5 border-blue-400 h-[12px]"></hr>
            </h2>
            <h6 className="w-11/12 md:w-4/6 lg:w-3/6 text-center text-gray-400">
              Stay Close, Experience More! Discover comfort and convenience at
              our nearby hotels. Your perfect stay is just a click away.
            </h6>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center py-2">
            <div className="flex items-center py-4 md:py-8 flex-wrap gap-2">
              <Button
                className="text-sky-400 bg-transparent"
                pill
                outline
                size="sm"
              >
                Family
              </Button>
              <Button
                color="tranparent"
                size="sm"
                className="text-gray-400 hover:text-sky-950"
                pill
              >
                Adventure
              </Button>
              <Button
                color="tranparent"
                size="sm"
                className="text-gray-400 hover:text-sky-950"
                pill
              >
                Road Trip
              </Button>
              <Button
                color="tranparent"
                size="sm"
                className="text-gray-400 hover:text-sky-950"
                pill
              >
                Hiking
              </Button>
            </div>
            <div className="hidden md:block">
              <button className="relative group cursor-pointer text-sky-50  overflow-hidden h-8 w-24 rounded-2xl bg-sky-800 p-2 flex justify-center items-center font-light">
                <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-900"></div>
                <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-800"></div>
                <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-700"></div>
                <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-600"></div>
                <p className="z-10">See more</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        <HotelCard />
      
      </div>
    </div>
  );
};

export default Hotels;
