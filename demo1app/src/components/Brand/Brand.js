import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Brand.css";

const Brand = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation in milliseconds
    });
  }, []);

  return (
    <section id="clients" className="clients">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-4 col-6">
            <img
              src="https://akeshya.com/assets/img/clients/client-1.png"
              className="img-fluid"
              alt="Client 1"
              data-aos="zoom-in"
            />
          </div>

          <div className="col-lg-2 col-md-4 col-6">
            <img
              src="https://akeshya.com/assets/img/clients/client-2.png"
              className="img-fluid"
              alt="Client 2"
              data-aos="zoom-in"
              data-aos-delay="100"
            />
          </div>

          <div className="col-lg-2 col-md-4 col-6">
            <img
              src="https://akeshya.com/assets/img/clients/client-3.png"
              className="img-fluid"
              alt="Client 3"
              data-aos="zoom-in"
              data-aos-delay="200"
            />
          </div>

          <div className="col-lg-2 col-md-4 col-6">
            <img
              src="https://akeshya.com/assets/img/clients/client-4.png"
              className="img-fluid"
              alt="Client 4"
              data-aos="zoom-in"
              data-aos-delay="300"
            />
          </div>

          <div className="col-lg-2 col-md-4 col-6">
            <img
              src="https://akeshya.com/assets/img/clients/client-5.png"
              className="img-fluid"
              alt="Client 5"
              data-aos="zoom-in"
              data-aos-delay="400"
            />
          </div>

          <div className="col-lg-2 col-md-4 col-6">
            <img
              src="https://akeshya.com/assets/img/clients/client-6.png"
              className="img-fluid"
              alt="Client 6"
              data-aos="zoom-in"
              data-aos-delay="500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand;
