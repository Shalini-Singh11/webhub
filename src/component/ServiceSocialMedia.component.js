import React, { useEffect } from 'react';
import './assests/digital-part.css';
// import { Link } from 'react-router-dom';
import ShortcutService from './ServicesShortcuts.component';

// inner-service-images
import webm_smm from './assests/webm_webhub/smm.webm';
import smm_service from './assests/imagesAll/smm-service.svg';
import grow_website_smm from './assests/imagesAll/grow_website_smm.svg';
export default function ServiceSocialMedia() {
    useEffect(() => {
        window.scrollTo(0,0)
      },[])
    return (
        <>
            <section className="page-banner mb-5">
                <div className="container">
                    <div className="row align-items-center justify-content-around">
                        <div className="col-md-5 main-heading-paragraph">
                            <h1 className="h1_heading">
                                SMM(Search Media Marketing)
                            </h1>
                            <p className="p_para">
                                We are a reliable and affordable digital agency and talent network.
                                we channel creativity,
                                colors, copy and code to help our clients with better br branding
                            </p>
                        </div>
                        <div className="col-md-6 banner-video-section">
                            {/* <img className="img-fluid" src="./images-all/ios-mobile-app.svg" /> */}
                            <video playsInline autoPlay muted loop>
                                <source src={webm_smm} type='video/webm' />
                            </video>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- ============ what smm ============= --> */}
            <div className="what-section py-5">
                <div className="container">
                    <div className="text-center px-5 what-content-heading">
                        <h1>Search Media Marketing</h1>
                        <p>Social media marketing is a technique in which any business, brand, or individual can use to
                            promote their services and products on different social sites.
                            Our company creates your site account on various social media platforms to do marketing and
                            publish the exact offers and information about your services in the form of content.
                            Social media is a platform through which you can reach your target Indian audience very
                            easily. This marketing strategy can give rapid growth to your business.
                        </p>
                    </div>
                </div>
            </div>
            {/* service-cards */}
            <section className="servic-cards-section">
                <ShortcutService/>
            </section>
            {/* ===============  services in smm  ================= */}

            <section className="smm-services p-4">
                <div className="container">
                    <div className="row justify-content-evenly align-items-center">
                        <div className="col-md-5 content-column-type-seo">
                            <h2 className="heading-type-seo">
                                Paydeer Social Media Marketing Service
                            </h2>
                            <p className='services-smm-para'> Blog posting, page optimization, social bookmarking, premium links, article
                                submission, sponsored posts, video promotions, creating content, improving
                                search engine ranking, and many more.
                            </p>
                        </div>
                        <div className="col-md-5">
                            <img src={smm_service} className="w-100" alt="smm_services" />
                        </div>
                    </div>
                </div>
            </section>
            {/* ==========  grown-website-with-smm =================== */}

            <section className="section-grow-smm">
                <div className="container">
                    <h2 className="heading-type-seo text-center p-5">
                        How Paydeer Grows Your Website<br />
                        Through Social Media Marketing
                    </h2>
                    <div className="row justify-content-evenly pb-4">
                        <div className="col-md-4 col-12">
                            <h5 className="grow-heading-smm">
                                1. Businesses, brands
                            </h5>
                            <p className="grow-para-smm">
                                Businesses, brands, and individuals can promote their products and services through social media marketing.
                            </p>
                        </div>
                        <div className="col-md-4 col-12">
                            <h5 className="grow-heading-smm">
                                2. Paydeer also does advertising

                            </h5>
                            <p className="grow-para-smm">
                                Paydeer also does advertising to reach the Indian audience/ Indian visitors to your website and increase the awareness of your brand.
                            </p>
                        </div>

                    </div>
                    <div className="row justify-content-evenly pb-4">
                        <div className="col-md-4 col-12">
                            <h5 className="grow-heading-smm">
                                3. Paydeer creates a professional page
                            </h5>
                            <p className="grow-para-smm">
                                Paydeer creates a professional page by creating your website logo, cover page, business website and content on social media platforms according to your business category.
                            </p>
                        </div>
                        <div className="col-md-4 col-12">
                            <h5 className="grow-heading-smm">
                                4. The main target of our company

                            </h5>
                            <p className="grow-para-smm">
                                The main target of our company is to increase the business by taking organic Indian traffic to your website, making this strategy, and publishing the scheduled content.
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-evenly pb-4">
                        <div className="col-md-4 col-12">
                            <h5 className="grow-heading-smm">
                                5. After creating various social media platforms

                            </h5>
                            <p className="grow-para-smm">
                                After creating various social media platforms, we publish content on those sites on a daily basis.
                            </p>
                        </div>
                        <div className="col-md-4 col-12">
                            <img src={grow_website_smm} class="w-100" alt="grow_smm_services" />

                        </div>
                    </div>
                </div>
            </section>
            {/* ==================== faq  =============== */}
            <section className="faq-section">
                <h2 className="process-heading">FAQ (Frequency Asked Questions)</h2>
                <div className="container">
                    <div className="row justify-content-evenly align-items-center gy-3">
                        <div className="col-md-5 col-12 faq-body p-4 mb-2">
                            {/* <div className="card-body"> */}
                            <h5 className="card-title faq-title pb-3">
                                How to use social media through Paydeer digital
                                marketing?
                            </h5>
                            <p className="card-text faq-list collapse" id="collapse-smm-faq">
                                We publish your website on various social media sites and present your products and services
                                through creative and attractive content which can engage more Indian people on your website
                                by increasing the awareness of your brand.
                            </p>
                            <div className="webdevelopment-button">
                               <button
                                    className="mx-auto button-web-faq"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapse-smm-faq"
                                    aria-expanded="false"
                                    aria-controls="collapseExample"
                                    onclick="(function() { document.getElementById('collapse-smm-faq').classList.remove('show'); })();"
                                >
                                    Learn More
                                </button>
                            </div>
                            {/* </div> */}
                        </div>

                        <div className="col-md-5 col-12 faq-body p-4 mb-2">
                            {/* <div className="card-body"> */}
                            <h5 className="card-title faq-title pb-3">
                                Which social platforms does Paydeer use for social
                                media marketing?
                            </h5>
                            <p className="card-text faq-list collapse" id="collapse-smm-faq1">
                                We publish your websites on social media platforms like Facebook, Instagram, Twitter,
                                Pinterest, YouTube, and LinkedIn.
                            </p>
                            <div className="webdevelopment-button">
                               <button
                                    className="mx-auto button-web-faq"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapse-smm-faq1"
                                    aria-expanded="false"
                                    aria-controls="collapseExample"
                                    onclick="(function() { document.getElementById('collapse-smm-faq1').classList.remove('show'); })();"
                                >
                                    Learn More
                                </button>
                            </div>
                            {/* </div> */}
                        </div>
                        <div className="col-md-5 col-12 faq-body p-4">
                            {/* <div className="card-body"> */}
                            <h5 className="card-title faq-title pb-3">What are some general tips for achieving social media
                                success?</h5>
                            <p className="card-text faq-list collapse" id="collapse-smm-faq2">
                                Make sure you post consistently, let your passion shine through, engage in conversations and
                                answer questions, Engage your Indian audience by providing valuable contents.
                            </p>
                            <div className="webdevelopment-button">
                               <button
                                    className="mx-auto button-web-faq"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapse-smm-faq2"
                                    aria-expanded="false"
                                    aria-controls="collapseExample"
                                    onclick="(function() { document.getElementById('collapse-smm-faq2').classList.remove('show'); })();"
                                >
                                    Learn More
                                </button>
                            </div>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
