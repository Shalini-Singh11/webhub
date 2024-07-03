import React, { useEffect } from 'react';
import "./assests/services_shortcuts_develop-design.css";
import content_marketing_servi from "./assests/imagesAll/contentMar_servi_develop.svg";
import cro_servi from "./assests/imagesAll/cro_servi_develop.svg";
import email_marketing_servi from "./assests/imagesAll/em_servi_develop.svg";
import mobile_develop_servi from "./assests/imagesAll/app_servi_develop.svg";
import ppc_servi from "./assests/imagesAll/ppc_servi_develop.svg";
import seo_servi from "./assests/imagesAll/seo_servi_develop.svg";
import smm_servi from "./assests/imagesAll/smm_servi_develop.svg";
import smo_servi from "./assests/imagesAll/smo_servi_develop.svg";
import ui_ux_servi from "./assests/imagesAll/design_servi_develop.svg";
import web_development_servi from "./assests/imagesAll/web_servi_develop.svg";
import product_listing_servi from "./assests/imagesAll/productListing_servi_develop.svg";
import payment_gateway_servi from "./assests/imagesAll/paymentGateway_servi_develop.svg";
import { Link } from 'react-router-dom';
export default function ServicesShortcuts_developDesign() {
    useEffect(() => {
        window.scrollTo(0,0)
      },[])
  return (
    <>
       <div className="container">
                    <div className="row align-items-center justify-content-evenly">

                        <div className="col-md-2 col-6 d-flex flex-column justify-content-evenly align-items-center card-service mt-2">
                            <div className="card-image">
                                <img src={seo_servi} />
                            </div>
                            <div className="card-text">SEO</div>
                        </div>
                        <div className="col-md-2 col-6 d-flex flex-column justify-content-evenly align-items-center card-service mt-2">
                            <div className="card-image">
                                <img src={smo_servi} />
                            </div>
                            <div className="card-text">SMO</div>
                        </div>
                        <div className="col-md-2 col-6 d-flex flex-column justify-content-evenly align-items-center card-service mt-2">
                            <div className="card-image">
                                <img src={smm_servi} />
                            </div>
                            <div className="card-text">SMM</div>
                        </div>
                        <div className="col-md-2 col-6 d-flex flex-column justify-content-evenly align-items-center card-service mt-2">
                            <div className="card-image">
                                <img src={ppc_servi} />
                            </div>
                            <div className="card-text">PPC</div>
                        </div>
                        <div className="row align-items-center justify-content-evenly">
                            <div className="col-md-2 col-6 d-flex flex-column justify-content-evenly align-items-center card-service mt-2">

                                <div className="card-image">
                                    <img src={cro_servi} />
                                </div>
                                <div className="card-text">CRO</div>

                            </div>
                            <div className="col-md-2 col-6 d-flex flex-column justify-content-evenly align-items-center card-service mt-2">

                                <div className="card-image">
                                    <img src={content_marketing_servi} />
                                </div>
                                <div className="card-text">Content-Marketing</div>

                            </div>
                            <div className="col-md-2 col-6 d-flex flex-column justify-content-evenly align-items-center card-service mt-2">

                                <div className="card-image">
                                    <img src={email_marketing_servi} />
                                </div>
                                <div className="card-text">E-mail marketing</div>

                            </div>
                            <div className="col-md-2 col-6 d-flex flex-column justify-content-evenly align-items-center card-service mt-2">

                                <div className="card-image">
                                    <img src={ui_ux_servi} />
                                </div>
                                <div className="card-text">UI/UX Design</div>
                            </div>
                        </div>
                        <div className="row align-items-center justify-content-evenly">
                            <div className="col-md-2 col-6 d-flex flex-column justify-content-evenly align-items-center card-service mt-2">

                                <div className="card-image">
                                    <img src={mobile_develop_servi} />
                                </div>
                                <div className="card-text">Mobile-App-Development</div>

                            </div>
                            <div className="col-md-2 col-6 d-flex flex-column justify-content-evenly align-items-center card-service mt-2">

                                <div className="card-image">
                                    <img src={web_development_servi} />
                                </div>
                                <div className="card-text">Web-Development</div>

                            </div>
                            <div className="col-md-2 col-6 d-flex flex-column justify-content-evenly align-items-center card-service mt-2">

                                <div className="card-image">
                                    <img src={payment_gateway_servi} />
                                </div>
                                <div className="card-text">Payment Gateway</div>

                            </div>
                            <div className="col-md-2 col-6 d-flex flex-column justify-content-evenly align-items-center card-service mt-2">

                                <div className="card-image">
                                    <img src={product_listing_servi} />
                                </div>
                                <div className="card-text">Product-Listing</div>

                            </div>
                        </div>
                    </div>
                </div>
    </>
  )
}
