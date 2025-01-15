import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function SchoolManagementSystem() {
  return (
    <>
    <Helmet>
            <meta content="width=device-width, initial-scale=1.0" name="viewport" />
            <meta
              name="google-site-verification"
              content="1SjNSasowfU9-J-fvkMaSAPEzrU-x_REXb5QL51dAdU"
            />
            <title>Info Era Software Services Patna | Software Company in Patna | School | College Management System</title>
            <meta
              name="description"
              content="Info Era Software Services is the best School/College Management System Software development company in Patna, Bihar, India. We develop best library management system and School management system"
            />
            <meta
              name="keywords"
              content="Info Era Software Services, School Management System, College Management System, School/College ERP Development in Patna Bihar"
            />
            <link rel="canonical" href="https://www.infoera.in/school-management-system" />
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
            <meta name="document-classification" content="School Management System-Patna" />
            <meta name="Distribution" content="Global" />
            
            <meta name="contactorganization" content="Info Era Software Services Pvt. Ltd."/>
            <meta name="contactzipcode" content="800001"/>
            <meta name="contactcity" content="Patna"/>
            <meta name="contactcountry" content="india"/>
            <meta name="Geography" content="Patna, Bihar, India"/>
            <meta name="country" content="INDIA"/>
            <meta name="contactmobilenumber" content="+91-7008411312"/>
            <meta name="copyright" content="Copyright (c) 2014 by Info Era Software Services Pvt. Ltd." />

            <meta name="Publisher" content="www.infoera.in" />
          </Helmet>
      <div>
        <section id="hero" className="hero d-flex align-items-center">
          <div className="container" data-aos="fade-up">
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
                      style={{
                        color: "#0c219a",
                        fontWeight: 700,
                        fontSize: 32,
                      }}
                    >
                      School Management System
                    </h3>
                    <p style={{ textAlign: "justify" }}>
                      It is a web-based application for the effective and
                      efficient administration of a school or university. The
                      school management system helps manage admissions,
                      timetables, fees, attendance, and evaluation of school
                      staff and students.
                    </p>
                  </div>
                  <div
                    className="col-lg-6 hero-img aos-init aos-animate"
                    data-aos="zoom-out"
                  >
                    <img
                      src="assets/img/services/SchoolManagementsystem.png"
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
                        {" "}
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
                        <b> Real Estate Management System</b>
                      </Link>{" "}
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
                      </Link>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Hero */}
      </div>
    </>
  );
}
