import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
//import { Routes, Route, BrowserRouter} from 'react-router-dom';
import './assests/contact.css';
import phone_address from './assests/imagesAll/phone-address.svg';
import email_address from './assests/imagesAll/email-address.svg';
import location_address from './assests/imagesAll/location-address.svg';
import contact_us from './assests/webm_webhub/contactus.webm';
const Contact = () => {
    // useEffect(() => {
    //     window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    // }, []);
    useEffect(() => {
        window.scrollTo(0,0)
      },[])
    return (
        <>
            <section className="contact-page-banner">
                <div className="container-fluid">
                    <div className="row justify-content-around align-items-center">
                            <div className="col-md-6 contact_us_webm">
                                  <video playsInline autoPlay muted loop>
                                    <source src={contact_us} type='video/webm' />
                                </video>
                            </div>
                            <div className="col-md-4 Mission-main-heading-paragraph">
                                <h1 className="Mission-main-heading">
                                Contact Us
                                </h1>
                                <p className="Mission-main-content">
                                    We are a digital marketing company with only one goal: to make it easy for our customers'
                                    businesses to sell products and services on the global market through an online platform
                                    Increasing your brand's power and working together for success.
                                </p>
                            </div>
                        </div>
                </div>
            </section>
            {/* <!-- ============ contact-us-section ========== --> */}
            <section className="contact-form-map-section pt-5">
                <div className="container">
                    <div className="text-center heading-contact">
                        <h1>Contact Us</h1>
                        <h4>We Are Here To You</h4>
                    </div>
                    <div className="d-flex justify-content-center contain-all-form-map-address">
                        <div className="col-md-6">
                            <div className="bg-light text-dark contact-form-map-container">
                                <form className="row g-3">
                                    <div className="col-md-6">
                                        <label for="text" className="form-label">Name</label>
                                        <input type="text" className="form-control" id="inputEmail4" placeholder="Name" />
                                    </div>
                                    <div className="col-md-6">
                                        <label for="tel" className="form-label">Phone</label>
                                        <input type="tel" className="form-control" id="inputPassword4" placeholder="Phone" />
                                    </div>
                                    <div className="col-12">
                                        <label for="inputAddress" className="form-label">E-mail</label>
                                        <input type="email" className="form-control" id="inputAddress" placeholder="E-mail" />
                                    </div>
                                    <div className="col-12">
                                        <label for="inputState" className="form-label">Services</label>
                                        <select id="inputState" className="form-select">
                                            <option selected>Digital Marketing</option>
                                            <option>Web Development</option>
                                            <option>App Development</option>
                                            <option>Product Listing</option>
                                            <option>Payment Gateway</option>
                                        </select>
                                    </div>
                                    <div className="col-12">
                                        <label for="comment" className="form-label">Message</label>

                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>

                                    <div className="col-12 button-div">
                                        <button type="submit" className="button-form">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6 map-container">
                            <div className="abc">
                                <iframe className="shadow geomap"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.088855930461!2d75.73646897556375!3d26.900674976654322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db56ed97e3bfb%3A0x336093429f5cef70!2sPaydeer%20Services%20Private%20Limited!5e0!3m2!1sen!2sin!4v1685020627911!5m2!1sen!2sin"
                                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                            <div className="address-contain">
                                <div className="text-left heading-address">
                                    <h5>Contact Information</h5>
                                </div>
                                <div className="information-of-address">
                                    <ul className="address-lists">
                                        <li>
                                            <a href="/">
                                                <img src={phone_address} className="address-phone-mail-location" alt="phone-number" />
                                                &nbsp;7428274282
                                            </a>
                                        </li>
                                        <li> <a href="/">
                                            <img src={email_address} className="address-phone-mail-location" alt="phone-number" />
                                            &nbsp;info@paydeer.in
                                        </a></li>
                                        <li> <a href="/">
                                            <img src={location_address} className="address-phone-mail-location" alt="phone-number" /> &nbsp;2nd
                                            Floor, C 9, Chitrakoot Marg, Sector 9, Vaishali Nagar, Jaipur, Rajasthan 302021
                                        </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;