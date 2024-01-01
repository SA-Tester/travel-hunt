import { Card, Carousel } from "flowbite-react";
import PlacesCard from "./PlacesCard";

const PopularPlaces = () => {
  return (
    <div className="container mx-auto my-5">
      <div className="container ">
        <div className="flex flex-row justify-between items-center border-b-2 border-gray-200 py-2">
          <h2 class="text-lg font-medium leading-none tracking-tight text-gray-700 md:text-3xl md:font-bold dark:text-white">
            Popular Places
          </h2>

          <button class="relative group cursor-pointer text-sky-50  overflow-hidden h-8 w-24 rounded-2xl bg-sky-800 p-2 flex justify-center items-center font-light">
            <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-900"></div>
            <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-800"></div>
            <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-700"></div>
            <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-600"></div>
            <p class="z-10">See more</p>
          </button>
        </div>
      </div>
      <div className="container mt-4">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
          <PlacesCard />
          <PlacesCard />
          <PlacesCard />
          <PlacesCard />
          <PlacesCard />
          <PlacesCard />
        </div>
      </div>
    </div>
  );
};

export default PopularPlaces;
