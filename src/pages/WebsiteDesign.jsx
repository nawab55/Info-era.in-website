import { Link } from "react-router-dom";

const WebsiteDesign = () => {
  return (
    <>
      {/* ======= Hero Section ======= */}
      <section id="hero" className="hero d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up" className="aos-init aos-animate">
                Website Designing &amp; Development
              </h1>
              <h2
                data-aos="fade-up"
                style={{ textAlign: "justify" }}
                className="aos-init aos-animate"
              >
                At Info Era, We have one of the best team of skilled designers
                making websites and Web based applications.
              </h2>
              <div data-aos="fade-up" className="aos-init aos-animate">
                <div className="text-center text-lg-start">
                  <h2
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#4154f1",
                      textTransform: "none",
                    }}
                  >
                    Service / IT / Web Designing &amp; Development
                  </h2>
                  <Link
                    to="#values"
                    className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                  >
                    <span>Get Started</span>
                    <i className="bi bi-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 hero-img aos-init aos-animate"
              data-aos="zoom-out"
            >
              <img src="assets/img/webimg.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* End Hero */}
      <main id="main">
        {/* ======= About Section ======= */}
        {/* ======= Values Section ======= */}
        {/* End Values Section */}
        {/* ======= Values Section ======= */}
        {/* End Values Section */}
        {/* ======= Features Section ======= */}
        {/* End Features Section */}
        {/* ======= Pricing Section ======= */}
        <section id="pricing" className="pricing">
          <div className="container aos-init aos-animate" data-aos="fade-up">
            <header className="section-header mb-4">
              <h2>Pricing</h2>
              <p>Check our Pricing for Static Website.</p>
            </header>
            <div className="row gy-4 aos-init aos-animate" data-aos="fade-left">
              <div
                className="col-lg-4 col-md-6 aos-init aos-animate"
                data-aos="zoom-in"
              >
                <div className="box">
                  <h3 style={{ color: "#65c600" }}>Basic</h3>
                  <div className="price">
                    <sup>₹</sup>8,000/-
                    <span />
                  </div>
                  <p>+18% GST</p>
                  <img
                    src="assets/img/pricing-starter.png"
                    className="img-fluid"
                    alt="basic package"
                  />
                  <div className="row">
                    <div className="col-md-10 d-flex  justify-content-between">
                      <ul style={{ textAlign: "left", fontSize: 15 }}>
                        <li>No. of Pages : 10 - 14</li>
                        <li>No. of Forms : 01 - 05</li>
                        <li>Facebook, Twitter, Instagram</li>
                        <li>Social Media Promotion</li>
                        <li>Domain Name : 1 year</li>
                        <li>Web Hosting : 1 year</li>
                        <li>Google Map Integrate : Yes</li>
                        <li>Google Business : Yes</li>
                        <li>SEO : 1 Keyword</li>
                        <li>Logo : 1 Sample</li>
                        <li>Responsive : Normal</li>
                        <li>Image : Upto 20</li>
                        <li>Email ID : 1 Email ID</li>
                      </ul>
                      <ul style={{ textAlign: "left", fontSize: 15 }}>
                        <li></li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Link to="#" className="btn-buy">
                    Buy Now
                  </Link>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 aos-init aos-animate"
                data-aos="zoom-in"
              >
                <div className="box">
                  <span className="featured">Featured</span>
                  <h3 style={{ color: "#ff901c" }}>Economy</h3>
                  <div className="price">
                    <sup>₹</sup>15,000/-
                    <span />
                  </div>
                  <p>+18% GST</p>
                  <img
                    src="assets/img/pricing-business.png"
                    className="img-fluid"
                    alt="economy package"
                  />
                  <div className="row">
                    <div className="col-md-10 d-flex  justify-content-between">
                      <ul style={{ textAlign: "left", fontSize: 15 }}>
                        <li>No. of Pages : 15 - 20</li>
                        <li>No. of Forms : 05 - 08</li>
                        <li>Facebook, Twitter, Instagram</li>
                        <li>Social Media Promotion : 8 Post</li>
                        <li>Domain Name : 1 year</li>
                        <li>Web Hosting : 1 year</li>
                        <li>Google Map Integrate : Yes</li>
                        <li>Google Business : Yes</li>
                        <li>SEO : 3 Keywords</li>
                        <li>Logo Design 3 Samples</li>
                        <li>Responsive : Medium</li>
                        <li>Image : Upto 50</li>
                        <li>Email ID : 2 Email ID</li>
                      </ul>
                      <ul style={{ textAlign: "left", fontSize: 15 }}>
                        <li></li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Link to="#" className="btn-buy">
                    Buy Now
                  </Link>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 aos-init aos-animate"
                data-aos="zoom-in"
              >
                <div className="box">
                  <h3 style={{ color: "#ff0071" }}>Elite</h3>
                  <div className="price">
                    <sup>₹</sup>25,000/-
                    <span />
                  </div>
                  <img
                    src="assets/img/pricing-ultimate.png"
                    className="img-fluid"
                    alt="Elite Package"
                  />
                  <div className="row">
                    <div className="col-md-10 d-flex  justify-content-between">
                      <ul style={{ textAlign: "left", fontSize: 15 }}>
                        <li>No. of Pages : 21 - 30</li>
                        <li>No. of Forms : 09 - 05</li>
                        <li>Facebook, Twitter, Instagram</li>
                        <li>Social Media Promotion : 15 Post</li>
                        <li>Domain Name : 2 year</li>
                        <li>Web Hosting : 2 year</li>
                        <li>Google Map Integrate : Yes</li>
                        <li>Google Business : Yes</li>
                        <li>SEO : 5 Keywords</li>
                        <li>Logo: 5 Samples</li>
                        <li>Responsive : Highly</li>
                        <li>Image : Upto 100</li>
                        <li>Email ID : 5 Email ID</li>
                      </ul>
                      <ul style={{ textAlign: "left", fontSize: 15 }}>
                        <li></li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Link to="#" className="btn-buy">
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Pricing Section */}
        {/* ======= Pricing Section ======= */}
        <section id="Section2" className="pricing">
          <div className="container aos-init aos-animate" data-aos="fade-up">
            <header className="section-header mb-4">
              <h2>Pricing</h2>
              <p>Check our Pricing for Dynamic Website.</p>
            </header>
            <div className="row gy-4 aos-init aos-animate" data-aos="fade-left">
              <div
                className="col-lg-4 col-md-6 aos-init aos-animate"
                data-aos="zoom-in"
              >
                <div className="box">
                  <h3 style={{ color: "#65c600" }}>Basic</h3>
                  <div className="price">
                    <sup>₹</sup>12,000/-
                    <span />
                  </div>
                  <img
                    src="assets/img/pricing-starter.png"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="row">
                    <div className="col-md-10 d-flex  justify-content-between">
                      <ul style={{ textAlign: "left", fontSize: 15 }}>
                        <li>No. of Pages : 10 - 14</li>
                        <li>No. of Dynamic Pages : 04 - 06</li>
                        <li>No. of Forms : 04 - 06</li>
                        <li>Facebook, Twitter, Instagram</li>
                        <li>Social Media Promotion</li>
                        <li>Domain Name : 1 year</li>
                        <li>Web Hosting : 1 year</li>
                        <li>Google Map Integrate : Yes</li>
                        <li>Google Business : Yes</li>
                        <li>SEO : 1 Keyword</li>
                        <li>Logo : 1 Sample</li>
                        <li>Responsive : Normal</li>
                        <li>Image : Upto 20</li>
                        <li>Email ID : 1 Email ID</li>
                      </ul>
                      <ul style={{ textAlign: "left", fontSize: 15 }}>
                        <li></li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Link to="#" className="btn-buy">
                    Buy Now
                  </Link>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 aos-init aos-animate"
                data-aos="zoom-in"
              >
                <div className="box">
                  <span className="featured">Featured</span>
                  <h3 style={{ color: "#ff901c" }}>Economy</h3>
                  <div className="price">
                    <sup>₹</sup>25,000/-<span> </span>
                  </div>
                  <img
                    src="assets/img/pricing-business.png"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="row">
                    <div className="col-md-10 d-flex  justify-content-between">
                      <ul style={{ textAlign: "left", fontSize: 15 }}>
                        <li>No. of Pages : 15 - 20</li>
                        <li>No. of Dynamic Pages : 12- 16</li>
                        <li>No. of Forms : 05 - 08</li>
                        <li>Facebook, Twitter, Instagram</li>
                        <li>Social Media Promotion : 8 Post</li>
                        <li>Domain Name : 1 year</li>
                        <li>Web Hosting : 1 year</li>
                        <li>Google Map Integrate : Yes</li>
                        <li>Google Business : Yes</li>
                        <li>SEO : 3 Keywords</li>
                        <li>Logo Design 3 Samples</li>
                        <li>Responsive : Medium</li>
                        <li>Image : Upto 50</li>
                        <li>Email ID : 2 Email ID</li>
                      </ul>
                      <ul style={{ textAlign: "left", fontSize: 15 }}>
                        <li></li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Link to="#" className="btn-buy">
                    Buy Now
                  </Link>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 aos-init aos-animate"
                data-aos="zoom-in"
              >
                <div className="box">
                  <h3 style={{ color: "#ff0071" }}>Elite</h3>
                  <div className="price">
                    <sup>₹</sup>35,000/-
                    <span />
                  </div>
                  <img
                    src="assets/img/pricing-ultimate.png"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="row">
                    <div className="col-md-10 d-flex  justify-content-between">
                      <ul style={{ textAlign: "left", fontSize: 15 }}>
                        <li>No. of Pages : 21 - 30</li>
                        <li>No. of Dynamic Pages : 18 - 22</li>
                        <li>No. of Forms : 09 - 05</li>
                        <li>Facebook, Twitter, Instagram</li>
                        <li>Social Media Promotion 15 Post</li>
                        <li>Domain Name : 2 year</li>
                        <li>Web Hosting : 2 year</li>
                        <li>Google Map Integrate : Yes</li>
                        <li>Google Business : Yes</li>
                        <li>SEO : 5 Keywords</li>
                        <li>Logo: 5 Samples</li>
                        <li>Responsive : Highly</li>
                        <li>Image : Upto 100</li>
                        <li>Email ID : 5 Email ID</li>
                      </ul>
                      <ul style={{ textAlign: "left", fontSize: 15 }}>
                        <li></li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                        <li>
                          <i className="bi bi-check" />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Link to="#" className="btn-buy">
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Pricing Section */}
      </main>
    </>
  );
};

export default WebsiteDesign;
