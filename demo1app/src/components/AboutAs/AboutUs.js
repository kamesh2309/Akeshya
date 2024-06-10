import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./AboutUs.css";

import PureCounter from "@srexi/purecounterjs";

const AboutUs = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Duration of the animation in milliseconds
    });
    new PureCounter();
  }, []);

  return (
    <>
      <br />
      <br />
      <br />
      <section id="about" className="px-10">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>About Us</h2>
          </div>

          <div className="row content">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="150">
              <p>
                We are Akeshya, a firm that specializes in web design and
                marketing. We help transform ideas into reality with a team of
                passionate graphic designers, web developers, and seasoned
                marketing advisors.
              </p>
              <ul>
                <li>
                  <i className="ri-check-double-line"></i> We started with a
                  simple idea: do what is best for the client.
                </li>
                <li>
                  <i className="ri-check-double-line"></i> Our methodical and
                  individual approach to each project delivers the finest
                  possible results for your media.
                </li>
                <li>
                  <i className="ri-check-double-line"></i> Our day-to-day work
                  is to solve your problems utilizing the most up-to-date,
                  practical adaptive technology, and we have a lot of fun doing
                  it.
                </li>
              </ul>
            </div>
            <div
              className="col-lg-6 pt-4 pt-lg-0"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <p>
                We're professional, but we're also friendly, and we'll always
                pay attention to your concerns. We expect to work with
                innovative people that have an open mind and are dedicated to
                making every idea a reality. We want to hear from you if you're
                interested in SEO, have Web Development ideas, or require a
                graphic designer who can match your goals.
              </p>
              <a href="#services" className="btn-learn-more">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="counts" className="counts">
        <div className="container">
          <div className="row">
            <div
              className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start"
              data-aos="fade-right"
              data-aos-delay="150"
            >
              <img
                src={"https://akeshya.com/assets/img/counts-img.svg"}
                alt=""
                className="img-fluid"
              />
            </div>

            <div
              className="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <div className="content d-flex flex-column justify-content-center">
                <div className="row">
                  <div className="col-md-6 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                      <i className="bi bi-emoji-smile"></i>
                      <span
                        data-purecounter-start="0"
                        data-purecounter-end="3835039"
                        data-purecounter-duration="1"
                        className="purecounter"
                      >
                        3835039
                      </span>
                      <p>
                        <strong>Organic Reach</strong> (Global)
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                      <i className="bi bi-journal-richtext"></i>
                      <span
                        data-purecounter-start="0"
                        data-purecounter-end="85"
                        data-purecounter-duration="1"
                        className="purecounter"
                      >
                        85
                      </span>
                      <p>
                        <strong>Campaigns</strong>
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                      <i className="bi bi-clock"></i>
                      <span
                        data-purecounter-start="0"
                        data-purecounter-end="14081"
                        data-purecounter-duration="1"
                        className="purecounter"
                      >
                        14081
                      </span>
                      <p>
                        <strong>Watch Hours</strong> (Asia)
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                      <i className="bi bi-globe"></i>
                      <span
                        data-purecounter-start="0"
                        data-purecounter-end="17"
                        data-purecounter-duration="1"
                        className="purecounter"
                      >
                        17
                      </span>
                      <p>
                        <strong>Excellent CTR %</strong> (Asia)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
