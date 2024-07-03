import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// COMPONENTS
import Header from "./component/Header.component";
import Home from "./component/Home.component";
import About from "./component/About.component";
import Service from "./component/Services.component";
import Blog from "./component/Blog.component";
import Packages from "./component/Package.component";
import Contact from "./component/Contact.component";
import Footer from "./component/Footer.component";
// import Login from "./components/login.component";
// import Logout from "./components/logout.component";

// Service Components
import ServiceAppDev from "./component/ServiceAppDev.component";
import ServiceCRO from "./component/ServiceCRO.component";
import ServiceContentMark from "./component/ServiceContentMark.component";
import ServiceDesign from "./component/ServiceDesign.component";
import ServiceEmailMark from "./component/ServiceEmailMark.component";
import ServicePPC from "./component/ServicePPC.component";
import ServicePaymentGateway from "./component/ServicePaymentGateway.component";
import ServiceProductListing from "./component/ServiceProductListing.component";
import ServiceSEO from "./component/ServiceSEO.component";
import ServiceSMO from "./component/ServiceSMO.component";
import ServiceSocialMedia from "./component/ServiceSocialMedia.component";
import ServiceWebDev from "./component/ServiceWebDev.component";

// Pricing Components
import PricingDigitalMarketing from "./component/PricingDigitalMarketing.component.js";
import PricingContent from "./component/PricingContent.component.js";
import PricingPpc from "./component/PricingPpc.component.js";
import PricingSeo from "./component/PricingSeo.component.js";
import PricingSmm from "./component/PricingSmm.component.js";
import PricingSmo from "./component/PricingSmo.component.js";
import PricingWebsite from "./component/PricingWebsite.component.js";
// import Form from "./components/form.component";
// import AdminLogin from "./components/AdminLogin.component";

function App() {
  // var isAdmin=false;
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service/>} />
          <Route path="/about-us" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Packages />} />
          {/* <Route path="/login" element={<Login/>}/>
        <Route path="/logout" element={<Logout/>}/> */}
        <Route path="/pricing/ContentWriting" element={<PricingContent/>} />
        <Route path="/pricing/WebPackages" element={<PricingWebsite/>} />
        <Route path="/pricing/DigitalMarketing" element={<PricingDigitalMarketing/>} />
        <Route path="/pricing/DigitalMarketing/PPC" element={<PricingPpc/>} />
        <Route path="/pricing/DigitalMarketing/SMO" element={<PricingSmo/>} />
        <Route path="/pricing/DigitalMarketing/SEO" element={<PricingSeo/>} />
        <Route path="/pricing/DigitalMarketing/SMM" element={<PricingSmm/>} />
        <Route path="/service/AppDevelopment" element={<ServiceAppDev/>} />
        <Route path="/service/ContentMarketing" element={<ServiceContentMark/>} />
        <Route path="/service/CRO" element={<ServiceCRO/>} />
        <Route path="/service/UiUx-Design" element={<ServiceDesign/>} />
        <Route path="/service/EmailMarketing" element={<ServiceEmailMark/>} />
        <Route path="/service/PaymentGateway" element={<ServicePaymentGateway/>} />
        <Route path="/service/ProductListing" element={<ServiceProductListing/>} />
        <Route path="/service/DigitalMarketing/PPC" element={<ServicePPC/>} />
        <Route path="/service/DigitalMarketing/SMO" element={<ServiceSMO/>} />
        <Route path="/service/DigitalMarketing/SEO" element={<ServiceSEO/>} />
        <Route path="/service/DigitalMarketing/SMM" element={<ServiceSocialMedia/>} />
        <Route path="/service/WebDevelopement" element={<ServiceWebDev/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
