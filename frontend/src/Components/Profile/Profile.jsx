import { useEffect, useState } from "react";
import FooterCon from "../Footer/FooterCon";
import NavBar from "../NavBar/Navbar";
import {
  useLocation,
  useNavigate,
} from "react-router-dom/dist/umd/react-router-dom.development";
import axios from "axios";
import { toast } from "react-toastify";

const Profile = () => {
  const [loggedIn, setLoginStatus] = useState("");
  const [trips, setTrips] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/get_previous_trips"
        );

        if (isMounted && response.data !== null) {
          console.log(response.data);
          setTrips(response.data);
        } else {
          toast.error("Session Expired. Login again.");
          navigate("/login", { replace: true });
        }
      } catch (error) {
        console.log(error);
        toast.error("Session Expired. Login again.");
        navigate("/login", { replace: true });
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <NavBar />
      <section className="bg-gray-200 mt-5">
        <div className="container mx-auto py-5">
          <div className="flex">
            {/* Profile Section */}
            <div className="w-1/3 mr-4 rounded-lg">
              <div className="mb-4 shadow-lg p-4 bg-white">
                <div className="text-center">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle w-32 mb-2 mx-auto"
                  />
                  <p className="text-xl font-bold mb-1">Anuranga Madushan</p>
                  <div className="flex justify-center">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Information Section */}
            <div className="w-2/3">
              <div className="mb-4 shadow-lg p-4 bg-white">
                <div className="flex mb-4">
                  <div className="w-1/4">
                    <p className="font-bold">Full Name</p>
                  </div>
                  <div className="w-3/4">
                    <p className="text-muted">Anuranga madushan</p>
                  </div>
                </div>
                <hr className="my-2" />

                {/* Repeat this structure for other information sections */}
                <div className="flex mb-4">
                  <div className="w-1/4">
                    <p className="font-bold">Email</p>
                  </div>
                  <div className="w-3/4">
                    <p className="text-muted">anuranga@gmail.com</p>
                  </div>
                </div>
                <hr className="my-2" />

                <div className="flex mb-4">
                  <div className="w-1/4">
                    <p className="font-bold">Phone</p>
                  </div>
                  <div className="w-3/4">
                    <p className="text-muted">(097) 234-5678</p>
                  </div>
                </div>
                <hr className="my-2" />

                <div className="flex mb-4">
                  <div className="w-1/4">
                    <p className="font-bold">Mobile</p>
                  </div>
                  <div className="w-3/4">
                    <p className="text-muted">(098) 765-4321</p>
                  </div>
                </div>
                <hr className="my-2" />

                <div className="flex">
                  <div className="w-1/4">
                    <p className="font-bold">Address</p>
                  </div>
                  <div className="w-3/4">
                    <p className="text-muted">Badulla road,Bandarawela.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Previous Trip Information Section */}
          <div className="mb-4 shadow-lg mt-4 p-4 bg-gray-300 rounded">
            <div className="w-full">
              <div className="mb-4 shadow-lg p-4 bg-white">
                <h5 className="text-xl font-bold">Previous Trip Information</h5>
              </div>
            </div>

            {/* Repeat this structure for each trip */}
            {trips != undefined ? (
              <div className="w-full">
                {trips.map((item) => (
                  <div className="mb-4 shadow-lg p-4 bg-white rounded-lg flex align-items-center justify-between">
                    <a href="/trip_info">
                      <span className="text-md ">{item.name}</span>
                    </a>
                    <div class="inline-flex rounded-md shadow-sm" role="group">
                      <button
                        type="button"
                        className="bg-red-100 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                      >
                        <svg
                          class="w-3 h-3 me-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                        </svg>
                        Delete
                      </button>
                      <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                      >
                        <svg
                          class="w-3 h-3 me-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"
                          />
                        </svg>
                        Update
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <>No data</>
            )}
          </div>
        </div>
      </section>
      <FooterCon />
    </>
  );
};

export default Profile;
