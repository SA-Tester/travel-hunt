import axios from "axios";
import { TextInput } from "flowbite-react";
import { useState } from "react";
import { toast } from "react-toastify";

const PlaceSelectForm = ({ tripCallback }) => {
  const [selectedcountry, setSelectCountry] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Assuming you have selected places in state, update the tripData
    tripCallback({ data: selectedcountry, progress: 3 });
    // Update progress
  };

  return (
    <>
      <div className="m-auto left-0 right-0  dark:bg-slate-800 border-0 px-3 py-3 rounded">
        <h4 className="text-xl font-extralight mb-4 text-center">
          Navigate Your Next Adventure: Discover, Plan, Explore with Ease!
        </h4>

        <p className="font-normal text-gray-700 dark:text-gray-400">
          <form
            className=""
            onSubmit={(e) => handleSubmit(e)}
            //   onSubmit={(e) => handleSearch(e)}
          >
            <button
              type="submit"
              className="w-100 bg-[#427d9d] text-white p-2 rounded hover:bg-blue-600 mt-3"
            >
              Save Tour
            </button>
          </form>
        </p>
      </div>
    </>
  );
};

export default PlaceSelectForm;
