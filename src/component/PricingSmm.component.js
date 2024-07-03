import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
//import { Routes, Route, BrowserRouter} from 'react-router-dom';

import './assests/pricing_table.css';

const PricingSmm = () => {

    useEffect(() => {
        window.scrollTo(0,0)
      },[])
    return(
        <section className="table-section">
        <div className="container">
            <div className="container-pricing-table">
                <div className="container-heading">
                    <div className="package-heading py-5">
                        <h1>SMM Packages<span>Paydeer Packages</span></h1>
                    </div>
                    <p>Paydeer Digital Marketing is one of the best social media marketing companies to provide
                        Social Media Paid Ads management services in India on Facebook, Instagram, Linkedin, and YouTube
                        network. In addition to communicating with existing customers, it increases businesses' reach to
                        attract new ones and promotes their culture, brand, and vision.<br></br>

                        A number of deliverables are included in these packages, as well as several social media
                        networks. Social media marketing packages are usually offered on a monthly basis by agencies.
                        For a variety of reasons, businesses invest in social media marketing packages, including:<br/>
                        1. Having access to the expertise of social media experts.<br/>
                        2. Managing the time and workload of in-house marketing employees.<br/>
                        3. You can increase the effectiveness of your existing social media marketing efforts by
                        speaking directly with the agency if you're looking for the best social media marketing
                        package.<br/>
                        They can discuss your goals and monthly budget with you to recommend the best social media
                        package for you.</p>
                </div>
                <div className="pricing-area ">
                    <div className="row">
                        {/* <!----------1st package start-------------> */}
                        <div className="col-sm-4">
                            <div className="price-table">
                                <div className="price-head">
                                    <h4>Basic SMM Plan</h4>
                                    <h6>₹ 9,999 INR / Month</h6>
                                </div>
                                <div className="price-content">
                                    <ul>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Ads Budget - Up to Rs
                                            50,000 Budget Per Month</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Lowest Management Fee
                                            - Rs 5,000 for 15K Budget</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Account Management -
                                            2(FB & Insta)</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Creation Of Campaign
                                            - Max 4</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i>Ads Creative Creation
                                            & Design - 10</li>
                                        <li className="webhub-price">
                                            <i className="fa fa-hand-o-right"></i><strong> Instagram Marketing</strong>
                                        </li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Audience Research
                                        </li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Instagram Ads
                                            Creative Creation & Design</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Instagram Ads
                                            Monitoring And Management</li>

                                        <li className="webhub-price">
                                            <i className="fa fa-hand-o-right"></i><strong> Facebook Marketing</strong>
                                        </li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Facebook Business
                                            Manager Set Up</li>
                                        <li className="webhub-price"><i className="fa fa-close clrclose"></i> Pixel Installation
                                        </li>
                                        <li className="webhub-price"><i className="fa fa-close clrclose"></i> Custom Conversion
                                            Creation</li>
                                        <li className="webhub-price"><i className="fa fa-close clrclose"></i> Remarketing</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Custom Audience
                                            Creation</li>
                                        <li className="webhub-price"><i className="fa fa-close clrclose"></i> Creation Of Automated
                                            Rules</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Facebook Analytics
                                            Report Creation</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Ad Campaign
                                            Monitoring</li>
                                        <li className="webhub-price"><i className="fa fa-close clrclose"></i> Catalogue Creation
                                        </li>
                                        <li className="webhub-price"><i className="fa fa-close clrclose"></i> Dynamic Ads Creation
                                        </li>
                                        <li className="webhub-price"><i className="fa fa-close clrclose"></i> Instant Experience
                                            Ads Creation</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Customization Of Ad
                                            Placements</li>
                                        <li className="webhub-price"><i className="fa fa-close clrclose"></i> A/B Testing Of Ad
                                            Set, Creative And Placement</li>
                                        <li className="webhub-price"><i className="fa fa-close clrclose"></i> Carousel And
                                            collection Ads</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Traffic Monitoring
                                        </li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Monthly Report</li>

                                        <li className="webhub-price">
                                            <i className="fa fa-hand-o-right"></i><strong> Twitter Marketing</strong>
                                        </li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Tweet Engagement Ads
                                        </li>
                                        <li className="webhub-price"><i className="fa fa-close clrclose"></i> Video Or GIF View Ads
                                        </li>
                                        <li className="webhub-price"><i className="fa fa-close clrclose"></i> Awareness Ads</li>
                                        <li className="webhub-price"><i className="fa fa-close clrclose"></i> Website Conversion
                                            Ads</li>
                                        <li className="webhub-price"><i className="fa fa-close clrclose"></i> In-stream Video View
                                            Ads</li>
                                        <li className="webhub-price"><i className="fa fa-close clrclose"></i> Follower Ads</li>
                                        <li className="webhub-price"><i className="fa fa-close clrclose"></i> App Install Ads</li>
                                        <li className="webhub-price"><i className="fa fa-close clrclose"></i> App Reengagement</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Audience Creation
                                        </li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Monthly Report</li>


                                        <li className="webhub-price">
                                            <i className="fa fa-hand-o-right"></i><strong> Linkedin Marketing</strong>
                                        </li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Campaign Manager
                                            Account Set Up</li>
                                        <li className="webhub-price"><i className="fa fa-close clrclose"></i> Linkedin Insight Tag
                                            Installation</li>
                                        <li className="webhub-price"><i className="fa fa-close clrclose"></i> Creation Of Custom
                                            Conversion</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Ads Monitoring</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Monthly Report</li>


                                        <li className="webhub-price">
                                            <i className="fa fa-hand-o-right"></i><strong> YouTube Marketing</strong>
                                        </li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> YouTube Ad Account
                                            Set Up</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Skipable In-Stream
                                            Ads</li>
                                        <li className="webhub-price"><i className="fa fa-close clrclose"></i> Non-Skipable
                                            In-Stream Ads</li>
                                        <li className="webhub-price"><i className="fa fa-close clrclose"></i> Bumper Ads</li>
                                        <li className="webhub-price"><i className="fa fa-close clrclose"></i> Discovery Ads</li>
                                        <li className="webhub-price"><i className="fa fa-close clrclose"></i> Youtube Video
                                            Sequence Ads</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Detailed Audience
                                            Creation</li>
                                        <li className="webhub-price"><i className="fa fa-close clrclose"></i> Custom Audience
                                            Creation</li>
                                        <li className="webhub-price"><i className="fa fa-close clrclose"></i> A/B Testing Of
                                            Targeting</li>
                                        <li className="webhub-price"><i className="fa fa-close clrclose"></i> Remarketing Video Ads
                                        </li>
                                        <li className="webhub-price"><i className="fa fa-close clrclose"></i> Video Ads With
                                            Promotion Of Your Products</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Monthly Report</li>

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
                                    <h6>₹ 19,999 INR / Month</h6>
                                </div>
                                <div className="price-content">
                                    <ul>

                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Ads Budget - Up to Rs
                                            1 Lakh Budget Per Month </li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Lowest Management Fee
                                            - INR 15,000 for INR 75000 Budget</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Account Management -
                                            Facebook/Instagram/LinkedIn</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Creation Of Campaign
                                            - 10</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i>Ads Creative Creation
                                            & Design - 15</li>


                                        <li className="webhub-price">
                                            <i className="fa fa-hand-o-right"></i><strong> Instagram Marketing</strong>
                                        </li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Audience Research
                                        </li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Instagram Ads
                                            Creative Creation & Design</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Instagram Ads
                                            Monitoring And Management</li>

                                        <li className="webhub-price">
                                            <i className="fa fa-hand-o-right"></i><strong> Facebook Marketing</strong>
                                        </li>

                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Facebook Business
                                            Manager Set Up</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Pixel Installation
                                        </li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Custom Conversion
                                            Creation</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Remarketing</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Custom Audience
                                            Creation</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Creation Of Automated
                                            Rules</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Facebook Analytics
                                            Report Creation</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Ad Campaign
                                            Monitoring</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Catalogue Creation
                                        </li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Dynamic Ads Creation
                                        </li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Instant Experience
                                            Ads Creation</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Customization Of Ad
                                            Placements</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> A/B Testing Of Ad
                                            Set, Creative And Placement</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Carousel And
                                            collection Ads</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Traffic Monitoring
                                        </li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Monthly Report</li>



                                        <li className="webhub-price">
                                            <i className="fa fa-hand-o-right"></i><strong> Twitter Marketing</strong>
                                        </li>



                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Tweet Engagement Ads
                                        </li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Video Or GIF View Ads
                                        </li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Awareness Ads</li>
                                        <li className="webhub-price"><i className="fa fa-close clrclose"></i> Website Conversion
                                            Ads</li>
                                        <li className="webhub-price"><i className="fa fa-close clrclose"></i> In-stream Video View
                                            Ads</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Follower Ads
                                        </li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> App Install Ads
                                        </li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> App Reengagement
                                        </li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Audience Creation
                                            
                                        </li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Monthly Report
                                        </li>


                                        <li className="webhub-price">
                                            <i className="fa fa-hand-o-right"></i><strong> Linkedin Marketing</strong>
                                        </li>



                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Campaign Manager
                                            Account Set Up</li>
                                        <li className="webhub-price"><i className="fa fa-close clrclose"></i> Linkedin Insight Tag
                                            Installation</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Creation Of Custom
                                            Conversion</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Ads Monitoring</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Monthly Report</li>


                                        <li className="webhub-price">
                                            <i className="fa fa-hand-o-right"></i><strong> Youtube Marketing</strong>
                                        </li>


                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Youtube Ad Account
                                            Set Up</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Skipable In-Stream
                                            Ads</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Non-Skipable
                                            In-Stream Ads</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Bumper Ads</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Discovery Ads</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Youtube Video
                                            Sequence Ads</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Detailed Audience
                                            Creation</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Custom Audience
                                            Creation</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> A/B Testing Of
                                            Targeting</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Remarketing Video Ads
                                        </li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Video Ads With
                                            Promotion Of Your Products</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Monthly Report</li>
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
                                    <h6>₹ 69,999 INR / Month</h6>
                                </div>
                                <div className="price-content">
                                    <ul>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Ads Budget - Up to Rs
                                            5 Lakh Budget Per Month </li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Account Management -
                                            5</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Creation Of Campaign
                                            - 50</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i>Ads Creative Creation
                                            & Design - 45</li>

                                        <li className="webhub-price">
                                            <i className="fa fa-hand-o-right"></i><strong> Instagram Marketing</strong>
                                        </li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Audience Research
                                        </li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Instagram Ads
                                            Creative Creation & Design</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Instagram Ads
                                            Monitoring And Management</li>



                                        <li className="webhub-price">
                                            <i className="fa fa-hand-o-right"></i><strong> Facebook Marketing</strong>
                                        </li>


                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Facebook Business
                                            Manager Set Up</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Pixel Installation
                                        </li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Custom Conversion
                                            Creation</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Remarketing</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Custom Audience
                                            Creation</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Creation Of Automated
                                            Rules</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Facebook Analytics
                                            Report Creation</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Ad Campaign
                                            Monitoring</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Catalogue Creation
                                        </li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Dynamic Ads Creation
                                        </li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Instant Experience
                                            Ads Creation</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Customization Of Ad
                                            Placements</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> A/B Testing Of Ad
                                            Set, Creative And Placement</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Carousel And
                                            collection Ads</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Traffic Monitoring
                                        </li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Monthly Report</li>



                                        <li className="webhub-price">
                                            <i className="fa fa-hand-o-right"></i><strong> Twitter Marketing</strong>
                                        </li>



                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Tweet Engagement Ads
                                        </li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Video Or GIF View Ads
                                        </li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Awareness Ads</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Website Conversion
                                            Ads</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> In-stream Video View
                                            Ads</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Follower Ads
                                        </li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> App Install Ads
                                        </li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> App Reengagement
                                        </li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Audience Creation
                                            
                                        </li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Monthly Report
                                        </li>


                                        <li className="webhub-price">
                                            <i className="fa fa-hand-o-right"></i><strong> LinkedIn Marketing</strong>
                                        </li>

                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Campaign Manager
                                            Account Set Up</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Linkedin Insight Tag
                                            Installation</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Creation Of Custom
                                            Conversion</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Ads Monitoring</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Monthly Report</li>

                                        <li className="webhub-price">
                                            <i className="fa fa-hand-o-right"></i><strong> Youtube Marketing</strong>
                                        </li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Youtube Ad Account
                                            Set Up</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Skipable In-Stream
                                            Ads</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Non-Skipable
                                            In-Stream Ads</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Bumper Ads</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Discovery Ads</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Youtube Video
                                            Sequence Ads</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Detailed Audience
                                            Creation</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Custom Audience
                                            Creation</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> A/B Testing Of
                                            Targeting</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Remarketing Video Ads
                                        </li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Video Ads With
                                            Promotion Of Your Products</li>
                                        <li className="webhub-price"><i className="fa fa-check clrright"></i> Monthly Report</li>
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

export default PricingSmm;