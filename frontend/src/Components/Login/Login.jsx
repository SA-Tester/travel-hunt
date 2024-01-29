import React from "react";
import background from "../../images/login-bg.jpg";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    await axios
      .post("http://localhost:8000/token/", formData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: false,
      })
      .then((response) => {
        if (response.status === 200) {
          localStorage.clear();
          localStorage.setItem("access_token", response.data["access"]);
          localStorage.setItem("refresh_token", response.data["refresh"]);
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${response.data["access"]}`;

          navigate("/", { replace: true });
        }
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <div>
      <form onSubmit={(e) => handleLogin(e)}>
        <div
          className="grid grid-cols-1 h-screen content-center bg-cover"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="grid grid-cols-1 gap-3 container rounded shadow-lg py-4 px-4 backdrop-blur-lg h-fit lg:w-1/3 md:w-1/3">
            <h1 className="text-center font-extrabold text-4xl py-3 text-gray-200">
              Login
            </h1>

            <label htmlFor="email" className="font-bold text-gray-100">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email"
              className="rounded-lg border-gray-100 focus:border-stone-900"
            />

            <label htmlFor="password" className="font-bold text-gray-100">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              className="rounded-lg border-gray-100 focus:border-stone-900"
            />

            <input
              type="submit"
              name="login"
              value="Login"
              className="py-2  place-content-center font-semibold bg-cyan-600 text-xl text-white rounded-lg"
            />

            <div className="grid grid-cols-2 mt-4">
              <a href="/signup" className=" text-white">
                Sign Up
              </a>
              <a href="/admin-login" className="text-white text-right">
                Log In as a Business User
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
