import TeamSlider from "../components/TeamSlider";

function Team() {
  return (
    <>
      <div>
        {/* ======= Hero Section ======= */}
        <section
          data-aos="fade-up"
          id="hero"
          className="hero d-flex align-items-center"
        >
          <div className="container aos-init aos-animate" data-aos="fade-up">
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-lg-8 d-flex flex-column justify-content-center">
                    <h3 style={{ color: "#0c219a", fontWeight: 700 }}>
                      From the Desk of the CEO
                    </h3>
                    <p style={{ textAlign: "justify" }}>
                      Since we began our journey in 2014, we have been a growing
                      startup. I started this IT mission to revolutionize the IT
                      industry in Bihar and Odisha. We started work on our
                      mission from “Odisha”. We keep growing and now we have our
                      offices in different states of India.
                    </p>
                    <p style={{ textAlign: "justify" }}>
                      In my college days an idea struck into my mind to begin my
                      own path by starting my own software company that today is
                      known as “
                      <strong>
                        Info Era Software Services Private Limited
                      </strong>
                      ”.
                    </p>
                  </div>
                  <div
                    className="col-lg-4 hero-img aos-init aos-animate"
                    data-aos="zoom-out"
                  >
                    <img
                      src="assets/img/ceo.png"
                      className="img-fluid"
                      alt="ceo image"
                      style={{ width: 300 }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-4">
                    <img
                      src="assets/teamSlider/img-02-ceo.png"
                      className="img-fluid"
                      style={{ padding: 5, borderRadius: 10 }}
                    />
                    <img
                      src="assets/teamSlider/img-04-ceo.png"
                      className="img-fluid"
                      style={{ padding: 5, borderRadius: 10 }}
                    />
                  </div>
                  <div className="col-md-4">
                    <img
                      src="assets/teamSlider/img-01-ceo.png"
                      className="img-fluid"
                      style={{ padding: 1, borderRadius: 10 }}
                    />
                  </div>
                  <div className="col-md-4">
                    <img
                      src="assets/teamSlider/img-03-ceo.png"
                      className="img-fluid"
                      style={{ padding: 5, borderRadius: 10 }}
                    />
                    <br />
                    <img
                      src="assets/teamSlider/img-05-ceo.png"
                      className="img-fluid"
                      style={{ padding: 5, borderRadius: 10 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Hero */}
        <br />

        <div className="container">
          <br />
          <div className="row">
            <div className="col-md-3" style={{ padding: 20 }}>
              <div className="card swiper-slide">
                <div className="image-content">
                  <span className="overlay" />
                  <div className="card-image">
                    <img
                      src="assets/teamSlider/niraj-sir.png"
                      className="card-img"
                    />
                  </div>
                </div>
                <div className="card-content">
                  <h2 className="name">Niraj Vinod Sinha</h2>
                  <p>Mentor</p>
                  <p>
                    <b>
                      <i>MBA,IT (IIM Calcutta) </i>
                    </b>
                  </p>
                  <p className="description">
                    More than 15+ years of Experience in IT Domain
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3" style={{ padding: 20 }}>
              <div className="card swiper-slide">
                <div className="image-content">
                  <span className="overlay" />
                  <div className="card-image">
                    <img
                      src="assets/teamSlider/pkrao.png"
                      className="card-img"
                      alt="Mr. P. K. Rao"
                    />
                  </div>
                </div>
                <div className="card-content">
                  <h2 className="name">Mr. P. K. Rao</h2>
                  <p>Training &amp; Placement Expert</p>
                  <p>
                    <b>
                      <i>DSTTE-BIHAR </i>
                    </b>
                  </p>
                  <p className="description">
                    More than 15+ years of Experience
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3" style={{ padding: 20 }}>
              <div className="card swiper-slide">
                <div className="image-content">
                  <span className="overlay" />
                  <div className="card-image">
                    <img
                      src="assets/teamSlider/ambar_kumar.png"
                      className="card-img"
                    />
                  </div>
                </div>
                <div className="card-content">
                  <h2 className="name">Ambar Kumar</h2>
                  <p className="description">Manager HR &amp; IR</p>
                  <p>
                    <b>
                      <i>MBA from BHU</i>
                    </b>
                  </p>
                  <p className="description">
                    More than 17+ years of Experience in Core Domain
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3" style={{ padding: 20 }}>
              <div className="card swiper-slide">
                <div className="image-content">
                  <span className="overlay" />
                  <div className="card-image">
                    <img
                      src="assets/teamSlider/ayush_dev.png"
                      className="card-img"
                    />
                  </div>
                </div>
                <div className="card-content">
                  <h2 className="name">Ayush Dev</h2>
                  <p>AI engineer and Consultant</p>
                  <p>
                    <b>
                      <i>
                        BSc Artificial intelligence &amp; Physics, Virginia tech
                        USA
                      </i>
                    </b>
                  </p>
                  <p className="description">
                    More than 5+ years of Experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3" style={{ padding: 20 }}>
              <div className="card swiper-slide">
                <div className="image-content">
                  <span className="overlay" />
                  <div className="card-image">
                    <img
                      src="assets/teamSlider/ridhima-madam.png"
                      className="card-img"
                    />
                  </div>
                </div>
                <div className="card-content">
                  <h2 className="name">Ridhima Srivastava</h2>
                  <p>Senior Advisor</p>
                  <p>
                    <b>
                      <i>MBA- HR &amp; IT</i>
                    </b>
                  </p>
                  <p className="description">
                    More than 15+ years of Experience in IT Domain
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix">
          <br />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="card swiper-slide">
                <div className="image-content">
                  <span className="overlay" />
                  <div className="card-image">
                    <img
                      src="assets/teamSlider/shubham.png"
                      className="card-img"
                    />
                  </div>
                </div>
                <div className="card-content">
                  <h2 className="name">Shubham Raj</h2>
                  <p className="description">CMO</p>
                  <p>
                    <b>
                      <i>Graduate</i>
                    </b>
                  </p>
                  <p className="description">
                    More than 7+ years of Experience in IT Domain
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card swiper-slide">
                <div className="image-content">
                  <span className="overlay" />
                  <div className="card-image">
                    <img
                      src="assets/teamSlider/HR-InfoEra.png"
                      className="card-img"
                    />
                  </div>
                </div>
                <div className="card-content">
                  <h2 className="name">Anjali Kumari</h2>
                  <p>HR Manager</p>
                  <p>
                    <b>
                      <i>Post Graduate</i>
                    </b>
                  </p>
                  <p className="description">
                    More than 2+ years of Experience in IT Domain
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 w-full mx-auto d-flex justify-content-center">
          <div className="d-flex flex-column align-items-center gap-3 w-100">
            <TeamSlider />
          </div>
        </div>
        <main id="main">
          {/* ======= Features Section ======= */}
          <section id="features" className="features">
            <div className="container aos-init" data-aos="fade-up">
              {/* <header class="section-header">
    <h2>About Us</h2>
    <p>Welcome to Info Era Software Services Pvt. Ltd.</p>
  </header> */}
              <div className="row">
                <div className="col-lg-6 order-md-2">
                  <img
                    src="assets/img/team-img.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="col-lg-6 mt-5 mt-lg-0 d-flex order-md-1">
                  <div className="row align-self-center gy-4">
                    <h3 style={{ color: "#012970", fontWeight: 700 }}>
                      Successfully running since 9 years
                    </h3>
                    <p style={{ marginTop: 7, textAlign: "justify" }}>
                      We are an established company running successfully for 9
                      years with a great team of Web Developers, Marketing
                      Executive, Assistant Manager and HR. In this journey of
                      rising power we are spreading happiness by connecting
                      people to the digital world. As a Company we have taken
                      the initiative to transform Digitalization and Software
                      Management Systems.
                    </p>
                    <p style={{ marginTop: 7, textAlign: "justify" }}>
                      We led our exponential growth in the past years by
                      connecting foreign clients into our business. We have
                      1000+ clients in India and across the globe. We are
                      growing and people are growing with us. We are helping
                      people achieve their digital Goals and provide them with
                      their digital Needs.
                    </p>
                  </div>
                </div>
              </div>{" "}
              {/* / row */}
            </div>
          </section>
        </main>
        {/* End #main */}
        {/* Swiper JS */}
        {/* JavaScript */}

        {/* End Footer */}

        {/* Vendor JS Files */}
        {/* Template Main JS File */}
      </div>
    </>
  );
}

export default Team;
