import React from "react";

// Example partner logos (replace with your own)
import partner1 from "../assets/brand1.png";
import partner2 from "../assets/brand2.png";
import partner3 from "../assets/brand3.png";

const partners = [
  { img: partner1, name: "Partner 1" },
  { img: partner2, name: "Partner 2" },
  { img: partner3, name: "Partner 3" },
];

const Trusted = () => {
  return (
    <section className="w-full py-10 bg-white">
      <h3 className="text-center text-xl font-semibold text-gray-700 mb-6">
        Trusted by Leading Partners
      </h3>
      <div className="overflow-x-auto">
        <div className="flex gap-8 md:gap-10 animate-scroll-infinite whitespace-nowrap min-w-[600px] md:min-w-0">
          {[...partners, ...partners].map((partner, idx) => (
            <div key={idx} className="inline-block">
              <img
                src={partner.img}
                alt={partner.name}
                className="h-10 md:h-14 w-auto object-contain grayscale hover:grayscale-0 transition mx-2 md:mx-4"
              />
            </div>
          ))}
        </div>
      </div>
      <style>
        {`
          @keyframes scroll-infinite {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll-infinite {
            animation: scroll-infinite 30s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Trusted;