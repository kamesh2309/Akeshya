import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./MoreServices.css";

const MoreServices = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation in milliseconds
    });
  }, []);

  return (
    <section id="more-services" className="more-services">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Our Process</h2>
          <p>
            Over the years we’ve evolved a tested method for attaining
            achievement for each one of our clients.
          </p>
        </div>

        <div className="row">
          <div className="col-md-6 d-flex align-items-stretch">
            <div
              className="card"
              style={{
                backgroundImage: `url("/assets/img/more-services-1.jpg")`,
              }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="card-body">
                <h5 className="card-title">
                  <a href="">1. Planning</a>
                </h5>
                <p className="card-text">
                  We help you turn all of your ideas into a digital product that
                  meets all of your requirements. We begin each project by
                  determining its scope and needs. This is done by collaborating
                  closely with you to ensure that we're all on the same page.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div
              className="card"
              style={{
                backgroundImage: `url("/assets/img/more-services-2.jpg")`,
              }}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="card-body">
                <h5 className="card-title">
                  <a href="">2. Design</a>
                </h5>
                <p className="card-text">
                  We build our websites carefully through a series of workshops,
                  wire-framing, and user experience (UX) sessions, resulting in
                  a site that reinforces trust, conveys important brand
                  messaging, and provides a return on innovation.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-stretch mt-4">
            <div
              className="card"
              style={{
                backgroundImage: `url("/assets/img/more-services-3.jpg")`,
              }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="card-body">
                <h5 className="card-title">
                  <a href="">3. Development</a>
                </h5>
                <p className="card-text">
                  We provide extensive front-end and back-end development that
                  allows your idea to stand alone. Our in-house developers work
                  side-by-side with the artistic team to seek out natural
                  breakpoints inside the content and order practicality based on
                  acknowledged statistics.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-stretch mt-4">
            <div
              className="card"
              style={{
                backgroundImage: `url("/assets/img/more-services-4.jpg")`,
              }}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="card-body">
                <h5 className="card-title">
                  <a href="">4. Marketing</a>
                </h5>
                <p className="card-text">
                  We come up with ideas and campaigns to help your business
                  prosper online. Our campaigns and virtual approach have a
                  verified tune report of accomplishing brilliant results,
                  gathering new leads and site visitors in your website and
                  assist them convert.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreServices;
