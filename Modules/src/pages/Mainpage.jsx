import Hero from "../components/Hero";
import Video from "../components/VIdeo";
import Features from "../components/Features";
import Trusted from "../components/Trusted";
import Quote from "../components/Quote";
import Info from "../components/Info";
import Testimonial from "../components/Testimonial";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

import React from "react";

const Mainpage = () => {
  return (
    <div>
      <Hero />
      <Video />
      <Features />
      <Trusted />
      <Quote />
      <Info />
      <Testimonial />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Mainpage;
