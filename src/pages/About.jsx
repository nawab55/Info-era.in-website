import { useState } from "react";
import { Helmet } from "react-helmet";

const About = () => {
  const [tab, setTab] = useState(1);

  const tabHandler = (activeTab) => {
    console.log(activeTab);
    setTab(activeTab);
  };

  return (
    <>
       <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        
        <title> About Info Era | Growing IT company that provides holistic IT solutions</title>
        <meta
          name="description"
          content="Info Era Software Services offers cutting-edge IT solutions, including web design, app development, digital marketing, IT consulting, and industrial training." />

        <meta
          name="keywords"
          content="info era vision, info era mission, info era aim, Next-Generation Software Services provider, IT Consulting "
        />
        <link rel="canonical" href="https://infoera.in/about" />
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
        <meta name="document-classification" content="Software & Website development company" />
        <meta name="Distribution" content="Global" />
        <meta name="abstract" content="Software Development company in Patna, Website Development Company in Patna, Bihar, GST Billing Software, Internship, E-Commerce Development, IT Company, Bulk SMS and Voice Call, Graphic Designing, Web Hosting, SEO services provider in Patna Bihar India" />
        <meta name="keyphrases" content="Top it company in patna, best software company in patna bihar"/>
        <meta name="contactorganization" content="Info Era Software Services Pvt. Ltd."/>
        <meta name="contactzipcode" content="800001"/>
        <meta name="contactcity" content="Patna"/>
        <meta name="contactcountry" content="india"/>
        <meta name="Geography" content="Patna, Bihar, India"/>
        <meta name="country" content="INDIA"/>
        <meta name="contactmobilenumber" content="+91-7008411312"/>
        <meta name="copyright" content="Copyright (c) 2014 by Info Era Software Services Pvt. Ltd." />

        <meta name="Publisher" content="www.infoera.in" />


      </Helmet>
      <section id="hero" className="hero d-flex align-items-center">
        <br />
        <br />
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h3 style={{ color: "#0c219a", fontWeight: 700 }}>
                Growing IT company that provides holistic IT solutions
              </h3>
              <p style={{ textAlign: "justify" }}>
                Info Era Software Services Pvt. Ltd. is a fast - growing IT
                company that provides holistic IT solutions to businesses across
                geographies. So far, we have forayed into Website Designing
                &amp; Development, Application Designing &amp; Development,
                Digital Marketing, IT Consulting, Industrial Training,
                Franchise.
              </p>
              <p style={{ textAlign: "justify" }}>
                Currently, we have a team of highly skilled IT professionals
                that work round the clock to ensure Info Era Software Services
                stays true to its offering &amp; commitments. Our team of
                experienced experts includes software developers, web
                developers, designers, digital marketing experts BDE &amp; BDM.
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
            <div className="col-lg-6 hero-img" data-aos="zoom-out">
              <img
                src="assets/img/about-img.png"
                className="img-fluid"
                alt="info era software services"
                title="software company in patna"
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
              <div className="col-lg-6">
                <img
                  src="assets/img/about.png"
                  className="img-fluid"
                  alt="software company in darbhanga"
                  title="software company in darbhanga"
                />
              </div>
              <div className="col-lg-6 mt-5 mt-lg-0 d-flex">
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
                    working day and night building your dream. We empower young
                    entrepreneurs by providing solutions to their digital needs.
                  </p>
                  <p style={{ marginTop: 7, textAlign: "justify" }}>
                    We trust in Three R’s Revamp, Restructure and Re-design and
                    then deliver. We build trust of our clients by building
                    innovative website design, software development, android and
                    web application and Digital Marketing. We are successfully
                    increasing business through technology. Successful 8+ years
                    of service by providing Complete Software and Digital
                    Marketing Software and Industrial training.
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* / row */}
            {/* Feature Tabs */}
            <div className="row feture-tabs" data-aos="fade-up">
              <div className="col-lg-12">
                <h3>
                  Our Mission is to organize the world&apos;s information and
                  make it universally accessible and usefull.
                </h3>
                {/* Tabs */}
                <ul className="nav nav-pills mb-3">
                  <li>
                    <button
                      className={`${
                        tab === 1 ? "about-tab-active" : ""
                      } nav-link`}
                      onClick={() => tabHandler(1)}
                    >
                      Vision
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => tabHandler(2)}
                      className={`${
                        tab === 2 ? "about-tab-active" : ""
                      } nav-link`}
                    >
                      Mission
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => tabHandler(3)}
                      className={`${
                        tab === 3 ? "about-tab-active" : ""
                      } nav-link`}
                    >
                      Aim
                    </button>
                  </li>
                </ul>
                {/* End Tabs */}
                {/* Tab Content */}
                <div className="tab-content">
                  {/* tab 1 */}
                  {tab === 1 && (
                    <div className="tab-pane fade show active" id="tab1">
                      <div className="row">
                        <div className="col-md-6">
                          <p style={{ textAlign: "justify" }}>
                            Our vision is to become businesses first choice when
                            it comes to software development and maintenance. To
                            accomplish this, we always try to exceed our
                            client’s expectations. Info Era Software Services
                            Pvt. Ltd. strives to build lasting partnerships and
                            ensure client satisfaction.
                          </p>
                          <div className="d-flex align-items-center mb-2">
                            <i className="bi bi-check2" />
                            <h4>
                              Become Businesses first choice when it comes to
                              software development.
                            </h4>
                          </div>
                          <p style={{ textAlign: "justify" }}>
                            We are consistently working to develop in a constant
                            manner and grow as a major IT service provider to
                            become a leading performer, in providing quality Web
                            and Software Development solutions in the
                            competitive global marketplace. Our professional,
                            flexible and integrated process reflects in what we
                            do.
                          </p>
                          <div className="d-flex align-items-center mb-2">
                            <i className="bi bi-check2" />
                            <h4>
                              Growing as a major IT service provider in Bihar
                              and other States as well.
                            </h4>
                          </div>
                          <p style={{ textAlign: "justify" }}>
                            We are dedicated to provide high focus to all the
                            contracts without any differences irrespective of
                            size, profitability or criticality. All the clients
                            are equal and important to us. The luminous insight
                            of our team has helped to set standards in this ever
                            evolving industry.
                          </p>
                        </div>
                        <div className="col-md-6">
                          <img
                            src="assets/img/features-2.png"
                            className="img-fluid"
                            alt="website designing company in bihar"
                            title="website designing company in bihar"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* tab 2 */}
                  {tab === 2 && (
                    <div className="tab-pane fade show active" id="tab2">
                      <div className="row">
                        <div className="col-md-6">
                          <p style={{ textAlign: "justify" }}>
                            Our mission is to enhance the business growth of our
                            customers with creative Design and Development to
                            deliver market-defining high-quality solutions that
                            create value and reliable competitive advantage for
                            our clients around the world.
                          </p>
                          <div className="d-flex align-items-center mb-2">
                            <i className="bi bi-check2" />
                            <h4>
                              Enhance the business growth of our customers with
                              creative Design
                            </h4>
                          </div>
                          <p>
                            {" "}
                            Our mission is to deliver optimal solutions with
                            quality and services at reasonable prices. For us
                            customer satisfaction is given top place. We are
                            very friendly in our dealings to the customers and
                            it helps us retain existing clients and expand the
                            customer circle. We always try to improve the
                            quality of our products by exploring innovative
                            ideas.
                          </p>
                          <div className="d-flex align-items-center mb-2">
                            <i className="bi bi-check2" />
                            <h4>
                              We are very friendly in our dealings to the
                              customers.
                            </h4>
                          </div>
                          <p>
                            {" "}
                            We value and expect integrity in all that we do. We
                            recognize that the foundation of our growth and
                            success is making each and every client project a
                            success.
                          </p>
                        </div>
                        <div className="col-md-6">
                          <img
                            src="assets/img/vision.png"
                            className="img-fluid"
                            alt="best software company in bihar"
                            title="best software company in bihar"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* tab 3 */}
                  {tab === 3 && (
                    <div className="tab-pane fade show active" id="tab3">
                      <ul>
                        <li>Identification of the needed software</li>
                        <li>
                          Analysis and specification of the requirements for
                          developing the software
                        </li>
                        <li>The design to be coded</li>
                        <li>Programming</li>
                        <li>
                          Testing to confirm that what has been developed meets
                          the objectives
                        </li>
                      </ul>
                      <div className="d-flex align-items-center mb-2">
                        <i className="bi bi-check2" />
                        <h4>
                          Standardize and codify key software project concepts
                          and terminology
                        </h4>
                      </div>
                      <ul>
                        <li>Maintenance</li>
                        <li>
                          Ensure business goals and objectives are considered at
                          all stages of a project
                        </li>
                        <li>
                          Develop an accurate and flexible model describing key
                          project activities
                        </li>
                        <li>
                          Identify and leverage accurate insights into software
                          project success and failure rates and reasons
                        </li>
                      </ul>
                      <div className="d-flex align-items-center mb-2">
                        <i className="bi bi-check2" />
                        <h4>
                          Identify and encourage best practices which are
                          appropriate for a particular project
                        </h4>
                      </div>
                      <ul>
                        <li>Develop software project activity accelerators</li>
                        <li>Develop software project risk-reducers</li>
                        <li>
                          Encourage a spirit of openness, transparency,
                          integrity, trust, and continuous learning
                        </li>
                        <li>
                          Build and nurture a global community that shares our
                          vision and mission
                        </li>
                        <li>And our most important goal</li>
                        <li>
                          Provably and reliably reduce the cost, effort,
                          duration and risk of software projects
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              {/* <div class="col-lg-6">
      <img src="assets/img/features-2.png" class="img-fluid" alt="">
    </div> */}
            </div>
            {/* End Feature Tabs */}
          </div>
        </section>
        {/* End Features Section */}
      </main>
      {/* End #main */}
    </>
  );
};

export default About;
