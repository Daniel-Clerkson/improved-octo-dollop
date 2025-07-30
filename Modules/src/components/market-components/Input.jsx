import React from "react";
import market from "../../assets/market-img1.jpg";
import Popular from "./Popular";
import Latest from "./Latest";
import Footer from "../Footer";

const Input = () => {
  return (
    <div className="min-h-screen px-2 py-6 sm:px-6 md:px-14">
      <div className="hero w-full flex flex-col-reverse md:flex-row justify-between items-center gap-8 md:gap-0">
        <div className="info w-full md:w-1/2">
          <p className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-5">
            Boost Your Farm Productivity with Quality Agro Inputs
          </p>
          <p className="small text-base sm:text-lg mb-5 sm:mb-7">
            Find the best fertilizers, pesticides, seed treatments, and soil
            enhancers for healthier crops.
          </p>
          <button className="btn bg-green-600 py-3 px-5 text-sm rounded-md hover:bg-green-500 transition-all">
            Shop now
          </button>
        </div>
        <div className="img w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img
            src={market}
            alt=""
            className="w-full max-w-xs sm:max-w-md md:max-w-lg rounded-lg object-cover"
          />
        </div>
      </div>
      <Popular />
      <Latest />
      <Footer />
    </div>
  );
};

export default Input;
