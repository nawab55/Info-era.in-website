import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function PortalMlm() {
  return (
    <>
    <Helmet>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        
        <title>Advanced MLM Solutions for Scalable Growth </title>
        <meta
          name="description"
          content="Boost your MLM business with tools for network management, real-time tracking, and insights. Empower growth, maximize profits, and scale seamlessly." />

        <meta
          name="keywords"
          content="MLM solutions, Multi Level Marketing, network management, MLM growth tools, real-time tracking, MLM platform, scalable business, MLM technology, maximize profits, network insights"
        />
        <link rel="canonical" href="https://www.infoera.in/portal-mlm" />
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
        <meta name="document-classification" content="Advanced MLM Solutions for Scalable Growth" />
        <meta name="Distribution" content="Global" />
        
        <meta name="copyright" content="Copyright (c) 2014 by Info Era Software Services Pvt. Ltd." />
        <meta name="abstract" content="MLM Web Designing Company in Patna, Website Development Company in Patna, Bihar,MLM Website Development, IT Company, Bulk SMS and Voice Call, Graphic Designing, Web Hosting, SEO services provider in Patna Bihar India" />
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
          ></h2>
        </header>
        <div className="row">
          <div className="col-md-9">
            <div className="row">
              <div className="col-lg-6 d-flex flex-column justify-content-center">
                <h3 style={{ color: "#0c219a", fontWeight: 700, fontSize: 32 }}>
                  Multi Level Marketing
                </h3>
                <br />
                <p style={{ textAlign: "justify", fontSize: 16 }}>
                  Our <b>Multi Level Marketing (MLM)</b> solutions are crafted
                  to help you build a successful, scalable business. With
                  advanced tools for managing your network, real-time
                  performance tracking, and data insights, our MLM platform
                  ensures your business is equipped to grow and thrive. Whether
                  you&apos;re a newcomer or an industry veteran, we provide the
                  technology to support and empower each level of your network,
                  fostering growth and maximizing profitability.
                </p>
              </div>
              <div
                className="col-lg-6 hero-img aos-init aos-animate"
                data-aos="zoom-out"
              >
                <img
                  src="assets/img/services/MLM.png"
                  className="img-fluid"
                  alt="multi level marketing system"
                />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="row">
              <div className="col-md-12">
                <p>
                  <img
                    src="assets/img/college-management.png"
                    style={{ width: 50, height: 50 }}
                    alt="College Automation System"
                    title="College Automation System - Info Era"
                  />
                  <Link to="/college-management-system">
                    <b> School Management System</b>
                  </Link>
                </p>
              </div>
              <div className="col-md-12">
                <p>
                  <img
                    src="assets/img/college-management.png"
                    style={{ width: 50, height: 50 }}
                    alt="College Automation System"
                    title="College Automation System - Info Era"
                  />
                  <Link to="/college-management-system">
                    <b> College Management System</b>
                  </Link>
                </p>
              </div>
              <div className="col-md-12">
                <p>
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

export default PortalMlm;
