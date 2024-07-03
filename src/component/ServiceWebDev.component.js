import React, { useEffect } from 'react';
import "./assests/develop-design.css";
import ServiceShortcutsDevDesign from './ServicesShortcuts_developDesign.component';
import web_development_webm from "./assests/webm_webhub/web-development.webm";
import WebDev_service from "./assests/imagesAll/WebDev_service.svg";
import importance_webdev from "./assests/imagesAll/importance_webdev.svg";

export default function ServiceDesign() {
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
                            <h1 className="h1_heading">Web Development</h1>
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
                                <source src={web_development_webm} type="video/webm" />
                            </video>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ======= cards-service  ======== --> */}
            <section className="cards-section-service-shortcuts mb-3 position-relative">
               <ServiceShortcutsDevDesign/>
            </section>
            {/* <!-- ====== mobile-app-development-section ===== --> */}
            <section className="second-main-section">
                <div className="container-fluid mobile-section">
                    <div className="heading-content-contain">
                        <h2>Web Development</h2>
                        <p>
                            Web development is the work of creating a website through coding, which is made to share the
                            data uploaded of the site's information and services on the Internet.
                            Paydeer works on coding tasks like markup, scripting, and programming for your website
                            And both the Front-end and back-end interface of your website.
                            Web development is responsive to some tasks like website structure, designing, layout,
                            website modification and website functionality, performance, etc. We build and redesign
                            Indian customer-facing and enterprise web applications to achieve higher adoption and
                            conversion rates.
                        </p>
                    </div>
                </div>
            </section>

            {/* <!-- .========    third-main-section      ========= --> */}
            <div className="container mobile-app-part pt-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="service-in-india-img">
                            <img
                                src={WebDev_service}
                                className="service-image"
                                alt="main-image"
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h2 className="process-heading-third-service-section">
                            {" "}
                            Paydeer Web Design & Development Services
                        </h2>
                        <p>
                            Blog post, Web hosting, Brand logo design, UX/UI design, E-commerce-related
                            solutions, Drag & drop websites, template design, front-end level,
                            open-source platform, static & dynamic website design, multi-device
                            compatibility, website maintenance.
                        </p>
                    </div>
                </div>
            </div>
            {/* ====== web development solution ========== */}
            <section className="web-solution-section py-5">
                <h2 className="solution-heading mb-4">
                    We Provide Complet<br />
                    Web Development Solution
                </h2>
                <div className="container">
                    <div className="row justify-content-evenly align-items-center">
                        <div className="col-md-2">
                            <div className="contain-solution-web d-flex align-items-center justify-content-center">
                                <h4 className="heading-solutions-web">Extract and
                                    intranet
                                    portals.</h4>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="contain-solution-web d-flex align-items-center justify-content-center">
                                <h4 className="heading-solutions-web">
                                    Cloud-based & SAAS development.
                                </h4>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="contain-solution-web d-flex align-items-center justify-content-center">
                                <h4 className="heading-solutions-web">
                                    E-commerce
                                    related
                                    solutions.

                                </h4>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="contain-solution-web d-flex align-items-center justify-content-center">
                                <h4 className="heading-solutions-web">
                                    Custom
                                    website
                                    development.
                                </h4>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="contain-solution-web d-flex align-items-center justify-content-center">
                                <h4 className="heading-solutions-web">
                                    Informational
                                    websites we
                                    create.
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* <!-- ====    mobile Development importance   ======== --> */}

            <section className="service-process-section mt-5">
                <div className="container">
                    <div className="row align-items-baseline justify-content-evenly">
                        <div className="col-md-6 service-process-left">
                            <h1 className="card-title-importance">
                                The Importance Of Web Development For Any Website
                            </h1>
                            <img
                                src={importance_webdev} className="w-100" alt="importance web development image" />
                        </div>
                        <div className="col-md-5">
                            <div className="importance-web-card-body">
                                <p className="card-text service-process-list">
                                    <ul>
                                        <li> Make Map-reading easy navigation on the website.</li>
                                        <li>We are focused on your site's better SEO on parameters, tags, keywords, image
                                            optimization, and visual content.</li>
                                        <li>For inventive marketing and advertising increase traffic to your website.</li>
                                        <li>We focus on a well-designed website to extend your reach and engage more audience.</li>
                                        <li>Enhance business by increasing leads and keeping Indian visitors consistent.</li>
                                        <li>We also provide visual content for your website, Our company provides the facility to
                                            select promo videos and additional images for your website.</li>
                                        <li>Paydeer attract lifelong customers to your business
                                        </li>
                                        <li>Paydeer aspires to spread & expand the wings of your website, we highlight the
                                            clients who are interested to perform your services.
                                        </li>
                                        <li>We make website design pocket-friendly (for mobile users)
                                        </li>
                                        <li>Innovative marketing and advertising.</li>
                                    </ul>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ======== what do for your project  ===== --> */}
            {/* <!-- ========= faq section  ======= --> */}
            <section className="faq-section">
                <h2 className="process-heading">FAQ (Frequency Asked Questions)</h2>
                <div className="container">
                    <div className="row justify-content-between align-items-center gy-3">
                        <div className="col-md-5 col-12 faq-body p-4">
                            <h5 className="card-title faq-title pb-3">
                                What is done in web development?
                            </h5>
                            <p className="card-text faq-list collapse" id="collapse-web-faq">
                                Web developers help brands grow in today's ever-changing digital landscape by creating
                                website solutions that deliver real business results.
                            </p>
                            <div className="webdevelopment-button">
                                 <button
                                    className="mx-auto button-web-faq"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapse-web-faq"
                                    aria-expanded="false"
                                    aria-controls="collapseExample"
                                    onclick="(function() { document.getElementById('collapse-web-faq').classList.remove('show'); })();"
                                >
                                    Learn More
                                </button>
                            </div>

                        </div>

                        <div className="col-md-5 col-12 faq-body p-4">
                            <h5 className="card-title faq-title pb-3">
                                Can you tell me which industries Paydeer zone websites
                                develop for?
                            </h5>
                            <p className="card-text faq-list collapse" id="collapse-web-faq1">
                                We are building web applications for many Indian businesses worldwide: E-commerce,
                                Start-ups, marketplace, food delivery, social media networking, retail, clinical research,
                                Education, Healthcare, human capital, Hospitality, media & publishing, manufacturing, and
                                all type of websites.
                            </p>
                            <div className="webdevelopment-button">
                                 <button
                                    className="mx-auto button-web-faq"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapse-web-faq1"
                                    aria-expanded="false"
                                    aria-controls="collapseExample"
                                    onclick="(function() { document.getElementById('collapse-web-faq1').classList.remove('show'); })();"
                                >
                                    Learn More
                                </button>
                            </div>

                        </div>
                        <div className="col-md-5 col-12 faq-body p-4">
                            <h5 className="card-title faq-title pb-3">Why is web development significant? </h5>
                            <p className="card-text faq-list collapse" id="collapse-web-faq2">
                                These factors of websites are needed for the web development of any business.
                                Indian Website Maintenance and Sustainability, Search Engine Optimization to win, boost
                                sales growth, build Indian customer relationships and attract more Indian customers, expand
                                reach and ease navigation.
                            </p>
                            <div className="webdevelopment-button">
                                 <button
                                    className="mx-auto button-web-faq"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapse-web-faq2"
                                    aria-expanded="false"
                                    aria-controls="collapseExample"
                                    onclick="(function() { document.getElementById('collapse-web-faq2').classList.remove('show'); })();"
                                >
                                    Learn More
                                </button>
                            </div>

                        </div>
                        <div className="col-md-5 col-12 faq-body p-4">
                            <h5 className="card-title faq-title pb-3">What is the most important in Web development? </h5>
                            <p className="card-text faq-list collapse" id="collapse-web-faq3">
                                Any Web developer should be skilled and learn the basic building blocks of HTML, CSS, and
                                JAVA scripts.
                            </p>
                            <div className="webdevelopment-button">
                                 <button
                                    className="mx-auto button-web-faq"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapse-web-faq3"
                                    aria-expanded="false"
                                    aria-controls="collapseExample"
                                    onclick="(function() { document.getElementById('collapse-web-faq3').classList.remove('show'); })();"
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
