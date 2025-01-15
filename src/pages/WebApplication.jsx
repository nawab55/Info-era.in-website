import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const WebApplication = () => {
  return (
    <>
    <Helmet>
        <>
          <meta charSet="utf-8" />
          <meta
            content="width=device-width, initial-scale=1.0"
            name="viewport"
          />
          <meta
            name="google-site-verification"
            content="1SjNSasowfU9-J-fvkMaSAPEzrU-x_REXb5QL51dAdU"
          />
          <title>
          Web Application | Best Web Designing Company in patna, Bihar
          </title>
          <meta
            name="description"
            content="Info Era Software Services Pvt. Ltd. delivers innovative IT solutions across industries with a skilled team, driving growth in healthcare, e-commerce, banking & more."
          />
          <meta
            name="keywords"
            content="web development companies in india, Indian web design company, top digital marketing agency in India, mobile application development software in Patna Bihar, top india web designers, India website designing companies, website design in India, India web design company, software development, ai app development, agil software development"
          />
          <link rel="canonical" href="https://infoera.in/web-application" />
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
        <meta name="document-classification" content="Website Designing and Development Company in India" />
        <meta name="Distribution" content="Global" />
        <meta name="contactorganization" content="Info Era Software Services Private Limited"/>
        <meta name="contactstreetaddress" content="Bihar"/>
        <meta name="contactzipcode" content="800001"/>
        <meta name="contactcity" content="Bihar"/>
        <meta name="contactcountry" content="India"/>
        <meta name="Geography" content="Bihar, India"/>
        <meta name="country" content="INDIA"/>
        <meta name="contactmobilenumber" content="+91 -7008411312"/>
          <meta
            name="Publisher"
            content="Info Era Software Services Pvt. Ltd"
          />
        </>
      </Helmet>
      {/* ======= Hero Section ======= */}
      <section id="hero" className="hero d-flex align-items-center">
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h3 style={{ color: "#0c219a", fontWeight: 700, fontSize: 32 }}>
                Growing IT company that provides holistic IT solutions.
              </h3>
              <p style={{ textAlign: "justify" }}>
                Info Era Software Services Pvt. Ltd. is a fast - growing IT
                company that provides holistic IT solutions to businesses across
                geographies. So far, we have forayed into healthcare, food
                services, travel &amp; tourism, logistics &amp; shipping,
                e-commerce, banking, technology, manufacturing, and IT-enabled
                education service industries. Currently, we have a team of
                highly skilled IT professionals that work round the clock to
                ensure Info Era Software Services stays true to its offering
                &amp; commitments. Our team of experienced experts includes
                software developers, web developers, designers, digital
                marketing experts BDE &amp; BDM.
              </p>
              {/* <h1 data-aos="fade-up">Info Era Software Services Pvt. Ltd.</h1>
    <h2 data-aos="fade-up" data-aos-delay="400">We are team of talented designers making websites and Web based applications.</h2> */}
              {/* <div data-aos="fade-up" data-aos-delay="600">
      <div class="text-center text-lg-start">
        <Link href="#about" class="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
          <span>Get Started</span>
          <i class="bi bi-arrow-right"></i>
        </Link>
      </div>
    </div> */}
            </div>
            <div
              className="col-lg-6 hero-img aos-init aos-animate"
              data-aos="zoom-out"
            >
              <img
                src="assets/img/webapplication.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      {/* End Hero */}
      {/* ======= Values Section ======= */}
      <section id="values" className="values">
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <header className="section-header">
            <h2>Our Values</h2>
            <p>Expertise (Application)</p>
          </header>
          <div className="row">
            <div className="col-lg-4 aos-init aos-animate" data-aos="fade-up">
              <div className="box">
                <img
                  src="assets/img/school-management.png"
                  className="img-fluid"
                  alt="School Management System"
                  title="School Management System - Info Era"
                />
                <h3 style={{ textAlign: "center" }}>
                  School Management System
                </h3>
                <p style={{ textAlign: "justify" }}>
                  It is a web-based application for the effective and efficient
                  administration of a school or university. The school
                  management system helps manage admissions, timetables, fees,
                  attendance, and evaluation of school staff and students.
                </p>
                <Link
                  to="#"
                  type="button"
                  className="btn btn-outline-primary"
                  style={{ marginTop: 24 }}
                >
                  Demo
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 mt-4 mt-lg-0 aos-init aos-animate"
              data-aos="fade-up"
            >
              <div className="box">
                <img
                  src="assets/img/college-management.png"
                  className="img-fluid"
                  alt="College Automation System"
                  title="College Automation System - Info Era"
                />
                <h3 style={{ textAlign: "center" }}>
                  College Management System
                </h3>
                <p style={{ textAlign: "justify" }}>
                  College management system or college ERP is designed
                  considering the need of colleges in today&apos;s time for
                  end-to-end digitisation. It brings all the stakeholders on a
                  single cloud based web and Mobile App platform to provide
                  strong platform based connectivity for truly digital
                  operations.
                </p>
                <Link to="#" type="button" className="btn btn-outline-primary">
                  Demo
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 mt-4 mt-lg-0 aos-init aos-animate"
              data-aos="fade-up"
            >
              <div className="box">
                <img
                  src="assets/img/hospital-management.png"
                  className="img-fluid"
                  alt="Hospital Management System"
                  title="Hospital Management System - Info Era"
                />
                <h3 style={{ textAlign: "center" }}>
                  Hospital Management System
                </h3>
                <p style={{ textAlign: "justify" }}>
                  Reduced human intervention for paperwork, less paperwork,
                  reduced staff headcount for jobs that can be easily managed
                  within the HMS, speedier processes, reduction of errors, and
                  data privacy and safety – are just some of the benefits of a
                  Hospital Management System.
                </p>
                <Link
                  to="http://hospital.infoerasoftware.com/login.aspx"
                  target="_blank"
                  type="button"
                  className="btn btn-outline-primary"
                >
                  Demo
                </Link>
              </div>
            </div>
            <div className="col-lg-4 aos-init aos-animate" data-aos="fade-up">
              <div className="box">
                <img
                  src="assets/img/hotel-management.png"
                  className="img-fluid"
                  alt="Hotel Management System - Info Era Software Services"
                />
                <h3 style={{ textAlign: "center" }}>Hotel Management System</h3>
                <p style={{ textAlign: "justify" }}>
                  It simplifies hotel operations helping you utilize every
                  opportunity to boost revenue. Stay Contactless. Departure
                  Contactless. QR Code Based Digital Menu. 24/ 7 Support. New
                  Generation HMS. Personalized Free Trial. Contactless
                  Operations.
                  <br />
                </p>
                <Link
                  to="http://hotel.infoerasoftware.com"
                  type="button"
                  className="btn btn-outline-primary"
                  style={{ marginTop: 24 }}
                >
                  Demo
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 mt-4 mt-lg-0 aos-init aos-animate"
              data-aos="fade-up"
            >
              <div className="box">
                <img
                  src="assets/img/realestate.png"
                  className="img-fluid"
                  alt="Real Estate Management System"
                  title="Real Estate Management System - Info Era Software Services Pvt Ltd"
                />
                <h3 style={{ textAlign: "center" }}>
                  Real Estate Management System
                </h3>
                <p style={{ textAlign: "justify" }}>
                  Real Estate Management System (REMS) is an online real estate
                  software application that manages the overall operational
                  activities and processes, starting from the management of the
                  property, to the management of real estate agencies, agents,
                  clients and financial transactions.
                </p>
                <Link
                  to="about"
                  type="button"
                  className="btn btn-outline-primary"
                >
                  Demo
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 mt-4 mt-lg-0 aos-init aos-animate"
              data-aos="fade-up"
            >
              <div className="box">
                <img
                  src="assets/img/custom.png"
                  className="img-fluid"
                  alt="Customize Web Application"
                  title="Customize Web Application - Software Company"
                />
                <h3 style={{ textAlign: "center" }}>
                  Customize Web Application
                </h3>
                <p style={{ textAlign: "justify" }}>
                  Software application that is built specifically to meet the
                  unique needs of a particular business, user base, or
                  organization. It is tailored to the specific requirements of
                  the client and is not an off-the-shelf solution.
                </p>
                <Link
                  to="about"
                  type="button"
                  className="btn btn-outline-primary"
                  style={{ marginTop: 48 }}
                >
                  Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Values Section */}
      {/* ======= Values Section ======= */}
      <section id="Section1" className="values">
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <header className="section-header">
            <h2>Our Values</h2>
            <p>Expertise (Website)</p>
          </header>
          <div className="row">
            <div className="col-lg-4 aos-init aos-animate" data-aos="fade-up">
              <div className="box">
                <img
                  src="assets/img/ecommerce.png"
                  className="img-fluid"
                  alt="E-commerce"
                />
                <h3 style={{ textAlign: "center" }}>E-commerce</h3>
                <p style={{ textAlign: "justify" }}>
                  E-commerce business management refers to all the aspect of
                  managing your online business, from customizing your ecommerce
                  platform to customer management.{" "}
                </p>
                <Link to="#" type="button" className="btn btn-outline-primary">
                  Demo
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 mt-4 mt-lg-0 aos-init aos-animate"
              data-aos="fade-up"
            >
              <div className="box">
                <img
                  src="assets/img/news.png"
                  className="img-fluid"
                  alt="News/Magazine"
                />
                <h3 style={{ textAlign: "center" }}>News/Magazine</h3>
                <p style={{ textAlign: "justify" }}>
                  In this module we look at how a news website should be
                  managed, how the front page should be built.
                </p>
                <Link
                  to="#"
                  type="button"
                  className="btn btn-outline-primary"
                  style={{ marginTop: 48 }}
                >
                  Demo
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 mt-4 mt-lg-0 aos-init aos-animate"
              id="mlm"
              data-aos="fade-up"
            >
              <div className="box">
                <img
                  src="assets/img/values-3.png"
                  className="img-fluid"
                  alt="MLM"
                />
                <h3 style={{ textAlign: "center" }}>MLM</h3>
                <p style={{ textAlign: "justify" }}>
                  It is a tool that helps automate the management of member
                  networks and member compensations in MLM business models.
                </p>
                <Link
                  to="#"
                  type="button"
                  className="btn btn-outline-primary"
                  style={{ marginTop: 24 }}
                >
                  Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Values Section */}
      <main id="main">
        {/* ======= Features Section ======= */}
        <section id="features" className="features">
          <div className="container aos-init aos-animate" data-aos="fade-up">
            {/* <header class="section-header">
    <h2>About Us</h2>
    <p>Welcome to Info Era Software Services Pvt. Ltd.</p>
  </header> */}
            <div className="row">
              <div className="col-lg-6">
                <img src="assets/img/webpic.png" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-6 mt-5 mt-lg-0 d-flex">
                <div className="row align-self-center gy-4">
                  <h3
                    style={{ color: "#012970", fontWeight: 700, fontSize: 32 }}
                  >
                    Next-Generation Software Services platform providing.
                  </h3>
                  <p style={{ marginTop: 7, textAlign: "justify" }}>
                    Info Era is a leading global Next-Generation Software
                    Services platform providing client oriented solutions. Our
                    clients are in different states of India and across the
                    globe. Digital transformation is the need of today’s world
                    and we strongly believe this. We are a team of experts
                    working day and night building your dream. We empower young
                    entrepreneurs by providing solutions to their digital needs.
                  </p>
                  <p style={{ marginTop: 7, textAlign: "justify" }}>
                    We trust in Three R’s Revamp, Restructure and Re-design and
                    then deliver. We build trust of our clients by building
                    innovative website design, software development, android and
                    web application and Digital Marketing. We are successfully
                    increasing business through technology. Successful 8+ years
                    of service by providing Complete Software and Digital
                    Marketing Software and Industrial training.
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* / row */}
          </div>
        </section>
        {/* End Features Section */}
        {/* ======= Services Section ======= */}
        {/* End Services Section */}
      </main>
    </>
  );
};

export default WebApplication;
