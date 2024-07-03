import React, { useEffect } from 'react';
import "./assests/about.css";
import mission_positive_feedback from './assests/imagesAll/positive-feedback.svg';
import mission_complt_project from './assests/imagesAll/completed-project.svg';
import mission_wearein_number from './assests/imagesAll/we-are-in-number.svg';
import about_mission from './assests/imagesAll/about-us.svg';
import team_work from './assests/imagesAll/team-work.svg';
import our_expertise from './assests/imagesAll/our-expertise.svg';
import our_commitment from './assests/imagesAll/our-commitment.svg';
import Webm_achievement from './assests/webm_webhub/achievement.webm';
export default function About() {
    useEffect(() => {
        window.scrollTo(0,0)
      },[])
    return (
        <div>
            {/* <!-- ======== main-section-start   ======== --> */}

            <section className="Mission-page-banner py-5">
                <div className="container-fluid">
                    <div className="Mission-banner-content">
                        <div className="row row_Mission justify-content-around align-items-center">
                            <div className="col-md-6 Mission-img-section-ios-mobile">
                               <video playsInline autoPlay muted loop>
                                    <source src={Webm_achievement} type='video/webm'/>
                                </video>
                            </div>
                            <div className="col-md-4 Mission-main-heading-paragraph">
                                <h1 className="Mission-main-heading">
                                    Our Mission
                                </h1>
                                <p className="Mission-main-content">
                                    We are a digital marketing company with only one goal: to make it easy for our customers'
                                    businesses to sell products and services on the global market through an online platform
                                    Increasing your brand's power and working together for success.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- ========= Achievements ========== --> */}

            <section className="achievement-section py-5 mt-3">
                <div className="container achievement-container">
                    <div className="heading-content-achievement">
                        <h1 className="text-center py-2">
                            Achievements
                        </h1>
                        <p className="text-center">PAYDEER SERVICES PVT. LTD. It was founded in 2020 as a digital marketing
                            agency,
                            which has provided a web portal to the customers for their business.
                        </p>
                    </div>
                    <div className="row row-achievement py-3">
                        <div className="col-md-3 col-6 column-achievement">
                            <div className="achievements-three-circle-cards">
                                <img className="achievement-img" src={mission_positive_feedback} alt="postive feedback" />
                                <h2>98%</h2>
                                <p>Positive Feedback</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 column-achievement">
                            <div className="achievements-three-circle-cards">
                                <img className="achievement-img" src={mission_complt_project} alt="complete project" />
                                <h2>99%</h2>
                                <p>Completed Project</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 column-achievement">
                            <div className="achievements-three-circle-cards">
                                <img className="achievement-img" src={mission_wearein_number} alt="we are in number" />
                                <h2>24+</h2>
                                <p>We Are In Number</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- =========== about us  ============= --> */}

            <section className="about-us-section">
                <div className="container about-us-container">
                    <div className="row">
                        <div className="col-md-7 heading-content-aboutus">
                            <h1 className="heading-aboutus">About Us</h1>
                            <p>PAYDEER SERVICES PVT. LTD. It was founded in 2020 as a digital marketing agency, which has
                                provided
                                a web portal to the customers for their business. This is a one-stop digital marketing agency with
                                high expertise in Search Engine Optimisation (SEO), Web design & development, content Creation,
                                Search Engine Marketing (SEO), Digital Marketing (Creative Design tool, Brand marketing, Design
                                solution), Website E-commerce, and Social Media Management (SMM).
                            </p>
                        </div>
                        <div className="col-md-5 d-flex justify-content-center">
                            <img className="About-img-fluid" src={about_mission} alt="about-us" />
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- ====== why-choose-us ===== --> */}

            <section className="why-chooseus-section pt-5">
                <div className="container why-chooseus-container">
                    <div className="heading-content-why-chooseus">
                        <h1 className="text-center">
                            Why Choose Us?
                        </h1>
                        <div className="row row-why-chooseus justify-content-evenly">
                            <div className="col-md-3 column-why-chooseus">
                                <div className="py-3 why-choose-us-three-cards">
                                    <img className="why-chooseus-img" src={team_work} alt="team work" />
                                    <h2>Team work</h2>
                                    <p>Providing world-class service to our clients is driven by a teamwork culture that
                                        encourages our workforce to strive for excellence constantly. Our highly qualified and
                                        certified team of digital marketers, web designers, graphic designers, SEO
                                        professionals, and project coordinators work hard to deliver the best digital solutions.
                                    </p>
                                </div>

                            </div>
                            <div className="col-md-3 column-why-chooseus">
                                <div className="py-3 why-choose-us-three-cards">
                                    <img className="why-chooseus-img" src={our_expertise} alt="our expertise" />
                                    <h2 className="our-expertise-content">Our Expertise</h2>
                                    <p>We Upgrade the search ranking position for target keywords, Combine marketing campaigns,
                                        Boost overall traffic (visitors) from search, Enhance overall CTR, Upgrading landing
                                        page
                                        and overall site conversion rates, Boost the site's overall usability and customer
                                        experience and Improve brand consciousness and growth through search.</p>
                                </div>
                            </div>
                            <div className="col-md-3 column-why-chooseus">
                                <div className="py-3 why-choose-us-three-cards">
                                    <img className="why-chooseus-img" src={our_commitment} alt="our commitment" />

                                    <h2>Our Commitment</h2>
                                    <p>We Upgrade the search ranking position for target keywords, Combine marketing campaigns,
                                        Boost overall traffic (visitors) from search, Enhance overall CTR, Upgrading landing
                                        page
                                        and overall site conversion rates, Boost the site's overall usability and customer
                                        experience and Improve brand consciousness and growth through search.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
