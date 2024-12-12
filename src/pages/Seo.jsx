const Seo = () => {
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
                <h3 style={{ color: "#0c219a", fontWeight: 700, fontSize: 32 }}>
                  Search Engine Optimization
                </h3>
                <p>
                  Ranking First and higher growth is always everybody’s
                  goal.Info Era Software Service realize your goal and makes it
                  reality by our SEO Services. We have planned strategy and
                  protocol which will be followed to give our clients website
                  top slot in the Search Engine. Our SEO Project management team
                  will work hard to give you this edges which makes maximized
                  visibility of Your Web site. Our company&apos;s SEO Project
                  team has specialized set of skills to perform this
                  Optimization of Search engine. Step Ahead can be achieved by
                  using our SEO Services.
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
                <img src="assets/img/seo.png" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* End Hero */}
      </div>
    </>
  );
};

export default Seo;
