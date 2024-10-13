import React from "react";
import girl from "../image/girl.png";
import workIcon from "../image/workIcon.png";

import healthIcon from "../image/healthIcon.png";
import educationIcon from "../image/educationIcon.png";
import financeIcon from "../image/financeIcon.png";

import { useNavigate } from "react-router";

function TodoListMenuPage() {
  const navigate = useNavigate();

  const handleClickPersonal = () => {
    navigate("/TodoPersonal");
  };

  const handleClickWork = () => {
    navigate("/TodoWork");
  };

  const handleClickEducation = () => {
    navigate("/TodoEducation");
  };

  const handleClickHealth = () => {
    navigate("/TodoHealth");
  };

  const handleClickFinance = () => {
    navigate("/TodoFinance");
  };

  return (
    <div>
      <div>
        <svg
          className="absolute w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#0099ff"
            fillOpacity="1"
            d="M0,224L40,229.3C80,235,160,245,240,234.7C320,224,400,192,480,197.3C560,203,640,245,720,256C800,267,880,245,960,202.7C1040,160,1120,96,1200,96C1280,96,1360,160,1400,192L1440,224L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
        <div>
          <div className="flex flex-col sm:flex-row justify-center items-center space-x-0 sm:space-x-4 relative">
            <div className="pt-16 pr-0 sm:pr-10 text-center sm:text-left">
              <p className=" text-2xl sm:text-3xl text-black font-bold">
                Manage your tasks
              </p>
              
            </div>
            <div className="pr-0 sm:pr-5 pb-5  pt-12">
              <img className="w-24 h-24 max-w-full" src={girl} alt="girl" />
            </div>
          </div>
        </div>
        <div className="mt-12 sm:mt-24 flex justify-center items-center">
          <div className="flex justify-center sm:justify-start sm:pl-">
            <div className="pt-16 sm:pl-10">
              <div className="mb-7">
                <button
                  className="text-lg sm:text-xl w-full sm:w-96 h-20 bg-slate-200 hover:bg-slate-400 rounded-lg flex justify-center items-center space-x-4"
                  onClick={handleClickPersonal}
                >
                  <img
                    className="w-12 sm:w-16 h-12 sm:h-16"
                    src={girl}
                    alt="girl"
                  />
                  <p className="text-black hover:text-pink-600 font-semibold">
                    Personal
                  </p>
                </button>
              </div>

              <div className="mb-7">
                <button
                  className="text-lg sm:text-xl w-full sm:w-96 h-20 bg-slate-200 hover:bg-slate-400 rounded-lg flex justify-center items-center space-x-4"
                  onClick={handleClickWork}
                >
                  <img
                    className="w-12 sm:w-16 h-12 sm:h-16"
                    src={workIcon}
                    alt="work icon"
                  />
                  <p className="text-black hover:text-pink-600 font-semibold">
                    Work
                  </p>
                </button>
              </div>

              <div className="mb-7">
                <button
                  className="text-lg sm:text-xl w-full sm:w-96 h-20 bg-slate-200 hover:bg-slate-400 rounded-lg flex justify-center items-center space-x-4"
                  onClick={handleClickHealth}
                >
                  <img
                    className="w-12 sm:w-16 h-12 sm:h-16"
                    src={healthIcon}
                    alt="health icon"
                  />
                  <p className="text-black hover:text-pink-600 font-semibold">
                    Health
                  </p>
                </button>
              </div>

              <div className="mb-7">
                <button
                  className="text-lg sm:text-xl w-full sm:w-96 h-20 bg-slate-200 hover:bg-slate-400 rounded-lg flex justify-center items-center space-x-4"
                  onClick={handleClickEducation}
                >
                  <img
                    className="w-12 sm:w-16 h-12 sm:h-16"
                    src={educationIcon}
                    alt="education icon"
                  />
                  <p className="text-black hover:text-pink-600 font-semibold">
                    Education
                  </p>
                </button>
              </div>

              <div className="mb-7">
                <button
                  className="text-lg sm:text-xl w-full sm:w-96 h-20 bg-slate-200 hover:bg-slate-400 rounded-lg flex justify-center items-center space-x-4"
                  onClick={handleClickFinance}
                >
                  <img
                    className="w-12 sm:w-16 h-12 sm:h-16"
                    src={financeIcon}
                    alt="finance icon"
                  />
                  <p className="text-black hover:text-pink-600 font-semibold">
                    Finance
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoListMenuPage;
