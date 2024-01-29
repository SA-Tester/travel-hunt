import NavBar from "../NavBar/Navbar";

const HotelDetails = () => {
  const showModel = () => {
    document.getElementById("select-modal").style = "display:block";
  };
  const closeModel = () => {
    document.getElementById("select-modal").style = "display:hidden";
  };  
  return (
    <div>
      <NavBar />
      <div className="flex align-items-center w-100">
        <div className="py-3 flex flex-column  container mt-[15vh] border-b-2 w-50">
          <h3 class="text-2xl dark:text-white text-gray-600 w-50 mb-2">
            Hotel Name,Location
          </h3>
          <span>
            <div class="flex items-center">
              <svg
                class="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                4.95
              </p>
              <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                out of
              </p>
              <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                5
              </p>
            </div>
          </span>

          <span className="text-sm font-light mt-2 flex align-items-center justify-between">
            <svg
              class="w-5 h-5 text-gray-600 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
              />
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M17.8 14h0a7 7 0 1 0-11.5 0h0l.1.3.3.3L12 21l5.1-6.2.6-.7.1-.2Z"
              />
            </svg>
            31 St Thomas Street, London SE1 9QU England
            <button
              type="button"
              data-modal-target="popup-modal"
              data-modal-toggle="popup-modal"
              // onClick={() => {
              // //   showModel();
              // // }}
              class="ml-3 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to Trip
            </button>
          </span>
        </div>
      </div>
      <div className="w-full px-4  flex align-items-center justify-content-center ">
        <div className="sticky top-0  overflow-hidden ">
          <div className="relative mb-6 lg:mb-10" style={{ height: "450px" }}>
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/0f/0d/04/the-ritz-london-exterior.jpg?w=1200&h=-1&s=1"
              alt=""
              className="object-contain w-full h-full "
            />
          </div>
          <div className="flex-wrap hidden md:flex ">
            <div className="w-1/2 p-2 sm:w-1/4">
              <a
                href="#"
                className="block border border-blue-100 dark:border-gray-700 dark:hover:border-gray-600 hover:border-blue-300 "
              >
                <img
                  src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/0f/0d/04/the-ritz-london-exterior.jpg?w=1200&h=-1&s=1"
                  alt=""
                  className="object-cover w-full lg:h-32"
                />
              </a>
            </div>
            <div className="w-1/2 p-2 sm:w-1/4">
              <a
                href="#"
                className="block border border-blue-100 dark:border-transparent dark:hover:border-gray-600 hover:border-blue-300"
              >
                <img
                  src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/0f/0d/04/the-ritz-london-exterior.jpg?w=1200&h=-1&s=1"
                  alt=""
                  className="object-cover w-full lg:h-32"
                />
              </a>
            </div>
            <div className="w-1/2 p-2 sm:w-1/4">
              <a
                href="#"
                className="block border border-blue-100 dark:border-transparent dark:hover:border-gray-600 hover:border-blue-300"
              >
                <img
                  src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/0f/0d/04/the-ritz-london-exterior.jpg?w=1200&h=-1&s=1"
                  alt=""
                  className="object-cover w-full lg:h-32"
                />
              </a>
            </div>
            <div className="w-1/2 p-2 sm:w-1/4">
              <a
                href="#"
                className="block border border-blue-100 dark:border-transparent dark:hover:border-gray-600 hover:border-blue-300"
              >
                <img
                  src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/0f/0d/04/the-ritz-london-exterior.jpg?w=1200&h=-1&s=1"
                  alt=""
                  className="object-cover w-full lg:h-32"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Model */}
      <center>
        <div
          id="select-modal"
          tabindex="-1"
          aria-hidden="true"
          class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div class="relative p-4 w-full max-w-md max-h-full">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  Select your Trip
                </h3>
                <button
                  type="button"
                  onClick={() => {
                    closeModel();
                  }}
                  class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="select-modal"
                >
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
                  <span class="sr-only">Close modal</span>
                </button>
              </div>

              <div class="p-4 md:p-5">
                <ul class="space-y-4 mb-4">
                  <li>
                    <input
                      type="radio"
                      id="job-1"
                      name="job"
                      value="job-1"
                      class="hidden peer"
                      required
                    />
                    <label
                      for="job-1"
                      class="inline-flex items-center justify-between w-full p-2 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500"
                    >
                      <div class="block">
                        <div class="w-full text-lg font-semibold">Tour 01</div>
                      </div>
                      <svg
                        class="w-4 h-4 ms-3 rtl:rotate-180 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </label>
                  </li>
                </ul>
                <div className="flex flex-row gap-2">
                  <button class="text-white inline-flex w-full justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Save Tour
                  </button>
                  <button class="text-white inline-flex w-full justify-center bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    New Tour
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};

export default HotelDetails;
