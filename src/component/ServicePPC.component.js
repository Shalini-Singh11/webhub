import React, { useEffect } from 'react';
import "./assests/digital-part.css";
import ShortcutService from './ServicesShortcuts.component';
// inner services images

import webm_ppc from "./assests/webm_webhub/ppc.webm";
import ppc_darkblue_circle from "./assests/imagesAll/ppc_darkblue-circle.svg";
import ppc_lightsky_circle from "./assests/imagesAll/ppc_lightsky-circle.svg";
import ppc_purple_circle from "./assests/imagesAll/ppc_purple-circle.svg";
import ppc_sky_circle from "./assests/imagesAll/ppc_sky-circle.svg";

export default function ServicePPC() {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  return (
    <>
      <section className="page-banner mb-5">
        <div className="container">
          <div className="row align-items-center justify-content-around">
            <div className="col-md-5 main-heading-paragraph">
              <h1 className="h1_heading">PPC(Pay Per Click)</h1>
              <p className="p_para">
                We are a reliable and affordable digital agency and talent
                network. we channel creativity, colors, copy and code to help
                our clients with better br branding
              </p>
            </div>
            <div className="col-md-6 banner-video-section">
              <video playsInline autoPlay muted loop>
                <source src={webm_ppc} type="video/webm" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ============  what seo ============= --> */}
      <div className="what-section py-5">
        <div className="container">
          <div className="text-center px-5 what-content-heading">
            <h1>Pay Per Click</h1>
            <p>
              Pay-per-click online campaigns have a standard advertising model,
              which helps drive traffic to your website through advertising,
              which is preferable because it pays for advertiser's publications.
              It is Internet marketing, which involves paying advertisers a fee
              for clicking on the ads. We provide instant visitor traffic &
              better results, flexible budget advertising, real-time tracking
              ability, increased Indian local visibility and an honest marketing
              strategy.
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
            <div className="col-md-5 col-12 shadow-border-ppc">
              <h5 className="heading-features">1</h5>
              <p className="p-2">
                <b>Value-Efficient -</b> Because you only pay when the user
                reaches your website, it's an excellent value for money. Your
                payment can be as large or as small as you want.
              </p>
            </div>
            <div className="col-md-5 col-12 shadow-border-ppc">
              <h5 className="heading-features">2</h5>
              <p className="p-2">
                <b>Target -</b> Indian Audience can be chosen based on location,
                language, and device
              </p>
            </div>
          </div>
          <div className="row align-items-center justify-content-evenly pb-4">
            <div className="col-md-5 col-12 shadow-border-ppc">
              <h5 className="heading-features">3</h5>
              <p className="p-2">
                <b>Quantitative -</b> Can be used to measure the effectiveness
                and carefulness of a PPC campaign, you can determine how much
                return on investment you can make in the future
              </p>
            </div>
          </div>
          <div className="row align-items-center justify-content-evenly pb-4">
            <div className="col-md-5 col-12 shadow-border-ppc">
              <h5 className="heading-features">4</h5>
              <p className="p-2">
                <b>Customization -</b> You can use minor adjustments to your
                website to improve the campaign best
              </p>
            </div>
            <div className="col-md-5 col-12 shadow-border-ppc">
              <h5 className="heading-features">5</h5>
              <p className="p-2">
                <b>Groundwork resources -</b> Paydeer has a number of online
                courses and training materials to help you develop your website
                skills.
              </p>
            </div>
          </div>
          <div className="row align-items-center justify-content-evenly">
            <div className="col-md-5 col-12 shadow-border-ppc">
              <h5 className="heading-features">6</h5>
              <p className="p-2">
                <b>Faster -</b> You can see your PPC effect immediately with
                organic search engine Optimization. It can also optimise
                possibilities for Indian customers.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ppc-circle-content */}
      <section className="ppc-circle py-5">
        <div className="container">
          <div className="row justify-content-evenly align-items-center">
            <div className="col-md-2 col-sm-6 col-6 image-circle-sky d-flex align-items-center justify-content-center">
              {/* <img
                src={ppc_sky_circle}
                className="position-absolute"
                alt="arrow_right"
              /> */}
              <h4 className="heading-ppc-circle">
                Rapid traffic & better result
              </h4>
            </div>
            <div className="col-md-2 col-sm-6 col-6 image-circle-purple d-flex align-items-center justify-content-center">
              {/* <img
                src={ppc_purple_circle}
                className="position-absolute"
                alt="arrow_right"
              /> */}
              <h4 className="heading-ppc-circle">Advertisement creation</h4>
            </div>
            <div className="col-md-2 col-sm-6 col-6 image-circle-lightsky d-flex align-items-center justify-content-center">
              {/* <img
                src={ppc_lightsky_circle}
                className="position-absolute"
                alt="arrow_right"
              /> */}
              <h4 className="heading-ppc-circle">
                Flexible Cost effective advertising
              </h4>
            </div>
            <div className="col-md-2 col-sm-6 col-6 image-circle-drkblue d-flex align-items-center justify-content-center">
              {/* <img
                src={ppc_darkblue_circle}
                className="position-absolute"
                alt="arrow_right"
              /> */}
              <h4 className="heading-ppc-circle">
                Higher conversions and increased sales revenue
              </h4>
            </div>
            <div className="col-md-2 col-sm-6 col-6 image-circle-sky d-flex align-items-center justify-content-center">
              {/* <img
                src={ppc_sky_circle}
                className="position-absolute"
                alt="arrow_right"
              /> */}
              <h4 className="heading-ppc-circle">Increase localvisibility</h4>
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
                What is the purpose of PPC (Pay per Click)?
              </h5>
              <p className="card-text faq-list collapse" id="collapse-ppc-faq">
                Pay per click online advertising format allows the market to pay for its advertisements by
                clicking different social media sites.
              </p>
              <div className="webdevelopment-button">
                <button
                  className="mx-auto button-web-faq"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse-ppc-faq"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  onclick="(function() { document.getElementById('collapse-ppc-faq').classList.remove('show'); })();"
                >
                  Learn More
                </button>
              </div>
            </div>

            <div className="col-md-5 col-12 faq-body p-4">
              <h5 className="card-title faq-title pb-3">
                What is Paydeer PPC (pay-per-click) advertising?
              </h5>
              <p className="card-text faq-list collapse" id="collapse-ppc-faq1">
                We provide tracking opportunities for your website. PPC is one of the best options for great
                financial return, and it also helps to advertise on various social media sites like
                Instagram, Facebook, Twitter, YouTube, Pinterest, LinkedIn, etc.
              </p>
              <div className="webdevelopment-button">
                <button
                  className="mx-auto button-web-faq"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse-ppc-faq1"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  onclick="(function() { document.getElementById('collapse-ppc-faq1').classList.remove('show'); })();"
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="col-md-5 col-12 faq-body p-4">
              <h5 className="card-title faq-title pb-3">How to develop an effective PPC campaign strategy?</h5>
              <p className="card-text faq-list collapse" id="collapse-ppc-faq2">
                By Defined website goals, Ads, Words, Indian audience, targeting, leading page optimization
                analysis and giving feedback to clients.
              </p>
              <div className="webdevelopment-button">
                <button
                  className="mx-auto button-web-faq"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse-ppc-faq2"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  onclick="(function() { document.getElementById('collapse-ppc-faq2').classList.remove('show'); })();"
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="col-md-5 col-12 faq-body p-4">
              <h5 className="card-title faq-title pb-3">What are the Challenges in PPC (Pay-Per-Click)</h5>
              <p className="card-text faq-list collapse" id="collapse-ppc-faq3">
                <ol>
                  <li> Increased advertising spam</li>
                  <li> Customer Trusting issues</li>
                  <li>Low expert knowledge</li>
                </ol>
              </p>
              <div className="webdevelopment-button">
                <button
                  className="mx-auto button-web-faq"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse-ppc-faq3"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  onclick="(function() { document.getElementById('collapse-ppc-faq3').classList.remove('show'); })();"
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
