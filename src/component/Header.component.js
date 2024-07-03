import react from "react";
import { Link } from "react-router-dom";
import './assests/header.css';
// import { FaBars } from "react-icons/fa";
// import { FaTimes } from "react-icons/fa";
import logo from './assests/imagesAll/logo.svg';
import telephone from './assests/imagesAll/telephone.svg';
import gmail from './assests/imagesAll/gmail.svg';
// import search from './assests/imagesAll/search.svg';
import facebook from './assests/imagesAll/facebook.svg';
import Twitter from './assests/imagesAll/Twitter.svg';
import linkdin from './assests/imagesAll/linkdin.svg';
import toggle from './assests/imagesAll/toggle.svg';
import instagram from './assests/imagesAll/instagram.svg'

const Header = () => {
    // const navigate = useNavigate();
    // const [expandclicked, setExpandclicked] = useState(false);
    return (
        <div>
            <header>
                <section className="section-navbar-header">
                    <div className="container-fluid top-header">
                        <div className="row p-0 m-0">
                            <div className="header-firsts justify-content-between">
                                <div className="header-first-container">
                                    <ul className="list-unstyled text-decoration-none m-auto ps-0">
                                        <li className="list-tele-mail d-inline-block list-unstyled justify-content-between">
                                            <a href="tel:123456789" className="d-block position-relative p-2">
                                                <img src={telephone} alt="telephone" /> &nbsp;7428274282
                                            </a>
                                        </li>
                                        <li className="list-tele-mail d-inline-block list-unstyled justify-content-between">
                                            <a href="/" className="d-block position-relative p-2">
                                                <img src={gmail} alt="mail" /> &nbsp;info@paydeer.in
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="header-first-container-second d-flex flex-row justify-content-between">
                                    <ul className="list-unstyled text-decoration-none m-auto ps-0">
                                        <li className="d-inline-block list-unstyled text-decoration-none justify-content-between">
                                            <a href="https://www.instagram.com/Paydeer.business/" className="text-decoration-none">
                                                <img className="w-75 p-1" src={instagram} alt="search" />
                                            </a>
                                        </li>
                                        <li className="d-inline-block list-unstyled text-decoration-none justify-content-between">
                                            <a href="https://www.facebook.com/Paydeer.business" className="text-decoration-none">
                                                <img className="w-75 p-1" src={facebook} alt="facebook" />
                                            </a>
                                        </li>
                                        <li className="d-inline-block list-unstyled text-decoration-none justify-content-between">
                                            <a href="https://twitter.com/paydeerindia" className="text-decoration-none">
                                                <img className="w-75 p-1" src={Twitter} alt="Twitter" />
                                            </a>
                                        </li>
                                        <li className="d-inline-block list-unstyled text-decoration-none justify-content-between">
                                            <a href="https://www.linkedin.com/company/paydeer/mycompany/" className="text-decoration-none">
                                                <img className="w-75 p-1" src={linkdin} alt="linkdin" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <!-- =======second main navigation========= --> */}
                        <div className="row">
                            <div className="contain-logo-toggle-nav">
                                <div className="logo-toggle-mobile">
                                    <div className="logo-section position-absolute list-unstyled">
                                        <Link to="/"><li className="mt-0"><img src={logo} className="logo-image" alt="logo" /></li></Link>
                                    </div>
                                    {/* <!-- =toogle= --> */}
                                    <div className="toggle list-unstyled d-flex justify-content-end">
                                        <li><img src={toggle} id="toggle1" alt="toggle" /></li>
                                    </div>
                                    {/* <!-- =toogle end= --> */}
                                </div>
                                <nav className="navigation" id="mobile-active">
                                    <ul className="main-nav justify-content-between list-unstyled d-flex mt-0">
                                        <div className="col-md-5 nav-content">
                                            <Link to="/" className="link-navbar d-block position-relative text-decoration-none"><li><button className="nav-main-content "> Home</button></li></Link>
                                            <Link to="/service" className="link-navbar d-block position-relative text-decoration-none"><li><button className="nav-main-content "> Services</button></li></Link>
                                            <Link to="/about-us" className="link-navbar d-block position-relative text-decoration-none"><li><button className="nav-main-content "> About </button></li></Link>
                                        </div>
                                        <div className="col-md-5 nav-content justify-content-end">
                                            <Link to="/blog" className="link-navbar d-block position-relative text-decoration-none"><li><button className="nav-main-content "> Blogs</button></li></Link>
                                            <Link to="/pricing" className="link-navbar d-block position-relative text-decoration-none"><li><button className="nav-main-content ">Pricing</button></li></Link>
                                            <Link to="/contact" className="link-navbar d-block position-relative text-decoration-none"><li><button className="nav-main-content "> Contact</button></li></Link>
                                        </div>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
            </header>

        </div>
    )
}
export default Header;