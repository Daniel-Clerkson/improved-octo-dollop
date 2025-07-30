import React, { useState } from "react";
import img1 from "../assets/calling.png";
import img2 from "../assets/searching.png";
import img3 from "../assets/meeting.png";

const cards = [
  {
    img: img1,
    title: "Empower Farmers",
    textColor: "text-green-900",
    desc: "We provide resources and support to help farmers grow their businesses and improve their livelihoods.",
    bg: "from-green-100 to-blue-100",
  },
  {
    img: img2,
    title: "Connect Communities",
    textColor: "text-blue-900",
    desc: "Our platform bridges the gap between buyers and sellers, fostering a thriving agricultural community.",
    bg: "from-blue-100 to-green-100",
  },
  {
    img: img3,
    title: "Connect Communities",
    textColor: "text-blue-900",
    desc: "Our platform bridges the gap between buyers and sellers, fostering a thriving agricultural community.",
    bg: "from-blue-100 to-green-100",
  },
];

const Info = () => {
  return (
    <section className="w-full py-12 px-4 md:px-10 bg-white">
      <div className="header text-3xl md:text-5xl font-semibold mb-10">
        <p>
          Connecting <span className="text-green-600">Farmers</span>,{" "}
          <span>Buyers</span>, and <span>Partners</span> for a Sustainable
          Future
        </p>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-10">
        {cards.map((card, idx) => {
          // Alternate image position: even idx left, odd idx right
          const isImageLeft = idx ;
          return (
            <div
              key={card.title}
              className={`relative group cursor-pointer rounded-2xl shadow-md overflow-hidden transition-all duration-300 w-full md:w-[70%] flex flex-col md:flex-row ${
                isImageLeft ? "" : "md:flex-row-reverse"
              }`}
              onMouseEnter={() => handleHover(idx, true)}
              onMouseLeave={() => handleHover(idx, false)}
              style={{
                minHeight: "300px",
                background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
              }}
            >
              <div className="relative w-full md:w-1/2 h-56 md:h-auto">
                <img
                  src={card.img}
                  alt={card.title}
                  className="absolut w-full h-full object-cover"
                  style={{ zIndex: 1 }}
                />
                <div
                  className={`absolut bg-gradient-to-br ${card.bg} opacity-60`}
                  style={{ zIndex: 2 }}
                ></div>
              </div>
              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 w-full md:w-1/2">
                <h3
                  className={`text-2xl font-bold mb-2 transition-all duration-300
                    card.textColor
                  ] ? "" : "opacity-90"}`}
                >
                  {card.title}
                </h3>
                <p
                  className={"text-gray-800 text-center text-lg font-medium transition-all duration-300 opacity-100"
                  }
                />
                  {card.desc}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Info;