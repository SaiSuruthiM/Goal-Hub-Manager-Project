import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AboutPage from "./AboutPage";
import CategoryPage from "./CategoryPage";
import jpImg from "../image/jpImg.jpg";


const JobPortal = () => {
  const navigate = useNavigate();
  
  
 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [jobList, setJobList] = useState([]);

  // Function to handle job submission
  const submitJob = (e) => {
    e.preventDefault();
    if (jobTitle && jobDescription && jobLocation) {
      const newJob = {
        title: jobTitle,
        description: jobDescription,
        location: jobLocation,
      };
      setJobList([...jobList, newJob]);
      // Close the modal and reset the form
      setIsModalOpen(false);
      setJobTitle("");
      setJobDescription("");
      setJobLocation("");
    } else {
      alert("Please fill in all fields.");
    }
  };

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

 

  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center mt-5 px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-green-600 lg:w-1/2 lg:pl-10 text-center lg:text-left">
          Job Portal
        </h1>
        <div className="flex flex-col lg:flex-row items-center lg:w-1/2 lg:justify-evenly font-medium text-lg mt-4 lg:mt-0 space-y-4 lg:space-y-0">
          <p className="hover:text-green-600 cursor-pointer">Home</p>
          <p
            className="hover:text-green-600 cursor-pointer"
            onClick={() => navigate("/AboutPage")}
          >
            About
          </p>
          <p
            className="hover:text-green-600 cursor-pointer"
            onClick={() => navigate("/CategoryPage")}
          >
            Category
          </p>
          <button
            className="w-full lg:w-auto h-12 bg-green-600 flex items-center justify-center hover:text-white p-5 mt-4 lg:mt-0 transition duration-200 rounded-md"
            onClick={openModal}
          >
            Post A Job -->
          </button>
        </div>
      </div>
      <div className="relative">
        <img
          className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] object-cover"
          src={jpImg}
          alt="Job portal background"
        />
        <div className="absolute top-1/3 left-1/4  transform -translate-x-1/4 sm:-translate-x-1/2 text-center text-black">
          <h1 className="text-2xl sm:text-4xl font-bold">
            Find the perfect job
          </h1>
          <h1 className="text-2xl sm:text-4xl font-bold py-2.5">
            That you deserve
          </h1>
        </div>
        <div className="absolute top-2/3 left-1/4  transform -translate-x-1/4 sm:-translate-x-1/2">
          <button className="w-72 h-12 text-white font-bold bg-green-600 hover:bg-green-700 transition duration-200 rounded-md">
            Search A Job And Find A Talent
          </button>
        </div>
      </div>

      <AboutPage />
      <CategoryPage />

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-md mx-auto p-6 relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              ✖
            </button>
            <h2 className="text-xl font-bold mb-4">Post A Job</h2>
            <form onSubmit={submitJob} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Job Title
                </label>
                <input
                  type="text"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 p-2"
                  placeholder="Enter job title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Job Description
                </label>
                <textarea
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 p-2"
                  placeholder="Enter job description"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Job Location
                </label>
                <input
                  type="text"
                  value={jobLocation}
                  onChange={(e) => setJobLocation(e.target.value)}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 p-2"
                  placeholder="Enter job location"
                />
              </div>
              <button
                type="submit"
                className="w-full h-12 bg-green-600 text-white hover:bg-green-700 rounded-md p-3"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Job List */}
      <div className="mt-16 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">Job List</h2>
        <div className="pt-12">
          {jobList.length > 0 ? (
            <ul className="space-y-4">
              {jobList.map((job, index) => (
                <li
                  key={index}
                  className="bg-green-50 p-4 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-start md:items-center transition transform hover:-translate-y-2 hover:shadow-xl duration-300 cursor-pointer hover:bg-green-100"
                >
                  <div className="w-full md:w-3/4">
                    <h3 className="text-lg font-semibold text-green-600">
                      {job.title}
                    </h3>
                    <p className="text-gray-700">{job.description}</p>
                    <p className="text-gray-500 text-sm">{job.location}</p>
                  </div>
                  <button
                    className="mt-4 md:mt-0 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-200"
                    onClick={() => navigate("/JobApplication")}
                  >
                    Apply
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex justify-center">
              <p className="border-2 border-green-600 p-8 rounded-lg bg-green-100 shadow-md w-full max-w-3xl text-lg font-semibold text-gray-600">
                No jobs posted yet.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobPortal;
