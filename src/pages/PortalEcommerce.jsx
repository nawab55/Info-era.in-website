import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function PortalEcommerce() {
  return (
    <>
    <Helmet>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        
        <title>Top eCommerce Web Services for Your Business  </title>
        <meta
          name="description"
          content="Expert eCommerce web design, development, and store services. We deliver scalable solutions in India & USA to grow your online business effortlessly." />

        <meta
          name="keywords"
          content="eCommerce web services, ecommerce website design, ecommerce web development, eCommerce development company, eCommerce store development services, india, usa"
        />
        <link rel="canonical" href="https://www.infoera.in/portal-ecommerce" />
        <meta name="content-language" content="EN" />
        <meta name="search engines" content="ALL" />
        <meta name="Robots" content="INDEX,ALL" />
        <meta name="YahooSeeker" content="INDEX, FOLLOW" />
        <meta name="msnbot" content="INDEX, FOLLOW" />
        <meta name="googlebot" content="INDEX, FOLLOW" />
        <meta name="language" content="en-us" />
        <meta name="Expires" content="never" />
        <meta name="rating" content="General" />
        <meta name="Resource-type" content="document" />
        <meta name="Author" content="www.infoera.in" />
        <meta name="document-classification" content="E-commerce Web Service Provider" />
        <meta name="Distribution" content="Global" />
        
        <meta name="copyright" content="Copyright (c) 2014 by Info Era Software Services Pvt. Ltd." />
        <meta name="abstract" content="E-commerce Web Designing Company in Patna, Website Development Company in Patna, Bihar, GST Billing Software, Internship, E-Commerce Development, IT Company, Bulk SMS and Voice Call, Graphic Designing, Web Hosting, SEO services provider in Patna Bihar India" />
        <meta name="Publisher" content="www.infoera.in" />

    </Helmet>
      <section
        id="hero"
        className="hero d-flex align-items-center"
        style={{ marginTop: 20 }}
      >
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <header className="section-header">
            <h2
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "#4154f1",
                textTransform: "none",
              }}
            />
          </header>
          <div className="row">
            <div className="col-md-9">
              <div className="row">
                <div className="col-lg-6 d-flex flex-column justify-content-center">
                  <h3
                    style={{ color: "#0c219a", fontWeight: 700, fontSize: 32 }}
                  >
                    Ecommerce
                  </h3>
                  <br />
                  <p style={{ textAlign: "justify", fontSize: "16px" }}>
                    Welcome to our <strong>E-commerce</strong> platform, where
                    innovation meets ease of use. Our solutions are designed to
                    streamline online shopping and provide users with a seamless
                    experience. Explore a wide variety of services, from online
                    product listings to smooth and secure checkout processes.
                    Whether you&apos;re a small business or a large enterprise,
                    our <strong>E-commerce</strong> platform is crafted to scale
                    and adapt to your needs.
                  </p>
                </div>
                <div
                  className="col-lg-6 hero-img aos-init aos-animate"
                  data-aos="zoom-out"
                >
                  <img
                    src="assets/img/services/Ecommerce.png"
                    className="img-fluid"
                    alt="school manaement system"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="row">
                <div className="col-md-12">
                  <p>
                    {" "}
                    <img
                      src="assets/img/college-management.png"
                      style={{ width: 50, height: 50 }}
                      alt="College Automation System"
                      title="College Automation System - Info Era"
                    />
                    <Link to="/college-management-system">
                      {" "}
                      <b> College Management System</b>
                    </Link>{" "}
                  </p>
                </div>
                <div className="col-md-12">
                  <p>
                    {" "}
                    <img
                      src="assets/img/hospital-management.png"
                      style={{ width: 50, height: 50 }}
                      alt="Hospital Management System"
                      title="Hospital Management System - Info Era"
                    />
                    <Link to="/hospital-management-system">
                      <b> Hospital Management System</b>
                    </Link>
                  </p>
                </div>
                <div className="col-md-12">
                  <p>
                    <img
                      src="assets/img/hotel-management.png"
                      style={{ width: 50, height: 50 }}
                      alt="Hotel Management System - Info Era Software Services"
                    />
                    <Link to="/hotel-management-system">
                      <b> Hotel Management System</b>
                    </Link>
                  </p>
                </div>
                <div className="col-md-12">
                  <p>
                    <img
                      src="assets/img/realestate.png"
                      style={{ width: 50, height: 50 }}
                      alt="Real Estate Management System"
                      title="Real Estate Management System - Info Era Software Services Pvt Ltd"
                    />
                    <Link to="/real-estate-manaement-system">
                      {" "}
                      <b> Construction Manag. System</b>
                    </Link>
                  </p>
                </div>
                <div className="col-md-12">
                  <p>
                    <img
                      src="assets/img/custom.png"
                      style={{ width: 50, height: 50 }}
                      alt="Customize Web Application"
                      title="Customize Web Application - Software Company"
                    />
                    <Link to="/shop-management-system">
                      {" "}
                      <b> Shop Management System</b>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PortalEcommerce;
