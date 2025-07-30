import React from "react";
import leaf1 from '../assets/leaves.png'
import leaf2 from '../assets/leaves2.png'
import { FaPlay } from "react-icons/fa6";
import VIdeo from "./VIdeo";

const Hero = () => {
  return (
    <section className="w-full h-screen py-16 px-4 md:px-28 flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl md:text-6xl font-bold mb-4 inline-block text-center">
        Empowering <span className="text-green-700">Farmers</span> Connecting <span className="text-green-700">Buyers, </span>Transforming <div className="flex items-center justify-center text-green-700"><img src={leaf1} alt="" />Agriculture <img src={leaf2} alt="" /></div>
      </h1>
      <p className="text-base md:text-lg mb-8 max-w-2xl mt-5 font-semibold text-gray-500">
        Simplify farming and trade with our all-in-one platform. Connect, learn, and grow with tools designed to empower farmers and buyers alike.
      </p>
    </section>
  );
};

export default Hero