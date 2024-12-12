const WhyChoose = () => {
  return (
    <>
      <>
        {/* ======= Hero Section ======= */}
        <section id="hero" className="hero d-flex align-items-center">
          <br />
          <br />
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-6 d-flex flex-column justify-content-center">
                <h3
                  style={{
                    color: "#0c219a",
                    fontWeight: 700,
                    textAlign: "justify",
                  }}
                >
                  It&apos;s important to our clients to understand how we’re
                  different and why our clients choose Info Era.
                </h3>
                <p style={{ textAlign: "justify" }}>
                  Our first priority is satisfaction of our valuable customer.
                  We always care about it and focused on delivering scalable,
                  integrated and comprehensive services.
                </p>
                <ul>
                  <li>
                    We strongly believe in client satisfaction by giving them
                    the best services.
                  </li>
                  <li>Expect great results at affordable rates.</li>
                  <li>
                    The Company is composed of a selected group of Web
                    Applications Developers, Web Designers and SEO specialists /
                    professionals.
                  </li>
                  <li>We don&apos;t outsource our work.</li>
                </ul>
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
              <div className="col-lg-6 hero-img" data-aos="zoom-out">
                <img
                  src="assets/img/features.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        {/* End Hero */}
        <main id="main">
          {/* ======= Features Section ======= */}
          <section id="features" className="features">
            <div className="container" data-aos="fade-up">
              {/* <header class="section-header">
    <h2>About Us</h2>
    <p>Welcome to Info Era Software Services Pvt. Ltd.</p>
  </header> */}
              <div className="row">
                <div className="col-lg-6 order-md-2">
                  <img
                    src="assets/img/features.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="col-lg-6 mt-5 mt-lg-0 d-flex order-md-1">
                  <div className="row align-self-center gy-4">
                    <h3 style={{ color: "#012970", fontWeight: 700 }}>
                      Next-Generation Software Services platform providing
                    </h3>
                    <p style={{ marginTop: 7, textAlign: "justify" }}>
                      Info Era is a leading global Next-Generation Software
                      Services platform providing client oriented solutions. Our
                      clients are in different states of India and across the
                      globe. Digital transformation is the need of today’s world
                      and we strongly believe this. We are a team of experts
                      working day and night building your dream. We empower
                      young entrepreneurs by providing solutions to their
                      digital needs.
                    </p>
                    <p style={{ marginTop: 7, textAlign: "justify" }}>
                      We trust in Three R’s Revamp, Restructure and Re-design
                      and then deliver. We build trust of our clients by
                      building innovative website design, software development,
                      android and web application and Digital Marketing. We are
                      successfully increasing business through technology.
                      Successful 8+ years of service by providing complete
                      Software and Digital Marketing Software and Industrial
                      training.
                    </p>
                  </div>
                </div>
              </div>{" "}
              {/* / row */}
            </div>
          </section>
        </main>
        {/* End #main */}
      </>
    </>
  );
};

export default WhyChoose;
