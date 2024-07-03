import React, { useEffect } from 'react';
import "./assests/digital-part.css";
import ShortcutService from './ServicesShortcuts.component';
// inner-images

import webm_contentmarketing from "./assests/webm_webhub/contentmarketing.webm";
import cm_services from './assests/imagesAll/cm-services.svg';
import why_cm from './assests/imagesAll/why-cm.svg';

export default function ServiceContentMark() {
    useEffect(() => {
        window.scrollTo(0,0)
      },[])
    return (
        <>
            <section className="page-banner mb-5">
                <div className="container">
                    <div className="row align-items-center justify-content-around">
                        <div className="col-md-5 main-heading-paragraph">
                            <h1 className="h1_heading">Content Marketing</h1>
                            <p className="p_para">
                                We are a reliable and affordable digital agency and talent
                                network. we channel creativity, colors, copy and code to help
                                our clients with better br branding
                            </p>
                        </div>
                        <div className="col-md-6 banner-video-section">
                            <video playsInline autoPlay muted loop>
                                <source src={webm_contentmarketing} type="video/webm" />
                            </video>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ============  what seo ============= --> */}
            <div className="what-section py-5">
                <div className="container">
                    <div className="text-center px-5 what-content-heading">
                        <h1>Content Marketing</h1>
                        <p>
                            Content marketing is the strategy in which the content is created,
                            that content can be in the form of website content and articles/
                            blogs that provide information about a website to us in the form
                            of content can be in the form of a website blog, video content,
                            podcast, e-books, blogging, video content/ Vlogging, Audio
                            Content, Infographic, etc. Paydeer Published your website
                            content E-Mail marketing, templates, promotional content, social
                            media content, blog/articles, paid advertisement content, video
                            graphics, etc. Paydeer focuses on Publishing, Creating, and
                            Distributing content for your target audience online.
                        </p>
                    </div>
                </div>
            </div>

            {/* <!-- ================== services cards ====================== --> */}
            <section className="servic-cards-section">
                <ShortcutService />
            </section>
            {/* =============== what is it content marketing ============ */}
            <div className="what-section pt-5">
                <div className="container">
                    <div className="text-center px-5 what-content-heading">
                        <h1>What Is It?</h1>
                        <p>
                            All the content that you see on a website or newspaper, Such as
                            Texts, Videos, Images, etc. All this comes under content
                            marketing, the main reason for using it is to attract more and
                            more audiences, many big companies have increased their sales by
                            adopting this type of strategy.
                        </p>
                    </div>
                </div>
            </div>
            {/* content marketing services */}
            <section className="smm-services p-4">
                <div className="container">
                    <div className="row justify-content-evenly align-items-center">
                        <div className="col-md-5 content-column-type-seo">
                            <h2 className="heading-type-seo">
                                Paydeer Service Content
                                Marketing Service
                            </h2>
                            <ol className="services-smm-para">
                                <li> Brand awareness</li>
                                <li>Media Visibility</li>
                                <li>Client Engagement</li>
                                <li>Website visitor's traffic</li>
                                <li>Competitive advantage</li>
                            </ol>
                        </div>
                        <div className="col-md-5">
                            <img src={cm_services} class="w-100" alt="smm_services" />
                        </div>
                    </div>
                </div>
            </section>
            {/* unique content */}
            <section className="section-grow-smm">
                <div className="container">
                    <h2 className="heading-type-seo text-center p-5">
                        Paydeer Service Unique Content<br />
                        Marketing Strategy

                    </h2>
                    <div className="row justify-content-evenly pb-4">
                        <div className="col-md-4 col-12">
                            <h5 className="grow-heading-smm">
                                1. Website Objectives

                            </h5>
                            <p className="grow-para-smm">
                                Our company creates the content strategy based on the products and services of your website In this, we work on the pattern of your product and make Indian customers aware by educating them about the services
                            </p>
                        </div>
                        <div className="col-md-4 col-12">
                            <h5 className="grow-heading-smm">
                                2. Content Topics

                            </h5>
                            <p className="grow-para-smm">
                                The content is designed to be attractive across a variety of topics such as social media content, podcast content, video, and graphic content as well as images, which are easy to understand for Indian customers Apart from this, online brochures are also created in which the keywords of the business are targeted.

                            </p>
                        </div>

                    </div>
                    <div className="row justify-content-evenly pb-4">
                        <div className="col-md-4 col-12">
                            <h5 className="grow-heading-smm">
                                3. Content Topics

                            </h5>
                            <p className="grow-para-smm">
                                There are many types of content, from which the content or information about services or offers related to the content website is for the website to educate the Indian customer
                            </p>
                        </div>
                        <div className="col-md-4 col-12">
                            <h5 className="grow-heading-smm">
                                4. Content Topics


                            </h5>
                            <p className="grow-para-smm">
                                If the services are done according to the interest of the Indian customer, your website gets more traffic.

                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========  strategies ============ */}

            <section className="smm-services p-4">
                <div className="container">
                    <h2 className="heading-type-seo text-center pb-4">
                        Why Content Marketing Is Essential <br />
                        For Any Website
                    </h2>
                    <div className="row justify-content-evenly align-items-center">
                        <div className="col-md-5 content-column-type-seo">
                            <ol className="services-smm-para">
                                <li> Content marketing helps your website it boosts brand credibility by content marketing through marketing trust.
                                </li>
                                <li>Upgraded content help put forth your SEO attempts better.</li>
                                <li>Incredible content creation is a practical method to get new leads.</li>
                                <li>Using this approach, you establish expertise, build brand loyalty & awareness, and ensure your business stays on top of mind when potential customers are looking to buy.</li>
                                <li>It helps Lead generation and build Visitors' traffic.</li>
                            </ol>

                        </div>
                        <div className="col-md-5">
                            <img src={why_cm} class="w-100" alt="smm_services" />
                        </div>
                    </div>
                </div>
            </section>
            {/* faq */}
            {/* <!-- ========= faq section  ======= --> */}
            <section className="faq-section">
                <h2 className="process-heading">FAQ (Frequency Asked Questions)</h2>
                <div className="container">
                    <div className="row justify-content-between align-items-center gy-3">
                        <div className="col-md-5 col-12 faq-body p-4">
                            <h5 className="card-title faq-title pb-3">
                                What does content marketing do?
                            </h5>
                            <p className="card-text faq-list collapse" id="collapse-cm-faq">
                                Content marketing provides the best possible answer to the question the Indian visitor
                                sought out through keyword research, content research, content writing, and graphic design
                                promotion and shares.
                            </p>
                            <div className="webdevelopment-button">
                                <button
                                    className="mx-auto button-web-faq"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapse-cm-faq"
                                    aria-expanded="false"
                                    aria-controls="collapseExample"
                                    onclick="(function() { document.getElementById('collapse-cm-faq').classList.remove('show'); })();"
                                >
                                    Learn More
                                </button>
                            </div>

                        </div>

                        <div className="col-md-5 col-12 faq-body p-4">
                            <h5 className="card-title faq-title pb-3">
                                How to content marketing work?
                            </h5>
                            <p className="card-text faq-list collapse" id="collapse-cm-faq1">
                                Content marketing works on increasing the value of your business brand as compared to
                                traditional marketing like
                                <ol>
                                    <li> Customer engagement</li>
                                    <li>Lead generation and nurturing</li>
                                    <li> Supporting sales</li>
                                    <li>through content awareness of the brand</li>
                                </ol>
                            </p>
                            <div className="webdevelopment-button">
                                <button
                                    className="mx-auto button-web-faq"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapse-cm-faq1"
                                    aria-expanded="false"
                                    aria-controls="collapseExample"
                                    onclick="(function() { document.getElementById('collapse-cm-faq1').classList.remove('show'); })();"
                                >
                                    Learn More
                                </button>
                            </div>

                        </div>
                        <div className="col-md-5 col-12 faq-body p-4">
                            <h5 className="card-title faq-title pb-3">What are the leads of content marketing?</h5>
                            <p className="card-text faq-list collapse" id="collapse-cm-faq2">
                                The top benefits of content marketing are increased website traffic, established authority
                                Increased Indian customer trust, and improved conversion rates.
                            </p>
                            <div className="webdevelopment-button">
                                <button
                                    className="mx-auto button-web-faq"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapse-cm-faq2"
                                    aria-expanded="false"
                                    aria-controls="collapseExample"
                                    onclick="(function() { document.getElementById('collapse-cm-faq2').classList.remove('show'); })();"
                                >
                                    Learn More
                                </button>
                            </div>

                        </div>
                        <div className="col-md-5 col-12 faq-body p-4">
                            <h5 className="card-title faq-title pb-3">What is the content marketing process?</h5>
                            <p className="card-text faq-list collapse" id="collapse-cm-faq3">
                                Research, Create Content, Optimize, Published, Promote, and Measure.
                            </p>
                            <div className="webdevelopment-button">
                                <button
                                    className="mx-auto button-web-faq"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapse-cm-faq3"
                                    aria-expanded="false"
                                    aria-controls="collapseExample"
                                    onclick="(function() { document.getElementById('collapse-cm-faq3').classList.remove('show'); })();"
                                >
                                    Learn More
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


        </>
    );
}
