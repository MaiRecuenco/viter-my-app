import React from "react";
import Banner from "./banner/Banner";
import About from "./about/About";
import Header from "../../../partials/Header";
import Cta from "../../../partials/Cta";
import Footer from "../../../partials/Footer";
import Services from "./services/Services";
import Testimonials from "./testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <div className="page-container">
        <div className="content-wrap">
          <Header />
          <Banner />
          <Services />
          <About />
          <Testimonials />
          <Cta />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
