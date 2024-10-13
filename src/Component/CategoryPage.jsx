import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import marketing from "../image/marketing.png";
import projectManagement from "../image/projectManagement.png";
import sales from "../image/sales.png";
import teaching from "../image/teaching.png";
import softwareEngineer from "../image/softwareEngineer.png";
import hr from "../image/hr.png";
import businessDevelopment from "../image/businessDevelopment.png";
import customerService from "../image/customerService.png";

function CategoryPage() {
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
    <div className="px-4">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold pt-10 sm:pt-16 lg:pt-20 text-center">
        Explore By Category
      </h1>

      {/* First Row */}
      <div className="flex flex-wrap justify-center sm:justify-between lg:justify-evenly gap-4 pt-10 w-full lg:w-11/12 mx-auto">
        <div className="bg-slate-300/25 hover:bg-slate-200 w-44 h-44 sm:w-56 sm:h-48 p-7 transition transform hover:-translate-y-2 hover:shadow-xl duration-300 flex flex-col justify-center items-center">
          <button
            onClick={exploreMarketingJobs}
            className="flex flex-col items-center"
          >
            <img
              className="w-16 h-16 sm:w-20 sm:h-20 mb-2"
              src={marketing}
              alt="marketing icon"
            />
            <h4 className="text-lg sm:text-xl font-medium">Marketing</h4>
          </button>
        </div>

        <div className="bg-slate-300/25 hover:bg-slate-200 w-44 h-44 sm:w-56 sm:h-48 p-7 transition transform hover:-translate-y-2 hover:shadow-xl duration-300 flex flex-col justify-center items-center">
          <button
            onClick={exploreBusinessDevJobs}
            className="flex flex-col items-center"
          >
            <img
              className="w-16 h-16 sm:w-20 sm:h-20"
              src={businessDevelopment}
              alt="businessDevelopment icon"
            />
            <h4 className="text-lg sm:text-xl font-medium">
              Business Development
            </h4>
          </button>
        </div>

        <div className="bg-slate-300/25 hover:bg-slate-200 w-44 h-44 sm:w-56 sm:h-48 p-7 transition transform hover:-translate-y-2 hover:shadow-xl duration-300 flex flex-col justify-center items-center">
          <button
            onClick={exploreCustomerServiceJobs}
            className="flex flex-col items-center"
          >
            <img
              className="w-16 h-16 sm:w-20 sm:h-20"
              src={customerService}
              alt="customerService icon"
            />
            <h4 className="text-lg sm:text-xl font-medium py-4">
              Customer Service
            </h4>
          </button>
        </div>

        <div className="bg-slate-300/25 hover:bg-slate-200 w-44 h-44 sm:w-56 sm:h-48 p-7 transition transform hover:-translate-y-2 hover:shadow-xl duration-300 flex flex-col justify-center items-center">
          <button
            onClick={exploreHRJobs}
            className="flex flex-col items-center"
          >
            <img className="w-16 h-16 sm:w-20 sm:h-20" src={hr} alt="hr icon" />
            <h4 className="text-lg sm:text-xl font-medium">Human Resource</h4>
          </button>
        </div>
      </div>

      {/* Second Row */}
      <div className="flex flex-wrap justify-center sm:justify-between lg:justify-evenly gap-4 pt-10 w-full lg:w-11/12 mx-auto">
        <div className="bg-slate-300/25 hover:bg-slate-200 w-44 h-44 sm:w-56 sm:h-48 p-7 transition transform hover:-translate-y-2 hover:shadow-xl duration-300 flex flex-col justify-center items-center">
          <button
            onClick={exploreProjectManagementJobs}
            className="flex flex-col items-center"
          >
            <img
              className="w-16 h-16 sm:w-20 sm:h-20"
              src={projectManagement}
              alt="projectManagement icon"
            />
            <h4 className="text-lg sm:text-xl font-medium">
              Project Management
            </h4>
          </button>
        </div>

        <div className="bg-slate-300/25 hover:bg-slate-200 w-44 h-44 sm:w-56 sm:h-48 p-7 transition transform hover:-translate-y-2 hover:shadow-xl duration-300 flex flex-col justify-center items-center">
          <button
            onClick={exploreSalesAndCommunicationJobs}
            className="flex flex-col items-center"
          >
            <img
              className="w-16 h-16 sm:w-20 sm:h-20"
              src={sales}
              alt="sales icon"
            />
            <h4 className="text-lg sm:text-xl font-medium">
              Sales and Communication
            </h4>
          </button>
        </div>

        <div className="bg-slate-300/25 hover:bg-slate-200 w-44 h-44 sm:w-56 sm:h-48 p-7 transition transform hover:-translate-y-2 hover:shadow-xl duration-300 flex flex-col justify-center items-center">
          <button
            onClick={exploreSoftwareEngineerJobs}
            className="flex flex-col items-center"
          >
            <img
              className="w-16 h-16 sm:w-20 sm:h-20"
              src={softwareEngineer}
              alt="softwareEngineer icon"
            />
            <h4 className="text-lg sm:text-xl font-medium">
              Software Engineer
            </h4>
          </button>
        </div>

        <div className="bg-slate-300/25 hover:bg-slate-200 w-44 h-44 sm:w-56 sm:h-48 p-7 transition transform hover:-translate-y-2 hover:shadow-xl duration-300 flex flex-col justify-center items-center">
          <button
            onClick={exploreTeachingAndEducationJobs}
            className="flex flex-col items-center"
          >
            <img
              className="w-16 h-16 sm:w-20 sm:h-20"
              src={teaching}
              alt="teaching icon"
            />
            <h4 className="text-lg sm:text-xl font-medium">
              Teaching and Education
            </h4>
          </button>
        </div>
      </div>

      {/* Job List */}
      <div className="pt-20">
        <div id="job-list">
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <div
                key={job.id}
                className="job-item p-6 mb-6 border border-green-600 rounded-lg bg-white shadow-lg transition transform 
            hover:-translate-y-2 hover:shadow-xl duration-300 cursor-pointer hover:bg-green-50"
              >
                <h3 className="text-lg sm:text-xl font-bold text-green-700 transition duration-300 group-hover:text-green-800">
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
              Select the category you are looking for!
              <br /> And explore your dream job!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CategoryPage;
