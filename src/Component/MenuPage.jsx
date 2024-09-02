import React from "react";
import menuBgImg from "../image/menuBgImg.jpg";
import { useNavigate } from "react-router";

function MenuPage() {

const navigate=useNavigate();



  return (
    <div>
      <img className=" w-screen h-screen absolute" src={menuBgImg} />
      <div className="pt-20 pr-36">
        <div className=" w-5/12 h-full relative float-right bg-white/60 ">
          <div className="">
            <h2 className="relative text-5xl font-serif font-medium text-end pt-12 pr-16	">
              Your Career Compass
            </h2>
            <div className="float-right pr-36 pt-16">
              <div>
                <button
                  className="bg-stone-400 hover:bg-stone-500   text-2xl text-black font-bold
             w-72 h-12 pl-3 rounded-lg border-slate-950 relative"
                  onClick={() => navigate("/TodoListMenuPage")}
                >
                  To Do List
                </button>
              </div>
              <br></br>
              <div className="pt-5">
                <button className=" bg-stone-400 hover:bg-stone-500 text-2xl text-black font-bold w-72 h-12 pl-3 rounded-lg border-slate-950 relative ">
                  Job Portal
                </button>
              </div>
              <br></br>
              <div className="pt-5 pb-16">
                <button className="   bg-stone-400 hover:bg-stone-500 text-2xl text-black font-bold w-72 h-12 pl-3 rounded-lg border-slate-950 relative">
                  Progress Tracker
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
