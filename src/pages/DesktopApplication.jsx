const DesktopApplication = () => {
  return (
    <>
      <div>
        {/* ======= Hero Section ======= */}
        <section id="hero" className="hero d-flex align-items-center">
          <div className="container aos-init aos-animate" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-6 d-flex flex-column justify-content-center">
                <h3 style={{ color: "#0c219a", fontWeight: 700 }}>
                  Easy navigation, Trendy, intuitive design and highly
                  responsive.
                </h3>
                <p>
                  Info Era Software Service specialises in creating beautiful,
                  smart and customized websites so that your online identity
                  goes a long way in influencing and converting your potential
                  clients, right from the moment when they land on your website.
                </p>
                <p>
                  We offer complete solutions to your web designing irrespective
                  of your budget specifications. Our corporate team has
                  developed and designed websites suitable to the need of our
                  clients coming from various business fields such as Real
                  Estates, Matrimonial Sites, Priests and Religious Service,
                  Financial Institutions, Educational Institutions, Science
                  &amp; Technology and Hospital &amp; Clinics to name a few.
                  Customer satisfaction is our foremost priority. For more
                  information about our web design services, contact us today.
                  Our expert&apos;s designers are here to assist you.
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
                  src="assets/img/desktop1.png"
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
            <div className="container aos-init aos-animate" data-aos="fade-up">
              {/* <header class="section-header">
    <h2>About Us</h2>
    <p>Welcome to Info Era Software Services Pvt. Ltd.</p>
  </header> */}
              <div className="row">
                <div className="col-lg-6 order-md-2">
                  <img
                    src="assets/img/desktop2.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="col-lg-6 mt-5 mt-lg-0 d-flex order-md-1">
                  <div className="row align-self-center gy-4">
                    <h3
                      style={{
                        color: "#012970",
                        fontWeight: 700,
                        fontSize: 32,
                      }}
                    >
                      Next-Generation Software Services platform providing
                    </h3>
                    <p style={{ marginTop: 7 }}>
                      Designers have known how each design matters to attention
                      and also web related action. Flash designs inputted in an
                      appropriate manner hence access of site is not affected
                      with balance in designs. Vector graphics skills are
                      utilised for an accurate and impressive designs, which you
                      may recognise in logos. Latest software skills are used
                      for vector graphics.
                    </p>
                    <p style={{ marginTop: 7 }}>
                      Our web designing service includes corporate website
                      designing, logo designing and corporate identity kit along
                      with various other sophisticated graphics and illustration
                      work as per customer&apos;s requirement.
                    </p>
                  </div>
                </div>
              </div>{" "}
              {/* / row */}
            </div>
          </section>
        </main>
        {/* End #main */}
      </div>
    </>
  );
};

export default DesktopApplication;
