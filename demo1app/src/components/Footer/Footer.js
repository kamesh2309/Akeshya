import React, { useEffect, useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <footer id="footer">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="copyright">
              © Copyright <strong>Akeshya</strong>. All Rights Reserved
            </div>
            <div>
              <ul className="d-flex list-unstyled">
                <li className="px-3">
                  <a
                    href="/Terms and conditions.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terms and conditions
                  </a>
                </li>
                <li className="px-3">
                  <a
                    href="/Refund policy.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Refund policy
                  </a>
                </li>
                <li className="px-3">
                  <a
                    href="/Privacy policy.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {isVisible && (
        <a
          href={"#"}
          className="back-to-top d-flex align-items-center justify-content-center active"
          onClick={scrollToTop}
        >
          <i className="bi bi-arrow-up-short"></i>
        </a>
      )}
    </div>
  );
};

export default Footer;
