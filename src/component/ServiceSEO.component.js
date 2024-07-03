import React, { useEffect } from 'react';
import "./assests/digital-part.css";
import ShortcutService from "./ServicesShortcuts.component";

// inner-services-images
import type_seo from "./assests/imagesAll/type-seo.svg";
import ranking_seo from "./assests/imagesAll/ranking-seo.svg";
import webm_seo from "./assests/webm_webhub/SEO.webm";
export default function ServiceSEO() {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  return (
    <>
      <section className="page-banner">
        <div className="container">
          <div className="row align-items-center justify-content-around">
            <div className="col-md-5 main-heading-paragraph">
              <h1 className="h1_heading">SEO(Search Engine Optimization)</h1>
              <p className="p_para">
                We are a reliable and affordable digital agency and talent
                network. we channel creativity, colors, copy and code to help
                our clients with better br branding
              </p>
            </div>
            <div className="col-md-6 banner-video-section">
              <video playsInline autoPlay muted loop>
                <source src={webm_seo} type="video/webm" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ============  what seo ============= --> */}
      <div className="what-section py-5">
        <div className="container">
          <div className="text-center px-5 what-content-heading">
            <h1>Search Engine Optimization</h1>
            <p>
              SEO (Search Engine Optimization) is a technique by which we can
              optimise the content of the Indian customer's website and bring
              traffic to their website by getting it ranked on the top position
              on any search engine by using keywords. If you want to get ahead
              of your competitors and grow your business, then it is essential
              for you to bring your website on the front page. Paydeer is an
              excellent way to take your website to the top position in the
              SERP.
            </p>
          </div>
        </div>
      </div>

      {/* <!-- ================== services cards ====================== --> */}
      <section className="servic-cards-section">
        <ShortcutService />
      </section>
      {/* <!-- =========  types of seo ============== --> */}
      <section className="types-seo-section">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-7 content-column-type-seo">
              <h2 className="heading-type-seo">
                Paydeer Web Design & Development Services
              </h2>
              <p className="paragraph-type-seo">
                These are mainly three types of methods in SEO with the help of
                which the website can be optimised.
              </p>
              <ol className="ordered-list-type-seo">
                <li className="list-of-seos">Technical SEO</li>
                <p className="paragraph-type-seo">
                  It makes your website mobile-friendly and gives a responsive
                  theme for your website and it also has Technical on-site
                  factors.
                </p>
                <li className="list-of-seos">On-page SEO</li>
                <p className="paragraph-type-seo">
                  We create unique and attractive content and Optimise keywords.
                </p>
                <li className="list-of-seos">off-site SEO</li>
                <p className="paragraph-type-seo">
                  Backlink menu, articles, guest posting, blogs, social
                  bookmarks.
                </p>
              </ol>
            </div>
            <div className="col-md-5">
              <img
                src={type_seo}
                className="image-type-seos-service w-100"
                alt="type-seo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- =======  ranking site ============ --> */}
      <section className="ranking-section my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-7 d-flex flex-column">
              <h1 className="heading-ranking-site">
                Paydeer ranks the site by generating core traffic to the
                website through these points
              </h1>
              <img
                src={ranking_seo}
                className="ranking-images"
                alt="ranking-site"
              />
            </div>
            <div className="col-md-5">
              <div className="left-side-box-content">
                <p className="ranking-box-content">
                  Improves ranking by maintaining page speed, on-page SEO
                  Paydeer to optimize your website blog content, Optimizing
                  keywords, like title, meta description, subtitle, tags,
                  heading and URL Structure, and Indian User experience. Back
                  Links,(Creating backlinks to making links to another website,
                  it on the site, blog, or content there is some way to create
                  backlinks like social bookmarking guest posting, article,
                  blogs, etc.) Technical - on-site factors, Indian User feedback
                  metrics, creating unique and attractive content, Content
                  Marketing, and increased authority & reputation of the website
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ========= faq section  ======= --> */}
      <section className="faq-section">
        <h2 className="process-heading">FAQ (Frequency Asked Questions)</h2>
        <div className="container">
          <div className="row justify-content-between align-items-center gy-3">
            <div className="col-md-5 col-12 faq-body p-4">
              <h5 className="card-title faq-title pb-3">
                Why should I choose the Paydeer agency for SEO?
              </h5>
              <p className="card-text faq-list collapse" id="collapse-seo-faq">
                <ol>
                  <li>Highly-trained SEO experts.</li>
                  <li>Keyword targeting and tracking.</li>
                  <li>Content relevancy and website analysis.</li>
                </ol>
              </p>
              <div className="webdevelopment-button">
                <button
                  className="mx-auto button-web-faq"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse-seo-faq"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  onclick="(function() { document.getElementById('collapse-seo-faq').classList.remove('show'); })();"
                >
                  Learn More
                </button>
              </div>
            </div>

            <div className="col-md-5 col-12 faq-body p-4">
              <h5 className="card-title faq-title pb-3">
                Why is SEO important for a website?
              </h5>
              <p className="card-text faq-list collapse" id="collapse-seo-faq1">
                In today's digital era where online is dominated, SEO has a huge
                contribution in making a place in the digital world, without
                this you cannot get your business ranked on the front page and
                your business cannot reach in heights.
              </p>
              <div className="webdevelopment-button">
                <button
                  className="mx-auto button-web-faq"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse-seo-faq1"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  onclick="(function() { document.getElementById('collapse-seo-faq1').classList.remove('show'); })();"
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="col-md-5 col-12 faq-body p-4">
              <h5 className="card-title faq-title pb-3">
                What are the SEO plans to increase traffic on your website?
              </h5>
              <p className="card-text faq-list collapse" id="collapse-seo-faq2">
                E-mail list building, business blogs, expanding the Indian
                customer base, Webinars & online community, brand awareness,
                building credibility, social media posting, on-page
                optimization, site-speed analysis, web designing check, and
                backlink analysis.
              </p>
              <div className="webdevelopment-button">
                <button
                  className="mx-auto button-web-faq"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse-seo-faq2"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  onclick="(function() { document.getElementById('collapse-seo-faq2').classList.remove('show'); })();"
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="col-md-5 col-12 faq-body p-4">
              <h5 className="card-title faq-title pb-3">
                What are the benefits of SEO for your website?
              </h5>
              <p className="card-text faq-list collapse" id="collapse-seo-faq3">
                <ol>
                  <li> Software optimization</li>
                  <li>Improved Social networking</li>
                  <li>Improved SERP ranking</li>
                  <li>Content marketing</li>
                  <li>Site map optimization</li>
                  <li>Generate quality-based leads</li>
                  <li>Increased site revenue</li>
                </ol>
              </p>
              <div className="webdevelopment-button">
                <button
                  className="mx-auto button-web-faq"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse-seo-faq3"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  onclick="(function() { document.getElementById('collapse-seo-faq3').classList.remove('show'); })();"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
