import React from "react";
import background from "../../images/signup-bg.jpg";

const Signup = () => {
  return (
    <div>
      <form>
        <div
          className="grid grid-cols-1 h-full content-center bg-cover h-screen"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="grid grid-cols-1 gap-3 container md:w-5/12 sm:w-full border-4 py-4 px-4 bg-zinc-100/50">
            <h1 className="text-center font-extrabold text-4xl py-3">
              Sign Up
            </h1>

            <div className="grid grid-cols-2 gap-3">
              <div className="grid grid-cols-1 justify-items-stretch">
                <label for="firstname" className="py-2 font-bold">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="First Name"
                  className="rounded-lg"
                />
              </div>
              <div className="grid grid-cols-1 justify-items-stretch">
                <label for="lastname" className="py-2 font-bold">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="Last Name"
                  className="rounded-lg"
                />
              </div>
            </div>

            <label for="email" className="font-bold">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="rounded-lg"
            />

            <label for="password1" className="font-bold">
              Enter Password
            </label>
            <input
              type="password"
              name="password1"
              id="password1"
              placeholder="Password"
              className="rounded-lg"
            />

            <label for="password2" className="font-bold">
              Confirm Password
            </label>
            <input
              type="password"
              name="password2"
              id="password2"
              placeholder="Confirm Password"
              className="rounded-lg"
            />

            <input
              type="submit"
              name="signup"
              value="Sign up"
              className="border-b-4 text-white bg-cyan-600 rounded-lg py-2 place-content-center"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
