const BulkSms = () => {
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
                  Bulk SMS Service
                </h3>
                <p>
                  Today&apos;s business requirements demand that you communicate
                  instantaneously with your customers and that you do so in a
                  manner that is cheaper and more reliable. Rely on us for fast,
                  personalized, scalable, and measurable sms solutions. If you
                  are new to sending sms in bulk, our bulk sms service is the
                  best option to start and experience the results first hand.
                </p>
                <p>
                  We also provide very reliable bulk SMS gateways for
                  integration into websites, web applications, online shopping
                  carts, banking solutions, online networking sites, share
                  trading software, and other applications. Using our software
                  makes your work a lot easier. You do not need to connect any
                  hardware nor do you need to connect a mobile phone to your
                  computer. An Internet connection with internet browser is
                  sufficient to send messages in bulk.
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
                  src="assets/img/bulksms.png"
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

export default BulkSms;
