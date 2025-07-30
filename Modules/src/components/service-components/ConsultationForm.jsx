import React from "react";
import ConsultForm from "./ConsultForm";

const ConsultationForm = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-gray-900">
          Talk to an Expert – Personalized Consultation
        </h1>
        <p className="text-xl mb-6 text-gray-600">
          Get direct advice from an agricultural specialist through WhatsApp
        </p>
      </div>
      <ConsultForm />
    </div>
  );
};

export default ConsultationForm;
