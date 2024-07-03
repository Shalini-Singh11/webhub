import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
//import { Routes, Route, BrowserRouter} from 'react-router-dom';

import './assests/pricing_table.css';

const PricingSeo = () => {

    useEffect(() => {
        window.scrollTo(0,0)
      },[])

    return (
        <section className="table-section">
            <div className="container">
                <div className="container-pricing-table">
                    <div className="container-heading">
                        <div className="package-heading py-5">
                            <h1>SEO Packages<span>Paydeer Packages</span></h1>
                        </div>
                        <p>The Digital Marketing department at Paydeer provides affordable SEO packages in all Indian
                            cities like Jaipur, Delhi, Chennai, Mumbai, Kolkata, Hyderabad, and Bangalore to domestic
                            clients. Our SEO packages are in most demanded in India, which is affordable for even small
                            businesses. Custom packages are also available for particular On-Page SEO packages or Off-Page
                            SEO packages. When you get more leads through the website, you'll see your business grow as a
                            result of these quality SEO packages.<br></br>

                            If your goal is to rank on the first page of Google or any search engine. Depending on the
                            number of keywords and the size of your business, choose the best SEO package at an affordable
                            SEO price. We offer four types of SEO package are: Basic SEO Plan, Standard SEO Plan,
                            Professional
                            SEO Plan, and Enterprise SEO Plan. INR 1000/Keyword is the starting price for a basic SEO
                            package.</p>
                    </div>
                    <div className="pricing-area ">
                        <div className="row">
                            {/* <!----------1st package start-------------> */}
                            <div className="col-sm-3">
                                <div className="price-table">
                                    <div className="price-head">
                                        <h4>Basic SEO Plan</h4>
                                        <h6>₹ 14999 / Month (15 Keywords)</h6>
                                    </div>
                                    <div className="price-content">
                                        <ul>
                                            <li className="webhub-price"><i className="fa fa-hand-o-right"></i><strong> Min. Contract 4
                                                Months</strong></li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Local & National
                                                SEO</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Minimum
                                                8 Keywords</li>
                                            <li className="webhub-price"><i className="fa fa-hand-o-right"></i><strong> Top 10
                                                Guarantee
                                                -
                                                40%*</strong>
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-hand-o-right"></i><strong> Initial
                                                Research
                                                And
                                                Analysis</strong></li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Business Analysis
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> In-depth Website
                                                Study
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Competitor Analysis
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Content Duplicacy
                                                Check
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Initial Backlinks
                                                Analysis</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Google Penalty Check
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Website Speed
                                                Analysis
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Keyword Research</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Canonicalization</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Website Page Load
                                                Optimization</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Initial Report</li>
                                            <li className="webhub-price"><i className="fa fa-hand-o-right"></i><strong> On Page
                                                SEO</strong></li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Title Tags
                                                Optimization
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> URL Optimization</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Internal linking &
                                                Optimization</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Image & ALT Tag
                                                Optimization</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Content Optimization
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Robots.txt Creation
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> HTML & XML Sitemap
                                                Submission</li>
                                            <li className="webhub-price"><i className="fa fa-close"></i> Schema For Contact</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Google Search Console
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-close"></i> Bing Webmaster Tools</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Google Analytics</li>
                                            <li className="webhub-price"><i className="fa fa-close"></i> HTML Code Cleanup & Optimization</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Location Based Page
                                                Optimisation</li>
                                            <li className="webhub-price"><i className="fa fa-hand-o-right"></i><strong> Local
                                                SEO</strong>
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Google My Business
                                                Setup and Verification</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Google Places
                                                Optimization</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Google My Business
                                                Customer Reviews/ratings</li>
                                            <li className="webhub-price"><i className="fa fa-close"></i> Bing local listing
                                            </li>

                                            <li className="webhub-price"><i className="fa fa-hand-o-right"></i><strong> Off Page
                                                SEO</strong></li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Blog Writing &
                                                Submission
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> PDF/Doc Submission
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Classifieds</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Blog Commenting</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Q & A</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Informational Article
                                                Writing & Submission</li>
                                            <li className="webhub-price"><i className="fa fa-close"></i> Press Release
                                                Writing & Submission</li>
                                            <li className="webhub-price"><i className="fa fa-close"></i> Guest Blog
                                                Posting</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Infographic Creation
                                                &
                                                Distribution</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Blog Posting*</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Social Bookmarking
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-hand-o-right"></i><strong> Status And
                                                Report</strong></li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Search Engine Rank
                                                Report
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> SEO Reports</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Google Analytics
                                                Report
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Activitiy Report</li>
                                            <li className="webhub-price"><i className="fa fa-close"></i> Monthly Action
                                                Plan</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Email/Chat/Online
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-close"></i> 24/7 Live
                                                Project Tracking</li>

                                            <Link to="/contact"><li className="price-button"> <a href="/contact">Proceed Now</a></li></Link>
                                        </ul>

                                    </div>
                                </div>

                            </div>
                            {/* <!-----------1st end---------------->
                        <!---------------2nd start---------------> */}
                            <div className="col-sm-3">
                                <div className="price-table">
                                    <div className="price-head">
                                        <h4>Standard</h4>
                                        <h6>₹ 23999 / Month (30 Keywords)</h6>
                                    </div>
                                    <div className="price-content">
                                        <ul>

                                            <li className="webhub-price"><i className="fa fa-hand-o-right"></i><strong> Min. Contract 6
                                                Months
                                            </strong></li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Local &
                                                National, International SEO</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Minimum 20 Keywords
                                            </li>
                                            <li className="webhub-price">
                                                <i className="fa fa-hand-o-right"></i><strong> Top 10 Guarantee - 50%*</strong>
                                            </li>

                                            <li className="webhub-price">
                                                <i className="fa fa-hand-o-right"></i><strong> Initial Research And
                                                    Analysis</strong>
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Business Analysis
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> In-depth Website
                                                Study</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Competitor Analysis
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Content Duplicacy
                                                Check</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Initial Backlinks
                                                Analysis</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Google Penalty Check
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Website Speed
                                                Analysis</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Keyword Research</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Canonicalization</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Website Page Load
                                                Optimization</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Initial Report</li>

                                            <li className="webhub-price">
                                                <i className="fa fa-hand-o-right"></i><strong> On Page SEO</strong>
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Title Tags
                                                Optimization</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> URL Optimization</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Internal linking &
                                                Optimization</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Image & ALT Tag
                                                Optimization</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Content Optimization
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Robots.txt Creation
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> HTML & XML Sitemap
                                                Submission</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Schema for Contact
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Google Search Console
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-close"></i> Bing
                                                Webmaster Tools</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Google Analytics</li>
                                            <li className="webhub-price"><i className="fa fa-close"></i> HTML Code Cleanup & Optimization</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Location Based Page
                                                Optimization</li>
                                            <li className="webhub-price">
                                                <i className="fa fa-hand-o-right"></i><strong> Local SEO</strong>
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Google My Business
                                                Setup and Verification</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Google Places
                                                Optimization</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Google My Business
                                                Customer Reviews/ratings</li>
                                            <li className="webhub-price"><i className="fa fa-close"></i> Bing local
                                                listing</li>

                                            <li className="webhub-price">
                                                <i className="fa fa-hand-o-right"></i><strong> Off Page SEO</strong>
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Blog Writing &
                                                Submission</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> PDF/Doc Submission
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Classifieds</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Press Release Writing
                                                & Submission</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Q & A</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Informational Article
                                                Writing & Submission</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Blog Posting*</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Guest Blog Posting
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Infographic Creation
                                                & Distribution</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Blog Posting*</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Social Bookmarking
                                            </li>



                                            <li className="webhub-price">
                                                <i className="fa fa-hand-o-right"></i><strong> Status And Report</strong>
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Search Engine Rank
                                                Report</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> SEO Reports</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Google Analytics
                                                Report</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Activitiy Report</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Monthly Action Plan
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Email/Chat/Online
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-close"></i> 24/7 Live
                                                Project Tracking</li>

                                            <Link to="/contact"><li className="price-button"> <a href="/contact">Proceed Now</a></li></Link>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                            {/* <!-----------------2nd end------------------>
                        <!---------------3rd start--------------------> */}
                            <div className="col-sm-3">
                                <div className="price-table">
                                    <div className="price-head">
                                        <h4>Professional</h4>
                                        <h6>₹ 34999 / Month (50 Keywords)</h6>
                                    </div>
                                    <div className="price-content">
                                        <ul>
                                            <li className="webhub-price">
                                                <i className="fa fa-hand-o-right"></i><strong> Min. Contract 12 Months</strong>
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Local &
                                                National, International SEO</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Minimum 40 Keywords
                                            </li>
                                            <li className="webhub-price">
                                                <i className="fa fa-hand-o-right"></i><strong> Top 10 Guarantee - 50%*</strong>
                                            </li>
                                            <li className="webhub-price">
                                                <i className="fa fa-hand-o-right"></i><strong> Initial Research And
                                                    Analysis</strong>
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Business Analysis
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> In-depth Website
                                                Study</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Competitor Analysis
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Content Duplicacy
                                                Check</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Initial Backlinks
                                                Analysis</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Google Penalty Check
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Website Speed
                                                Analysis</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Keyword Research</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Canonicalization</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Website Page Load
                                                Optimization</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Initial Report</li>

                                            <li className="webhub-price">
                                                <i className="fa fa-hand-o-right"></i><strong> On Page SEO</strong>
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Title Tags
                                                Optimization</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> URL Optimization</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Internal linking &
                                                Optimization</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Image & ALT Tag
                                                Optimization</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Content Optimization
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Robots.txt Creation
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> HTML & XML Sitemap
                                                Submission</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Schema for Contact
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Google Search Console
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Bing Webmaster Tool
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Google Analytics</li>
                                            <li className="webhub-price"><i className="fa fa-close"></i> HTML Code Cleanup
                                                & Optimization</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Location Based Page
                                                Optimization</li>
                                            <li className="webhub-price">
                                                <i className="fa fa-hand-o-right"></i><strong> Local SEO</strong>
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Google My Business
                                                Setup and Verification</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Google Places
                                                Optimization</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Google My Business
                                                Customer Reviews/ratings</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Bing Local Listing
                                            </li>

                                            <li className="webhub-price">
                                                <i className="fa fa-hand-o-right"></i><strong> Off Page SEO</strong>
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Blog Writing &
                                                Submission</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> PDF/Doc Submission
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Classifieds</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Blog Commenting</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Q & A</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Informational Article
                                                Writing & Submission</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Press Release Writing
                                                & Submission</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Guest Blog Posting
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Infographic Creation
                                                & Distribution</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Blog Posting*</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Social Bookmarking
                                            </li>
                                            <li className="webhub-price">
                                                <i className="fa fa-hand-o-right"></i><strong> Status And Report</strong>
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Search Engine Rank
                                                Report</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> SEO Reports</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Google Analytics
                                                Report</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Activitiy Report</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Monthly Action Plan
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Email/Chat/Online
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-close"></i> 24/7 Live
                                                Project Tracking</li>

                                            <Link to="/contact"><li className="price-button"> <a href="/contact">Proceed Now</a></li></Link>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                            {/* <!----------------3rd end------------------------>
                        <!------------------4th package start-------------------> */}
                            <div className="col-sm-3">
                                <div className="price-table">
                                    <div className="price-head">
                                        <h4>Enterprise</h4>
                                        <h6>₹ 44999 / Month (70 Keywords)</h6>
                                    </div>
                                    <div className="price-content">
                                        <ul>
                                            <li className="webhub-price">
                                                <i className="fa fa-hand-o-right"></i><strong> Min. Contract 1 Year</strong>
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Local &
                                                National, International SEO</li>

                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Minimum 60 Keywords
                                            </li>
                                            <li className="webhub-price">
                                                <i className="fa fa-hand-o-right"></i><strong> Top 10 Guarantee - 70%*</strong>
                                            </li>
                                            <li className="webhub-price">
                                                <i className="fa fa-hand-o-right"></i><strong> Initial Research And
                                                    Analysis</strong>
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Business Analysis
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> In-depth Website
                                                Study</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Competitor Analysis
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Content Duplicacy
                                                Check</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Initial Backlinks
                                                Analysis</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Google Penalty Check
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Website Speed
                                                Analysis</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Keyword Research</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Canonicalization</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Website Page Load
                                                Optimization</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Initial Report</li>

                                            <li className="webhub-price">
                                                <i className="fa fa-hand-o-right"></i><strong> On Page SEO</strong>
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Title Tags
                                                Optimization</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> URL Optimization</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Internal linking &
                                                Optimization</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Image & ALT Tag
                                                Optimization</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Content Optimization
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Robots.txt Creation
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> HTML & XML Sitemap
                                                Submission</li>
                                            <li className="webhub-price"><i className="fa fa-close clrright"></i> Schema for Contact
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Google Search Console
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Bing Webmaster Tool
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Google Analytics</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> HTML Code Cleanup &
                                                Optimization</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Location Based Page
                                                Optimization</li>
                                            <li className="webhub-price">
                                                <i className="fa fa-hand-o-right"></i><strong> Local SEO</strong>
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Google My Business
                                                Setup and Verification</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Google Places
                                                Optimization</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Google My Business
                                                Customer Reviews/ratings</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Bing Local Listing
                                            </li>

                                            <li className="webhub-price">
                                                <i className="fa fa-hand-o-right"></i><strong> Off Page SEO</strong>
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Blog Writing &
                                                Submission</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> PDF/Doc Submission
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Classifieds</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Blog Commenting</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Q & A</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Informational Article
                                                Writing & Submission</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Guest Blog Posting
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Infographic Creation
                                                & Distribution</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Blog Posting*</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Social Bookmarking
                                            </li>



                                            <li className="webhub-price">
                                                <i className="fa fa-hand-o-right"></i><strong> Status And Report</strong>
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Search Engine Rank
                                                Report</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> SEO Reports</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Google Analytics
                                                Report</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Activitiy Report</li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Monthly Action Plan
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> Email/Chat/Online
                                            </li>
                                            <li className="webhub-price"><i className="fa fa-check clrright"></i> 24/7 Live Project
                                                Tracking</li>

                                            <Link to="/contact"><li className="price-button"> <a href="/contact">Proceed Now</a></li></Link>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                            {/* <!------------------4th package end----------------> */}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PricingSeo;