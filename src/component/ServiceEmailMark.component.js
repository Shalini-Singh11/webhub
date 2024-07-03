import React, { useEffect } from 'react';
import "./assests/digital-part.css";
import ShortcutService from "./ServicesShortcuts.component";
import webm_emailmarketing from "./assests/webm_webhub/emailmarketing.webm";
import email_leadmanage from "./assests/imagesAll/email-leadmanage.svg";
import em_benefits from "./assests/imagesAll/em-benefits.svg";
export default function ServiceEmailMark() {
    useEffect(() => {
        window.scrollTo(0,0)
      },[])
    return (
        <>
            <section className="page-banner mb-5">
                <div className="container">
                    <div className="row align-items-center justify-content-around">
                        <div className="col-md-5 main-heading-paragraph">
                            <h1 className="h1_heading">E-mail Marketing</h1>
                            <p className="p_para">
                                We are a reliable and affordable digital agency and talent
                                network. we channel creativity, colors, copy and code to help
                                our clients with better br branding
                            </p>
                        </div>
                        <div className="col-md-6 banner-video-section">
                            <video playsInline autoPlay muted loop>
                                <source src={webm_emailmarketing} type="video/webm" />
                            </video>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- ============  what seo ============= --> */}
            <div className="what-section py-5">
                <div className="container">
                    <div className="text-center px-5 what-content-heading">
                        <h1>E-mail Marketing</h1>
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
                        <h1>
                            Paydeer E-Mail Marketing
                            <br />
                            Lead Magnet Strategy
                        </h1>
                        <p className="p-5">
                            Lead magnets are commonly used when sending email messages,
                            discount coupons, checklists, reports, audio files, e-books, video
                            training files, communication templates, software trials, free
                            webinars, newsletters, blog subscriptions and so on.
                        </p>
                        <img
                            src={email_leadmanage}
                            className="w-50"
                            alt="email-strategies"
                        />
                    </div>
                </div>
            </div>

            {/* ==================  benefitsa ======================== */}
            <section className="section-grow-smm">
                <div className="container">
                    <h2 className="heading-type-seo text-center p-5">
                    Benefits Of E-Mail Marketing
                    </h2>
                    <div className="row justify-content-evenly pb-4">
                        <div className="col-md-4 col-12">
                            <h5 className="grow-heading-smm">1. Price-effective</h5>
                            <p className="grow-para-smm">
                                E-Mail marketing can be much lower than many other forms of
                                marketing. There are no advertising fees, media space costs, or
                                printing costs.
                            </p>
                        </div>
                        <div className="col-md-4 col-12">
                            <h5 className="grow-heading-smm">2. The permission-based</h5>
                            <p className="grow-para-smm">
                                The Indian customer’s list will consist of people who have
                                rapidly chosen to receive your emails. Indian Customers who are
                                genuinely interested in your products and services will be more
                                likely to engage with your business.
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-evenly pb-4">
                        <div className="col-md-4 col-12">
                            <h5 className="grow-heading-smm">
                                3. Personalization and Segmentation
                            </h5>
                            <p className="grow-para-smm">
                                E-mail marketing lets you personalise messages. You can also
                                segment your marketing list so that your customers receive
                                messages from you that they are interested in the product or the
                                service which will encourage their engagement with your website.
                            </p>
                        </div>
                        <div className="col-md-4 col-12">
                            <h5 className="grow-heading-smm">4. Content Topics</h5>
                            <p className="grow-para-smm">
                                Paydeer promotions allow people to share a link to your
                                website and immediately follow up with customers'
                                call-to-action.
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-evenly pb-4">
                        <div className="col-md-4 col-12">
                            <h5 className="grow-heading-smm">5. Measurable & Time-saving</h5>
                            <p className="grow-para-smm">
                                Through automated E-mail marketing, you can send emails to
                                customers based on their actions on your website.
                            </p>
                        </div>
                        <div className="col-md-4 col-12">
                            <img src={em_benefits} class="w-100" alt="grow_smm_services" />
                        </div>
                    </div>
                </div>
            </section>
            {/* ==================== faq  =============== */}
            <section className="faq-section">
                <h2 className="process-heading">FAQ (Frequency Asked Questions)</h2>
                <div className="container">
                    <div className="row justify-content-evenly align-items-center py-3">
                        <div className="col-md-5 col-12 faq-body p-4 mb-2">
                            <h5 className="card-title faq-title pb-3">
                                What techniques does Paydeer use for E-mail marketing?
                            </h5>
                            <p className="card-text faq-list collapse" id="collapse-em-faq">
                                Newsletters, Announcements, Invitations to an event, Marketing offers, welcome emails, free
                                webinars, or just shipping a newsletter, etc. These are the techniques that Paydeer uses
                                for your website through E-mail marketing.
                            </p>
                            <div className="webdevelopment-button">
                                <button
                                    className="mx-auto button-web-faq"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapse-em-faq"
                                    aria-expanded="false"
                                    aria-controls="collapseExample"
                                    onclick="(function() { document.getElementById('collapse-em-faq').classList.remove('show'); })();"
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>

                        <div className="col-md-5 col-12 faq-body p-4 mb-2">
                            <h5 className="card-title faq-title pb-3">
                                What are the primary principles of E-mail marketing?
                            </h5>
                            <p className="card-text faq-list collapse" id="collapse-em-faq1">
                                E-mail marketing is the process of targeting your audience and Indian Customers by email. It
                                helps to increase conversions and revenue by providing valuable information to customers to
                                help them achieve their goals. This is the primary principle of email marketing to satisfy
                                your Indian customers.
                            </p>
                            <div className="webdevelopment-button">
                                <button
                                    className="mx-auto button-web-faq"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapse-em-faq1"
                                    aria-expanded="false"
                                    aria-controls="collapseExample"
                                    onclick="(function() { document.getElementById('collapse-em-faq1').classList.remove('show'); })();"
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>
                        <div className="col-md-5 col-12 faq-body p-4">
                            <h5 className="card-title faq-title pb-3">What is the most important thing to keep in mind while
                                doing E-mail marketing?</h5>
                            <p className="card-text faq-list collapse" id="collapse-em-faq2">
                                You should never over-promote your website through email campaigns, because if you keep on
                                E-Mailing the Indian customers or subscribers on a daily basis, then it may cause problems
                                for them, and they may not like to revisit your website.
                            </p>
                            <div className="webdevelopment-button">
                                <button
                                    className="mx-auto button-web-faq"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapse-em-faq2"
                                    aria-expanded="false"
                                    aria-controls="collapseExample"
                                    onclick="(function() { document.getElementById('collapse-em-faq2').classList.remove('show'); })();"
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
