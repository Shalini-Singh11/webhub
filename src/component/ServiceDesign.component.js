import React, { useEffect } from 'react';
import "./assests/develop-design.css";
import ServiceShortcutsDevDesign from './ServicesShortcuts_developDesign.component';
import uiuxdesign_webm from "./assests/webm_webhub/uiuxdesign.webm";
import ui_ux_services from "./assests/imagesAll/ui-ux-aboutus.svg";
import design_functioning from "./assests/imagesAll/design_functioning.svg";

export default function ServiceDesign() {
    useEffect(() => {
        window.scrollTo(0,0)
      },[])
    return (
        <div>
            {/* <!-- ======== main-section-start   ======== --> */}
            <section className="page-banner mb-5">
                <div className="container">
                    <div className="row align-items-center justify-content-around">
                        <div className="col-md-5 main-heading-paragraph">
                            <h1 className="h1_heading">UI / UX Design</h1>
                            <p className="p_para">
                                We are a reliable and affordable digital
                                <br /> agency and talent network.
                                <br />
                                we channel creativity,
                                <br />
                                colors, copy and code to help our clients with better br
                                branding
                            </p>
                        </div>
                        <div className="col-md-6 banner-video-section">
                            <video playsInline autoPlay muted loop>
                                <source src={uiuxdesign_webm} type="video/webm" />
                            </video>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ======= cards-service  ======== --> */}
            <section className="cards-section-service-shortcuts mb-3 position-relative">
          <ServiceShortcutsDevDesign/>
            </section>
            {/* <!-- ====== mobile-app-development-section ===== --> */}
            <section className="second-main-section">
                <div className="container-fluid mobile-section">
                    <div className="heading-content-contain">
                        <h2>UI / UX Design</h2>
                        <p>
                            UX design is directly related to customer experience,' User
                            experience (UX) refers to the interaction a customer has with a
                            product or service, We are researching user's website experience,
                            talking to people about their products, identifying their needs,
                            and market research. The interaction between the user and the
                            website is presented through UI design, we design your website's
                            interface to be familiar, easy to learn, and simple. We work on
                            the User Interface and User Experience for your website, solve the
                            problems of the customers visiting your website and work on
                            product development with a remarkable strategy.
                        </p>
                    </div>
                </div>
            </section>

            {/* <!-- .========    third-main-section      ========= --> */}
            <div className="container mobile-app-part">
                <div className="row">
                    <div className="col-md-6">
                        <div className="service-in-india-img">
                            <img
                                src={ui_ux_services}
                                className="service-image"
                                alt="main-image"
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h2 className="process-heading-third-service-section">
                            {" "}
                            Paydeer UI&UX Design Services
                        </h2>
                        <p>
                            UI design works closely on all the factors related to the website,
                            The visual design, and colour scheme, Graphics design,
                            Gesture-based interface, voice-controlled interface, layout,
                            Typography, Colour projects, Branding, buttons, Icons, menus, etc.
                            UX Design is all about building on the user feedback loop
                            established during the previous stages, putting ideas forward to
                            users, seeking their feedback, and refining them.
                        </p>
                    </div>
                </div>
            </div>

            {/* <!-- ====    App Development Process   ======== --> */}

            <section className="service-process-section">
                <h2 className="process-heading">
                    The Functioning Of User Interface (UI) Design
                </h2>
                <div className="container">
                    <div className="row align-items-center justify-content-evenly">
                        <div className="col-md-6 service-process-left">
                            <p>
                                We are focused on incorporating visual hierarchy into a design
                                for Indian visitors, giving visual cues patterns to users.
                                Considering UX design process and research, Customer analysis &
                                research design, Developing graphics and establishing brands,
                                User storylines & user guides, An interactive and animated
                                experience and Variations of all device screen sizes.
                            </p>
                            <img
                                src={design_functioning} alt="uiux-process-image"
                            />
                        </div>
                        <div className="col-md-5">
                            <div className="service-card-body">
                                <h4 className="card-title">
                                    Fundamentals Included In Paydeer UX Design{" "}
                                </h4>
                                <p className="card-text service-process-list">
                                    <ul>
                                        <li>Generating user flows and tasks.</li>
                                        <li>Study of user complication.</li>
                                        <li>Understanding Indian visitors.</li>
                                        <li>User feedback and testing.</li>
                                    </ul>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ======== what do for your project  ===== --> */}
            <section className="second-main-section">
                <div className="container">
                    <div className="what-to-do-content-contain">
                        <h2 className="process-heading">
                            UI and UX Designs Are Needed For Your Website
                        </h2>
                        <p className="list-of-what-todo">
                            Every website is successful because of its visitors, A good user
                            experience is very important for a website, Therefore the use of
                            UI and UX design works to optimize the user experience and
                            usability, usefulness, and desirability of the website's
                            interface.
                        </p>
                    </div>
                </div>
            </section>
            {/* <!-- ========= faq section  ======= --> */}
            <section className="faq-section">
            <h2 className="process-heading">FAQ (Frequency Asked Questions)</h2>
                <div className="container">
                    <div className="row justify-content-between align-items-center py-3">
                        <div className="col-md-5 col-12 faq-body p-4">
                                <h5 className="card-title faq-title pb-3">
                                    What is the best user interface or user experience
                                    design?
                                </h5>
                                <p className="card-text faq-list collapse" id="collapse-design-faq">
                                    Both are very important for your website UX design focus on the Indian customer experience
                                    on the website, and UI design makes a beautiful user-friendly interface.
                                </p>
                                <div className="webdevelopment-button">
                                   <button
                                    className="mx-auto button-web-faq"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapse-design-faq"
                                    aria-expanded="false"
                                    aria-controls="collapseExample"
                                    onclick="(function() { document.getElementById('collapse-design-faq').classList.remove('show'); })();"
                                >
                                    Learn More
                                </button>
                                </div>
                        </div>
                        <div className="col-md-5 col-12 faq-body p-4">
                                <h5 className="card-title faq-title pb-3">
                                    What facilities are provided to the website with the
                                    help of UX Designing?
                                </h5>
                                <p className="card-text faq-list collapse" id="collapse-design-faq1">
                                    In UX designing, we create & maintain brand-style customer analysis, content auditing, and
                                    mapping.
                                </p>
                                <div className="webdevelopment-button">
                                   <button
                                    className="mx-auto button-web-faq"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapse-design-faq1"
                                    aria-expanded="false"
                                    aria-controls="collapseExample"
                                    onclick="(function() { document.getElementById('collapse-design-faq1').classList.remove('show'); })();"
                                >
                                    Learn More
                                </button>
                                </div>
                        </div>
                        <div className="col-md-5 col-12 faq-body p-4">
                                <h5 className="card-title faq-title pb-3">Is UI design the same as UX design? </h5>
                                <p className="card-text faq-list collapse" id="collapse-design-faq2">
                                    No, Ux Design works on the customer's website experience and UI design works on the
                                    interface of the website's products and services.
                                </p>
                                <div className="webdevelopment-button">
                                   <button
                                    className="mx-auto button-web-faq"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapse-design-faq2"
                                    aria-expanded="false"
                                    aria-controls="collapseExample"
                                    onclick="(function() { document.getElementById('collapse-design-faq2').classList.remove('show'); })();"
                                >
                                    Learn More
                                </button>
                                </div>
                        </div>
                        <div className="col-md-5 col-12 faq-body p-4">
                                <h5 className="card-title faq-title pb-3">Why UI and UX designs are needed? </h5>
                                <p className="card-text faq-list collapse" id="collapse-design-faq3">
                                    Every website is successful because of its Indian visitors, just as marketing takes care of
                                    the customers' needs, so UI and UX designs are used to optimize the user experience and
                                    interface of the website. It is extremely important for a website to have a good Indian user
                                    experience.
                                </p>
                                <div className="webdevelopment-button">
                                   <button
                                    className="mx-auto button-web-faq"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapse-design-faq3"
                                    aria-expanded="false"
                                    aria-controls="collapseExample"
                                    onclick="(function() { document.getElementById('collapse-design-faq3').classList.remove('show'); })();"
                                >
                                    Learn More
                                </button>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
