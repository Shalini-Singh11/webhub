import React, { useEffect } from 'react';
import "./assests/digital-part.css";
import ShortcutService from './ServicesShortcuts.component';
import pymtGatewy_UPI_Through from './assests/imagesAll/pymtGatewy_UPI_Through.svg';
import pymntGatwy_Digital_pay from './assests/imagesAll/pymntGatwy_Digital_pay.svg';
export default function ServicePaymentGateway() {
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
              <img src={pymntGatwy_Digital_pay} className="w-100" alt="payment_gateway" />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ============  what pg ============= --> */}
      <div className="what-section py-5">
        <div className="container">
          <div className="text-center px-5 what-content-heading">
            <h1>Payment Gateway</h1>
            <p>An e-commerce service provider provides Paydeer with a payment gateway to allow merchants
              to accept credit cards, UPI payments, and direct payments. Paydeer offers the most
              accessible integration, online onboarding, feature-rich checkout, and best-in-class
              performance. We offer a wide range of payment methods across credit cards, debit cards, net
              banking, EMI Banking, UPI, and wallets.
            </p>
          </div>
        </div>
      </div>
      {/* <!-- ================== services cards ====================== --> */}
      <section className="servic-cards-section">
        <ShortcutService />
      </section>
      {/*=============pg help you to do================*/}
      <section className="smo-offered-section py-5">
        <h2 className="offered-heading mb-4">
          Digital payments can help you do more
        </h2>
        <p className="offered-para">Our payment solutions will help you run your business more efficiently.
        </p>
        <div className="container">
          <div className="row justify-content-evenly align-items-center">
            <div className="col-md-2 col-6">
              <div className="contain-services-offer d-flex align-items-center justify-content-center">
                <h4 className="heading-solutions-web">Native OTP</h4>
              </div>
            </div>
            <div className="col-md-2 col-6">
              <div className="contain-services-offer d-flex align-items-center justify-content-center">
                <h4 className="heading-solutions-web">
                  Instant refund
                </h4>
              </div>
            </div>
            <div className="col-md-2 col-6">
              <div className="contain-services-offer d-flex align-items-center justify-content-center">
                <h4 className="heading-solutions-web">
                  Recurring payments

                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========pay with upi========= */}
      <section className="ranking-section my-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7 d-flex flex-column">
              <h1 className="heading-ranking-site"> Pay with UPI through Paydeer
              </h1>
              <p>Here's the fastest, easiest way to accept payments. Wehubzone allows you to
                accept payments via popular UPI apps at checkout. Choose from a number of
                transaction flows to suit your business requirements.</p>
              <img src={pymtGatewy_UPI_Through} className="ranking-images" alt="ranking-site" />
            </div>
            <div className="col-md-5">
              <div className="left-side-box-content">
                <h5>
                  Simple, transparent pricing
                </h5>
                <p>Accept digital payments via 100+ payment methods with the Paydeer payment gateway.
                  Paydeer makes it easy to get started!</p>
                <h5>Payouts from payment gateways are settled more quickly</h5>
                <p>Even on bank holidays, you can accept payments and get fast settlements.</p>

                <h5>
                  Designed for huge scales
                </h5>
                <p>Our online payment gateway offers reliability and scales with your business. Transact
                  fast
                  and smoothly without any downtimes.
                </p>
                <h5>Payment gateways that accept UPI in India</h5>
                <p>With Paydeer Payments, you can provide your customers with the best UPI checkout
                  experience, with the highest success rate.</p>
                <h5>Make sure your UPI payment gateway integration is right
                  UPI intent flow
                </h5>
                <p>Allow customers to make payments faster by automatically launching UPI apps on their
                  mobile
                  devices. It is recommended for all mobile payments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* faq */}
      <section className="faq-section">
        <h2 className="process-heading">FAQ (Frequency Asked Questions)</h2>
        <div className="container">
          <div className="row justify-content-evenly align-items-center py-3">
            <div className="col-md-5 col-12 faq-body p-4 mb-2">
              <h5 className="card-title faq-title pb-3">
                What is a Payment Gateway?
              </h5>
              <p className="card-text faq-list collapse" id="collapse-em-faq">
                Payment gateways help merchants accept payments by transferring financial information from
                their
                merchant websites to issuing banks, card associations, and online wallets. Payment gateways
                are
                used by both online and offline businesses.

                E-commerce relies heavily on payment gateways to facilitate the online transaction process,
                which is the realization of value.
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
                What features are provided by Payment Gateway by
                Paydeer Payments?
              </h5>
              <p className="card-text faq-list collapse" id="collapse-em-faq1">
                Paydeer Payments offers a wide range of payment gateway features such as instant refunds
                including, instant settlements, etc. Paydeer Payments help businesses with domestic
                payment
                collection.
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
              <h5 className="card-title faq-title pb-3">What payment modes are supported on Paydeer Payments?</h5>
              <p className="card-text faq-list collapse" id="collapse-em-faq2">
                Paydeer Payments supports the widest range of payment modes with a single integration. We
                support over 100+ payment modes such as Credit and Debit cards (Visa, Mastercard, Rupay),
                Net Banking and Paytm and other wallets, UPI via BHIM UPI, Google Pay, PhonePe, and EMI options.
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
  )
}
