const DigitalMarketing = () => {
  return (
    <>
      <div>
        {/* ======= Hero Section ======= */}
        <section id="hero" className="hero d-flex align-items-center">
          <br />
          <br />
          <div className="container aos-init aos-animate" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-6 d-flex flex-column justify-content-center">
                <h3 style={{ color: "#0c219a", fontWeight: 700 }}>
                  Digital Marketing
                </h3>
                <p style={{ textAlign: "justify" }}>
                  Digital marketing is the component of marketing that uses the
                  Internet and online based digital technologies such as desktop
                  computers and mobile phones and other digital media and
                  platforms to promote products and services. Its development
                  during the 1990s and 2000s changed the way brands and
                  businesses use technology for marketing. As digital platforms
                  became increasingly incorporated into marketing plans and
                  everyday life, and as people increasingly use digital devices
                  instead of visiting physical shops,digital marketing campaigns
                  have become prevalent, employing combinations of search engine
                  optimization (SEO), search engine marketing (SEM), content
                  marketing, influencer marketing, content automation, campaign
                  marketing, data-driven marketing, e-commerce marketing, social
                  media optimization, email direct marketing, display
                  advertising, e-books, and optical disks and games have become
                  commonplace.
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
                  src="assets/img/digitalmarketing.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        {/* End Hero */}
      </div>
    </>
  );
};

export default DigitalMarketing;
