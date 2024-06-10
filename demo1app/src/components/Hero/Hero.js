import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Hero.css";
import { Link, animateScroll as scroll } from "react-scroll";
import Brand from "../Brand/Brand";
import AboutUs from "../AboutAs/AboutUs";
import Services from "../Services/Services";
import MoreServices from "../MoreServices/MoreServices";
import Features from "../Features/Features";
import ContactUs from "../ContactUs/ContactUs";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation in milliseconds
    });
  }, []);

  return (
    <>
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">Grow your business with Akeshya</h1>
              <h2 data-aos="fade-up" data-aos-delay="400">
                We are team of talented website designers, developers &amp;
                digital marketeers
              </h2>
              <div data-aos="fade-up" data-aos-delay="800">
                <a href="#about" className="btn-get-started scrollto">
                  Get Started
                </a>
              </div>
            </div>
            <div
              className="col-lg-6 order-1 order-lg-2 hero-img"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <img
                src="https://akeshya.com/assets/img/hero-img.png"
                className="img-fluid animated"
                alt="Hero"
              />
            </div>
          </div>
        </div>
      </section>
      <Brand />
      <AboutUs />
      <Services />
      <MoreServices />
      <Features />
      <ContactUs />
    </>
  );
};

export default Hero;
