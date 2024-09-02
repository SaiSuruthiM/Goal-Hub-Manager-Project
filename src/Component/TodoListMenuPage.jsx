import React from "react";
import girl from "../image/girl.png";
import workIcon from "../image/workIcon.png";
import plusIcon from "../image/plusIcon.png";
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
          className="absolute"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#0099ff"
            fill-opacity="1"
            d="M0,224L40,229.3C80,235,160,245,240,234.7C320,224,400,192,480,197.3C560,203,640,245,720,256C800,267,880,245,960,202.7C1040,160,1120,96,1200,96C1280,96,1360,160,1400,192L1440,224L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
        <div>
          <div className="flex justify-center items-center space-x-4 ">
            <div className="pt-16 pr-10">
              <p className="relative text-3xl text-white font-bold  ">
                Hello Sai
              </p>
              <p className="relative text-lg text-white font-bold  ">
                Today you have 6 tasks
              </p>
            </div>
            <div className="pr-5 pb-5">
              <img className="absolute w-24 h-24 " src={girl} />
            </div>
          </div>
        </div>
        <div className="mt-24">
          <div className=" pt-16  pl-96 ml-48">
            <div className="">
              <button
                className=" text-xl w-96 h-20   bg-slate-200 hover:bg-slate-400 rounded-lg flex justify-center items-center space-x-4"
                onClick={handleClickPersonal}
              >
                <img className="w-16 h-16" src={girl} />
                <p className="text-black  hover:text-pink-600 font-semibold pl-32">
                  Personal
                </p>
              </button>
            </div>

            <div className="pt-7">
              <button
                className="flex justify-center items-center space-x-4  w-96 h-20  bg-slate-200  hover:bg-slate-400 rounded-lg text-xl "
                onClick={handleClickWork}
              >
                <img className="w-16 h-16" src={workIcon} />
                <p className="text-black  hover:text-pink-600 font-semibold pl-32">
                  Work
                </p>
              </button>
            </div>

            <div className="pt-7">
              <button
                className="flex justify-center items-center space-x-4  w-96 h-20 bg-slate-200 hover:bg-slate-400 rounded-lg text-xl "
                onClick={handleClickHealth}
              >
                <img className="w-16 h-16" src={healthIcon} />
                <p className="text-black  hover:text-pink-600 font-semibold pl-32">
                  Health
                </p>
              </button>
            </div>

            <div className="pt-7">
              <button
                className="flex justify-center items-center space-x-4  w-96 h-20 bg-slate-200 hover:bg-slate-400 rounded-lg text-xl "
                onClick={handleClickEducation}
              >
                <img className="w-16 h-16" src={educationIcon} />
                <p className="text-black  hover:text-pink-600 font-semibold pl-32">
                  Education
                </p>
              </button>
            </div>
            <div className="pt-7">
              <button
                className="flex justify-center items-center space-x-4  w-96 h-20  bg-slate-200 hover:bg-slate-400 rounded-lg text-xl "
                onClick={handleClickFinance}
              >
                <img className="w-16 h-16" src={financeIcon} />
                <p className="text-black  hover:text-pink-600 font-semibold pl-32">
                  Finance
                </p>
              </button>
            </div>
          </div>
          <div className="flex justify-end pr-24">
            <img className="w-16 h-16 " src={plusIcon} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoListMenuPage;
