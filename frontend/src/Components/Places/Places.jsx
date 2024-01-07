import { Button } from "flowbite-react";
import PlacesCard from "./PlacesCard";

const Places = (props) => {
  return (
    <div className="container mx-auto my-5 md:px-2 lg:px-24 sm:px-2">
      <div className="container ">
        <div className="flex flex-row justify-between items-center py-2">
          <h2 class="text-lg font-medium leading-none tracking-tight text-gray-700 md:text-3xl md:font-bold dark:text-white">
            {props.props["name"]}
          </h2>

          <button class="relative group cursor-pointer text-sky-50  overflow-hidden h-8 w-24 rounded-2xl bg-sky-800 p-2 flex justify-center items-center font-light">
            <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-900"></div>
            <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-800"></div>
            <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-700"></div>
            <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-600"></div>
            <p class="z-10">See more</p>
          </button>
        </div>
        <hr className="w-[10vw] border-5 border-blue-400 h-[12px]"></hr>
        <div className="flex flex-wrap gap-1">
          <Button color="tranparent" className="text-sky-400">
            Family
          </Button>
          <Button color="tranparent" className="text-gray-400 hover:text-sky-950">
            Adventure
          </Button>
          <Button color="tranparent" className="text-gray-400 hover:text-sky-950">
            Road Trip
          </Button>
          <Button color="tranparent" className="text-gray-400 hover:text-sky-950">
            Hiking
          </Button>
        </div>
      </div>
      <div className="container mt-4">
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
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

export default Places;
