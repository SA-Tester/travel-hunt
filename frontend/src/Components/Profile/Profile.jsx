import { useEffect, useState } from "react";
import FooterCon from "../Footer/FooterCon";
import NavBar from "../NavBar/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Profile = () => {
  const [loggedIn, setLoginStatus] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      await axios
        .post("http://localhost:8000/api/get_user_detials")
        .then((response) => {
          setData(response.data.data); 
        })
        .catch((error) => {
          console.log(error);
        });
    })(); 
  }, []);

  useEffect(() => {
    if (localStorage.getItem("access_token") !== null) {
      (async () => {
        try {
          const { data } = await axios.get(
            "http://localhost:8000/api/login",
            { headers: { "Content-Type": "application/json" } },
            { refresh_token: localStorage.getItem("refresh_token") },
            { withCredentials: false }
          );
          // console.log(data);
          if (data.message === "success") {
            setLoginStatus(true);
            // console.log(data.message);
          } else {
            setLoginStatus(false);
          }
        } catch {
          toast.error("Response Timed Out");
          console.log("Unauthorized");
          setLoginStatus(false);
          navigate("/login", { replace: true });
        }
      })();
    } else {
      setLoginStatus(false);
      // toast.error("Session Expired. Please login again");
      // navigate("/login", { replace: true });
    }
  }, []);

  // console.log(data);

  if (loggedIn) {
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
                    <p className="text-xl font-bold mb-1">
                      {data.firstname} {data.lastname}
                    </p>
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
                      <p className="text-muted">
                        {data.firstname} {data.lastname}
                      </p>
                    </div>
                  </div>
                  <hr className="my-2" />

                  {/* Repeat this structure for other information sections */}
                  <div className="flex mb-4">
                    <div className="w-1/4">
                      <p className="font-bold">Email</p>
                    </div>
                    <div className="w-3/4">
                      <p className="text-muted">{data.email}</p>
                    </div>
                  </div>
                  <hr className="my-2" />

                  <div className="flex mb-4">
                    <div className="w-1/4">
                      <p className="font-bold">Phone</p>
                    </div>
                    <div className="w-3/4">
                      <p className="text-muted">{data.mobile}</p>
                    </div>
                  </div>
                  <hr className="my-2" />

                  <div className="flex mb-4">
                    <div className="w-1/4">
                      <p className="font-bold">Mobile</p>
                    </div>
                    <div className="w-3/4">
                      <p className="text-muted">{data.mobile}</p>
                    </div>
                  </div>
                  <hr className="my-2" />
                </div>
              </div>
            </div>

            {/* Previous Trip Information Section */}
            <div className="mb-4 shadow-lg mt-4 p-4 bg-gray-300 rounded">
              <div className="w-full">
                <div className="mb-4 shadow-lg p-4 bg-white">
                  <h5 className="text-2xl font-bold">
                    Previous Trip Information
                  </h5>
                </div>
              </div>

              {data.trips?.map((trip, i) => {
                return (
                  <div className="w-full" key={i}>
                    <div className="mb-4 shadow-lg p-4 bg-white rounded-lg">
                      <div className="grid grid-cols-2 container">
                        <h6 className="text-lg font-bold text-left">
                          {trip.name}
                        </h6>
                        <a
                          href={"/delete_trip?t=" + trip.id}
                          className="bottom-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Delete
                        </a>
                      </div>
                      <div>
                        <h6 className="text-sm font-bold">
                          Start Date - {trip.start}
                        </h6>
                      </div>
                      <div>
                        <h6 className="text-sm font-bold">
                          End Date - {trip.end}
                        </h6>
                      </div>
                      <div>
                        <h6 className="text-sm font-bold">
                          Is Completed - {trip.is_complete}
                        </h6>
                      </div>
                      <div>
                        <h6 className="text-sm font-bold">Locations</h6>
                        <h6 className="text-sm">
                          {trip.locations.map((location) => {
                            return <h6>{location}</h6>;
                          })}
                        </h6>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <FooterCon />
      </>
    );
  } else {
    toast.error("Delayed Response. Please wait.");
    navigate("/login", { replace: true });
  }
};

export default Profile;
