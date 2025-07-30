import React from 'react'
import person1 from "../assets/1.jpg"
import person2 from "../assets/2.jpg"
import person3 from "../assets/3.jpg"
import person4 from "../assets/4.jpg"
import person5 from "../assets/5.jpg"
import person6 from "../assets/6.jpg"

const testimonials = [
  {
    img: person1,
    name: "Amina Yusuf",
    review: "This platform has transformed my farming business. The resources and support are unmatched!",
  },
  {
    img: person2,
    name: "John Okoro",
    review: "I found new buyers and partners easily. The community is amazing and very helpful.",
  },
  {
    img: person3,
    name: "Grace Nwosu",
    review: "The warehouse services are reliable and efficient. Highly recommended for all farmers.",
  },
  {
    img: person4,
    name: "Samuel Ade",
    review: "I learned so much from the resources section. My yield has improved significantly.",
  },
  {
    img: person5,
    name: "Fatima Bello",
    review: "Connecting with other farmers and buyers has never been easier. Thank you!",
  },
  {
    img: person6,
    name: "Chinedu Obi",
    review: "The platform is user-friendly and the support team is always available.",
  },
];

const cardGradients = [
  "from-green-200 via-green-100 to-blue-100",
  "from-blue-100 via-white to-green-100",
  "from-green-100 via-blue-50 to-blue-200",
  "from-blue-200 via-green-100 to-green-200",
  "from-green-100 via-blue-100 to-green-200",
  "from-blue-100 via-green-50 to-green-100",
];

const Testimonial = () => {
  return (
    <section
      className="w-full py-16 min-h-screen flex flex-col items-center justify-center"
      style={{
        background:
          "radial-gradient(circle at 60% 40%, #e0f7fa 0%, #f0fff4 60%, #e3e9fc 100%)",
      }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-green-900">
        What Our Users Say
      </h2>
      <div className="w-full overflow-x-hidden">
        <div className="flex gap-6 md:gap-8 animate-testimonial-scroll whitespace-nowrap px-2 md:px-0">
          {[...testimonials, ...testimonials].map((t, idx) => (
            <div
              key={idx}
              className={`inline-block bg-gradient-to-br ${cardGradients[idx % cardGradients.length]} rounded-2xl shadow-lg px-5 py-8 min-w-[260px] max-w-xs mx-2 flex flex-col items-center transition-all duration-300`}
              style={{
                wordBreak: "break-word",
                whiteSpace: "normal",
              }}
            >
              <img
                src={t.img}
                alt={t.name}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover mb-4 border-4 border-green-100"
              />
              <div className="flex flex-col items-center text-center w-full">
                <p className="text-gray-700 text-sm md:text-base mb-4 italic break-words max-w-[200px] md:max-w-[240px] w-full">
                  "{t.review}"
                </p>
                <span className="font-semibold text-green-800 text-sm md:text-base">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>
        {`
          @keyframes testimonial-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-testimonial-scroll {
            animation: testimonial-scroll 40s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Testimonial