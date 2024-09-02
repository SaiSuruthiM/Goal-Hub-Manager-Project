import React, { useState } from "react";
import facebookIcon2 from "../image/facebookIcon2.png";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !username || !fullname) {
      alert("Enter authorized credentials");
    } else {
      navigate("/menupage");
    }

    console.log("Logging in with", { email, password });
    setError("");
  };

  return (
    <div className="grid place-items-center mt-2">
      <div className="w-96 border-2 border-zinc-400 rounded-lg shadow-lg p-6">
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
          <button className="flex items-center justify-center space-x-2 border-2 border-zinc-400 font-bold w-72 h-10 rounded-lg bg-sky-500 hover:bg-sky-600 transition-colors">
            <img className="h-6 w-6" src={facebookIcon2} alt="Facebook" />
            <p className="text-white">Log in with Facebook</p>
          </button>
        </div>
        <div className="text-center py-5">
          <p className="text-slate-400">OR</p>
        </div>
        <div className="flex flex-col space-y-4">
          <input
            className="w-72 h-10 px-3 border-2 border-zinc-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            className="w-72 h-10 px-3 border-2 border-zinc-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            type="text"
            id="fullname"
            name="fullname"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            placeholder="Full Name"
          />
          <input
            className="w-72 h-10 px-3 border-2 border-zinc-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <input
            className="w-72 h-10 px-3 border-2 border-zinc-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <div className="text-sm text-gray-600 text-center mt-5">
          By signing up, you agree to our
          <a href="#" className="text-blue-700 px-1 hover:underline">
            Terms
          </a>
          ,
          <a href="#" className="text-blue-700 px-1 hover:underline">
            Privacy
          </a>
          ,
          <a href="#" className="text-blue-700 px-1 hover:underline">
            Policy
          </a>
          , and
          <a href="#" className="text-blue-700 px-1 hover:underline">
            Cookies Policy
          </a>
          .
        </div>
        <div className="pt-6">
          <button
            className="w-72 h-10 text-white font-bold rounded-lg bg-sky-500 hover:bg-sky-600 transition-colors"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
        </div>
      </div>
      <div className="mt-6">
        <p className="w-96 border-2 border-zinc-400 py-6 flex justify-center items-center rounded-lg">
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
