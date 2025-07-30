import React from "react";
import market from "../assets/market.png";
import vector from "../assets/vector.png";
import vector2 from "../assets/arrow1.png";
import farm from "../assets/farm.png";
import book from "../assets/books.png";
import receipt from "../assets/transactions.png";
import { FaArrowRight } from "react-icons/fa6";

const features = [
  {
    title: "Marketplace",
    desc: "Buy and sell with ease—farming inputs, produce, and machinery all in one place.",
    img1: market,
    img2: vector,
    bg: "from-blue-900 via-blue-700 to-green-600",
    text: "text-white",
    iconBg: "bg-white text-blue-900",
  },
  {
    title: "Warehouse Services",
    desc: "Smart, hassle-free warehousing solutions tailored for your agricultural needs.",
    img1: vector2,
    img2: farm,
    bg: "from-orange-200 via-yellow-100 to-green-100",
    text: "text-gray-900",
    iconBg: "bg-blue-900 text-white",
  },
  {
    title: "Resources",
    desc: "Learn, share, succeed—access expert articles, videos, and training programs to improve your farming journey.",
    img1: book,
    img2: vector2,
    bg: "from-green-100 via-green-200 to-green-300",
    text: "text-green-900",
    iconBg: "bg-green-700 text-white",
  },
  {
    title: "Data Collection",
    desc: "Simple, secure and helpful input—share your farming data to unlock better resources and opportunities.",
    img1: vector,
    img2: receipt,
    bg: "from-green-700 via-green-600 to-blue-900",
    text: "text-white",
    iconBg: "bg-white text-green-700",
  },
];

const Features = () => {
  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-white via-green-50 to-blue-50 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-4 tracking-tight">
            Our Features
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Explore our innovative solutions designed to transform your
            agricultural experience.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`relative flex flex-col justify-between rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br ${f.bg} ${f.text} p-8 min-h-[340px] overflow-hidden`}
            >
              {/* Decorative blurred circle */}
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white/10 blur-2xl z-0"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold">{f.title}</h3>
                  <span
                    className={`rounded-full p-2 flex items-center justify-center shadow-md ${f.iconBg}`}
                  >
                    <FaArrowRight />
                  </span>
                </div>
                <p className="mb-8 text-base leading-relaxed opacity-90">
                  {f.desc}
                </p>
              </div>
              <div className="relative z-10 flex items-end justify-between gap-4 mt-auto">
                <img
                  src={f.img1}
                  alt={f.title}
                  className="w-1/4 max-w-[70px] object-contain drop-shadow-xl"
                />
                <img
                  src={f.img2}
                  alt={f.title + " vector"}
                  className="w-1/4 max-w-[70px] object-contain drop-shadow-xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;