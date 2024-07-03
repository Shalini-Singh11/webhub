import React, { useEffect } from 'react';
import "./assests/develop-design.css";
import ServiceShortcutsDevDesign from "./ServicesShortcuts_developDesign.component";

import mobile_app_dev_webm from "./assests/webm_webhub/mobile-app-dev.webm";
import app_development_servicepage_image from "./assests/imagesAll/app_development_servicepage.svg";
import app_development_process from "./assests/imagesAll/app-development-process.svg";

export default function ServiceAppDev() {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  return (
    <div>
      {/* <!-- ======== main-section-start   ======== --> */}

      <section className="page-banner mb-5">
        <div className="container">
          <div className="row align-items-center justify-content-around">
            <div className="col-md-5 main-heading-paragraph">
              <h1 className="h1_heading">Mobile App Development</h1>
              <p className="p_para">
                We are a reliable and affordable digital
                <br /> agency and talent network.
                <br />
                we channel creativity,
                <br />
                colors, copy and code to help our clients with better br
                branding
              </p>
            </div>
            <div className="col-md-6 banner-video-section">
              <video playsInline autoPlay muted loop>
                <source src={mobile_app_dev_webm} type="video/webm" />
              </video>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ======= cards-service  ======== --> */}
      <section className="cards-section-service-shortcuts mb-3 position-relative">
        <ServiceShortcutsDevDesign />
      </section>
      {/* <!-- ====== mobile-app-development-section ===== --> */}
      <section className="second-main-section">
        <div className="container-fluid mobile-section">
          <div className="heading-content-contain">
            <h2>Mobile App Development</h2>
            <p>
              Mobile app development is the process of creating software
              applications for mobile devices, which typically utilises network
              connections to access remote computing resources. Mobile
              development Includes building a software bundle that can be
              installed, implementing backend services such as APIs, and testing
              the application on target devices. Paydeer is a one-stop mobile
              app solution for all businesses. We help not only Indian but also
              global brands design and make superior digital products enabling
              seamless Indian customer experiences across all modern platforms
              and devices. We offer a full cycle of application design,
              integration, and management services, ranging from
              consumer-oriented apps to enterprise-class solutions from concept
              to delivery, to ongoing support, the company leads the entire
              mobile app development process.
            </p>
          </div>
        </div>
      </section>
      {/* <!-- .========    third-main-section      ========= --> */}
      <section className="service-in-india-section m-1">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="service-in-india-img">
                <img
                  src={app_development_servicepage_image}
                  className="service-image"
                  alt="main-image"
                />
              </div>
            </div>
            <div className="col-md-6">
              <h2 className="process-heading-third-service-section">
                Paydeer Mobile App Development Services In India
              </h2>
              <p>
                Cross-platform app development, App Porting, Maintenance and
                support, App Designing & development, App Strategy Action and
                End-to-end mobile app development services for IOS. Android and
                windows, Mobile App UI Design, Native App Development, Support
                and maintenance, Enterprise mobility solutions, Building hybrid
                mobile applications.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====    App Development Process   ======== --> */}

      <section className="service-process-section">
        <h2 className="process-heading">Our App Development Process</h2>
        <div className="container">
          <div className="row align-items-center justify-content-evenly">
            <div className="col-md-6 service-process-left">
              <p>
                Our company uses adequate technology and infrastructure to
                develop your app and make changes from time to time to match the
                market trends, which also affects how we roll out the app.
                Performs app development process using the latest trends and
                incorporates themes, along with marketing research, and app
                design.
              </p>
              <img
                src={app_development_process}
                alt="app-development-process-image"
              />
            </div>
            <div className="col-md-5">
              <div className="service-card-body">
                <h4 className="card-title">
                  Steps of the App Development Process{" "}
                </h4>
                <p className="card-text service-process-list">
                  <ul>
                    <li>Make a map and target-based strategy</li>
                    <li>Outline competing solutions</li>
                    <li>Decide on the best</li>
                    <li>Put up a realistic prototype</li>
                    <li>Test with the target-based Indian customers</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ======== what do for your project  ===== --> */}
      <section className="second-main-section">
        <div className="container">
          <div className="what-to-do-content-contain">
            <h2 className="process-heading">
              What Does Paydeer
              <br />
              Do For Your Project?
            </h2>
            <ol className="list-of-what-todo">
              <li>End-to-end mobile app development services for IOS</li>
              <li>Mobile app UI/UX designing</li>
              <li>Enterprise mobility solutions</li>
              <li>Cross-platform app development</li>
              <li>
                Integrates into your mobile application development to launch
                and infrastructure
              </li>
              <li>Build your hybrid mobile application</li>
              <li>We create a progressive web application </li>
            </ol>
          </div>
        </div>
      </section>
      {/* <!-- ========= faq section  ======= --> */}
      <section className="faq-section">
        <h2 className="process-heading">FAQ (Frequency Asked Questions)</h2>
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-5 col-12 faq-body p-4">
              <h5 className="card-title faq-title pb-3">
                What type of industry and region apps does Paydeer work on?{" "}
              </h5>
              <p className="card-text faq-list collapse" id="collapse-app-faq">
                Industries we serve are fintech, social networking, Indian
                lifestyle, travel, Health and fitness, entertainment, tech,
                start-ups and many more.
              </p>
              <div className="webdevelopment-button">
                {/* <button className="mx-auto button-web-faq">Learn More</button> */}
                <button
                  className="mx-auto button-web-faq"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse-app-faq"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  onclick="(function() { document.getElementById('collapse-app-faq').classList.remove('show'); })();"
                >
                  Learn More
                </button>
              </div>
            </div>

            <div className="col-md-5 col-12 faq-body p-4">
              <h5 className="card-title faq-title pb-3">
                What do you mean by mobile app development?{" "}
              </h5>
              <p className="card-text faq-list collapse" id="collapse-app-faq1">
                Mobile application development is a great process of creating
                applications that run on mobile devices. These apps can either
                be pre-installed or downloaded and installed by the Indian user.
                The mobile app development process uses software installed on
                the device, and through APIs. Enabling backend services for data
                access and testing the application on target devices is also
                required.
              </p>
              <div className="webdevelopment-button">
                {/* <button className="mx-auto button-web-faq">Learn More</button> */}
                <button
                  className="mx-auto button-web-faq"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse-app-faq1"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  onclick="(function() { document.getElementById('collapse-app-faq1').classList.remove('show'); })();"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
