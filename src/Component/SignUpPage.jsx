import React, { useState } from "react";
import facebookIcon2 from "../image/facebookIcon2.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword || !fullname) {
      alert("Enter authorized credentials");
      error("")
    } else {
      navigate("/menupage");
    }

    console.log("Logging in with", { email, password });
    setError("");
  };

  return (
    <div className="grid place-items-center mt-2">
      <div className="w-full max-w-md border-2 border-zinc-400 rounded-lg shadow-lg p-6">
        <h3 className="font-mono text-3xl font-bold text-center mb-2">
          Global Hub Manager
        </h3>
        <p className="font-semibold text-lg text-gray-500 text-center">
          Unlock your potential!
        </p>
        <p className="font-semibold text-lg text-gray-500 text-center mb-6">
          Sign up now to manage your goals
        </p>
        <div className="flex justify-center">
          <button className="flex items-center justify-center space-x-2 border-2 border-zinc-400 font-bold w-full sm:w-72 h-10 rounded-lg bg-sky-500 hover:bg-sky-600 transition-colors">
            <img className="h-6 w-6" src={facebookIcon2} alt="Facebook" />
            <p className="text-white">Log in with Facebook</p>
          </button>
        </div>
        <div className="text-center py-5">
          <p className="text-slate-400">OR</p>
        </div>
        <div className="flex flex-col space-y-4 pl-14">
          <input
            className="w-full sm:w-72 h-10 px-3 border-2 border-zinc-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            className="w-full sm:w-72 h-10 px-3 border-2 border-zinc-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            type="text"
            id="fullname"
            name="fullname"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            placeholder="Full Name"
          />
          <input
            className="w-full sm:w-72 h-10 px-3 border-2 border-zinc-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <input
            className="w-full sm:w-72 h-10 px-3 border-2 border-zinc-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            type="text"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
          />
        </div>
        <div className="text-sm text-gray-600 text-center mt-5">
          By signing up, you agree to our
          <Link
            to="/ForgetPassword"
            className="text-blue-700 hover:underline pl-2"
          >
            Terms
          </Link>
          ,
          <Link
            to="/ForgetPassword"
            className="text-blue-700 hover:underline pl-2"
          >
            Privacy
          </Link>
          ,
          <Link
            to="/ForgetPassword"
            className="text-blue-700 hover:underline pl-2"
          >
            Policy
          </Link>
          , and
          <Link
            to="/ForgetPassword"
            className="text-blue-700 hover:underline pl-2"
          >
            Cookies Policy
          </Link>
          .
        </div>
        <div className="pt-6 pl-14">
          <button
            className="w-full sm:w-72 h-10 text-white font-bold rounded-lg bg-sky-500 hover:bg-sky-600 transition-colors"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
        </div>
      </div>
      <div className="mt-6">
        <p className="w-96 max-w-md border-2 border-zinc-400 py-6 flex justify-center items-center rounded-lg">
          Have an account?
          <button
            className="text-blue-500 font-medium pl-2 hover:underline"
            onClick={() => navigate("/UserLoginPage")}
          >
            Log in
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
