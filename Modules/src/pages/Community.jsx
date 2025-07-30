import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const benefits = [
  "Get access to funding & support",
  "Connect with buyers & suppliers",
  "Receive real-time agricultural insights",
  "Improve productivity with tailored recommendations",
];

const Community = () => {
  return (
    <section className=" py-16 px-4 md:px-10 lg:px-20 font-sans">
      <div className="max-w-4xl mx-auto text-center flex flex-col justify-center items-center mb-32">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Empower Agriculture with Your Data</h1>
        <p className="text-xl text-gray-700 mb-6">
          Our farm data matters! Help us create better opportunities and solutions for farmers like you. 
          Join now and be part of the change.
        </p>
        <button className="bg-green-700 text-white py-2 px-6 rounded-lg hover:bg-green-800 transition-all flex justify-between items-center">
          Get Started <FaArrowRight className="ml-2" />
        </button>
      </div>

      <div className="my-20 mx-auto flex justify-between items-center">
        <h2 className="text-3xl font-semibold w-1/2 text-gray-800 mb-4 text-center">Why Collect Your Data?</h2>
        <ul className=" w-1/2 text-left text-gray-700">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-green-600 text-2xl font-bold">✓</span>
              <p className="text-xl mb-3">{benefit}</p>
            </li>
          ))}
        </ul>
      </div>
      <Newsletter />
      <Footer />
    </section>
  );
};

export default Community;
