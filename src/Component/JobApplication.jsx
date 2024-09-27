import React, { useState } from "react";

const JobApplication = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    gender: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const { fullName, email, mobileNumber, gender } = formData;
    // Perform any action, like sending data to a server or displaying an alert
    if (!fullName || !email || !mobileNumber || !gender) {
      alert("Fill in all fields");
    } else {
      alert("Your application has been submitted successfully");
    }
  };

  return (
    <div>
      <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md border border-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-green-600">
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
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-200"
          onClick={handleSubmit}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default JobApplication;
