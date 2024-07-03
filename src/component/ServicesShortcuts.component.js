import React, { useEffect } from 'react';
import './assests/services_shortcuts_digital-payment.css';
import { Link } from 'react-router-dom';
// services-shortcuts
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
export default function ServicesShortcuts() {
    useEffect(() => {
        window.scrollTo(0,0)
      },[])
  return (
    <>
               
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 col-sm-6 col-6">
                            <Link to="/service/DigitalMarketing/SEO" className="text-decoration-none">
                                <div className='card_service'>
                                    <img src={sky_right_zigzag} className="w-100" alt="crds" />
                                    <div className="inner-image-heading-both position-absolute d-flex flex-column justify-content-center align-items-center">
                                        <img className="inner-services-img pb-2" src={seo_servi} alt="seo" />
                                        <h5 className="heading-inner-services">SEO</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-2 col-sm-6 col-6">
                            <Link to="/service/DigitalMarketing/SMM" className="text-decoration-none">
                                <div className='card_service'>
                                    <img src={zigzag_card_blue} className="w-100" alt="crds" />
                                    <div className="inner-image-heading-both position-absolute d-flex flex-column justify-content-center align-items-center">
                                        <img className="inner-services-img pb-2" src={smm_servi} alt="smm" />
                                        <h5 className="heading-inner-services">SMM</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-2 col-sm-6 col-6">
                            <Link to="/service/DigitalMarketing/SMO" className="text-decoration-none">
                                <div className='card_service'>
                                    <img src={double_light_zigzag_card} className="w-100" alt="crds" />
                                    <div className="inner-image-heading-both position-absolute d-flex flex-column justify-content-center align-items-center">
                                        <img className="inner-services-img pb-2" src={smo_servi} alt="smo" />
                                        <h5 className="heading-inner-services">SMO</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-2 col-sm-6 col-6">
                            <Link to="/service/DigitalMarketing/PPC" className="text-decoration-none">
                                <div className='card_service'>
                                    <img src={light_zigzag_card} className="w-100" alt="crds" />
                                    <div className="inner-image-heading-both position-absolute d-flex flex-column justify-content-center align-items-center">
                                        <img className="inner-services-img pb-2" src={ppc_servi} alt="ppc" />
                                        <h5 className="heading-inner-services">PPC</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-2 col-sm-6 col-6">
                            <Link to="/service/CRO" className="text-decoration-none">
                                <div className='card_service'>
                                    <img src={zigzag_card_blue} className="w-100" alt="crds" />
                                    <div className="inner-image-heading-both position-absolute d-flex flex-column justify-content-center align-items-center">
                                        <img className="inner-services-img pb-2" src={cro_servi} alt="cro" />
                                        <h5 className="heading-inner-services">CRO</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-2 col-sm-6 col-6">
                            <Link to="/service/ContentMarketing" className="text-decoration-none">
                                <div className='card_service'>
                                    <img src={sky_right_zigzag} className="w-100" alt="crds" />
                                    <div className="inner-image-heading-both position-absolute d-flex flex-column justify-content-center align-items-center">
                                        <img className="inner-services-img pb-2" src={content_marketing_servi} alt="content_marketing" />
                                        <h5 className="heading-inner-services">Content Marketing</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-2 col-sm-6 col-6">
                            <Link to="/service/EmailMarketing" className="text-decoration-none">
                                <div className='card_service'>
                                    <img src={double_light_zigzag_card} className="w-100" alt="crds" />
                                    <div className="inner-image-heading-both position-absolute d-flex flex-column justify-content-center align-items-center">
                                        <img className="inner-services-img pb-2" src={email_marketing_servi} alt="email marketing" />
                                        <h5 className="heading-inner-services">Email Marketing</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-2 col-sm-6 col-6">
                            <Link to="/service/AppDevelopment" className="text-decoration-none">
                                <div className='card_service'>
                                    <img src={light_zigzag_card} className="w-100" alt="crds" />
                                    <div className="inner-image-heading-both position-absolute d-flex flex-column justify-content-center align-items-center">
                                        <img className="inner-services-img pb-2" src={mobile_develop_servi} alt="mobile development" />
                                        <h5 className="heading-inner-services">Mobile Development</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-2 col-sm-6 col-6">
                            <Link to="/service/UiUx-Design" className="text-decoration-none">
                                <div className='card_service'>
                                    <img src={light_zigzag_card} className="w-100" alt="crds" />
                                    <div className="inner-image-heading-both position-absolute d-flex flex-column justify-content-center align-items-center">
                                        <img className="inner-services-img pb-2" src={ui_ux_servi} alt="ui/ux design" />
                                        <h5 className="heading-inner-services">UI / UX Design</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-2 col-sm-6 col-6">
                            <Link to="/service/WebDevelopement" className="text-decoration-none">
                                <div className='card_service'>
                                    <img src={zigzag_card_blue} className="w-100" alt="crds" />
                                    <div className="inner-image-heading-both position-absolute d-flex flex-column justify-content-center align-items-center">
                                        <img className="inner-services-img pb-2" src={web_development_servi} alt="web development" />
                                        <h5 className="heading-inner-services">Web Developement</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-2 col-sm-6 col-6">
                            <Link to="/service/ProductListing" className="text-decoration-none">
                                <div className='card_service'>
                                    <img src={sky_right_zigzag} className="w-100" alt="crds" />
                                    <div className="inner-image-heading-both position-absolute d-flex flex-column justify-content-center align-items-center">
                                        <img className="inner-services-img pb-2" src={product_listing_servi} alt="seo" />
                                        <h5 className="heading-inner-services">Product Listing</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-2 col-sm-6 col-6">
                            <Link to="/service/PaymentGateway" className="text-decoration-none">
                                <div className='card_service'>
                                    <img src={light_zigzag_card} className="w-100" alt="crds" />
                                    <div className="inner-image-heading-both position-absolute d-flex flex-column justify-content-center align-items-center">
                                        <img className="inner-services-img pb-2" src={payment_gateway_servi} alt="seo" />
                                        <h5 className="heading-inner-services">Payment Gateway</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

    </>
  )
}
