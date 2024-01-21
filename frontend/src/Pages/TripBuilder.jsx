import { Progress } from "flowbite-react";
import NavBar from "../Components/NavBar/Navbar";

const TripBuilder = () => {
  return (
    <div className="h-[100vh]">
      <NavBar />
      <BottonProgressBar />
    </div>
  );
};

const BottonProgressBar = () => {
  return (
    <div className="fixed bottom-0 h-[10vh] w-100 shadow-lg bg-white">
      {/* <div className="w-75 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-[8px]"></div>
       */}
      <Progress progress={50} size="sm"/>
      {/* bottom */}
    </div>
  );
};

export default TripBuilder;
