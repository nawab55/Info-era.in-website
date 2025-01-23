import "./webdev.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const WebDevelopment = () => {

  const gridContainerStyle = {
    display: 'grid',
    placeItems: 'center', // Note the camelCase for CSS properties
    padding: "1rem" 
  };

  return (
    <>
    <Helmet>
      <title>Best MERN Stack Development Center in Patna Bihar</title>
      <meta name="keywords" content="Best MERN Stack Development Treaning Center in Patna, Best Web Designing Treaning Center in Patna, It Treaning Center in Patna Bihar, Website Designing course in Patna, MongoDB, ReactJS, ExpressJs, NodeJS, Top Treaning Company in Patna, IT Company, Website Designing"></meta>
      <meta name="discription" content="Join the best MERN Stack and Web Designing courses in Patna at the top IT training center. Learn from experts and build your career in web development today!"/>
      <link rel="canonical" href="" />
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
        <meta name="document-classification" content="Web Designing Treaning Center Bihar" />
        <meta name="Distribution" content="Global" />
        <meta name="contactorganization" content="Info Era Software Services Private Limited"/>
        <meta name="contactstreetaddress" content="Patna"/>
        <meta name="contactzipcode" content="800001"/>
        <meta name="contactcity" content="Patna"/>
        <meta name="contactcountry" content="India"/>
        <meta name="Geography" content="Patna, Bihar, India"/>
        <meta name="country" content="INDIA"/>
        <meta name="contactmobilenumber" content="+91 -7008411312"/>
        <meta name="Product" content="Inventory Management Software in Jehanabad, Billing & Invoicing Software in Jehanabad, Counter Billing Software in Jehanabad, GST Billing Software in Jehanabad, Retailing and POS Software in Jehanabad, Super Market Billing Software in Jehanabad, Customized Billing Software in Jehanabad, IT Software Solutions in Jehanabad Bihar"/>
        <meta name="copyright" content="Copyright (c) 2014 by Info Era Software Services Pvt. Ltd."></meta>
        <meta name="Publisher" content="Info Era Software Services pvt.Ltd. " />
    </Helmet>
      <div>
        {/* ======= Hero Section ======= */}
        <section
          id="hero"
          className="hero banner-hero d-flex align-items-center justify-content-center"
          style={{
            backgroundImage: "url('assets/img/course/mernStackDevelopmentCourse.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "cover",
            color: "white",
            marginTop: "6rem",
            padding: 0,
            objectFit: "contain",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(0, 0, 0,0.6)",
              padding: "30px",
              height: "100%",
              width: "100%",
            }}
            className="text-center d-flex flex-column justify-content-center align-items-center"
          >
            <h1 className="course-heading-text mb-2">MERN STACK Online Workshop</h1>
            <p className="hero-description mb-4">
              Master the MERN Stack and transform your web development skills!
            </p>
            <div className="course-btn">
              <Link
                style={{ padding: ".8rem 1.4rem" }}
                className="btn-get-started"
                to="https://docs.google.com/forms/d/e/1FAIpQLSeKCvXXxhKUQPTgFAjVUeHVCAlHdt5GSWb-H88Z0nbavZg6xg/viewform" alt="Student's Registation Form-Info Era" title="Student's Registation Form-Info Era"
              >
                <span>Apply Now</span>
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        </section>

        {/* ======= About Section ======= */}
        <section className="container py-5">
          <div className="row">
            <div className="col-md-6">
              <video
                controls
                style={{
                  width: "100%",
                  height: "15rem",
                  borderRadius: "10px",
                }}
                src="assets/videos/infoera.mp4" alt="About Info Era Video" title="About-Info Era Software Services"
              ></video>
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h2
                style={{
                  fontWeight: "700",
                  color: "#012970",
                }}
              >
                About the MERN Stack Workshop
              </h2>
              <p>
                This workshop covers all the essential technologies in the MERN stack: <strong>MongoDB</strong>, <strong>Express.js</strong>, <strong>React.js</strong>, and <strong>Node.js</strong>. Learn how to build dynamic and scalable web applications from scratch with hands-on projects.
              </p>
            </div>
          </div>
        </section>

        {/* ======= Why Choose Info Era Section ======= */}
        <section className="container py-5">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2
                style={{
                  fontWeight: "700",
                  color: "#012970",
                }}
              >
                Why Choose Info Era?
              </h2>

              <p>
                At Info Era, we provide immersive, real-world training with an emphasis on hands-on learning. Our instructors are industry experts, and the curriculum is designed to ensure you are job-ready.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="assets/img/course/mernStackDevelopmentCourse.jpg"
                alt="MERN Stack Workshop" title="MERN Stack Workshop - Info Era Software Sesrvices"
                style={{
                  width: "100%",
                  height: "370px",
                  borderRadius: "10px",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </div>
        </section>

        {/* ======= Certification Section ======= */}
        <section className="container py-5">
          <div className="row align-items-center flex-row-reverse">
            <div className="col-md-6">
              <h2
                style={{
                  fontWeight: "700",
                  color: "#012970",
                }}
              >
                Certification Included
              </h2>
              <p>
                Upon completion, participants will receive a certificate that demonstrates their expertise in the MERN stack. Showcase your skills to potential employers with confidence.
              </p>
            </div>
            <div className="col-md-6" style={gridContainerStyle}>   
              <div style={{ height: "350px", }}>
                <video
                  src="/assets/videos/mern_workshop.mp4"
                  alt="Certificate" title="Certificate - Info Era Software Services"
                  autoPlay
                  loop
                  muted
                  style={{  height: "100%", borderRadius: "10px", margin: "0 auto" }}
                />
              </div>
            </div>
          </div>
        </section>

         {/* students area section */}
         <section
          id="Section2"
          className="clients"
          style={{ backgroundColor: "#013289" }}
        >
          <div className="container aos-init aos-animate" data-aos="fade-up">
            <header className="section-header">
              <p style={{ color: "white" }}>Student Area</p>
              <p />
            </header>
            <div className="row">
              <div className="col-md-12">
                <img src="image/training08.jpeg" alt="MERN Stack Training-Info Era Software Services" title="MERN Stack Training-Info Era Software Services" style={{ width: "100%" }} />
              </div>
            </div>
            <br />
            <p className="text-center">
              <Link
                to="https://docs.google.com/forms/d/e/1FAIpQLSeKCvXXxhKUQPTgFAjVUeHVCAlHdt5GSWb-H88Z0nbavZg6xg/viewform" title="Student Registation Form - Info Era Software Services" aria-label="Google Form for Student's Registation"
                className="btn btn-dark"
              >
                Apply Now
              </Link>
            </p>
          </div>
        </section>

        {/* ======= Call-to-Action Section ======= */}
        <section className="container text-center py-5">
          <h2
            style={{
              fontWeight: "700",
              color: "#012970",
            }}
          >
            Ready to Start Your Web Development Journey?
          </h2>
          <p>
            Enroll today and learn how to build full-stack web applications with the MERN stack!
          </p>
          <div className="course-btn d-flex align-items-center justify-content-center">
            <Link
              style={{ padding: "1.4rem" }}
              className="btn-get-started"
              to="https://docs.google.com/forms/d/e/1FAIpQLSeKCvXXxhKUQPTgFAjVUeHVCAlHdt5GSWb-H88Z0nbavZg6xg/viewform" title="Student Registation Form-Info Era Software Services" aria-label="Google Form for Student's Registation"
            >
              <span>Apply Now</span>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default WebDevelopment;
