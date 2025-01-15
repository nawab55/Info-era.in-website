import "./webdev.css";
import { Link } from "react-router-dom";

const WebDevelopment = () => {

  const gridContainerStyle = {
    display: 'grid',
    placeItems: 'center', // Note the camelCase for CSS properties
    padding: "1rem" 
  };

  return (
    <>
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
                to="https://docs.google.com/forms/d/e/1FAIpQLSeKCvXXxhKUQPTgFAjVUeHVCAlHdt5GSWb-H88Z0nbavZg6xg/viewform"
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
                src="assets/videos/infoera.mp4"
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
                alt="MERN Stack Workshop"
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
                  alt="Certificate"
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
                <img src="image/training08.jpeg" style={{ width: "100%" }} />
              </div>
            </div>
            <br />
            <p className="text-center">
              <Link
                to="https://docs.google.com/forms/d/e/1FAIpQLSeKCvXXxhKUQPTgFAjVUeHVCAlHdt5GSWb-H88Z0nbavZg6xg/viewform"
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
              to="https://docs.google.com/forms/d/e/1FAIpQLSeKCvXXxhKUQPTgFAjVUeHVCAlHdt5GSWb-H88Z0nbavZg6xg/viewform"
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
