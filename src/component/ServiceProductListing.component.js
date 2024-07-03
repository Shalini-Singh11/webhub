import React, { useEffect } from 'react';
import "./assests/digital-part.css";
import ShortcutService from './ServicesShortcuts.component';
// inner-services-images
import webm_productListing from './assests/webm_webhub/product-listing.webm';
// rough
import smo_service_include from './assests/imagesAll/smo-service-include.svg';
export default function ServiceProductListing() {
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
                                Product Listing Optimization
                            </h1>
                            <p className="p_para">
                                We are a reliable and affordable digital agency and talent network.
                                we channel creativity,
                                colors, copy and code to help our clients with better br branding
                            </p>
                        </div>
                        <div className="col-md-6 banner-video-section">
                            <video playsInline autoPlay muted loop>
                                <source src={webm_productListing} type='video/webm' />
                            </video>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- ============  what pl ============= --> */}
            <div className="what-section py-5">
                <div className="container">
                    <div className="text-center px-5 what-content-heading">
                        <h1>Product Listing Optimization</h1>
                        <p>PLPs (Product Listing Page) are pages on various applications that display a list of products
                            based on any category, description, and search query.
                            They are essential to the E-commerce process as they funnel Indian traffic to product detail
                            pages and are more likely to convert customers.
                            Our PLPs optimization affects SEO rankings and internal link building. We focus on ads
                            strategy and visibility through keywords, Indian customer reviews, and promotion strategy.
                        </p>
                    </div>
                </div>
            </div>

            {/* <!-- ================== services cards ====================== --> */}
            <section className="servic-cards-section">
                <ShortcutService />
            </section>
            {/* <!-- =========  pl service includes ============== --> */}
            <section className="types-seo-section">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-7 content-column-type-seo">
                            <h2 className="heading-type-seo">
                                Paydeer Product Listing Optimization Services In India:
                            </h2>
                            <ol className="smo-service-include-lists">
                                <li>SEO-based Product title, description, feature image, URL, back-end
                                    keyword,
                                    photography services, and Onboarding services.</li>
                                <li> Enhance brand content and optimise back-end keywords.</li>
                                <li> Listing & Cataloging, product feature optimization (Paydeer creates
                                    eye-catching authentic images for your brand), URL optimization.</li>
                                <li> Account management and payment reconciliation & marketing strategy
                                    planning and
                                    execution.</li>
                                <li> Sponsored website & app advertisement.</li>

                            </ol>
                        </div>
                        <div className="col-md-5">
                            <img src={smo_service_include} class="w-100" alt="included-services" />
                        </div>
                    </div>
                </div>
            </section>
            {/* ====== smo offered services ========== */}
            <section className="smo-offered-section py-5">
                <h2 className="offered-heading mb-4">
                    Product Listing Strategies To Boost Sales
                </h2>
                <div className="container">
                    <div className="row justify-content-evenly align-items-center">
                        <div className="col-md-3 col-12">
                            <div className="contain-services-Strategies d-flex align-items-center justify-content-center">
                                <h4 className="heading-Strategies-plo">Making your product a star through keyword research and attractive descriptions</h4>
                            </div>
                        </div>
                        <div className="col-md-3 col-12">
                            <div className="contain-services-Strategies d-flex align-items-center justify-content-center">
                                <h4 className="heading-Strategies-plo px-1">
                                    We also include multiple videos and images of your products
                                </h4>
                            </div>
                        </div>
                        <div className="col-md-3 col-12">
                            <div className="contain-services-Strategies d-flex align-items-center justify-content-center">
                                <h4 className="heading-Strategies-plo">
                                    Enhance product and service review

                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ranking factor */}
            <section className="smm-services p-4">
                <div className="container">
                    <h2 className="heading-type-seo text-center pb-4">
                        Paydeer Product Listing Optimization Ranking Factors
                    </h2>
                    <div className="row justify-content-evenly align-items-center">
                        <div className="col-md-5 content-column-type-seo">
                            <ol className="services-smm-para">
                                <li>By SEO, we optimise titles including media, web design analysis, keywords, social
                                    content, marketing strategy and product listing which plays a vital role in ranking.
                                </li>
                                <li>Long sentences are divided into different parts through bullet points which makes the
                                    content look catchy and User-Friendly.
                                </li>
                                <li>We target the Indian audience, which uses hidden keywords to improve the ranking.</li>
                                <li>HTML coding is used to create the website, which is accessed via a web browser and
                                    boosts sales and rankings on any search engine.</li>
                            </ol>

                        </div>
                        <div className="col-md-5">
                            <img src={smo_service_include} class="w-100" alt="smm_services" />
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
                                What is a product listing optimization service?
                            </h5>
                            <p className="card-text faq-list collapse" id="collapse-pl-faq">
                                Product listing optimization is specific for product descriptions, common questions and
                                answers about the product, images, videos, Indian customer reviews, etc.
                            </p>
                            <div className="webdevelopment-button">
                                  <button
                                    className="mx-auto button-web-faq"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapse-pl-faq"
                                    aria-expanded="false"
                                    aria-controls="collapseExample"
                                    onclick="(function() { document.getElementById('collapse-pl-faq').classList.remove('show'); })();"
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>

                        <div className="col-md-5 col-12 faq-body p-4">
                            <h5 className="card-title faq-title pb-3">
                                How is a product listing beneficial for an E-Commerce
                                business?
                            </h5>
                            <p className="card-text faq-list collapse" id="collapse-pl-faq1">
                                Product listening on E-Commerce portals allows you to run your business 24/7 with low
                                operation costs, and it is easier for you to start and manage products and services.
                            </p>
                            <div className="webdevelopment-button">
                                  <button
                                    className="mx-auto button-web-faq"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapse-pl-faq1"
                                    aria-expanded="false"
                                    aria-controls="collapseExample"
                                    onclick="(function() { document.getElementById('collapse-pl-faq1').classList.remove('show'); })();"
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>
                        <div className="col-md-5 col-12 faq-body p-4">
                            <h5 className="card-title faq-title pb-3">What is covered under Product Listing?</h5>
                            <p className="card-text faq-list collapse" id="collapse-pl-faq2">
                                All products according to Indian customers, pricing of the products, advertising, review of
                                the customers, High-resolution images, manufacturers, and branding.
                            </p>
                            <div className="webdevelopment-button">
                                  <button
                                    className="mx-auto button-web-faq"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapse-pl-faq2"
                                    aria-expanded="false"
                                    aria-controls="collapseExample"
                                    onclick="(function() { document.getElementById('collapse-pl-faq2').classList.remove('show'); })();"
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>
                        <div className="col-md-5 col-12 faq-body p-4">
                            <h5 className="card-title faq-title pb-3">Why is Product listing optimization essential?</h5>
                            <p className="card-text faq-list collapse" id="collapse-pl-faq3">
                                If you want your product to reach Indian customers in this ongoing competition and make
                                maximum profit by running your website on the front page then product listing optimization
                                becomes very important for you.
                            </p>
                            <div className="webdevelopment-button">
                                  <button
                                    className="mx-auto button-web-faq"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapse-pl-faq3"
                                    aria-expanded="false"
                                    aria-controls="collapseExample"
                                    onclick="(function() { document.getElementById('collapse-pl-faq3').classList.remove('show'); })();"
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


