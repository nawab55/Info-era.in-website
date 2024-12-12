import { Link } from "react-router-dom";
import ClientCrousel from "./ClientCrousel";

function MainSection() {
  return (
    <main id="main">
      {/* ======= Values Section ======= */}
      <section id="values" className="values">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <h2>Our Values</h2>
            <p>Expertise (Application)</p>
          </header>
          <div className="row">
            <div className="col-lg-2 col-sm-6 col-xs-6" data-aos="fade-up">
              <div className="box">
                <img
                  src="assets/img/school-management.png"
                  className="img-fluid"
                  alt="School Management System"
                  title="School Management System - Info Era"
                />
                <h6 style={{ textAlign: "center" }}>
                  School Management System
                </h6>
                <Link
                  to="school-management-system"
                  type="button"
                  className="btn btn-outline-primary"
                >
                  Explore more
                </Link>
              </div>
            </div>
            <div className="col-lg-2 mt-4 mt-lg-0" data-aos="fade-up">
              <div className="box">
                <img
                  src="assets/img/college-management.png"
                  className="img-fluid"
                  alt="College Automation System"
                  title="College Automation System - Info Era"
                />
                <h6 style={{ textAlign: "center" }}>
                  College Management System
                </h6>
                <Link
                  to="college-management-system"
                  type="button"
                  className="btn btn-outline-primary"
                >
                  Explore more
                </Link>
              </div>
            </div>
            <div className="col-lg-2 mt-4 mt-lg-0" data-aos="fade-up">
              <div className="box">
                <img
                  src="assets/img/hospital-management.png"
                  className="img-fluid"
                  alt="Hospital Management System"
                  title="Hospital Management System - Info Era"
                />
                <h6 style={{ textAlign: "center" }}>
                  Hospital Management System
                </h6>
                <Link
                  to="hospital-management-system"
                  type="button"
                  className="btn btn-outline-primary"
                >
                  Explore more
                </Link>
              </div>
            </div>
            <div className="col-lg-2" data-aos="fade-up">
              <div className="box">
                <img
                  src="assets/img/hotel-management.png"
                  className="img-fluid"
                  alt="Hotel Management System"
                  title="Hospital Management System - Info Era"
                />
                <h6 style={{ textAlign: "center" }}>Hotel Management System</h6>
                <Link
                  to="hotel-management-system"
                  type="button"
                  className="btn btn-outline-primary"
                >
                  Explore more
                </Link>
              </div>
            </div>
            <div className="col-lg-2 mt-4 mt-lg-0" data-aos="fade-up">
              <div className="box">
                <img
                  src="assets/img/realestate.png"
                  className="img-fluid"
                  alt="Real Estate Management System"
                  title="Real Estate Management System - Info Era Software Services Pvt Ltd"
                />
                <h6 style={{ textAlign: "center" }}>
                  Real Estate Management System
                </h6>
                <Link
                  to="real-estate-manaement-system"
                  type="button"
                  className="btn btn-outline-primary"
                >
                  Explore more
                </Link>
              </div>
            </div>
            <div className="col-lg-2 mt-4 mt-lg-0" data-aos="fade-up">
              <div className="box">
                <img
                  src="assets/img/custom.png"
                  className="img-fluid"
                  alt="Customize Web Application"
                  title="Customize Web Application - Software Company"
                />
                <h6 style={{ textAlign: "center" }}>Shop Management System</h6>
                <Link
                  to="shop-management-system"
                  type="button"
                  className="btn btn-outline-primary"
                >
                  Explore more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Values Section */}
      {/* ======= Values Section ======= */}
      <section id="Section1" className="values">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <p>Expertise (Website)</p>
          </header>
          <div className="row">
            <div className="col-lg-3" data-aos="fade-up">
              <div className="box">
                <img
                  src="assets/img/ecommerce.png"
                  className="img-fluid"
                  alt="E-commerce"
                  title="E-commerce - Info Era Software Services"
                />
                <h3 style={{ textAlign: "center" }}>
                  E-commerce <br /> Portal
                </h3>
                <Link
                  to="portal-ecommerce"
                  type="button"
                  className="btn btn-outline-primary"
                >
                  Explore more
                </Link>
              </div>
            </div>
            <div className="col-lg-3 mt-4 mt-lg-0" data-aos="fade-up">
              <div className="box">
                <img
                  src="assets/img/news.png"
                  className="img-fluid"
                  alt="News/Magazine"
                  title="News/Magazine Management system - Info Era Software Services"
                />
                <h3 style={{ textAlign: "center" }}>
                  News/Magazine <br /> Portal
                </h3>
                <Link
                  to="portal-news-magzin"
                  type="button"
                  className="btn btn-outline-primary"
                >
                  Explore more
                </Link>
              </div>
            </div>
            <div className="col-lg-3 mt-4 mt-lg-0" data-aos="fade-up">
              <div className="box">
                <img
                  src="assets/img/values-3.png"
                  className="img-fluid"
                  alt="MLM"
                  title="MLM - Info Era Software"
                />
                <h3 style={{ textAlign: "center" }}>
                  Multi Level Marketing <br /> Portal
                </h3>
                <Link
                  to="portal-mlm"
                  type="button"
                  className="btn btn-outline-primary"
                >
                  Explore more
                </Link>
              </div>
            </div>
            <div className="col-lg-3 mt-4 mt-lg-0" data-aos="fade-up">
              <div className="box">
                <img
                  src="assets/img/values-4.png"
                  className="img-fluid"
                  alt="MLM"
                  title="MLM - Info Era"
                />
                <h3 style={{ textAlign: "center" }}>
                  Insurance <br /> Portal
                </h3>
                <Link
                  to="portal-insurance"
                  type="button"
                  className="btn btn-outline-primary"
                >
                  Explore more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Values Section */}
      {/* ======= Counts Section ======= */}
      {/* End Counts Section */}
      {/* ======= Features Section ======= */}
      <section id="features" className="features">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <h2>Features</h2>
            <p>Technology Used</p>
          </header>
          <div className="row">
            <div className="col-lg-6">
              <img
                src="assets/img/features.png"
                className="img-fluid"
                alt="features"
                title="Features - Info Era Services"
              />
              <div
                className="row"
                id="featuresreact"
                style={{ paddingTop: 69 }}
              >
                <div className="col-md-6">
                  <div className="col-md-12" data-aos="zoom-out">
                    <div className="feature-box d-flex align-items-center">
                      <i className="bi bi-check" />
                      <h3>React Js</h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="col-md-12" data-aos="zoom-out">
                    <div className="feature-box d-flex align-items-center">
                      <i className="bi bi-check" />
                      <h3>Angular Js</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0 d-flex">
              <div className="row align-self-center gy-4">
                <div className="col-md-6" data-aos="zoom-out">
                  <div className="feature-box d-flex align-items-center">
                    <i className="bi bi-check" />
                    <h3>AI</h3>
                  </div>
                </div>
                <div className="col-md-6" data-aos="zoom-out">
                  <div className="feature-box d-flex align-items-center">
                    <i className="bi bi-check" />
                    <h3>Computer Vision</h3>
                  </div>
                </div>
                <div className="col-md-6" data-aos="zoom-out">
                  <div className="feature-box d-flex align-items-center">
                    <i className="bi bi-check" />
                    <h3>Block Chain</h3>
                  </div>
                </div>
                <div className="col-md-6" data-aos="zoom-out">
                  <div className="feature-box d-flex align-items-center">
                    <i className="bi bi-check" />
                    <h3>Metaverse</h3>
                  </div>
                </div>
                <div className="col-md-6" data-aos="zoom-out">
                  <div className="feature-box d-flex align-items-center">
                    <i className="bi bi-check" />
                    <h3>Cloud Computing</h3>
                  </div>
                </div>
                <div className="col-md-6" data-aos="zoom-out">
                  <div className="feature-box d-flex align-items-center">
                    <i className="bi bi-check" />
                    <h3>MVC</h3>
                  </div>
                </div>
                <div className="col-md-6" data-aos="zoom-out">
                  <div className="feature-box d-flex align-items-center">
                    <i className="bi bi-check" />
                    <h3>.NET</h3>
                  </div>
                </div>
                <div className="col-md-6" data-aos="zoom-out">
                  <div className="feature-box d-flex align-items-center">
                    <i className="bi bi-check" />
                    <h3>Python</h3>
                  </div>
                </div>
                <div className="col-md-6" data-aos="zoom-out">
                  <div className="feature-box d-flex align-items-center">
                    <i className="bi bi-check" />
                    <h3>PHP</h3>
                  </div>
                </div>
                <div className="col-md-6" data-aos="zoom-out">
                  <div className="feature-box d-flex align-items-center">
                    <i className="bi bi-check" />
                    <h3>Laravel</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* / row */}
          {/* Feature Icons */}
          <div className="row feature-icons" data-aos="fade-up">
            <h3>Mobile based fully responsive websites and applications</h3>
            <div className="row">
              <div className="col-xl-4 text-center" data-aos="fade-right">
                <img
                  src="assets/img/features-3.png"
                  className="img-fluid p-4"
                  alt="Software Company in Patna"
                  title="Software Company in Patna"
                />
              </div>
              <div className="col-xl-8 d-flex content">
                <div className="row align-self-center gy-4">
                  <div className="col-md-6 icon-box" data-aos="fade-up">
                    <i className="ri-line-chart-line" />
                    <div>
                      <h4>Compatibility</h4>
                      <p>
                        Mobile Applications and Websites are compatible across
                        devices.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 icon-box" data-aos="fade-up">
                    <i className="ri-stack-line" />
                    <div>
                      <h4>Upgradability</h4>
                      <p style={{ textAlign: "justify" }}>
                        For mobile devices Websites and Applications can be
                        updated instantly.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 icon-box" data-aos="fade-up">
                    <i className="ri-brush-4-line" />
                    <div>
                      <h4>Push Notifications</h4>
                      <p>
                        Push notifications to users who have the app installed
                        on their device.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 icon-box" data-aos="fade-up">
                    <i className="ri-magic-line" />
                    <div>
                      <h4>Immediacy</h4>
                      <p style={{ textAlign: "justify" }}>
                        A mobile website is instantly accessible to users via a
                        browser across a range of devices (iPhone, Android,
                        etc).
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 icon-box" data-aos="fade-up">
                    <i className="ri-command-line" />
                    <div>
                      <h4>Social Media Updates</h4>
                      <p>
                        Features that make a Social website and Media Mobile App
                        popular.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 icon-box" data-aos="fade-up">
                    <i className="ri-radar-line" />
                    <div>
                      <h4>Findability</h4>
                      <p style={{ textAlign: "justify" }}>
                        Mobile websites are much easier for users to find
                        because their pages can be displayed in search results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Feature Icons */}
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
            <Link className="btn btn-dark" to="training">
              Apply Now
            </Link>
          </p>
        </div>
      </section>

      {/* End Features Section */}
      {/* ======= Clients Section ======= */}
      <section id="clients" className="clients">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <h2>Our Clients</h2>
            <p>Some of our valuable Clients/Associates</p>
          </header>
          <ClientCrousel />
        </div>
      </section>
      {/* End Clients section */}

      {/* Our Presence */}
      <section id="presence" className="presence">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <h2>Our Presence</h2>
            <p>We are located in multiple regions to serve you better.</p>
          </header>

          <div className="row justify-content-center">
            <div className="col-12 d-flex justify-content-center">
              <img
                src="image/Global-Presence.png"
                alt="Our Locations"
                className="img-fluid map-image rounded"
                style={{
                  objectFit: "cover",
                  aspectRatio: "auto 0.5",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default MainSection;
