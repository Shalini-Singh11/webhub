import React, { useEffect } from "react";
import "./assests/home.css";
import spacecute_laptop from './assests/imagesAll/spacecute_laptop.png';
import space_star from './assests/imagesAll/space_star.png';
import space_productlisting from './assests/imagesAll/space_productlisting.png';
import space_payment from './assests/imagesAll/space_payment.png';
import space_location from './assests/imagesAll/space_location.png';
import space_travel_getintouch from './assests/imagesAll/space_travel_getintouch.png';
import Floating_LOgo from './assests/imagesAll/floating_faviconLogo.svg';
//fa fa icons
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
// service section
import webdevelop_servi from './assests/imagesAll/webdevelop_servi.svg';
import ui_ux_servi from './assests/imagesAll/ui-ux-servi.svg';
import smo_servi from './assests/imagesAll/smo-servi.svg';
import productlisting_servi from './assests/imagesAll/productlisting_servi.svg';
import ppc_servi from './assests/imagesAll/ppc-servi.svg';
import e_mail_marketing_servi from './assests/imagesAll/e-mail-marketing-servi.svg';
// Founders
import umeshSir from "./assests/imagesAll/founders/Umesh.JPG";
import PngVinodSir from "./assests/imagesAll/founders/Vinod.png";
import PngKishanSir from "./assests/imagesAll/founders/Kishan.png";
import WebmSpaceAnimation from "./assests/webm_webhub/spaceanimation.webm";
import WebmAboutus from "./assests/webm_webhub/Aboutus.webm";
export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <section className="home">
        <div id="carouselExampleIndicators" className="carousel slide lazy" data-bs-ride="carousel" data-interval="3000">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="home-banner home-banner-1">
                <div class="container">
                  <div className="row justify-content-center align-items-center">
                    <div className="col-lg-5 col-md-5">
                      <h1 className="home_heading mb-3">
                        We Build Up Your Business
                      </h1>
                      <p className="home-para">
                        We bring out the best in brands, design fluid experiences,<br /> and grow your website through bright marketing
                      </p>
                      <a href="/service" class="btn btn-home-main ">know more</a>
                    </div>
                    <div className="col-lg-6 col-md-6 banner-main-image d-flex justify-content-center">
                      <img src={space_star} alt="webdevelopement" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="home-banner home-banner-2">
                <div class="container">
                  <div className="row justify-content-center align-items-center">
                    <div className="col-lg-5 col-md-5">
                      <h1 className="home_heading mb-3">
                        Web Development
                      </h1>
                      <p className="home-para">
                        We bring out the best in brands, design fluid experiences,<br /> and grow your website through bright marketing
                      </p>
                      <a href="/service" class="btn btn-home-main ">know more</a>
                    </div>
                    <div className="col-lg-6 col-md-6 banner-main-image d-flex justify-content-center">
                      <img src={spacecute_laptop} alt="webdevelopement" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="home-banner home-banner-2">
                <div class="container">
                  <div className="row justify-content-center align-items-center">
                    <div className="col-lg-5 col-md-5">
                      <h1 className="home_heading mb-3">
                        Digital Marketing
                      </h1>
                      <p className="home-para">
                        We bring out the best in brands, design fluid experiences,<br /> and grow your website through bright marketing
                      </p>
                      <a href="/service" class="btn btn-home-main ">know more</a>
                    </div>
                    <div className="col-lg-6 col-md-6 banner-main-image d-flex justify-content-center">
                      <video autoPlay muted loop playsInline>
                        <source src={WebmSpaceAnimation} type="video/webm" />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="home-banner home-banner-2">
                <div class="container">
                  <div className="row justify-content-center align-items-center">
                    <div className="col-lg-5 col-md-5">
                      <h1 className="home_heading mb-3">
                        Product Listing
                      </h1>
                      <p className="home-para">
                        We bring out the best in brands, design fluid experiences,<br /> and grow your website through bright marketing
                      </p>
                      <a href="/service" class="btn btn-home-main ">know more</a>
                    </div>
                    <div className="col-lg-6 col-md-6 banner-main-image d-flex justify-content-center">
                      <img src={space_productlisting} alt="webdevelopement" />

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="home-banner home-banner-2">
                <div class="container">
                  <div className="row justify-content-center align-items-center">
                    <div className="col-lg-5 col-md-5">
                      <h1 className="home_heading mb-3">
                        Payment Gateway
                      </h1>
                      <p className="home-para">
                        We bring out the best in brands, design fluid experiences,<br /> and grow your website through bright marketing
                      </p>
                      <a href="/service" class="btn btn-home-main ">know more</a>
                    </div>
                    <div className="col-lg-6 col-md-6 banner-main-image d-flex justify-content-center">
                      <img src={space_payment} alt="webdevelopement" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true">
              <span class="ti-angle-left slider-icon"></span>
            </span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true">
              <span class="ti-angle-right slider-icon"></span>
            </span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      {/* home-main-section-end */}
      {/* our-features */}
      <section className="whychoose-us-ui-ux-section">
        <div className="container">
          <div>
            <img src={Floating_LOgo} className="floating-logo position-set1 position-absolute" alt="float-cloud" />
          </div>
          <div className="home-heading m-5 p-5">
            <h6>WHY CHOOSE US</h6>
            <h2>Feature</h2>
          </div>
          <div className="row row-whychoose-us-ui-ux py-3">
            <div className="col-md-3 col-12 column-whychoose-us-ui-ux">
              <div className="whychoose-us-ui-ux-three-circle-cards">
                <div className="heading-box-cards">
                  <h4>Faster And Responsive Website</h4>
                </div>
                <p>
                  We are getting better creative & digital marketing services
                  and online advertising practices to gain a competitive edge
                  over other companies in India and worldwide through SEO.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-12 column-whychoose-us-ui-ux-two">
              <div className="whychoose-us-ui-ux-three-circle-cards-two">
                <div className="heading-box-cards">
                  <h4>User-Friendly & Secure Website</h4>
                </div>
                <p>
                  Website development services can help you market your product
                  digitally, make your company internet savvy, and engage
                  customers to increase sales.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-12 column-whychoose-us-ui-ux">
              <div className="whychoose-us-ui-ux-three-circle-cards">
                <div className="heading-box-cards">
                  <h4>Strong Visual Branding And SEO Content</h4>
                </div>
                <p>
                  The idea is that the solution to increasing digital marketing
                  KPIs is to boost your sales and social sharing like Facebook
                  promotions, e-mail marketing, content marketing, etc.
                </p>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="text-center col-md-6 online-marketing-page">
                <h4>Comprehensive online marketing packages</h4>
                <p>
                  Social media marketing is a great way to build your brand and
                  reach new customers. There are many ways to do this, such as
                  media management, SEO, and SMO, as well as getting your
                  product listing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* our-features-end */}
      {/* <!-- about us --> */}
      <section id="about" className="p-4">
        <div className="container">
          <div className="home-heading">
            <h6>WHO WE ARE</h6>
            <h2>About Us</h2>
          </div>
          <div className="row aboutus-webm-contant align-items-center">
            <div className="col-md-7">
              <div>
                <img src={Floating_LOgo} className="floating-logo position-set1 pb-5" alt="float-cloud" />
              </div>
              <p>
                Since our agency was founded in 2020, <b>“PAYDEER SERVICE PVT LTD”</b> has
                been a one-stop digital marketing agency with high competencies
                in Search Engine Optimisation (SEO), Web design &amp;
                development, content Creation, Search Engine Marketing (SEO),
                Digital Marketing (Creative Design tool, Brand marketing, Design
                solution), Website E-commerce, and Social Media Management
                (SMM).
              </p>
              <div>
                <img src={Floating_LOgo} className="floating-logo position-set start-50 position-absolute" alt="float-cloud" />
              </div>
            </div>
            <div className="col-md-5 about-us-webm">
              <video autoPlay muted loop playsInline>
                <source src={WebmAboutus} type="video/webm" />
              </video>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- about us end --> */}
      {/* services */}
      <section className="services-section py-5">
        <div className="container">
          <div className="home-heading">
            <h6>CHECK OUR SERVICES</h6>
            <h2>Services</h2>
          </div>
          <div className="row justify-content-evenly align-items-center mb-4">
            <div className="col-md-3">
              <div className="box_homeServi d-flex justify-content-around align-items-center flex-column">
                <h4>Web development</h4>
                <img
                  src={webdevelop_servi}
                  className="w-25"
                  alt="initiative_cybdeer"
                />
                <p>“Responsive Designs Rock”</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box_homeServi1 d-flex justify-content-around align-items-center flex-column">
                <h4>UI & UX Design</h4>
                <img
                  src={ui_ux_servi}
                  className="w-25"
                  alt="Objective_cybdeer"
                />
                <p>“Simple is Elegant”</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box_homeServi2 d-flex justify-content-around align-items-center flex-column">
                <h4>Product Listing</h4>
                <img
                  src={productlisting_servi}
                  className="w-25"
                  alt="keyResult_cybdeer"
                />
                <p>“Optimize for Search”</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-evenly align-items-center">
            <div className="col-md-3">
              <div className="box_homeServi2 d-flex justify-content-around align-items-center flex-column">
                <h4>SMO</h4>
                <img
                  src={smo_servi}
                  className="w-25"
                  alt="initiative_cybdeer"
                />
                <p>“Social Ads Convert”</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box_homeServi1 d-flex justify-content-around align-items-center flex-column">
                <h4>E-Mail Marketing</h4>
                <img
                  src={e_mail_marketing_servi}
                  className="w-25"
                  alt="Objective_cybdeer"
                />
                <p>“Email Success Secrets”</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box_homeServi d-flex justify-content-around align-items-center flex-column">
                <h4>Pay Per Click</h4>
                <img
                  src={ppc_servi}
                  className="w-25"
                  alt="keyResult_cybdeer"
                />
                <p>“Budget for Success”</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* services-end */}
      {/* founders */}
      <section className="our-founders-section py-5">
        <div className="home-heading pb-3">
          <h2>Founders</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="our-founders">
                <div className="pic">
                  <img src={PngVinodSir} />
                </div>
                <div className="founders-content">
                  <h3 className="title">Vinod Parihar</h3>
                  <span className="post">CEO</span>
                </div>
                <ul className="social">
                  <li>
                    <a href="https://www.linkedin.com/in/vinod-parihar/" target="_blank"><FaFacebookF /></a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/vinod-parihar/"><FaLinkedinIn /></a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/vinod-parihar/"><FaInstagram /></a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="our-founders">
                <div className="pic">
                  <img src={PngKishanSir} />
                </div>
                <div className="founders-content">
                  <h3 className="title">Kishan Jakhar</h3>
                  <span className="post">Director/CMO</span>
                </div>
                <ul className="social">
                  <li>
                    <a href="https://www.linkedin.com/in/kishanjakhar/"><FaFacebookF /></a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/kishanjakhar/"><FaLinkedinIn /></a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/kishanjakhar/"><FaInstagram /></a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="our-founders">
                <div className="pic">
                  <img src={umeshSir} />
                </div>
                <div className="founders-content">
                  <h3 className="title">Umesh Kumar</h3>
                  <span className="post">V.P.(Business Development)</span>
                </div>
                <ul className="social">
                  <li>
                    <a href="https://www.linkedin.com/in/umesh-kumar-b7b579154/" target="_blank"><FaFacebookF /></a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/umesh-kumar-b7b579154/"><FaLinkedinIn /></a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/umesh-kumar-b7b579154/"><FaInstagram /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* founders-end */}
      {/* get-in-touch */}
      <section className="get-in-touch pt-4">
        <div className="container">
          <div className="home-heading">
            <h6>CONTACT US</h6>
            <h2>Get In Touch</h2>
          </div>
          <div className="get-in-touch-section">
            <div className="video-get-in-touch d-flex">
              <div className="get-webm w-100">
                <img src={space_location} className="w-50" />
                <img src={space_travel_getintouch} className="w-50" />
                {/* <img src={Spaceget_in_touch} className="w-50"/>  */}
              </div>
              <div className="ready-to-boom text-left">
                <div>
                  <img src={Floating_LOgo} className="floating-logo position-set2" alt="float-cloud" />
                </div>
                <h5>We are ready to boom your business to the next move</h5>
                <p>
                  Share your needs with us and discover how we can help you to
                  achieve your business goals through digital marketing in just
                  30 minutes.
                </p>
                <a href="/contact"><button className="get-in-touch-button text-center">
                  Contact Us
                </button></a>
                <div>
                  <img src={Floating_LOgo} className="floating-logo position-set2" alt="float-cloud" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* get-in-touch-end */}
    </>
  );
}

