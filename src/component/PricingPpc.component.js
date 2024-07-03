import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
//import { Routes, Route, BrowserRouter} from 'react-router-dom';
import './assests/pricing_table.css';


const PricingPpc = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <section className="table-section">
            <div className="container">
                <div className="container-pricing-table">
                    <div className="container-heading">
                        <div className="package-heading py-5">
                            <h1>PPC Packages<span>Paydeer Packages</span></h1>
                        </div>

                        <p>We offer you the best PPC packages in India through our Paydeer of Digital Marketing company
                            in Jaipur. Get quality PPC (Google Ads, Facebook/Instagram Ads) management services by our
                            certified PPC experts team. You must buy India's Best PPC Package If you are still low on ad
                            conversion, leads or traffic or revenue to Your Website. Our team will help your business grow
                            by
                            making your website or brand more visible through Facebook/Instagram or Google Ads. Apart from
                            Google Ads, We provide PPC for Facebook, LinkedIn, Instagram and other platforms. Our quality
                            PPC packages are perfect for your esteemed organisation if you're looking to generate maximum
                            business enquiries or sales.</p>
                    </div>
                    <div className="pricing-area ">
                        <div className="row">
                            {/* <!----------1st package start-------------> */}
                            <div className="col-sm-4">
                                <div className="price-table">
                                    <div className="price-head">
                                        <h4>Basic PPC Plan</h4>
                                        <h6>₹ 11999 INR/M</h6>
                                    </div>
                                    <div className="price-content">
                                        <ul>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i>Ad Budget Less than
                                                INR 50000/M</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Any 1 Network Account
                                                Set-up
                                                (Google Ads, Facebook/Instagram)</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Upto 50 Keywords</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Contract Min. 30 Days
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i>Text Ads</li>

                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Display Ads
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Shopping Ads</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> App Installation Ads
                                            </li>
                                            <li className="webhub-price">
                                                <i className="fa fa-check clrright"></i> Landing Page Selection
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> GEO Targeting Setup
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Setup Conversion Code
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-close clrclose"></i> Competitor Analysis
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Keyword Optimization
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Ad Copy Optimization
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Keyword Bid
                                                Optimization</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Landing Page
                                                Optimization Consultation</li>
                                            <li className="webhub-price"><i className="fa fa-close clrclose"></i> Landing Page Design
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-close clrclose"></i> CTR Analysis
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-close clrclose"></i> A/B Testing</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Keyword Refinements
                                                (if required)</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Bid Refinements (if
                                                required)</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Google Analytics
                                                Setup Basic</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Google Ads Conversion
                                                Setup
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Weekly Reports</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Monthly Reports
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i>Advanced Reports
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Shared Account
                                                Manager
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Support
                                                Email, Chat & Call</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Landing Page Creation
                                                INR 3500 Extra</li>

                                            <Link to="/contact"><li className="price-button"> <a href="/contact">Proceed Now</a></li></Link>
                                        </ul>
                                    </div>

                                </div>

                            </div>
                            {/* <!-----------1st end---------------->
                        <!---------------2nd start---------------> */}
                            <div className="col-sm-4">
                                <div className="price-table">
                                    <div className="price-head">
                                        <h4>Standard</h4>
                                        <h6>₹ 20% of Total Budget</h6>
                                    </div>
                                    <div className="price-content">
                                        <ul>

                                            <li className="webhub-price"><i className="fa fa-check clrright"></i>Ad Budget 51k to 1
                                                Lakh/M</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> All Network Account
                                                Set-up
                                                (Google Ads, Facebook/Instagram)</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Upto 100 Keywords
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Contract Min. 30 Days
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Text Ads</li>

                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Display Ads
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Shopping Ads</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> App Installation Ads
                                            </li>
                                            <li className="webhub-price">
                                                <i className="fa fa-check clrright"></i> Landing Page Selection
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> GEO Targeting Setup
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Setup Conversion Code
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-close clrclose"></i> Competitor Analysis
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Keyword Optimization
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Ad Copy Optimization
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Keyword Bid
                                                Optimization</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Landing Page
                                                Optimization Consultation</li>
                                            <li className="webhub-price"><i className="fa fa-close clrclose"></i> Landing Page Design
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> CTR Analysis
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-close clrclose"></i> A/B Testing</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Keyword Refinements
                                                (if required)</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Bid Refinements (if
                                                required)</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Google Analytics
                                                Setup Basic</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Google Ads Conversion
                                                Setup
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Weekly Reports</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Monthly Reports
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Advanced Reports
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-close clrclose"></i> Dedicated Account
                                                Manager
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Support
                                                Email, Chat & Call</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Landing Page Creation
                                                INR 3500 Extra</li>
                                            <Link to="/contact"><li className="price-button"> <a href="/contact">Proceed Now</a></li></Link>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                            {/* <!-----------------2nd end------------------>
                        <!---------------3rd start--------------------> */}
                            <div className="col-sm-4">
                                <div className="price-table">
                                    <div className="price-head">
                                        <h4>Professional</h4>
                                        <h6>₹ 15% of Total Budget</h6>
                                    </div>
                                    <div className="price-content">
                                        <ul>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i>Ad Budget More Than 1
                                                Lakh/M</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> All Network Account
                                                Set-up
                                                (Google Ads, Facebook/Instagram)</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Unlimited Keywords
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Text Ads</li>

                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Display Ads
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Shopping Ads</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> App Installation Ads
                                            </li>
                                            <li className="webhub-price">
                                                <i className="fa fa-check clrright"></i> Landing Page Selection
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> GEO Targeting Setup
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Setup Conversion Code
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Competitor Analysis
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Keyword Optimization
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Ad Copy Optimization
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Keyword Bid
                                                Optimization</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Landing Page
                                                Optimization Consultation</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Landing Page Design
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> CTR Analysis
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> A/B Testing</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Keyword Refinements
                                                (if required)</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Bid Refinements (if
                                                required)</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Google Analytics
                                                Setup Basic</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Google Ads Conversion
                                                Setup
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Weekly Reports</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Monthly Reports
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Advanced Reports
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Dedicated Account
                                                Manager
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Support
                                                Email, Chat & Call</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Landing Page Creation
                                                INR 3500 Extra</li>
                                            <Link to="/contact"><li className="price-button"> <a href="/contact">Proceed Now</a></li></Link>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                            {/* <!----------------3rd end------------------------> */}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PricingPpc;