import React from 'react'
import './assests/footer.css';
import logo_footer from './assests/imagesAll/logo-white-footer.svg';
import Twitter from './assests/imagesAll/Twitter.svg';
import linkdin from './assests/imagesAll/linkdin.svg';
import facebook from './assests/imagesAll/facebook.svg';
import { FaArrowAltCircleRight } from "react-icons/fa";
import {FaEnvelope} from "react-icons/fa";
export default function Footer() {
    return (
        <>
            <footer className="footer-sec w-100">
                <div className="main-footer">
                    <div className="logo-footer row row-footer">
                        <div className="footer-header">
                            <img src={logo_footer} className="manik" alt="" />
                        </div>
                        <div className="logo-des">
                            <p>Since our agency was founded in 2020, “PAYDEER” has been a one-stop digital
                                marketing
                                agency with high competencies in Search Engine Optimisation (SEO).</p>
                            <a href="/about-us" className="btn-know">Know More</a>
                        </div>
                    </div>
                    <div className="office row row-footer">
                        <div className="footer-header">
                            <h3>Contact Info</h3>
                        </div>
                        <div className="office-des">
                            <ul className='text-decoration-none'>
                                <li>2nd Floor, C 9/9, Chitrakoot Marg, Sector 9, Vaishali Nagar,
                                    Jaipur,
                                    Rajasthan 302021</li>
                                <li><a href="/">info@paydeer.in</a></li>
                                <li className="tel:123456789">7428274282</li>
                            </ul>
                        </div>
                    </div>
                    <div className="link-footer row row-footer">
                        <div className="footer-header">
                            <h3>Links</h3>
                        </div>
                        <div className="link-des">
                            <a href="/" className="footer-links">Home</a>
                            <a href="/about-us" className="footer-links">About</a>
                            <a href="/service" className="footer-links">Services</a>
                            <a href="/" className="footer-links">Galary</a>
                            <a href="/contact" className="footer-links">Contact</a>
                        </div>
                    </div>
                    <div className="link-footer row row-footer">
                        <div className="footer-header">
                            <h3>Services</h3>
                        </div>
                        <div className="link-des">
                            <a href="/service/WebDevelopement" className="footer-links">Web Development</a>
                            <a href="/service/AppDevelopment" className="footer-links">App Development</a>
                            <a href="/service/DigitalMarketing/SEO" className="footer-links">Digital Marketing</a>
                            <a href="/service/PaymentGateway" className="footer-links">Payment Gateway</a>
                            <a href="/service/UiUx-Design" className="footer-links">UI/UX Design</a>
                        </div>
                    </div>
                    <div className="newsletter row row-footer">
                        <div className="footer-header">
                            <h3>Newsletter</h3>
                        </div>
                        <div className="newsletter-des">
                            <div className="subcribe"><i className="sub-icon"><FaEnvelope/></i>
                                <input type="mail" placeholder="Enter Email ID" required />
                                <i className="sub-icon"><FaArrowAltCircleRight/></i>
                            </div>
                            <div className="icons-footer">
                                <a href="https://www.facebook.com/Paydeer.business"><i className="social-icon"><img src={facebook}/> </i></a>
                                <a href="https://www.linkedin.com/company/paydeer/mycompany/"><i className="social-icon"><img src={linkdin}/></i></a>
                                <a href="https://twitter.com/paydeerindia"><i className="social-icon"><img src={Twitter}/></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <hr />
                    <p>© Copyright paydeer Services Pvt Ldt</p>
                </div>
            </footer>
        </>
    )
}
