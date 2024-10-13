import React from "react";

import titleImage from "../image/titleImage.jpg";
import { useNavigate } from "react-router";


function TitlePage() {
  const navigate = useNavigate();
  
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <img
          className="h-screen w-screen object-cover"
          src={titleImage}
          alt="title bg img"
        />
      </div>
      <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif relative text-end py-24 px-8 sm:px-16 md:px-48">
        Goal Hub
        <br /> Manager{" "}
      </h1>
      <div className="pl-10 sm:pl-20">
        <h1 className="relative text-xl sm:text-2xl font-medium">
          Stay Organized | Stay Focused | Achieve More{" "}
        </h1>
      </div>

      <div className="pl-60 pt-16 pr-60 sm:pr-20 md:pr-60">
        <button
          className="relative w-32 sm:w-36 h-12 font-semibold text-slate-700 bg-gradient-to-r from-amber-200 to-amber-300 hover:from-amber-300 hover:to-yellow-500 text-lg rounded-full shadow-lg transform hover:scale-105 transition-transform transition-colors duration-300 ease-in-out"
          onClick={() => navigate("/UserLoginPage")}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default TitlePage;
