import { Link } from "react-router-dom";

function PortalInsurance() {
  return (
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
  );
}

export default PortalInsurance;
