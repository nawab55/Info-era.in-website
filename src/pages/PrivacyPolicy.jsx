
const PrivacyPolicy = () => {
  return (
    <>
      <div>
        {/* ======= Hero Section ======= */}
        <section id="hero" className="hero d-flex align-items-center">
          <br />
          <br />
          <div className="container aos-init aos-animate" data-aos="fade-up">
            <header className="section-header">
              <h2 style={{ fontSize: 13, fontWeight: 700, color: "#4154f1" }} />
            </header>
            <div className="row">
              <div className="col-lg-6 d-flex flex-column justify-content-center">
                <h3 style={{ color: "#0c219a", fontWeight: 700, fontSize: 32 }}>
                  Privacy Policy
                </h3>
                <p>
                  Info Era takes the privacy and security of our clients and
                  their customers seriously. Info Era provides this Privacy
                  Policy because our clients and their customers have a right to
                  know what information we collect, how it is used, and how it
                  is protected. This Privacy Policy and the Terms of Use on our
                  site outline the terms and conditions under which you may use
                  our website. Use, collection, and disclosure of your
                  personally identifiable information will be governed by the
                  terms of this Privacy Policy.
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
            <div className="container aos-init aos-animate" data-aos="fade-up">
              {/* <header class="section-header">
    <h2>About Us</h2>
    <p>Welcome to Info Era Software Services Pvt. Ltd.</p>
  </header> */}
              {/* / row */}
              {/* Feature Tabs */}
              <div
                className="row feture-tabs aos-init aos-animate"
                data-aos="fade-up"
                style={{ margin: 0 }}
              >
                <div className="col-lg-12">
                  <p>
                    What personal information do we collect from the people
                    visiting our website? When ordering or registering on our
                    site, as appropriate, you may be asked to enter your name,
                    email address, mailing address, phone number or other
                    details to help you with your experience.
                  </p>
                  <p>
                    When do we collect information? We collect information from
                    you when you register on our site, place an order, respond
                    to a survey, fill out a form or enter information on our
                    site.
                  </p>
                  <p>
                    How do we use your information? We may use the information
                    we collect from you when you register, make a purchase, sign
                    up for information, respond to a survey or marketing
                    communication, surf the website, or use certain other site
                    features in the following ways.
                  </p>
                  <ul>
                    <li>
                      <p>
                        To personalize user’s experience and to allow us to
                        deliver the type of content and product offerings in
                        which you are most interested.
                      </p>
                    </li>
                    <li>
                      <p>
                        To improve our website in order to better serve you.
                      </p>
                    </li>
                    <li>
                      <p>
                        To allow us to better service you in responding to your
                        customer service requests.
                      </p>
                    </li>
                    <li>
                      <p>
                        To administer a contest, promotion, survey or other site
                        feature.
                      </p>
                    </li>
                    <li>
                      <p>To quickly process your transactions.</p>
                    </li>
                    <li>
                      <p>
                        To send periodic emails regarding your order or other
                        products and services.
                      </p>
                    </li>
                    <li>
                      <p>
                        How do we protect visitor information? Our website is
                        scanned on a regular basis for security holes and known
                        vulnerabilities in order to make your visit to our site
                        as safe as possible.We use regular Malware Scanning.
                        Your personal information is contained behind secured
                        networks and is only accessible by a limited number of
                        persons who have special access rights to such systems,
                        and are required to keep the information confidential.
                        We implement a variety of security measures when a user
                        places an order, enters, submits, or accesses their
                        information to maintain the safety of your personal
                        information. For your convenience we may store your
                        credit card information kept for more than 60 days in
                        order to expedite future orders, and to automate the
                        billing process.
                      </p>
                    </li>
                    <li>
                      <p>
                        Third Party Disclosure: We do not sell, trade, or
                        otherwise transfer to outside parties your personally
                        identifiable information unless we provide you with
                        advance notice. This does not include website hosting
                        partners and other parties who assist us in operating
                        our website, conducting our business, or servicing you,
                        so long as those parties agree to keep this information
                        confidential. We may also release your information when
                        we believe release is appropriate to comply with the
                        law, enforce our site policies, or protect ours or
                        others’ rights, property, or safety.In addition, all
                        sensitive/credit information you supply is encrypted via
                        Secure Socket Layer (SSL) technology. However,
                        non-personally identifiable visitor information may be
                        provided to other parties for marketing, advertising, or
                        other uses.
                      </p>
                    </li>
                    <li>
                      <p>
                        Third party links: We do not include or offer third
                        party products or services on our website. Changes to
                        this Privacy Policy: We may change and update the terms
                        of this Privacy Policy from time to time. We therefore
                        recommend that you read it periodically.
                      </p>
                    </li>
                    <li>
                      <p>
                        Payment Policy: 1) Payment will not refund after order
                        is taken. 2) Login Crendentials of Domain and web
                        hosting will be provided after full payment procedure.
                      </p>
                    </li>
                  </ul>
                </div>
                {/* <div class="col-lg-6">
      <img src="/assets/img/features-2.png" class="img-fluid" alt="">
    </div> */}
              </div>
              {/* End Feature Tabs */}
            </div>
          </section>
          {/* End Features Section */}
        </main>
        {/* End #main */}
      </div>
    </>
  );
};

export default PrivacyPolicy;
