import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

const Errorpage = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4"
      style={{
        background:
          "radial-gradient(circle at 60% 40%, #e0f7fa 0%, #f0fff4 60%, #e3e9fc 100%)",
      }}
    >
      <div className="bg-white bg-opacity-90 rounded-2xl shadow-lg p-10 flex flex-col items-center max-w-md w-full">
        <FaExclamationTriangle className="text-yellow-500 text-6xl mb-4" />
        <h1 className="text-4xl font-bold text-green-900 mb-2">Oops!</h1>
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Page Not Found</h2>
        <p className="text-gray-700 mb-6 text-center">
          The page you are looking for does not exist or has been moved.<br />
          Please check the URL or return to the homepage.
        </p>
        <a
          href="/"
          className="px-6 py-3 bg-green-700 text-white rounded-lg font-semibold hover:bg-green-800 transition"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

export default Errorpage;