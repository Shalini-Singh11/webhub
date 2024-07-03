import React, { useEffect } from 'react';
import "./assests/digital-part.css";
import ShortcutService from './ServicesShortcuts.component';
// inner-services-images
import smo_service_include from './assests/imagesAll/smo-service-include.svg';
import webm_smo from './assests/webm_webhub/Smo.webm';
import importance_webdev from "./assests/imagesAll/importance_webdev.svg";
export default function ServiceSEO() {
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
                                SMO(Social Media Optimization)
                            </h1>
                            <p className="p_para">
                                We are a reliable and affordable digital agency and talent network.
                                we channel creativity,
                                colors, copy and code to help our clients with better br branding
                            </p>
                        </div>
                        <div className="col-md-6 banner-video-section">
                            <video playsInline autoPlay muted loop>
                                <source src={webm_smo} type='video/webm' />
                            </video>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- ============  what seo ============= --> */}
            <div className="what-section py-5">
                <div className="container">
                    <div className="text-center px-5 what-content-heading">
                        <h1>Search Media Optimization</h1>
                        <p>SMO services involve using social media platforms like Facebook, LinkedIn, Twitter, and
                            Instagram to promote businesses, products, or brands. This is one of the social media
                            marketing techniques that can be used to improve a website's branding and help a business
                            succeed. Since most target audiences use social networking sites, Social Media Optimization
                            can be beneficial for businesses and individuals.

                        </p>
                    </div>
                </div>
            </div>

            {/* <!-- ================== services cards ====================== --> */}
            <section className="servic-cards-section">
                <ShortcutService />
            </section>

            {/* =============== objective smo ============ */}
            <div className="what-section pt-5">
                <div className="container">
                    <div className="text-center px-5 what-content-heading">
                        <h1>Objective Of SMO</h1>
                        <p>The goal of this type of optimization is to increase revenue, business, and
                            visitors to a site. This is done through Search engine optimization, which
                            places the site's link in various locations, and SMO Packages and services,
                            which develop a strategy that includes blogs, communities, and popular
                            networks on social sites. The process also encourages visitors to
                            participate in commenting, recommending, and sharing messages. This way,
                            businesses can share their services and products with thousands of potential
                            customers across the web.

                        </p>
                    </div>
                </div>
            </div>
            {/* <!-- =========  smo service includes ============== --> */}
            <section className="types-seo-section">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-7 content-column-type-seo">
                            <h2 className="heading-type-seo">
                                Paydeer SMO Services Include:
                            </h2>
                            <ol className="smo-service-include-lists">
                                <li>
                                    Creating brilliant and creative online networking arrangements and procedures can help
                                    improve your company's brand awareness.</li>

                                <li>Having a large number of subscribers/followers on Facebook, Google, Instagram, and
                                    Twitter can help promote your services or products and reach a larger audience.
                                </li>

                                <li>Active participation and membership in different social channels can also help manage
                                    and improve your online reputation.
                                </li>
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
                    Paydeer Offered Services For Social Media
                </h2>
                <p className="offered-para">Paydeer offers social media services to help promote and advertise your brand. We will
                    strategize your social media posts to make the most of popular platforms such as Facebook,
                    Twitter, Instagram, LinkedIn, and Pinterest. Social media marketing is a powerful tool that
                    should not be ignored.
                    Social media is a great way to reach a lot of people and promote your brand. Paydeer can
                    help you make the most of social media and efficiently promote your brand. Here are some of
                    the social media services we offer:
                </p>
                <div className="container">
                    <div className="row justify-content-evenly align-items-center">
                        <div className="col-md-2 col-6">
                            <div className="contain-solution-web d-flex align-items-center justify-content-center">
                                <h4 className="heading-solutions-web">Facebook Advertisement</h4>
                            </div>
                        </div>
                        <div className="col-md-2 col-6">
                            <div className="contain-solution-web d-flex align-items-center justify-content-center">
                                <h4 className="heading-solutions-web">
                                    Instagram Marketing
                                </h4>
                            </div>
                        </div>
                        <div className="col-md-2 col-6">
                            <div className="contain-solution-web d-flex align-items-center justify-content-center">
                                <h4 className="heading-solutions-web">
                                    LinkedIn Marketing

                                </h4>
                            </div>
                        </div>
                        <div className="col-md-2 col-6">
                            <div className="contain-solution-web d-flex align-items-center justify-content-center">
                                <h4 className="heading-solutions-web">
                                    YouTube Marketing
                                </h4>
                            </div>
                        </div>
                        <div className="col-md-2 col-6">
                            <div className="contain-solution-web d-flex align-items-center justify-content-center">
                                <h4 className="heading-solutions-web">
                                    App Installation Ads
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- =======  smo importance ============ --> */}
            <section className="ranking-section my-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-7 d-flex flex-column">
                            <h1 className="heading-ranking-site"> Benefits of Paydeer SMO Services
                            </h1>
                            <img src={importance_webdev} className="ranking-images" alt="ranking-site" />
                        </div>
                        <div className="col-md-5">
                            <div className="left-side-box-content">
                                <p>Our team of professional technical experts at the best SMO Company in Jaipur increases your
                                    website's chances of securing the top rankings. We have completed and delivered many
                                    projects to our clients on time.<br />
                                    Our company provides you with expert SMO services. Using social media sites and techniques,
                                    we also increase page views on your website and help you build links.<br />
                                    We at Paydeer of Digital Marketing have become known for our custom, innovative, and
                                    successfully implemented social media optimization strategies, including blogs, forums, and
                                    adding.<br />
                                    We offer affordable SMO packages to boost your website's visibility and credibility, as
                                    proven by top rankings on top search engines & social networks, and to uncover the needs of
                                    your clients.<br />
                                    <ul>
                                        <li>You will receive more targeted traffic with Paydeer's digital marketing company.</li>
                                        <li>Increasing the number of customers and the reach of your business.</li>
                                        <li>Boosting your product or service's online brand awareness.</li>
                                        <li>An increase in inbound links of high quality.</li>
                                        <li>Effective and brilliant web-based publicising at a low cost.</li>
                                        <li>Increased visibility, higher rankings, and much more.</li>

                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ========= faq section  ======= --> */}
            {/* <section className="faq-section">
                <h2 className="process-heading">FAQ (Frequency Asked Questions)</h2>
                <div className="container">
                    <div className="row justify-content-between align-items-center gy-3">
                        <div className="col-md-5 col-12 faq-body p-4">
                            <h5 className="card-title faq-title pb-3">
                                Why should I choose the Paydeer agency for SEO?
                            </h5>
                            <p className="card-text faq-list collapse" id="collapse-smo-faq">
                                <ol>
                                    <li>Highly-trained SEO experts.</li>
                                    <li>Keyword targeting and tracking.</li>
                                    <li>Content relevancy and website analysis.</li>
                                </ol>
                            </p>
                            <div className="webdevelopment-button">
                                <button
                                    className="mx-auto button-web-faq"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapse-smo-faq"
                                    aria-expanded="false"
                                    aria-controls="collapseExample"
                                    onclick="(function() { document.getElementById('collapse-smo-faq').classList.remove('show'); })();"
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>

                        <div className="col-md-5 col-12 faq-body p-4">
                            <h5 className="card-title faq-title pb-3">
                                Why is SEO important for a website?
                            </h5>
                            <p className="card-text faq-list collapse" id="collapse-smo-faq1">
                                In today's digital era where online is dominated, SEO has a huge contribution in making a
                                place in the digital world, without this you cannot get your business ranked on the front
                                page and your business cannot reach in heights.
                            </p>
                            <div className="webdevelopment-button">
                                <button
                                    className="mx-auto button-web-faq"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapse-smo-faq1"
                                    aria-expanded="false"
                                    aria-controls="collapseExample"
                                    onclick="(function() { document.getElementById('collapse-smo-faq1').classList.remove('show'); })();"
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>
                        <div className="col-md-5 col-12 faq-body p-4">
                            <h5 className="card-title faq-title pb-3">What are the SEO plans to increase traffic on your
                                website?</h5>
                            <p className="card-text faq-list collapse" id="collapse-smo-faq2">
                                E-mail list building, business blogs, expanding the Indian customer base, Webinars & online
                                community, brand awareness, building credibility, social media posting, on-page
                                optimization, site-speed analysis, web designing check, and backlink analysis.
                            </p>
                            <div className="webdevelopment-button">
                                <button
                                    className="mx-auto button-web-faq"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapse-smo-faq2"
                                    aria-expanded="false"
                                    aria-controls="collapseExample"
                                    onclick="(function() { document.getElementById('collapse-smo-faq2').classList.remove('show'); })();"
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>
                        <div className="col-md-5 col-12 faq-body p-4">
                            <h5 className="card-title faq-title pb-3">What are the benefits of SEO for your website?</h5>
                            <p className="card-text faq-list collapse" id="collapse-smo-faq3">
                                <ol>
                                    <li> Software optimization</li>
                                    <li>Improved Social networking</li>
                                    <li>Improved SERP ranking</li>
                                    <li>Content marketing</li>
                                    <li>Site map optimization</li>
                                    <li>Generate quality-based leads</li>
                                    <li>Increased site revenue</li>
                                </ol>
                            </p>
                            <div className="webdevelopment-button">
                                <button
                                    className="mx-auto button-web-faq"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapse-smo-faq3"
                                    aria-expanded="false"
                                    aria-controls="collapseExample"
                                    onclick="(function() { document.getElementById('collapse-smo-faq3').classList.remove('show'); })();"
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    )
}
