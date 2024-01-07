import React from "react";

const Login = () => {
    return(
        <div className="grid grid-cols-1 h-screen bg-gradient-to-r from-sky-500 to-indigo-500 content-center">
            <div className="grid grid-cols-1 gap-3 container border-4 py-4 px-4 bg-white h-fit lg:w-1/3 md:w-full">
                <h1 className="text-center font-extrabold text-4xl py-3">Login</h1>

                <label for="email" className="font-bold">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter Email" className="rounded-lg border-gray-100 focus:border-stone-900"/>

                <label for="password" className="font-bold">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter Password" className="rounded-lg border-gray-100 focus:border-stone-900"/>

                <input type="submit" name="login" value="Login" className="py-2 border-b-4 place-content-center font-semibold bg-cyan-600 text-xl text-white rounded-lg"/>

                <div className="grid grid-cols-2 mt-4">
                    <a href="/signup" className="font-bold underline text-blue-700">Sign Up</a>
                    <a href="" className="text-right font-bold underline text-blue-700">Forgot Password?</a>
                </div>
            </div>
        </div>
    );
}

export default Login;