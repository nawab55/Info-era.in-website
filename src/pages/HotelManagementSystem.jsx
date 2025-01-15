import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const HotelManagementSystem = () => {
  return (
    <div>
      <Helmet>
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta
          name="google-site-verification"
          content="1SjNSasowfU9-J-fvkMaSAPEzrU-x_REXb5QL51dAdU"
        />

        <title> Efficient Hotel Management System | Info Era</title>
        <meta
          name="description"
          content="Streamline hotel operations with a web-based system to manage guest check-ins and check-outs, staff schedules, room bookings, billing, guest records, and improve overall efficiency." />

        <meta
          name="keywords"
          content="hotel management system, Web-based Hotel System, Guest Check-in and Check-out Management,Staff Scheduling System, Billing and Invoice Management "
        />
        <link rel="canonical" href="https://infoera.in/hotel-management-system" />
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
        <meta name="document-classification" content="Efficient Hotel Management System" />
        <meta name="Distribution" content="Global" />
        <meta name="keyphrases" content="hotel software, staff management, hotel billing system, Room Availability Tracker, Hotel Workflow Optimization"/>
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
                    Hotel Management System
                  </h3>
                  <p style={{ textAlign: "justify" }}>
                    The Hotel Management System is a web-based application
                    designed to streamline and optimize the administration of
                    hotels and resorts. This system assists with managing
                    reservations, room assignments, billing, guest check-ins and
                    check-outs, and the evaluation of hotel staff and services.
                    It provides an effective and efficient solution to enhance
                    guest experiences and improve overall hotel operations.
                  </p>
                </div>
                <div
                  className="col-lg-6 hero-img aos-init aos-animate"
                  data-aos="zoom-out"
                >
                  <img
                    src="assets/img/services/HOTEL MANAGEMENT SYSTEM.png"
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
                    <Link href="hotel-management-system">
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
                    <Link href="real-estate-manaement-system">
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
  );
};

export default HotelManagementSystem;
