import axios from "axios";
import { Button, Card, TextInput } from "flowbite-react";
import { useState } from "react";
import {
  Navigate,
  useNavigate,
} from "react-router-dom/dist/umd/react-router-dom.development";
import CreatableSelect from "react-select";
import { toast } from "react-toastify";

const PlaceSelectForm = ({ tripCallback }) => {
  const navigate = useNavigate();
  const [selectedcountry, setSelectCountry] = useState([]);

  function handleRemove(id) {
    const newList = selectedcountry.filter((item) => item.value !== id);

    setSelectCountry(newList);
    console.log(id);
  }

  const handleSubmit = () => {
    // Assuming you have selected places in state, update the tripData
    tripCallback({ data: selectedcountry,progress:3 });
     // Update progress
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    await axios
      .get("http://localhost:8000/api/check_city/" + formData.get("search"))
      .then((response) => {
        if (response.status === 200) {
          setSelectCountry([
            ...selectedcountry,
            {
              label: response.data["city_name"],
              value: response.data["city_id"],
            },
          ]);
          console.log(selectedcountry);
          // navigate(`/city?c=${response.data}`, { replace: false });
        }
      })
      .catch((error) => {
        if (error?.response?.status === 404) {
          toast.error("City not found");
        } else {
          toast.error("An error occurred. Code: " + error?.response?.status);
        }
      });
    //console.log(formData.get("search"));
  };
  return (
    <>
      <div className="m-auto left-0 right-0  dark:bg-slate-800 border-0 px-3 py-3 rounded">
        <h4 className="text-xl font-extralight mb-4 text-center">
          Navigate Your Next Adventure: Discover, Plan, Explore with Ease!
        </h4>

        <p className="font-normal text-gray-700 dark:text-gray-400">
          <form
            className="grid grid-cols-6  gap-1 grid-flow-row-dense"
            onSubmit={(e) => handleSearch(e)}
            //   onSubmit={(e) => handleSearch(e)}
          >
            <div className="col-span-4 md:col-span-5 lg:col-span-5">
              <TextInput
                id="search"
                name="search"
                type="search"
                placeholder="Search"
              />
              <div className="flex flex-initial w-full mt-3 ">
                {selectedcountry.map((data) => (
                  <div
                    id="toast-success"
                    class="flex mr-2 items-center w-full max-w-xs px-2 py-2 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
                    role="alert"
                  >
                    <div class="ms-3 text-sm font-normal">{data.label}</div>
                    <button
                      type="button"
                      class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                      data-dismiss-target="#toast-success"
                      aria-label="Close"
                      onClick={() => handleRemove(data.value)}
                    >
                      <span class="sr-only">Close</span>
                      <svg
                        class="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-2 md:col-span-1 lg:col-span-1">
              <button className="search-button" type="submit">
                <svg
                  className="svgIcon"
                  viewBox="0 0 512 512"
                  height="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path>
                </svg>
                <span>Find Now</span>
              </button>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mt-3"
              onClick={() => {
                tripCallback(3);
              }}
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
