import React from "react";
import FarmerSupportForm from "./FarmerSupportForm";

const SupportForm = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-gray-900">
          Need Support? Apply for Farm Inputs Assistance!
        </h1>
        <p className=" text-xl mb-6 text-gray-600">
          We help farmers access fertilizers, seeds, and essential tools.
        </p>
      </div>
      <FarmerSupportForm />
    </div>
  );
};

export default SupportForm;
