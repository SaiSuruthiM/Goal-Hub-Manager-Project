import React from "react";

import titleImage from "../image/titleImage.jpg";
import { useNavigate } from "react-router";


function TitlePage() {
  const navigate = useNavigate();
  
  return (
    <div>
      <div className="absolute">
        <img
          className="bg-right  h-screen w-screen "
          src={titleImage}
          alt="title bg img"
        />
      </div>
      <h1 className="text-8xl font-serif relative text-end py-24 px-48  ">
        Goal Hub
        <br /> Manager{" "}
      </h1>
      <div className="pl-20 pb-">
        <h1 className="relative text-2xl font-medium">
          Stay Organized | Stay Focused | Achieve More{" "}
        </h1>
      </div>

      <div className="pl-60 pt-16">
        <button
          className="relative w-36 h-12 font-semibold text-slate-700 bg-gradient-to-r from-amber-200 to-amber-300 hover:from-amber-300 hover:to-yellow-500 text-lg rounded-full shadow-lg transform hover:scale-105 transition-transform transition-colors duration-300 ease-in-out"
          onClick={() => navigate("/UserLoginPage")}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default TitlePage;
