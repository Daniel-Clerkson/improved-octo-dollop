import React from "react";
import warehouse from "../../assets/warehouse.jpeg";
import Footer from "../Footer";
import warehouseImg from "../../assets/warehouse-img.png";
import w1 from "../../assets/w1.png";
import w2 from "../../assets/w2.png";
import { FaLocationDot, FaStar, FaWarehouse } from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";

const warehouseCards = [
  {
    img: warehouseImg,
    title: "Climate-Controlled Storage",
    desc: "Keep your produce fresh with advanced temperature and humidity control.",
    features: [
      "24/7 monitoring",
      "Flexible rental plans",
      "Ideal for perishables",
      "Secure & insured",
    ],
  },
  {
    img: warehouse,
    title: "Bulk Grain Storage",
    desc: "Spacious silos and secure storage for grains and cereals.",
    features: [
      "Large capacity",
      "Easy loading/unloading",
      "Pest management",
      "Affordable rates",
    ],
  },
  {
    img: warehouseImg,
    title: "Logistics & Distribution",
    desc: "Integrated logistics for fast, reliable delivery to markets.",
    features: [
      "Fleet management",
      "Real-time tracking",
      "Doorstep delivery",
      "Custom scheduling",
    ],
  },
];

const WarehouseRental = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="w-full flex flex-col-reverse md:flex-row justify-between items-center gap-8 md:gap-12 px-4 sm:px-8 md:px-16 py-10 md:py-20 bg-white shadow-sm">
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Smart Warehousing for Efficient Agro Supply
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 text-gray-600">
            Secure storage and streamlined logistics to keep your agricultural
            products safe and market-ready.
          </p>
          <button className="btn bg-green-600 py-3 px-6 text-base rounded-md hover:bg-green-500 text-white font-semibold transition-all shadow">
            Book Now
          </button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
          <img
            src={warehouse}
            alt="Farm Installation"
            className="w-full max-w-xs sm:max-w-md md:max-w-lg rounded-xl object-cover shadow-lg"
          />
        </div>
      </section>
      <section className="warehouse-cards flex flex-col sm:flex-row items-center justify-between p-5">
        <div className="warehouse-card shadow-lg rounded-2xl bg-white border border-gray-300 my-2 sm:m-0">
          <div className="img">
            <img src={w1} alt="" />
          </div>
          <div className="info p-5">
            <div className="top flex items-center justify-between w-full mb-3">
              <p className="name text-xl font-semibold">Ethan Belvis</p>
              <FaStar className="text-yellow-500" />
            </div>
            <div className="text text-gray-600 text-sm p-1">
              <div className="flex items-center w-full my-2">
                <FaLocationDot className="mr-2" />
                <p>Porro rerum voluptat</p>
              </div>
              <div className="flex items-center w-full my-2">
                <FaWarehouse className="mr-2" />
                <p>900</p>
              </div>
              <div>
                <FaShieldAlt />
              </div>
            </div>
            <div className="bottom text-gray-400 text-sm flex items-center w-full justify-between">
              <p>Flexible plans available</p>
              <button className="btn bg-green-600 py-2 px-4 text-base rounded-md hover:bg-green-500 text-white font-semibold transition-all shadow">
                View Details{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="warehouse-card shadow-lg rounded-2xl bg-white border border-gray-300 my-2 sm:m-0">
          <div className="img">
            <img src={w2} alt="" />
          </div>
          <div className="info p-5">
            <div className="top flex items-center justify-between w-full mb-3">
              <p className="name text-xl font-semibold">Teagan Winters</p>
              <FaStar className="text-yellow-500" />
            </div>
            <div className="text text-gray-600 text-sm p-1">
              <div className="flex items-center w-full my-2">
                <FaLocationDot className="mr-2" />
                <p>Minus numquam qui ab </p>
              </div>
              <div className="flex items-center w-full my-2">
                <FaWarehouse className="mr-2" />
                <p>9020</p>
              </div>
              <div>
                <FaShieldAlt />
              </div>
            </div>
            <div className="bottom text-gray-400 text-sm flex items-center w-full justify-between">
              <p>Flexible plans available</p>
              <button className="btn bg-green-600 py-2 px-4 text-base rounded-md hover:bg-green-500 text-white font-semibold transition-all shadow">
                View Details{" "}
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default WarehouseRental;
