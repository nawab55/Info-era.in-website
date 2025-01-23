import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function PortalInsurance() {
  return (
    <>
     <Helmet>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
         {/* Google site Verification  Start */}
         <meta name="google-site-verification" content="KrFf109xrwKNRJTWVipUzNV7ZMCJn5vGEdhwxAWcuSg" />
        {/* End */}
        <title>Best Insurance Web Services for Your Business  </title>
        <meta
          name="description"
          content="Professional insurance shop services, online design, and development. We provide scalable solutions in the USA and India to help you expand your internet business with ease." />

        <meta
          name="keywords"
          content="Best of industry website, Top Insurance Website, Best Insurance Website, Insurance news, Insurance Trends, Insurance Award Winners"
        />
        <link rel="canonical" href="https://www.infoera.in/portal-insurance" aria-label="Canonical - Info Era Software Services Pvt. Ltd."/>
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
        <meta name="document-classification" content="Insurance Web Designing Service Provider" />
        <meta name="Distribution" content="Global" />
        
        <meta name="copyright" content="Copyright (c) 2014 by Info Era Software Services Pvt. Ltd." />
        <meta name="abstract" content="Insurance Web Designing Company in Patna, Insurance Website Development Company in Patna, Bihar,  IT Company,  Top Web Designing, Best Web Hosting Provider, SEO services provider in Patna Bihar India" />
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
                  Insurance
                </h3>
                <br />
                <p style={{ textAlign: "justify", fontSize: 16 }}>
                  Our <b>Insurance Solutions</b> offer comprehensive coverage
                  options designed to protect you, your family, and your
                  business. With a range of plans tailored to meet diverse
                  needs, we provide flexible, reliable protection against
                  unexpected events. From health and life insurance to property,
                  automobile, and business insurance, our solutions are crafted
                  to offer financial security and peace of mind. Trust us to
                  guide you through the selection process, helping you find the
                  ideal coverage for your unique circumstances.
                </p>
              </div>
              <div
                className="col-lg-6 hero-img aos-init aos-animate"
                data-aos="zoom-out"
              >
                <img
                  src="assets/img/services/Insurance.png"
                  className="img-fluid"
                  alt="insurance solutions"
                  title="Insurance Solution - Info Era"
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
                    title="Hotel Management System - Info Era"
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

export default PortalInsurance;
