import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import jpImg from "../image/jpImg.jpg";
import marketing from "../image/marketing.png";
import projectManagement from "../image/projectManagement.png";
import sales from "../image/sales.png";
import teaching from "../image/teaching.png";
import softwareEngineer from "../image/softwareEngineer.png";
import hr from "../image/hr.png";
import businessDevelopment from "../image/businessDevelopment.png";
import customerService from "../image/customerService.png";
import jp1 from "../image/jp1.jpg";
import jp2 from "../image/jp2.jpg";
import jp3 from "../image/jp3.jpg";
import jp4 from "../image/jp4.jpg";


const JobPortal = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  
  const marketingJobs = [
    {
      id: 1,
      title: "Marketing Manager",
      location: "New York",
      description: "Lead marketing strategies for new campaigns.",
    },
    {
      id: 2,
      title: "Digital Marketing Specialist",
      location: "Remote",
      description: "Focus on SEO, PPC, and content marketing.",
    },
    {
      id: 3,
      title: "Content Marketer",
      location: "Remote",
      description: "Create and manage content for marketing campaigns.",
    },
    {
      id: 4,
      title: "Social Media Marketing Manager",
      location: "Los Angeles",
      description: "Manage social media campaigns and strategies.",
    },
  ];

  const businessDevJobs = [
    {
      id: 1,
      title: "Business Development Manager",
      location: "New York",
      description:
        "Responsible for identifying business opportunities and building client relationships.",
    },
    {
      id: 2,
      title: "Sales and Business Development Executive",
      location: "Remote",
      description:
        "Work with sales and marketing teams to drive business growth and market expansion.",
    },
    {
      id: 3,
      title: "Partnership Manager",
      location: "San Francisco",
      description:
        "Manage strategic partnerships and alliances to expand business reach.",
    },
    {
      id: 4,
      title: "Corporate Development Analyst",
      location: "London",
      description:
        "Support business planning, strategic analysis, and market research.",
    },
  ];

  const customerServiceJobs = [
    {
      id: 1,
      title: "Customer Service Representative",
      location: "Remote",
      description:
        "Assist customers with inquiries and provide product information via phone or email.",
    },
    {
      id: 2,
      title: "Call Center Agent",
      location: "New York",
      description:
        "Handle inbound and outbound customer service calls in a fast-paced environment.",
    },
    {
      id: 3,
      title: "Customer Support Specialist",
      location: "San Francisco",
      description:
        "Provide technical support and troubleshoot customer issues via chat and phone.",
    },
    {
      id: 4,
      title: "Customer Success Manager",
      location: "Los Angeles",
      description:
        "Build strong relationships with customers to ensure their success with our products.",
    },
  ];

  const hrJobs = [
    {
      id: 1,
      title: "HR Manager",
      location: "New York",
      description:
        "Oversee recruitment, employee relations, and compliance with employment regulations.",
    },
    {
      id: 2,
      title: "HR Generalist",
      location: "Remote",
      description:
        "Support various HR functions such as recruitment, training, and employee benefits.",
    },
    {
      id: 3,
      title: "Talent Acquisition Specialist",
      location: "San Francisco",
      description:
        "Manage full-cycle recruitment processes to attract top talent.",
    },
    {
      id: 4,
      title: "HR Business Partner",
      location: "Chicago",
      description:
        "Collaborate with leadership to align HR strategies with business goals.",
    },
  ];

  const projectManagementJobs = [
    {
      id: 1,
      title: "Project Manager",
      location: "New York",
      description:
        "Lead and manage project teams to deliver on business objectives.",
    },
    {
      id: 2,
      title: "Agile Project Manager",
      location: "Remote",
      description:
        "Coordinate projects using agile methodologies and manage sprints.",
    },
    {
      id: 3,
      title: "Program Manager",
      location: "San Francisco",
      description:
        "Oversee multiple related projects and ensure alignment with business goals.",
    },
    {
      id: 4,
      title: "Technical Project Manager",
      location: "Chicago",
      description:
        "Manage technical teams to deliver IT and software projects on time and within budget.",
    },
  ];

  const salesAndCommunicationJobs = [
    {
      id: 1,
      title: "Sales Executive",
      location: "New York",
      description:
        "Drive sales and establish relationships with key clients to meet targets.",
    },
    {
      id: 2,
      title: "Communication Specialist",
      location: "Remote",
      description:
        "Craft and manage internal and external communications for the company.",
    },
    {
      id: 3,
      title: "Business Development Manager",
      location: "San Francisco",
      description:
        "Identify business opportunities and build relationships to drive growth.",
    },
    {
      id: 4,
      title: "Account Manager",
      location: "Chicago",
      description:
        "Manage client relationships and work with internal teams to meet client needs.",
    },
  ];

  const softwareEngineerJobs = [
    {
      id: 1,
      title: "Frontend Software Engineer",
      location: "New York",
      description:
        "Develop responsive web applications using React and modern JavaScript.",
    },
    {
      id: 2,
      title: "Backend Software Engineer",
      location: "Remote",
      description:
        "Design and implement server-side logic and databases using Node.js and MongoDB.",
    },
    {
      id: 3,
      title: "Full Stack Engineer",
      location: "San Francisco",
      description:
        "Work on both frontend and backend of web applications, ensuring scalability and performance.",
    },
    {
      id: 4,
      title: "DevOps Engineer",
      location: "Chicago",
      description:
        "Automate infrastructure, CI/CD pipelines, and manage cloud deployments on AWS.",
    },
  ];

  const teachingAndEducationJobs = [
    {
      id: 1,
      title: "High School Teacher",
      location: "New York",
      description:
        "Teach high school students and develop lesson plans to meet educational standards.",
    },
    {
      id: 2,
      title: "College Professor",
      location: "Remote",
      description:
        "Deliver lectures, develop course material, and conduct research in your field of expertise.",
    },
    {
      id: 3,
      title: "Education Coordinator",
      location: "San Francisco",
      description:
        "Organize educational programs and activities, and manage student records.",
    },
    {
      id: 4,
      title: "Special Education Teacher",
      location: "Chicago",
      description:
        "Provide specialized instruction to students with learning disabilities and other needs.",
    },
  ];

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

  const exploreMarketingJobs = () => {
    setJobs(marketingJobs);
  };
  const exploreBusinessDevJobs = () => {
    setJobs(businessDevJobs);
  };
  const exploreCustomerServiceJobs = () => {
    setJobs(customerServiceJobs);
  };
  const exploreHRJobs = () => {
    setJobs(hrJobs);
  };
  const exploreProjectManagementJobs = () => {
    setJobs(projectManagementJobs);
  };
  const exploreSalesAndCommunicationJobs = () => {
    setJobs(salesAndCommunicationJobs);
  };
  const exploreSoftwareEngineerJobs = () => {
    setJobs(softwareEngineerJobs);
  };
  const exploreTeachingAndEducationJobs = () => {
    setJobs(teachingAndEducationJobs);
  };

  return (
    <div>
      <div className="flex items-center mt-5">
        <h1 className="text-4xl font-bold text-green-600 w-1/2 pl-10">
          Job Portal
        </h1>
        <div className="flex items-center  w-1/2 justify-evenly font-medium  text-lg">
          <p className="hover:text-green-600">Home</p>
          <p className="hover:text-green-600">About</p>
          <select className="hover:text-green-600">
            <option>Jobs</option>
            <option>Job list</option>
            <option>Job Detail</option>
          </select>
          <select className="hover:text-green-600">
            <option>Pages</option>
            <option>Job Category</option>
            <option>Testimonial</option>
          </select>
          <p className="hover:text-green-600 ">Contact</p>
          <button
            className=" w-38 h-12 bg-green-600 flex items-center hover:text-white p-5"
            onClick={openModal}
          >
            Post A Job ->
          </button>
        </div>
      </div>

      <img
        className=" w-screen h-[70vh] object-cover absolute"
        src={jpImg}
        alt="Jop portal background image"
      />
      <div className="relative pl-60 pt-32 text-4xl font-bold">
        <h1>Find the perfect job</h1>
        <h1 className="py-2.5">That you deserved</h1>
      </div>
      <div className="relative flex pt-16 pl-60">
        <div className="pr-7">
          <button className=" w-36 h-12 text-white font-bold bg-green-600 ">
            Search A Job
          </button>
        </div>
        <div>
          <button className=" w-36 h-12 text-white font-bold bg-green-600">
            Find A Talent
          </button>
        </div>
      </div>
      <h1 className="text-4xl font-bold pt-60 text-center">
        Explore By Ctegory
      </h1>

      <div className="flex pt-20 w-11/12 justify-between pl-32 ">
        <div className="bg-slate-300/25 hover:bg-slate-200 w-56 h-48 p-7 pl-14 transition transform hover:-translate-y-2 hover:shadow-xl duration-300 ">
          <button
            onClick={exploreMarketingJobs}
            className=""
          >
            <img className="w-20 h-20  " src={marketing} alt="marketing icon" />

            <h4 className="text-xl font-medium   ">
              Marketing
            </h4>
          </button>
        </div>
        <div className="bg-slate-300/25 hover:bg-slate-200 w-56 h-48  transition transform hover:-translate-y-2 hover:shadow-xl duration-300  ">
          <button
            onClick={exploreBusinessDevJobs}
            className=""
          >
            <img
              className="w-20 h-20  "
              src={businessDevelopment}
              alt="businessDevelopment icon"
            />
            <h4 className="text-xl font-medium py-4">Business Development</h4>
          </button>
        </div>
        <div className="bg-slate-300/25 hover:bg-slate-200 w-56 h-48 p-7 pl-14 transition transform hover:-translate-y-2 hover:shadow-xl duration-300">
          <button onClick={exploreCustomerServiceJobs}>
            <img
              className="w-20 h-20  "
              src={customerService}
              alt="customerService icon"
            />
            <h4 className="text-xl font-medium py-4">Customer Service</h4>
          </button>
        </div>
        <div className="bg-slate-300/25 hover:bg-slate-200 w-56 h-48 p-7 pl-14 transition transform hover:-translate-y-2 hover:shadow-xl duration-300 ">
          <button onClick={exploreHRJobs}>
            <img className="w-20 h-20  " src={hr} alt="hr icon" />
            <h4 className="text-xl font-medium py-4">Human Resource</h4>
          </button>
        </div>
      </div>

      <div className="flex pt-20 w-11/12 justify-between pl-32 ">
        <div className="bg-slate-300/25 hover:bg-slate-200 w-56 h-48 p-7 pl-14 transition transform hover:-translate-y-2 hover:shadow-xl duration-300 ">
          <button onClick={exploreProjectManagementJobs}>
            <img
              className="w-20 h-20  "
              src={projectManagement}
              alt="projectManagement icon"
            />
            <h4 className="text-xl font-medium py-4">Project Management</h4>
          </button>
        </div>
        <div className="bg-slate-300/25 hover:bg-slate-200 w-56 h-48 p-7 pl-14 transition transform hover:-translate-y-2 hover:shadow-xl duration-300">
          <button onClick={exploreSalesAndCommunicationJobs}>
            <img className="w-20 h-20  " src={sales} alt="sales icon" />
            <h4 className="text-xl font-medium py-4">
              Sales and Communication
            </h4>
          </button>
        </div>
        <div className="bg-slate-300/25 hover:bg-slate-200  w-56 h-48 p-7 pl-14 transition transform hover:-translate-y-2 hover:shadow-xl duration-300 ">
          <button onClick={exploreSoftwareEngineerJobs}>
            <img
              className="w-20 h-20  "
              src={softwareEngineer}
              alt="softwareEngineer icon"
            />
            <h4 className="text-xl font-medium py-4">Software Engineer</h4>
          </button>
        </div>
        <div className="bg-slate-300/25 hover:bg-slate-200 w-56 h-48 p-7 pl-14 transition transform hover:-translate-y-2 hover:shadow-xl duration-300 ">
          <button onClick={exploreTeachingAndEducationJobs}>
            <img className="w-20 h-20  " src={teaching} alt="teaching icon" />
            <h4 className="text-xl font-medium py-4">Teaching and Education</h4>
          </button>
        </div>
      </div>
      <div className="pt-20">
        <div id="job-list">
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <div
                key={job.id}
                className="job-item p-6 mb-6 border border-green-600 rounded-lg bg-white shadow-lg transition transform 
              hover:-translate-y-2 hover:shadow-xl duration-300 cursor-pointer hover:bg-green-50"
              >
                <h3 className="text-xl font-bold text-green-700 transition duration-300 group-hover:text-green-800">
                  {job.title}
                </h3>
                <p className="text-sm font-semibold text-gray-700 mt-2">
                  <strong>Location:</strong> {job.location}
                </p>
                <p className="text-sm text-gray-600 mt-1">{job.description}</p>
                <div className="mt-4">
                  <button
                    className="text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-full transition duration-300"
                    onClick={() => navigate("/JobApplication")}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-green-600 font-medium">
              Select the category you are looking for !<br /> And explore your
              dream job !
            </p>
          )}
        </div>
      </div>
      <div className="flex justify-evenly  items-center">
        <div className="pt-20 pl-">
          <div className="flex">
            <img src={jp1} alt="jp1" className="w-52 h-52 " />
            <div className="pt-8">
              <img src={jp2} alt="jp2" className="w-44 h-44  " />
            </div>
          </div>
          <div className="flex">
            <div className="pl-8">
              <img src={jp3} alt="jp3" className="w-44 h-44" />
            </div>
            <img src={jp4} alt="jp4" className="w-52 h-52" />
          </div>
        </div>
        <div className="pt-20">
          <h1 className="text-4xl font-bold">We Help To Get The Best</h1>
          <h1 className="text-4xl font-bold py-2.5">Job And Find A Talent</h1>
          <p className="py-10">
            We help individuals find the best job opportunities by connecting
            <br />
            them with top employers in their field. Our platform simplifies
            <br />
            the hiring process, making it easier for companies to discover
            <br />
            and recruit exceptional talent.
          </p>
          <ul>
            <li>Find Your Next Dream Job with Us!</li>
            <li>Unlock Top Talent for Your Team Today!</li>
            <li>Connecting You to the Best Career Opportunities!</li>
          </ul>
        </div>
      </div>

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
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
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
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
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
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
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
      <div className="mt-16 flex flex-col ">
        <h2 className="text-4xl font-bold text-center">Job List</h2>
        <div className="pt-12">
          {jobList.length > 0 ? (
            <ul className="list-disc pl-5 space-y-4">
              {jobList.map((job, index) => (
                <li
                  key={index}
                  className="bg-green-50 p-4 rounded-lg shadow-md flex justify-between items-center 
                  transition transform hover:-translate-y-2 hover:shadow-xl  duration-300 cursor-pointer hover:bg-green-100"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-green-600">
                      {job.title}
                    </h3>
                    <p className="text-gray-700">{job.description}</p>
                    <p className="text-gray-500 text-sm">{job.location}</p>
                  </div>
                  <button
                    className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-200"
                    onClick={() => navigate("/JobApplication")}
                  >
                    Apply
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="pl-80">
              <p className=" border-2 border-green-600 p-8 rounded-lg bg-green-100 shadow-md w-full max-w-3xl text-lg font-semibold text-gray-600">
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
