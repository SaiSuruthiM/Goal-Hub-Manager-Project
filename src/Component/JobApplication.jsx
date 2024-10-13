import React, { useState } from "react";

const JobApplication = () => {

 
  const initialFormData = {
    fullName: "",
    email: "",
    mobileNumber: "",
    gender: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert("Form submitted successfully!");
    resetForm(); // Reset the form after submission
  };

  const resetForm = () => {
    setFormData(initialFormData); // Reset form data to initial values
  };


  return (
    <div className="px-4">
      <div className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md border border-gray-200">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-green-600 text-center">
          Application Form
        </h2>

        <div className="mb-6">
          <label
            htmlFor="fullName"
            className="block text-green-600 font-semibold mb-2"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-green-600 font-semibold mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="mobileNumber"
            className="block text-green-600 font-semibold mb-2"
          >
            Mobile Number
          </label>
          <input
            type="text"
            id="mobileNumber"
            name="mobileNumber"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="Enter your mobile number"
            value={formData.mobileNumber}
            onChange={handleChange}
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="gender"
            className="block text-green-600 font-semibold mb-2"
          >
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select your gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <button
          className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-200"
          onClick={handleSubmit}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default JobApplication;
