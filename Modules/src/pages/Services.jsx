import React from "react";
import { useState } from "react";
import TechnicalSupportForm from "../components/service-components/TechnicalSupportForm";
import ConsultationForm from "../components/service-components/ConsultationForm";
import TrainingForm from "../components/service-components/TrainingForm";
import SupportForm from "../components/service-components/SupportForm";

const Services = () => {
  const [activeTab, setActiveTab] = useState("technical");
  return (
    <div>
      {/* Mini Navbar */}
      <div className="flex justify-center mt-6 mb-8">
        <div className="inline-flex rounded-full bg-gray-100 shadow-md overflow-hidden">
          <button
            className={`px-6 py-2 text-sm font-semibold transition-colors duration-200 ${
              activeTab === "technical"
                ? "bg-green-600 text-white"
                : "text-gray-700 hover:bg-green-100"
            }`}
            onClick={() => setActiveTab("technical")}
          >
            Technical
          </button>
          <button
            className={`px-6 py-2 text-sm font-semibold transition-colors duration-200 ${
              activeTab === "consultation"
                ? "bg-green-600 text-white"
                : "text-gray-700 hover:bg-green-100"
            }`}
            onClick={() => setActiveTab("consultation")}
          >
            Consultation
          </button>
          <button
            className={`px-6 py-2 text-sm font-semibold transition-colors duration-200 ${
              activeTab === "training"
                ? "bg-green-600 text-white"
                : "text-gray-700 hover:bg-green-100"
            }`}
            onClick={() => setActiveTab("training")}
          >
            Training
          </button>
          <button
            className={`px-6 py-2 text-sm font-semibold transition-colors duration-200 ${
              activeTab === "support"
                ? "bg-green-600 text-white"
                : "text-gray-700 hover:bg-green-100"
            }`}
            onClick={() => setActiveTab("support")}
          >
            Support
          </button>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === "technical" && <TechnicalSupportForm />}
      {activeTab === "consultation" && <ConsultationForm />}
      {activeTab === "training" && <TrainingForm />}
      {activeTab === "support" && <SupportForm />}
    </div>
  );
};

export default Services;
