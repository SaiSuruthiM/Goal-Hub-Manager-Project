import React, { useState } from "react";

import { Link } from "react-router-dom";
function ForgotPassword() {
  const [email, setEmail] = useState("");
 
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your password reset logic here, such as sending a request to the server
    alert(`Password reset successful!`);
     resetForm();
  };
  const resetForm = () => {
    setEmail(""); // Reset the email input field
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-sm sm:max-w-md p-6 sm:p-8 space-y-4 bg-white rounded-md shadow-md">
        <h2 className="text-xl sm:text-2xl font-semibold text-center text-gray-700">
          Forgot Password
        </h2>
        <p className="text-center text-gray-500">
          Enter your email address to reset your password
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition-colors duration-300"
          >
            Submit
          </button>
        </form>
        <div className="text-center py-5">
          <Link to="/UserLoginPage" className="text-blue-500 hover:underline">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
