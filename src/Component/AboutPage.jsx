import React from 'react'
import jp1 from "../image/jp1.jpg";
import jp2 from "../image/jp2.jpg";
import jp3 from "../image/jp3.jpg";
import jp4 from "../image/jp4.jpg";

 
function Aboutpage() {
  return (
    <div className=" pb-16">
      <div className="flex flex-col lg:flex-row justify-evenly items-center ">
        <div className="pt-48">
          <div className="flex flex-col sm:flex-row">
            <img src={jp1} alt="jp1" className="w-40 h-40 sm:w-52 sm:h-52" />
            <div className="pt-8 sm:pt-8 sm:pl-4">
              <img src={jp2} alt="jp2" className="w-36 h-36 sm:w-44 sm:h-44" />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row mt-8 sm:mt-4">
            <div className="sm:pl-8">
              <img src={jp3} alt="jp3" className="w-36 h-36 sm:w-44 sm:h-44" />
            </div>
            <div className="pt-8 sm:pt-0 sm:pl-4">
              <img src={jp4} alt="jp4" className="w-40 h-40 sm:w-52 sm:h-52" />
            </div>
          </div>
        </div>
        <div className="pt-20 text-center lg:text-left">
          <h1 className="text-2xl lg:text-4xl font-bold">
            We Help To Get The Best
          </h1>
          <h1 className="text-2xl lg:text-4xl font-bold py-2.5">
            Job And Find A Talent
          </h1>
          <p className="py-6 lg:py-10">
            We help individuals find the best job opportunities by connecting
            <br className="hidden lg:block" />
            them with top employers in their field. Our platform simplifies
            <br className="hidden lg:block" />
            the hiring process, making it easier for companies to discover
            <br className="hidden lg:block" />
            and recruit exceptional talent.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Find Your Next Dream Job with Us!</li>
            <li>Unlock Top Talent for Your Team Today!</li>
            <li>Connecting You to the Best Career Opportunities!</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Aboutpage