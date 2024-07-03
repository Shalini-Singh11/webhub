import React, { useEffect } from 'react';
import "./assests/digital-part.css";
import ShortcutService from './ServicesShortcuts.component';
// inner service images
import webm_cro from './assests/webm_webhub/cro.webm';
import ppc_lightsky_circle from "./assests/imagesAll/ppc_lightsky-circle.svg";
import ppc_purple_circle from "./assests/imagesAll/ppc_purple-circle.svg";
import ppc_sky_circle from "./assests/imagesAll/ppc_sky-circle.svg";

export default function ServiceCRO() {
    useEffect(() => {
        window.scrollTo(0,0)
      },[])
    return (
        <>
            <section className="page-banner mb-5">
                <div className="container">
                    <div className="row align-items-center justify-content-around">
                        <div className="col-md-5 main-heading-paragraph">
                            <h1 className="h1_heading">CRO(Conversion Rate Optimization)</h1>
                            <p className="p_para">
                                We are a reliable and affordable digital agency and talent
                                network. we channel creativity, colors, copy and code to help
                                our clients with better br branding
                            </p>
                        </div>
                        <div className="col-md-6 banner-video-section">
                            <video playsInline autoPlay muted loop>
                                <source src={webm_cro} type="video/webm" />
                            </video>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- ============  what seo ============= --> */}
            <div className="what-section py-5">
                <div className="container">
                    <div className="text-center px-5 what-content-heading">
                        <h1>CRO(Conversion Rate Optimization)</h1>
                        <p>
                            CRO(Conversion Rate Optimization) is the process of increasing the percentage of conversions
                            from a website or mobile app.
                            Most businesses advertise on various social media sites to promote their website on the
                            front page. The conversion rate is the percentage of total website visitors who visit the
                            website and use the services on a particular landing page.
                            All this process comes in conversion rate optimization. Paydeer provides you with this
                            service where you can check your website growth.
                        </p>
                    </div>
                </div>
            </div>

            {/* <!-- ================== services cards ====================== --> */}
            <section className="servic-cards-section">
                <ShortcutService />
            </section>
            {/*====== ppc features ==========*/}
            <section className="section-features-ppc py-5">
                <div className="container">
                    <div className="row align-items-center justify-content-evenly py-4">
                        <div className="col-md-5 col-12 shadow-border-cro mb-4">
                            <h5 className="heading-features">1</h5>
                            <p className="p-2">
                                <b>Usability Exploration -</b> The interface of the site is also one of the reasons why
                                Indian people leave the website. If the interface is too difficult and out of the reach
                                of mobile devices then it is not called an user friendly interface.
                                Our company converts the website keeping in mind all these factors so that the Indian
                                user visits your website.
                            </p>
                        </div>
                        <div className="col-md-5 col-12 shadow-border-cro mb-4">
                            <h5 className="heading-features">2</h5>
                            <p className="p-2">
                                <b>Conversion Analysis/Internet Marketing Reformation Analysis -</b>   We create and design attractive content to generate leads and attract visitors to your
                                website. Our team works on your website after knowing the details of the people through
                                internet marketing.
                            </p>
                        </div>
                        <div className="col-md-5 col-12 shadow-border-cro">
                            <h5 className="heading-features">3</h5>
                            <p className="p-2">
                                <b>Website Copy Inquiry -</b> Our company designs unique content for your site and gives
                                better answer to the questions from Indian visitors
                            </p>
                        </div>
                        <div className="col-md-5 col-12 shadow-border-cro">
                            <h5 className="heading-features">4</h5>
                            <p className="p-2">
                                <b>Creative Analysis -</b> Paydeer creates your website pages in a uniform and
                                professional manner. We make sure that all the pages on your site are representing your
                                brand, No
                                aesthetic error is present as well an increase in conversion rate optimization.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* ppc-circle-content */}
            <section className="ppc-circle">
                <div className="container">
                    <h2 class="process-heading pb-5 m-0">Paydeer CRO(Conversion Rate Optimization) Services</h2>
                    <div className="row justify-content-evenly py-5">
                        <div className="col-md-2 col-6 d-flex align-items-center justify-content-center">
                            <img
                                src={ppc_sky_circle}
                                className="position-absolute image-circle"
                                alt="arrow_right"
                            />
                            <h4 className="heading-ppc-circle">
                                Display Advertisement
                            </h4>
                        </div>
                        <div className="col-md-2 col-6 d-flex align-items-center justify-content-center">
                            <img
                                src={ppc_purple_circle}
                                className="position-absolute image-circle"
                                alt="arrow_right"
                            />
                            <h4 className="heading-ppc-circle">Vedio/E-mail marketing</h4>
                        </div>
                        <div className="col-md-2 col-6 d-flex align-items-center justify-content-center">
                            <img
                                src={ppc_lightsky_circle}
                                className="position-absolute image-circle"
                                alt="arrow_right"
                            />
                            <h4 className="heading-ppc-circle">
                                Optimising paid search ads
                            </h4>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ========= faq section  ======= --> */}
            <section className="faq-section">
                <h2 className="process-heading">FAQ (Frequency Asked Questions)</h2>
                <div className="container">
                    <div className="row justify-content-between align-items-center gy-3">
                        <div className="col-md-5 col-12 faq-body p-4">
                            <h5 className="card-title faq-title pb-3">
                                Why is conversion rate optimization important?
                            </h5>
                            <p className="card-text faq-list collapse" id="collapse-cro-faq">
                                Conversion rate optimization helps to increase the traffic of Indian customers by working on
                                the bottom line of your website.
                            </p>
                            <div className="webdevelopment-button">
                                <button
                                    className="mx-auto button-web-faq"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapse-cro-faq"
                                    aria-expanded="false"
                                    aria-controls="collapseExample"
                                    onclick="(function() { document.getElementById('collapse-cro-faq').classList.remove('show'); })();"
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>

                        <div className="col-md-5 col-12 faq-body p-4">
                            <h5 className="card-title faq-title pb-3">
                                What are conversion rate optimization (CRO) services?
                            </h5>
                            <p className="card-text faq-list collapse" id="collapse-cro-faq1">
                                Visitors who use the Services out of the total number of visitors to your website landing
                                page due to social media sites or any other source are handled by the Conversion Rate
                                Optimization Service.
                            </p>
                            <div className="webdevelopment-button">
                                <button
                                    className="mx-auto button-web-faq"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapse-cro-faq1"
                                    aria-expanded="false"
                                    aria-controls="collapseExample"
                                    onclick="(function() { document.getElementById('collapse-cro-faq1').classList.remove('show'); })();"
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>
                        <div className="col-md-5 col-12 faq-body p-4">
                            <h5 className="card-title faq-title pb-3">Why choose the Paydeer Service for CRO services?</h5>
                            <p className="card-text faq-list collapse" id="collapse-cro-faq2">
                                Paydeer is a full-service digital marketing company. We create custom strategies, work
                                with your website, and are transparent about our pricing. We have an expert and experienced
                                team, a large portfolio, testimonials, and reviews. (Content marketing, web designing, PPC
                                advertising, SEO, and many more).
                            </p>
                            <div className="webdevelopment-button">
                                <button
                                    className="mx-auto button-web-faq"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapse-cro-faq2"
                                    aria-expanded="false"
                                    aria-controls="collapseExample"
                                    onclick="(function() { document.getElementById('collapse-cro-faq2').classList.remove('show'); })();"
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>
                        <div className="col-md-5 col-12 faq-body p-4">
                            <h5 className="card-title faq-title pb-3">How to increase the conversion rate through Paydeer?</h5>
                            <p className="card-text faq-list collapse" id="collapse-cro-faq3">
                                <ol>
                                    <li>Increase customer trust and remove friction</li>
                                    <li>Optimise the website for a mobile-friendly mode</li>
                                    <li>Creative marketing strategy</li>
                                    <li>Improve website page speed</li>
                                    <li>Communicate the website value proposition</li>
                                </ol>
                            </p>
                            <div className="webdevelopment-button">
                                <button
                                    className="mx-auto button-web-faq"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapse-cro-faq3"
                                    aria-expanded="false"
                                    aria-controls="collapseExample"
                                    onclick="(function() { document.getElementById('collapse-cro-faq3').classList.remove('show'); })();"
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
