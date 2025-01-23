import "./temp.css";
import { Link } from "react-router-dom";

const WebDesign = () => {
  return (
    <>
      <div className="">
        {/* ======= Hero Section ======= */}
        <section
          id="hero"
          className="hero banner-hero d-flex align-items-center justify-content-center "
          style={{
            backgroundImage: "url('assets/img/web-design-course.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            // backgroundAttachment: "unset",
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
              //   backdropFilter: "blur(5px)",
            }}
            className=" text-center d-flex flex-column justify-content-center align-items-center"
          >
            <h1 className="course-heading-text">Web Design Course</h1>
            <p className="hero-description">
              Learn the skills to create stunning websites with Info Era
              Software Services Pvt. Ltd.
            </p>
            <div className="course-btn">
              <Link
                style={{ padding: ".8rem 1.4rem" }}
                className="btn-get-started"
                to="https://docs.google.com/forms/d/e/1FAIpQLSd0Rfa1LNY0D7ddDXV4-M4kR6QryDQ2vh4_prngiUFaMzaEyA/viewform?usp=sf_links"
              >
                <span>Apply Now</span>
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
            {/* <Link
              to="https://docs.google.com/forms/d/e/1FAIpQLSd0Rfa1LNY0D7ddDXV4-M4kR6QryDQ2vh4_prngiUFaMzaEyA/viewform?usp=sf_links"
              className="btn-get-started "
              style={{ padding: "1.4rem" }}
            >
              Apply Now
            </Link> */}
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
                src="assets/videos/infoera.mp4" title="Web Designing Video-Info Era"
              ></video>
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h2
                style={{
                  fontWeight: "700",
                  color: "#012970",
                }}
              >
                About Our Web Design Course
              </h2>
              <p>
                At Info Era Software Services Pvt. Ltd., we train participants
                on essential skills like <strong>HTML/HTML5</strong>,{" "}
                <strong>CSS/CSS3</strong>, <strong>JavaScript</strong>,
                <strong>jQuery, AJAX, and Photoshop**</strong> . With hands-on
                projects and real-world experience, our program is perfect for
                both beginners and professionals.
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
                We focus on providing participants with practical skills that
                enable them to design professional websites. Our curriculum is
                crafted by industry experts to ensure a rewarding learning
                experience.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="assets/img/web-design-session.jpg" 
                alt="Training Session" title="Web Designing Training Session-Info Era Software Services"
                style={{
                  width: "100%",
                  borderRadius: "10px",
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
                Participants completing the course will receive a certificate,
                showcasing their expertise in web design and development. Build
                your career with confidence and showcase your skills.
              </p>
            </div>
            <div className="col-md-6">
              <video
                src="/assets/videos/infoera-gif.mp4"
                alt="Certificate" title="Certificate - Info Era Software Services"
                autoPlay
                loop
                muted
                style={{ width: "100%", borderRadius: "10px" }}
              />
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
                <img src="image/training08.jpeg" alt="Web Designing Training - Info Era Software services" title="Web Designing Training - Info Era Software services" style={{ width: "100%" }} />
              </div>
            </div>
            <br />
            <p className="text-center">
              <Link
                to="https://docs.google.com/forms/d/e/1FAIpQLSd0Rfa1LNY0D7ddDXV4-M4kR6QryDQ2vh4_prngiUFaMzaEyA/viewform?usp=sf_links"
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
            Ready to Start Your Journey?
          </h2>
          <p>
            Take the first step toward becoming a skilled web designer. Enroll
            in our program today!
          </p>
          <div className="course-btn d-flex align-items-center justify-content-center">
            <Link
              style={{ padding: "1.4rem" }}
              className="btn-get-started"
              to="https://docs.google.com/forms/d/e/1FAIpQLSd0Rfa1LNY0D7ddDXV4-M4kR6QryDQ2vh4_prngiUFaMzaEyA/viewform?usp=sf_links"
            >
              <span>Apply Now</span>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default WebDesign;
