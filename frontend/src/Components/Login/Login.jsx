import React from "react";
import background from "../../images/login-bg.jpg";

const Login = () => {
  return (
    <div>
      <form>
        <div
          className="grid grid-cols-1 h-screen content-center bg-cover"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="grid grid-cols-1 gap-3 container border-4 py-4 px-4 bg-zinc-100/25 h-fit lg:w-1/3 md:w-full">
            <h1 className="text-center font-extrabold text-4xl py-3">Login</h1>

            <label for="email" className="font-bold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email"
              className="rounded-lg border-gray-100 focus:border-stone-900"
            />

            <label for="password" className="font-bold">
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
              className="py-2 border-b-4 place-content-center font-semibold bg-cyan-600 text-xl text-white rounded-lg"
            />

            <div className="grid grid-cols-2 mt-4">
              <a href="/signup" className="font-bold underline text-blue-700">
                Sign Up
              </a>
              <a
                href=""
                className="text-right font-bold underline text-blue-700"
              >
                Forgot Password?
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
