import React from "react";
import children from "../../src/assets/children.jpeg";
import i1 from "../../src/assets/i1.jpeg";
import i2 from "../../src/assets/i2.jpg";
import i3 from "../../src/assets/i3.jpg";
import { FaCalendarAlt, FaGift } from "react-icons/fa";
import Footer from "../components/Footer";

const NimsFoodBank = () => {
  const impactData = [
    {
      value: "10,000+",
      label: "Meals Provided Monthly",
    },
    {
      value: "25+",
      label: "Partner Communities",
    },
    {
      value: "50+",
      label: "Corporate Sponsors",
    },
    {
      value: "1,200+",
      label: "Volunteer Hours Monthly",
    },
  ];
  const programs = [
    {
      image: i1,
      title: "Urban Farming Initiative",
      description:
        "Teaching urban communities sustainable farming techniques to grow their own food in limited spaces.",
    },
    {
      image: i2,
      title: "Direct Food Distribution",
      description:
        "Regular distribution of fresh produce and non-perishable items to families in need across Nigeria.",
    },
    {
      image: i3,
      title: "Farmer Support Program",
      description:
        "Supporting small-scale farmers with resources and training to improve yields and donate surplus produce.",
    },
  ];
  const involvementOptions = [
    {
      title: "Make a Donation",
      description:
        "Support our programs with monetary or food donations that directly benefit communities in need.",
      button: "Donate Now",
      icon: <FaGift className="w-12 h-12 text-green-600 mb-4 mx-auto" />,
    },
    {
      title: "Volunteer With Us",
      description:
        "Join our volunteer team to help with food sorting, distribution, farming, and community outreach.",
      button: "Join as Volunteer",
      icon: (
        <svg
          className="w-12 h-12 text-green-600 mb-4 mx-auto"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <path d="M12 2a7 7 0 100 14 7 7 0 000-14z" />
          <path d="M2 22c2-4 6-6 10-6s8 2 10 6" />
        </svg>
      ),
    },
    {
      title: "Corporate Partnership",
      description:
        "Partner with us as a company to support our initiatives through sponsorship and employee engagement.",
      button: "Become a Partner",
      icon: <FaCalendarAlt className="w-12 h-12 text-green-600 mb-4 mx-auto" />,
    },
  ];

  const Card = ({ image, date, title, description }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:translate-y-10 transition-all max-w-sm mx-auto">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <p className="text-sm text-gray-500 mb-1">{date}</p>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          <button className="w-full p-2 rounded-lg bg-green-600 text-white">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
  return (
    <>
      <section className="font-sans bg-green-700 py-16 px-4 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-white mb-4">
            NIMS Food Bank Initiative
          </h1>
          <p className=" text-white text-xl my-10">
            Join us in addressing food insecurity through sustainable
            agricultural solutions and food donation programs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <button className="bg-white text-green-700 px-6 py-2 rounded-lg text-lg font-semibold hover:bg-green-50 transition-all">
              Donate Now
            </button>
            <button className="border-2 border-white text-white text-lg px-6 py-2 font-semibold rounded-full hover:bg-green-50 hover:text-green-700 transition-all">
              Our Programs
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2">
          <img
            src={children}
            alt="Community gathering with food"
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div>
      </section>
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-20 font-sans">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {impactData.map((item, index) => (
              <div
                key={index}
                className="bg-green-50 rounded-lg py-8 px-6 shadow hover:shadow-md transition-all"
              >
                <p className="text-4xl font-extrabold text-green-700">
                  {item.value}
                </p>
                <p className="mt-3 text-lg font-medium text-gray-800">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-16 px-4 md:px-10 lg:px-20 font-sans">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-700">Our Programs</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-16">
          {programs.map((program, index) => (
            <Card key={index} {...program} />
          ))}
        </div>
        <div className="card"></div>
      </section>
      <section className="bg-white py-16 px-4 md:px-10 lg:px-20 font-sans">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            How to Get Involved
          </h1>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            Join the fight against food insecurity by supporting one of our core
            initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {involvementOptions.map((option, index) => (
            <div
              key={index}
              className="border-1 border-green-50 rounded-lg p-6 font-semibold text-center shadow-md hover:shadow-lg transform hover:scale-y-105 transition-all"
            >
              {option.icon}
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                {option.title}
              </h2>
              <p className="text-gray-700 mb-6">{option.description}</p>
              <button className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-all">
                {option.button}
              </button>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-blue-50 py-16 px-4 md:px-10 lg:px-20 font-sans">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Words from Our Partners
          </h2>

          <div className="quote bg-white p-5 rounded-xl shadow-lg">
            <blockquote className="text-xl text-gray-700 italic mb-6 leading-relaxed">
              “NIMS Food Bank has been an incredible partner in our efforts to
              reduce hunger in rural communities. Their sustainable approach not
              only provides immediate relief but empowers communities to become
              self-sufficient in the long run.”
            </blockquote>

            <p className="text-green-600 font-semibold">
              — Sarah Johnson, Director, Global Food Security Initiative
            </p>
          </div>
        </div>
      </section>
      <section className="bg-green-800 text-white font-sans">
        {/* Call to Action */}
        <div className="py-20 px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Ready to Make a Difference?
          </h1>
          <p className="text-lg max-w-2xl mx-auto font-semibold mb-8">
            Join our mission to ensure food security and agricultural
            sustainability across Nigeria. Every donation, volunteer hour, and
            partnership counts.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-green-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-all">
              Donate Now
            </button>
            <button className="border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-green-700 transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default NimsFoodBank;
