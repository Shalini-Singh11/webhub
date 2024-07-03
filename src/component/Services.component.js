import React, { useEffect } from 'react';
import "./assests/services.css";
import { Link } from 'react-router-dom';
import double_light_zigzag_card from './assests/imagesAll/double-light-zigzag-card.svg';
import light_zigzag_card from './assests/imagesAll/light-skyzigzag-card.svg';
import sky_right_zigzag from './assests/imagesAll/sky-right-zigzag-cards.svg';
import zigzag_card_blue from './assests/imagesAll/zigzag-card-blue.svg';
import content_marketing_servi from './assests/imagesAll/content-marketing-servi.svg';
import cro_servi from './assests/imagesAll/cro-servi.svg';
import email_marketing_servi from './assests/imagesAll/e-mail-marketing-servi.svg';
import mobile_develop_servi from './assests/imagesAll/mobile-app-development-servi.svg';
import ppc_servi from './assests/imagesAll/ppc-servi.svg';
import seo_servi from './assests/imagesAll/seo-sevi.svg';
import smm_servi from './assests/imagesAll/smm-servi.svg';
import smo_servi from './assests/imagesAll/smo-servi.svg';
import ui_ux_servi from './assests/imagesAll/ui-ux-servi.svg';
import web_development_servi from './assests/imagesAll/webdevelop_servi.svg';
import product_listing_servi from './assests/imagesAll/productlisting_servi.svg';
import payment_gateway_servi from './assests/imagesAll/paymentgateway_servi.svg';
import arrow_right from './assests/imagesAll/arrow-right_more_services.svg';
export default function Services() {
    useEffect(() => {
        window.scrollTo(0,0)
      },[])
    return (
        <div>
            <section className="all-services-section text-center bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="service-heading overflow-hidden mb-5 text-center">
                                <h2 className="d-block text-uppercase mb-2">Check Our <span>Services</span></h2>
                                <h4 className="pb-2 text-capitalize position-relative d-inline-block">Services</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-md-3 col-sm-6 col-6">
                            <Link to="/service/DigitalMarketing/SEO" className="text-decoration-none">
                                <div className='card_service'>
                                    <img src={sky_right_zigzag} className="background_image w-100" alt="crds" />
                                    <img className="w-50 inner-cards-services" src={seo_servi} alt="seo" />
                                    <h5 className="heading-servives-cards">SEO</h5>
                                    <img src={arrow_right} className="arrow_right" alt="arrow_right" />
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-3 col-sm-6 col-6">
                            <Link to="/service/DigitalMarketing/SMM" className="text-decoration-none">
                                <div className='card_service'>
                                    <img src={zigzag_card_blue} className="background_image w-100" alt="crds" />
                                    <img className="w-50 inner-cards-services" src={smm_servi} alt="smm" />
                                    <h5 className="heading-servives-cards">SMM</h5>
                                    <img src={arrow_right} className="arrow_right" alt="arrow_right" />
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-3 col-sm-6 col-6">
                            <Link to="/service/DigitalMarketing/SMO" className="text-decoration-none">
                                <div className='card_service'>
                                    <img src={double_light_zigzag_card} className="background_image w-100" alt="crds" />
                                    <img className="w-50 inner-cards-services" src={smo_servi} alt="smo" />
                                    <h5 className="heading-servives-cards">SMO</h5>
                                    <img src={arrow_right} className="arrow_right" alt="arrow_right" />
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-3 col-sm-6 col-6">
                            <Link to="/service/DigitalMarketing/PPC" className="text-decoration-none">
                                <div className='card_service'>
                                    <img src={light_zigzag_card} className="background_image w-100" alt="crds" />
                                    <img className="w-50 inner-cards-services" src={ppc_servi} alt="ppc" />
                                    <h5 className="heading-servives-cards">PPC</h5>
                                    <img src={arrow_right} className="arrow_right" alt="arrow_right" />
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-3 col-sm-6 col-6">
                            <Link to="/service/CRO" className="text-decoration-none">
                                <div className='card_service'>
                                    <img src={zigzag_card_blue} className="background_image w-100" alt="crds" />
                                    <img className="w-50 inner-cards-services" src={cro_servi} alt="cro" />
                                    <h5 className="heading-servives-cards">CRO</h5>
                                    <img src={arrow_right} className="arrow_right" alt="arrow_right" />
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-3 col-sm-6 col-6">
                            <Link to="/service/ContentMarketing" className="text-decoration-none">
                                <div className='card_service'>
                                    <img src={sky_right_zigzag} className="background_image w-100" alt="crds" />
                                    <img className="w-50 inner-cards-services" src={content_marketing_servi} alt="content_marketing" />
                                    <h5 className="heading-servives-cards">Content Marketing</h5>
                                    <img src={arrow_right} className="arrow_right" alt="arrow_right" />
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-3 col-sm-6 col-6">
                            <Link to="/service/AppDevelopment" className="text-decoration-none">
                                <div className='card_service'>
                                    <img src={light_zigzag_card} className="background_image w-100" alt="crds" />
                                    <img className="w-50 inner-cards-services" src={mobile_develop_servi} alt="mobile development" />
                                    <h5 className="heading-servives-cards">Mobile Development</h5>
                                    <img src={arrow_right} className="arrow_right" alt="arrow_right" />
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-3 col-sm-6 col-6">
                            <Link to="/service/EmailMarketing" className="text-decoration-none">
                                <div className='card_service'>
                                    <img src={double_light_zigzag_card} className="background_image w-100" alt="crds" />
                                    <img className="w-50 inner-cards-services" src={email_marketing_servi} alt="email marketing" />
                                    <h5 className="heading-servives-cards">Email Marketing</h5>
                                    <img src={arrow_right} className="arrow_right" alt="arrow_right" />
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-3 col-sm-6 col-6">
                            <Link to="/service/UiUx-Design" className="text-decoration-none">
                                <div className='card_service'>
                                    <img src={light_zigzag_card} className="background_image w-100" alt="crds" />
                                    <img className="w-50 inner-cards-services" src={ui_ux_servi} alt="ui/ux design" />
                                    <h5 className="heading-servives-cards">UI / UX Design</h5>
                                    <img src={arrow_right} className="arrow_right" alt="arrow_right" />
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-3 col-sm-6 col-6">
                            <Link to="/service/WebDevelopement" className="text-decoration-none">
                                <div className='card_service'>
                                    <img src={zigzag_card_blue} className="background_image w-100" alt="crds" />
                                    <img className="w-50 inner-cards-services" src={web_development_servi} alt="web development" />
                                    <h5 className="heading-servives-cards">Web Developement</h5>
                                    <img src={arrow_right} className="arrow_right" alt="arrow_right" />
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-3 col-sm-6 col-6">
                            <Link to="/service/ProductListing" className="text-decoration-none">
                                <div className='card_service'>
                                    <img src={sky_right_zigzag} className="background_image w-100" alt="crds" />
                                    <img className="w-50 inner-cards-services" src={product_listing_servi} alt="seo" />
                                    <h5 className="heading-servives-cards">Product Listing</h5>
                                    <img src={arrow_right} className="arrow_right" alt="arrow_right" />
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-3 col-sm-6 col-6">
                            <Link to="/service/PaymentGateway" className="text-decoration-none">
                                <div className='card_service'>
                                    <img src={light_zigzag_card} className="background_image w-100" alt="crds" />
                                    <img className="w-50 inner-cards-services" src={payment_gateway_servi} alt="seo" />
                                    <h5 className="heading-servives-cards">Payment Gateway</h5>
                                    <img src={arrow_right} className="arrow_right" alt="arrow_right" />
                                </div>
                            </Link>
                        </div>
                    </div>
                    {/* div sec div */}
                </div>
            </section>
        </div>
    )
}
