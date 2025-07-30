import React from "react";
import green from "../../src/assets/green.jpeg";
import sheep from "../../src/assets/sheep.jpeg";
import cow from "../../src/assets/cow.jpeg";
import Footer from "../components/Footer";

const articles = [
  {
    image: green, // Replace with actual image URL
    date: "March 15, 2024",
    title: "Sustainable Farming Practices for 2024",
    description:
      "Learn about the latest sustainable farming techniques that can help improve your yield while protecting the environment.",
    category: "Sustainability",
  },
  {
    image: sheep,
    date: "March 12, 2024",
    title: "Smart Irrigation Systems",
    description:
      "Discover how smart irrigation systems can help you conserve water and improve crop health.",
    category: "Technology",
  },
  {
    image: cow,
    date: "March 10, 2024",
    title: "Organic Pest Control Methods",
    description:
      "Effective organic methods to protect your crops from pests without harmful chemicals.",
    category: "Organic Farming",
  },
];

const Card = ({ image, date, title, description, category }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all max-w-sm mx-auto">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <p className="text-sm text-gray-500 mb-1">{date}</p>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
          {category}
        </span>
        <a
          href="#"
          className="text-xs bg-green-600 text-white px-2 py-1 rounded-full"
        >
          Read More
        </a>
      </div>
    </div>
  </div>
);

const Blog = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 font-sans">
      {/* Heading */}
      <div className="info flex items-center justify-center flex-col my-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Blog</h1>
        <p className="text-gray-600 mb-6 text-center text-lg">
          Empower your agricultural journey with our comprehensive articels.
          Whether you're a seasoned farmer or just starting out, our resources
          are designed to provide actionable insights, step-by-step
          instructions, and best practices to help you thrive.
        </p>
      </div>

      {/* Your colorful article sections remain untouched here */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {" "}
        {/* First Article - Blue */}{" "}
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-blue-100">
          {" "}
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {" "}
            Market Trends in Agriculture{" "}
          </h1>{" "}
          <p className="text-gray-700 mb-3">
            {" "}
            Stay updated with the latest market trends, price forecasts, and
            demands in the agricultural sector.{" "}
          </p>{" "}
          <div className="flex items-center text-gray-500 text-sm">
            {" "}
            <span className="mr-1">•</span> <span>John Adeyemi</span>{" "}
            <span className="mx-2">|</span> <span>5min Read</span>{" "}
          </div>{" "}
        </div>{" "}
        {/* Second Article - Green */}{" "}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-green-100">
          {" "}
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {" "}
            Advanced Agro-Tech Solutions{" "}
          </h1>{" "}
          <p className="text-gray-700 mb-3">
            {" "}
            Explore the cutting-edge technologies shaping modern agriculture and
            how they can revolutionize your farming practices.{" "}
          </p>{" "}
          <div className="flex items-center text-gray-500 text-sm">
            {" "}
            <span className="mr-1">•</span> <span>John Adeyemi</span>{" "}
            <span className="mx-2">|</span> <span>8min Read</span>{" "}
          </div>{" "}
        </div>{" "}
        {/* Third Article - Amber */}{" "}
        <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-amber-100">
          {" "}
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {" "}
            Sustainable Farming Practices{" "}
          </h1>{" "}
          <p className="text-gray-700 mb-3">
            {" "}
            Learn how to adopt eco-friendly farming methods that boost
            productivity while protecting the environment. From crop rotation to
            natural pest control, discover strategies for sustainable growth.{" "}
          </p>{" "}
          <div className="flex items-center text-gray-500 text-sm">
            {" "}
            <span className="mr-1">•</span> <span>Grace Okoro</span>{" "}
            <span className="mx-2">|</span> <span>4min Read</span>{" "}
          </div>{" "}
        </div>{" "}
        {/* Fourth Article - Purple */}{" "}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-purple-100">
          {" "}
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {" "}
            Livestock Health and Management{" "}
          </h1>{" "}
          <p className="text-gray-700 mb-3">
            {" "}
            Understand the best practices for keeping livestock healthy and
            productive, including feeding plans, disease prevention, and care
            routines.{" "}
          </p>{" "}
          <div className="flex items-center text-gray-500 text-sm">
            {" "}
            <span className="mr-1">•</span> <span>Kane Oluma</span>{" "}
            <span className="mx-2">|</span> <span>8min Read</span>{" "}
          </div>{" "}
        </div>{" "}
        {/* Fifth Article - Blue */}{" "}
        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-red-100">
          {" "}
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {" "}
            Market Trends in Agriculture{" "}
          </h1>{" "}
          <p className="text-gray-700 mb-3">
            {" "}
            Stay updated with the latest market trends, price forecasts, and
            demands in the agricultural sector.{" "}
          </p>{" "}
          <div className="flex items-center text-gray-500 text-sm">
            {" "}
            <span className="mr-1">•</span> <span>John Adeyemi</span>{" "}
            <span className="mx-2">|</span> <span>5min Read</span>{" "}
          </div>{" "}
        </div>{" "}
        {/* Sixthh Article - Green */}{" "}
        <div className="bg-pink-50 p-6 rounded-lg border-l-4 border-green-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-green-100">
          {" "}
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {" "}
            Advanced Agro-Tech Solutions{" "}
          </h1>{" "}
          <p className="text-gray-700 mb-3">
            {" "}
            Explore the cutting-edge technologies shaping modern agriculture and
            how they can revolutionize your farming practices.{" "}
          </p>{" "}
          <div className="flex items-center text-gray-500 text-sm">
            {" "}
            <span className="mr-1">•</span> <span>John Adeyemi</span>{" "}
            <span className="mx-2">|</span> <span>8min Read</span>{" "}
          </div>{" "}
        </div>{" "}
        {/* Seventh Article - Amber */}{" "}
        <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-black transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-blue-100">
          {" "}
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {" "}
            Advanced Agro-Tech Solutions{" "}
          </h1>{" "}
          <p className="text-gray-700 mb-3">
            {" "}
            Learn how to adopt eco-friendly farming methods that boost
            productivity while protecting the environment. From crop rotation to
            natural pest control, discover strategies for sustainable growth.{" "}
          </p>{" "}
          <div className="flex items-center text-gray-500 text-sm">
            {" "}
            <span className="mr-1">•</span> <span>Grace Okoro</span>{" "}
            <span className="mx-2">|</span> <span>4min Read</span>{" "}
          </div>{" "}
        </div>{" "}
        {/* Eight Article - Purple */}{" "}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-purple-100">
          {" "}
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {" "}
            Small Scale Farming Success Stories{" "}
          </h1>{" "}
          <p className="text-gray-700 mb-3">
            {" "}
            Understand the best practices for keeping livestock healthy and
            productive, including feeding plans, disease prevention, and care
            routines.{" "}
          </p>{" "}
          <div className="flex items-center text-gray-500 text-sm">
            {" "}
            <span className="mr-1">•</span> <span>Kane Oluma</span>{" "}
            <span className="mx-2">|</span> <span>8min Read</span>{" "}
          </div>{" "}
        </div>{" "}
      </div>

      {/* Guides Section */}
      <div className="guides">
        <div className="info flex items-center justify-center flex-col my-16">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Guides</h1>
          <p className="text-gray-600 mb-6 text-center text-lg">
            Your Step-by-Step Companion – Practical Guides to Master Modern
            Farming Techniques and Boost Agricultural Success.
          </p>
        </div>
        {/* 🌾 Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-16">
          {articles.map((article, index) => (
            <Card key={index} {...article} />
          ))}
        </div>
        <div className="card"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
