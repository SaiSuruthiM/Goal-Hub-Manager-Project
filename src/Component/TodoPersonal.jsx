import React from "react";
import girl from "../image/girl.png";
import plusIcon from "../image/plusIcon.png";
function TodoPersonal() {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute"
      >
        <path
          fill="#0099ff"
          fill-opacity="1"
          d="M0,192L40,208C80,224,160,256,240,234.7C320,213,400,139,480,138.7C560,139,640,213,720,229.3C800,245,880,203,960,176C1040,149,1120,139,1200,165.3C1280,192,1360,256,1400,288L1440,320L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>

      <div>
        <p className="relative text-xl font-semibold pl-32 pt-10 flex justify-center items-center ">
          8 Tasks
        </p>

        <div className="flex justify-center items-center space-x-4 ">
          <div className="pr-10">
            <img className="w-24 h-24 relative " src={girl} />
          </div>
          <p className="text-black font-semibold  relative text-4xl">
            Personal
          </p>
        </div>
      </div>
      <div className="pt-10">
        <div className="flex justify-center items-center space-x-4">
          <input className="relative w-5 h-5  " type="checkbox" />
          <div>
            <h1 className="relative text-xl  ">reading a chapter of a book</h1>
            <input className="relative" type="date" />
          </div>
        </div>

        <div className="flex justify-center items-center space-x-4 pt-8">
          <input className="relative w-5 h-5" type="checkbox" />
          <div>
            <h1 className="relative text-xl">reading a chapter of a book</h1>
            <input className="relative" type="date" />
          </div>
        </div>

        <div className="flex justify-center items-center space-x-4 pt-8 ">
          <input className="relative w-5 h-5" type="checkbox" />
          <div>
            <h1 className="relative text-xl">reading a chapter of a book</h1>
            <input className="relative" type="date" />
          </div>
        </div>
      </div>
      <div className=" mt-40 pl-96 ml-96 ">
        <img className="w-16 h-16 absolute" src={plusIcon} />
      </div>
    </div>
  );
}

export default TodoPersonal;
