import { Helmet } from "react-helmet";
const DesktopApplication = () => {
  return (
    <>
    <Helmet>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        
        <title> Expert Web Development Consulting Services | Info Era  </title>
        <meta
          name="description"
          content="CRM System Development, ERP Software Development, CRM Application Developer, GST Billing Software company, Inventory Software Development company in Patna" />

        <meta
          name="keywords"
          content="Info Era is the best Software Development Company in Patna Bihar India. We develop affordable GST billing software, CRM, ERP software, Inventory software"
        />
        <link rel="canonical" href="https://infoera.in/desktop-application" />
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
        <meta name="document-classification" content="Software Development in Patna" />
        <meta name="Distribution" content="Global" />
        
        <meta name="copyright" content="Copyright (c) 2014 by Info Era Software Services Pvt. Ltd." />
        <meta name="abstract" content="Software Development company in Patna, Website Development Company in Patna, Bihar, GST Billing Software, Internship, E-Commerce Development, IT Company, Bulk SMS and Voice Call, Graphic Designing, Web Hosting, SEO services provider in Patna Bihar India" />
        <meta name="Publisher" content="www.infoera.in" />

    </Helmet>
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
