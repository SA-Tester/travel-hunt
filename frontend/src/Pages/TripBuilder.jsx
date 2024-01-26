import { Progress } from "flowbite-react";
import NavBar from "../Components/NavBar/Navbar";
import { useState } from "react";
import TripNameForm from "../Components/TripPlaner/TripNameForm";

import DatePickerComponent from "../Components/TripPlaner/DatePickerComponent";

const TripBuilder = () => {
  const [slidestate, setSlideState] = useState(0);
  let [progess, setProgress] = useState(0);
  const calProgress = (state) => {
    let progress = ((state + 1) / 4) * 100;
    setSlideState(state);
    setProgress(progress);
  };

  const BottonProgressBar = () => {
    return (
      <div className="fixed bottom-0 h-[10vh] w-100 shadow-lg bg-white">
        {/* <div className="w-75 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-[8px]"></div>
         */}
        <Progress progress={progess} size="sm" />
        <Pagination />
        {/* bottom */}
      </div>
    );
  };

  const Pagination = () => {
    return (
      <div class="fixed bottom-0 left-0 z-50  w-full h-16  px-8 bg-white border-t border-gray-200  dark:bg-gray-700 dark:border-gray-600">
        <div class="flex items-center justify-center mx-auto my-2">
          <button
            onClick={() => {
              calProgress(0);
            }}
            data-tooltip-target="tooltip-microphone"
            type="button"
            class="p-2.5 group bg-gray-100 rounded-full hover:bg-gray-200 me-4 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:bg-gray-600 dark:hover:bg-gray-800"
          >
            <div className="px-2">1</div>
            <span class="sr-only">Content 1</span>
          </button>
          <div
            id="tooltip-microphone"
            role="tooltip"
            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Mute microphone
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>
          <button
            onClick={() => {
              calProgress(1);
            }}
            data-tooltip-target="tooltip-camera"
            type="button"
            class="p-2.5 bg-gray-100 group rounded-full hover:bg-gray-200 me-4 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:bg-gray-600 dark:hover:bg-gray-800"
          >
            <div className="px-2">2</div>
            <span class="sr-only">Hide camera</span>
          </button>
          <div
            id="tooltip-camera"
            role="tooltip"
            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Hide camera
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>
          <button
            onClick={() => {
              calProgress(2);
            }}
            data-tooltip-target="tooltip-feedback"
            type="button"
            class="p-2.5 bg-gray-100 group rounded-full hover:bg-gray-200 me-4 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:bg-gray-600 dark:hover:bg-gray-800"
          >
            <div className="px-2">3</div>
            <span class="sr-only">Share feedback</span>
          </button>
          <div
            id="tooltip-feedback"
            role="tooltip"
            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Share feedback
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>
          <button
            onClick={() => {
              calProgress(3);
            }}
            data-tooltip-target="tooltip-settings"
            type="button"
            class="p-2.5 bg-gray-100 group rounded-full me-4 md:me-0 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:bg-gray-600 dark:hover:bg-gray-800"
          >
            <div className="px-2">4</div>
            <span class="sr-only">Video settings</span>
          </button>
          <div
            id="tooltip-settings"
            role="tooltip"
            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Video settings
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>
        </div>
      </div>
    );
  };

  const slideList = [
    <FirstSlide />,
    <SecondSlide />,
    <ThirdSlide />,
    <ForthSlide />,
  ];

  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center">
      <NavBar />
      <div>{slideList[slidestate]}</div>
      <BottonProgressBar />
    </div>
  );
};

const FirstSlide = () => {
  return (
    <div>
      <TripNameForm />
    </div>
  );
};
const SecondSlide = () => {
  return (
    <div>
      <DatePickerComponent />
    </div>
  );
};
const ThirdSlide = () => {
  return <div className="mt-[15vh]">3</div>;
};
const ForthSlide = () => {
  return <div className="mt-[15vh]">4</div>;
};

export default TripBuilder;
