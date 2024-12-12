const BulkEmail = () => {
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
                  E-mail Service
                </h3>
                <p>
                  Eager to market your products, services or ideas to those who
                  are interested.
                </p>
                <p>
                  At Info Era Software Service, we help you in reaching out to
                  maximum customers and having constant touch them. With our
                  Email Services, we help you make an announcement of the new
                  products or services that you have launched. Info Era SoftWare
                  Service believes that email service is direct means of
                  marketing to reach out to customers for the product or
                  services.
                </p>
                <p>
                  The outcome of your business is higher, as emails sent by us
                  generate direct sales.
                </p>
                <p>
                  Info Era Software Service has a team of professionals who
                  design professionally. This team is assigned to monitor the
                  emails that include open emails as well as forwarded emails,
                  bounced back emails and clicked links.
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
                  src="assets/img/bulkemail.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        {/* End Hero */}
        <main id="main"></main>
      </div>
    </>
  );
};

export default BulkEmail;
