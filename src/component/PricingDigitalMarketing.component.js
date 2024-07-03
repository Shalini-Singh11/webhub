import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
//import { Routes, Route, BrowserRouter} from 'react-router-dom';
import './assests/pricing_table.css';

const PricingDigitalMarketing = () => {
    useEffect(() => {
        window.scrollTo(0,0)
      },[])
    return (
        <>
            <section className="table-section">
                <div className="container">
                    <div className="container-heading">
                        <div className="package-heading py-5">
                            <h1>Digital Marketing Packages<span>Paydeer Packages</span></h1>
                        </div>
                        <p>Paydeer provides a very affordable digital marketing package in India. We offer digital
                            marketing services in many cities just like Jaipur, Delhi, Mumbai, Chennai, Bangalore, Hyderabad
                            and Kolkata. Our digital marketing packages start from INR 26000/Month and they are
                            so much in demand in India. These are many digital marketing services including SEO, SMM, Paids
                            Ads Management, Blog Writing, Lead Generations Campaign, Online Reputations Management, App
                            Installation Etc.

                            In order to help you reach your target audience, we have developed various customized digital
                            marketing packages. These packages are suitable for any size company whether it's small, a
                            startup, or an enterprise. To grow your business, you need proper marketing strategies and an
                            affordable digital marketing package.</p>
                    </div>
                    <div className="pricing-area">
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="price-table">
                                    <div className="price-head">
                                        <h4>SEO PACKAGES</h4>
                                        <h6>Best For Individuals</h6>
                                    </div>
                                    <div className="price-content">
                                        <ul>
                                            <li><strong> Min. Contract 4
                                                Months - 1 Year</strong></li>
                                            <li className="ami-price"><i className="fa fa-hand-o-right"></i> Top 10 Guarantee - 40%*
                                                - 70%*</li>
                                            <li className="ami-price"><i className="fa fa-hand-o-right"></i> Initial Research</li>
                                            <li className="ami-price"><i className="fa fa-hand-o-right"></i> Local SEO </li>
                                            <li className="ami-price"><i className="fa fa-hand-o-right"></i> Off Page SEO </li>
                                            <li className="ami-price"><i className="fa fa-hand-o-right"></i> On Page SEO</li>
                                            <li className="ami-price"><i className="fa fa-hand-o-right"></i> Status And Report
                                            </li>


                                            <Link to="/pricing/DigitalMarketing/SEO"><li className="price-button"> <a href="/pricing/DigitalMarketing/SEO">Explore</a></li></Link>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="price-table">
                                    <div className="price-head">
                                        <h4>SMO PACKAGES</h4>
                                        <h6>Best For Individuals</h6>
                                    </div>
                                    <div className="price-content">
                                        <ul>
                                            <li><strong>Min. Contract 1 Month</strong></li>
                                            <li className="ami-price"><i className="fa fa-hand-o-right"></i> Instagram Marketing
                                            </li>
                                            <li className="ami-price"><i className="fa fa-hand-o-right"></i> Facebook Marketing
                                            </li>
                                            <li className="ami-price"><i className="fa fa-hand-o-right"></i> Twitter Marketing </li>
                                            <li className="ami-price"><i className="fa fa-hand-o-right"></i> Pinterest Marketing
                                            </li>
                                            <li className="ami-price"><i className="fa fa-hand-o-right"></i> Linkedin Marketing
                                            </li>
                                            <li className="ami-price"><i className="fa fa-hand-o-right"></i> YouTube Marketing </li>

                                            <Link to="/pricing/DigitalMarketing/SMO"><li className="price-button"> <a href="/pricing/DigitalMarketing/SMO">Explore</a></li></Link>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="price-table">
                                    <div className="price-head">
                                        <h4>SMM PACKAGES</h4>
                                        <h6>Best For Individuals</h6>
                                    </div>
                                    <div className="price-content">
                                        <ul>
                                            <li><strong>Min. Contract 1 Month</strong></li>
                                            <li className="ami-price"><i className="fa fa-hand-o-right"></i> Ads Budget - Rs 50,000
                                                Up to
                                                5
                                                Lakh Budget Per Month </li>
                                            <li className="ami-price"><i className="fa fa-hand-o-right"></i> Account Management
                                            </li>
                                            <li className="ami-price"><i className="fa fa-hand-o-right"></i> Creation Of Campaign
                                            </li>
                                            <li className="ami-price"><i className="fa fa-hand-o-right"></i> Ads Creative Creation &
                                                Design
                                            </li>
                                            <li className="ami-price"><i className="fa fa-hand-o-right"></i> Ads Monitoring And
                                                Management
                                            </li>
                                        </ul>
                                    </div>
                                    <Link to="/pricing/DigitalMarketing/SMM" ><div className="price-button"> <a href="/pricing/DigitalMarketing/SMM">Explore</a></div></Link>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="price-table">
                                    <div className="price-head">
                                        <h4>PPC PACKAGES</h4>
                                        <h6>Best For Individuals</h6>
                                    </div>
                                    <div className="price-content">
                                        <ul>
                                            <li><strong>Min. Contract 1 Month</strong></li>
                                            <li className="ami-price"><i className="fa fa-hand-o-right"></i> Ad Budget 5000 to More
                                                Than 1
                                                Lakh</li>
                                            <li className="ami-price"><i className="fa fa-hand-o-right"></i> All Network Account
                                                Set-up
                                                (Google Ads, Facebook) </li>
                                            <li className="ami-price"><i className="fa fa-hand-o-right"></i> All Ads(Text, Display)
                                            </li>
                                            <li className="ami-price"><i className="fa fa-hand-o-right"></i> Competitor Analysis
                                            </li>
                                            <li className="ami-price"><i className="fa fa-hand-o-right"></i> A/B Testing</li>


                                            <Link to="/pricing/DigitalMarketing/PPC" ><li className="price-button"> <a href="/pricing/DigitalMarketing/PPC">Explore</a></li></Link>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PricingDigitalMarketing;