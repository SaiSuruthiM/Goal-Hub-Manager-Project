import React from "react";
import menuBgImg from "../image/menuBgImg.jpg";
import { useNavigate } from "react-router";

function MenuPage() {
  const navigate = useNavigate();

  return (
    <div className="relative w-screen h-screen">
      <img
        className="w-full h-full object-cover absolute"
        src={menuBgImg}
        alt="menu background"
      />
      <div className="sm:pl-96">
        <div className="flex flex-col pt-20 pr-4 sm:pl-96 md:pr-20 lg:pr-36">
          <div className="w-full max-w-md lg:max-w-5/12 h-full bg-white/60 rounded-lg shadow-md relative mx-auto lg:float-right p-6 flex flex-col items-center justify-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium text-center pt-12 pr-6">
              Your Career Compass
            </h2>
            <div className="flex flex-col items-center mt-16 pb-16">
              <button
                className="bg-stone-400 hover:bg-stone-500 text-lg sm:text-xl md:text-2xl text-black font-bold w-full sm:w-72 h-12 pl-3 rounded-lg border-slate-950 mb-4"
                onClick={() => navigate("/TodoListMenuPage")}
              >
                To Do List
              </button>
              <div className="py-6">
                <button
                  className="bg-stone-400 hover:bg-stone-500 text-lg sm:text-xl md:text-2xl text-black font-bold w-full sm:w-72 h-12 pl-3 rounded-lg border-slate-950"
                  onClick={() => navigate("/JobPortal")}
                >
                  Job Portal
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default MenuPage;
