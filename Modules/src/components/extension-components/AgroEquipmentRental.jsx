import React from "react";
import equipment from "../../assets/equipment.jpeg";
import ex1 from "../../assets/ex1.jpeg";
import ex2 from "../../assets/ex2.jpg";
import ex3 from "../../assets/ex3.jpeg";
import { FaCheckCircle } from "react-icons/fa";
import Footer from "../Footer";

const Installation = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Section */}
      <section className="w-full flex flex-col-reverse md:flex-row justify-between items-center gap-8 md:gap-12 px-4 sm:px-8 md:px-16 py-10 md:py-20 bg-white shadow-sm">
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Rent High-Quality Agro Equipment with Ease{" "}
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 text-gray-600">
            Get access to modern farming equipment for efficient farm operations without the high cost of ownership.
          </p>
          <button className="btn bg-green-600 py-3 px-6 text-base rounded-md hover:bg-green-500 text-white font-semibold transition-all shadow">
            Request Equipment
          </button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
          <img
            src={equipment}
            alt="Farm Installation"
            className="w-full max-w-xs sm:max-w-md md:max-w-lg rounded-xl object-cover shadow-lg"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="services flex flex-col items-center justify-center w-full py-12 md:py-20 bg-green-50">
        <div className="mb-10 w-full max-w-2xl px-4">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-2 text-center text-gray-900">
            Our Installation Services
          </h2>
          <p className="text-base sm:text-lg text-gray-600 text-center">
            Choose the right solution for your farming needs
          </p>
        </div>
        <div className="cards w-full flex flex-col md:flex-row items-center justify-center gap-8 px-4">
          {/* Card 1 */}
          <div className="card border border-gray-200 hover:border-green-400 rounded-xl bg-white w-full max-w-xs flex flex-col items-center p-6 shadow-md transition-all duration-200">
            <div className="img w-full flex justify-center mb-4">
              <img
                src={ex1}
                alt="Drip Irrigation"
                className="h-24 w-24 object-cover rounded-lg shadow"
              />
            </div>
            <div className="info w-full">
              <h3 className="text-green-600 text-lg sm:text-xl font-semibold mb-2 text-center">
                Drip Irrigation Installation
              </h3>
              <p className="text-gray-600 text-base mb-3 text-center">
                Efficient water management to optimize crop growth.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-base">
                  <FaCheckCircle className="mr-2 text-green-500" />
                  <span>Reduce water usage by up to 50%</span>
                </li>
                <li className="flex items-center text-base">
                  <FaCheckCircle className="mr-2 text-green-500" />
                  <span>Increase crop yield and quality</span>
                </li>
                <li className="flex items-center text-base">
                  <FaCheckCircle className="mr-2 text-green-500" />
                  <span>Easy maintenance and setup</span>
                </li>
                <li className="flex items-center text-base">
                  <FaCheckCircle className="mr-2 text-green-500" />
                  <span>Suitable for all farm sizes</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Card 2 */}
          <div className="card border border-gray-200 hover:border-green-400 rounded-xl bg-white w-full max-w-xs flex flex-col items-center p-6 shadow-md transition-all duration-200">
            <div className="img w-full flex justify-center mb-4">
              <img
                src={ex2}
                alt="Greenhouse Structure"
                className="h-24 w-24 object-cover rounded-lg shadow"
              />
            </div>
            <div className="info w-full">
              <h3 className="text-green-600 text-lg sm:text-xl font-semibold mb-2 text-center">
                Greenhouse Structure
              </h3>
              <p className="text-gray-600 text-base mb-3 text-center">
                Protect your crops with modern greenhouse solutions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-base">
                  <FaCheckCircle className="mr-2 text-green-500" />
                  <span>Extend growing seasons year-round</span>
                </li>
                <li className="flex items-center text-base">
                  <FaCheckCircle className="mr-2 text-green-500" />
                  <span>Protect crops from extreme weather</span>
                </li>
                <li className="flex items-center text-base">
                  <FaCheckCircle className="mr-2 text-green-500" />
                  <span>Control pests and diseases naturally</span>
                </li>
                <li className="flex items-center text-base">
                  <FaCheckCircle className="mr-2 text-green-500" />
                  <span>Increase yield and crop quality</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Card 3 */}
          <div className="card border border-gray-200 hover:border-green-400 rounded-xl bg-white w-full max-w-xs flex flex-col items-center p-6 shadow-md transition-all duration-200">
            <div className="img w-full flex justify-center mb-4">
              <img
                src={ex3}
                alt="Hydroponic System"
                className="h-24 w-24 object-cover rounded-lg shadow"
              />
            </div>
            <div className="info w-full">
              <h3 className="text-green-600 text-lg sm:text-xl font-semibold mb-2 text-center">
                Hydroponic System Setup
              </h3>
              <p className="text-gray-600 text-base mb-3 text-center">
                Soilless farming for higher yield and faster growth.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-base">
                  <FaCheckCircle className="mr-2 text-green-500" />
                  <span>Grow crops with 90% less water</span>
                </li>
                <li className="flex items-center text-base">
                  <FaCheckCircle className="mr-2 text-green-500" />
                  <span>Produce higher yields in less space</span>
                </li>
                <li className="flex items-center text-base">
                  <FaCheckCircle className="mr-2 text-green-500" />
                  <span>Eliminate soil-borne diseases</span>
                </li>
                <li className="flex items-center text-base">
                  <FaCheckCircle className="mr-2 text-green-500" />
                  <span>Reduce growing time by up to 30%</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How Section */}
      <section className="how w-full bg-white py-12 md:py-20 px-0 sm:px-0 flex flex-col items-center justify-center rounded-none">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center text-gray-900">
          How It Works
        </h2>
        <p className="text-base sm:text-lg text-gray-600 text-center mb-10 max-w-2xl">
          Our installation process is simple and efficient
        </p>
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 w-full px-4">
          {[
            {
              title: "Choose your setup",
              desc: "Drip irrigation, greenhouse, or hydroponic system.",
            },
            {
              title: "Tell us your needs",
              desc: "Share your location, farm size, and requirements.",
            },
            {
              title: "Get a quote",
              desc: "We assess and send you a tailored quote.",
            },
            {
              title: "We install & guide",
              desc: "Our team installs and provides maintenance tips.",
            },
          ].map((step, idx) => (
            <div
              key={idx}
              className="flex-1 rounded-xl p-6 flex flex-col items-center justify-center text-center bg-transparent"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-white text-xl font-bold mb-3 shadow">
                {idx + 1}
              </div>
              <div className="text-center font-semibold mb-1 text-lg">
                {step.title}
              </div>
              <div className="text-center text-sm text-gray-500">
                {step.desc}
              </div>
            </div>
          ))}
        </div>
        <button className="btn bg-green-600 py-3 px-6 mt-10 text-base rounded-md hover:bg-green-500 text-white font-semibold transition-all shadow">
          Request Installation
        </button>
      </section>
      <Footer />
    </div>
  );
};

export default Installation;
