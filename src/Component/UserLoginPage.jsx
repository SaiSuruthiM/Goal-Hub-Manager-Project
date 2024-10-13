import React from "react";
import { useState } from "react";
import facebookIcon from "../image/facebookIcon.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const UserLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("name", "John Doe");
    // if (!email || !password) {
    //   setError("Please fill in both fields.");
    //   return;
    // } else {
    //   if (email === "mahi" && password === "mahi@123") {
    //     navigate("/menupage");
    //   } else {
    //     alert("Enter authorized credentials");
    //   }
    // }

    if (!email || !password) {
      alert("Enter authorized credentials");
       error("");
    } else {
      navigate("/menupage");
    }

    console.log("Logging in with", { email, password });
    setError("");
  };

  return (
    <div className="grid place-items-center mt-16 sm:mt-24 px-4">
      <div className="w-full sm:w-96 border-2 border-zinc-400 rounded-lg shadow-lg">
        <h3 className="font-mono text-2xl sm:text-3xl font-bold text-center py-5 sm:py-7">
          Global Hub Manager
        </h3>
        <div className="px-4 sm:px-8">
          <input
            className="w-full h-10 px-3 mb-5 border-2 border-zinc-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            className="w-full h-10 px-3 mb-7 border-2 border-zinc-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button
            type="submit"
            className="w-full h-10 text-white font-bold rounded-lg bg-sky-500 hover:bg-sky-600 transition-colors"
            onClick={handleSubmit}
          >
            Log in
          </button>
        </div>
        <div className="text-center pt-5">
          <p className="text-slate-400">OR</p>
        </div>
        <div className="flex justify-center items-center space-x-4 pt-5">
          <button className="flex items-center space-x-2">
            <img className="h-6 w-6" src={facebookIcon} alt="Facebook" />
            <p className="text-sky-800 font-semibold">Log in with Facebook</p>
          </button>
        </div>
        <div className="text-center py-5">
          <Link to="/ForgetPassword" className="text-blue-500 hover:underline">
            Forgot password?
          </Link>
        </div>
      </div>
      <div className="mt-4 sm:mt-6 w-full sm:w-96 px-4 sm:px-0">
        <p className="border-2 border-zinc-400 py-4 sm:py-6 flex justify-center items-center rounded-lg">
          Don't have an account?
          <button
            className="text-blue-500 font-medium pl-2 hover:underline"
            onClick={() => navigate("/SignUpPage")}
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default UserLoginPage;
