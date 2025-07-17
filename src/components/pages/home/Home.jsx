import React from "react";
import Header from "../../partials/Header";
import Banner from "./banner/Banner";
import Services from "./services/Services";
import About from "./about/About";
import Testimonials from "./testimonials/Testimonials";
import Cta from "../../partials/Cta";
import Footer from "../../partials/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Services />
      <About />
      <Testimonials />
      <Cta />
      <Footer />
    </>
  );
};

export default Home;
