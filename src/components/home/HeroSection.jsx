import { Link } from "react-router-dom";
import HeroCrousel from "./HeroCrousel";

function HeroSection() {
  return (
    <>
      {/* ======= Hero Section ======= */}
      <section id="hero" className="hero d-flex align-items-center ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">Info Era Software Services Pvt. Ltd.</h1>
              <p
                style={{ textAlign: "justify", marginTop: 35 }}
                data-aos="fade-up"
              >
                Info Era Software Services Pvt. Ltd. is a fast - growing IT
                company that provides holistic IT solutions to businesses across
                geographies. So far, we have forayed into Website Designing
                &amp; Development, Application Designing &amp; Development,
                Digital Marketing, IT Consulting, Industrial Training,
                Franchise.
              </p>
              <p>
                <b>
                  <i>Year of Experience</i>:
                </b>{" "}
                Over a Decade Plus
              </p>
              <p>
                <b>
                  <i>No. of Clients</i>:
                </b>{" "}
                1500+
              </p>
              <div data-aos="fade-up">
                <div className="text-center text-lg-start">
                  <Link
                    to="/about"
                    className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                  >
                    <span>Explore more</span>
                    <i className="bi bi-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 hero-img" data-aos="zoom-out">
              <HeroCrousel />
            </div>
          </div>
        </div>
      </section>
      {/* End Hero */}
    </>
  );
}

export default HeroSection;
