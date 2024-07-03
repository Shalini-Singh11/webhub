import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./assests/package.css";

const Packages = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="page-banner mb-5 justify-content-center">
      <div className="container">
        <div className="package-heading">
          <h1>
            Packages<span>Paydeer Packages</span>
          </h1>
        </div>
        </div>
      </section>
      <div className="package-section">
        <div className="package-container position-relative pb-5 d-flex w-100 justify-content-center align-items-center flex-wrap">
          <div className="drop position-relative d-flex justify-content-center align-items-center">
            <div className="content d-flex flex-column text-center justify-content-center align-items-center">
              <h2 className="d-flex justify-content-center align-items-center">
                Digital Marketing
              </h2>
              <p>
                Paydeer provides a very affordable digital marketing packages
                in India..
              </p>
              <Link to="/pricing/DigitalMarketing" className="link-price">
                Explore
              </Link>
            </div>
          </div>
          <div className="drop d-flex justify-content-center align-items-center">
            <div className="content d-flex flex-column text-center justify-content-center align-items-center">
              <h2 className="d-flex justify-content-center align-items-center">
                Website Development
              </h2>
              <p>
                Paydeer is a leading provider of website design and
                development packages in India..
              </p>
              <Link to="/pricing/WebPackages" className="link-price">
                Explore
              </Link>
            </div>
          </div>
          <div className="drop d-flex justify-content-center align-items-center">
            <div className="content d-flex flex-column text-center justify-content-center align-items-center">
              <h2 className="d-flex justify-content-center align-items-center">
                Content Marketing
              </h2>
              <p>
                Paydeer provide best of the content writing packages in
                india..
              </p>
              <Link to="/pricing/ContentWriting" className="link-price">
                Explore
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Packages;
