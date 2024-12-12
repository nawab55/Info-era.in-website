import { Helmet } from "react-helmet";

// eslint-disable-next-line react/prop-types
function SeoSearch({ city }) {
  return (
    <>
      <Helmet>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta
          name="google-site-verification"
          content="1SjNSasowfU9-J-fvkMaSAPEzrU-x_REXb5QL51dAdU"
        />
        <title>Best Software Company in {city} | Global IT Solution</title>
        <meta
          name="description"
          content={`Discover how the best software company in ${city} is driving innovation and providing cutting-edge IT solutions. Learn about their expertise in software development, website design, and global IT services.`}
        />
        <meta
          name="keywords"
          content={`best software company in ${city}, software company in ${city}, global it solutions ${city}, software development company in ${city}, website maker in ${city}, website designing company in ${city} `}
        />
        <meta name="Author" content="Info Era Software Services Pvt. Ltd." />
        <meta name="Publisher" content="Info Era Software Services pvt.Ltd. " />
      </Helmet>
      {/* ======= Hero Section ======= */}
      <section id="hero" className="hero d-flex align-items-center">
        <div className="container">
          <div className="col-lg-12 d-flex flex-column justify-content-center ">
            <h1 data-aos="fade-up">
              {" "}
              The Best Software Company in {city} : Leading the Digital
              Transformation
            </h1>
            <p
              style={{ textAlign: "justify", marginTop: 35 }}
              data-aos="fade-up"
              data-aos-delay={400}
            >
              In the heart of {city}, a revolution in digital transformation is
              being spearheaded by the best software company in the region.
              Esteemed for its innovative solutions and unparalleled service,
              this company has become a beacon for businesses seeking to elevate
              their digital presence and operational efficiency.
            </p>
            <h3>Cutting-Edge Software Development</h3>
            <p
              style={{ textAlign: "justify", marginTop: 35 }}
              data-aos="fade-up"
              data-aos-delay={400}
            >
              The foundation of the company’s success has been built on robust
              software development. Sophisticated applications and systems are
              being crafted to meet the unique needs of diverse industries.
              Custom software solutions are provided, ensuring that each
              business can operate seamlessly and efficiently. Clients’
              specifications and requirements are meticulously adhered to,
              resulting in software that is both reliable and scalable.
            </p>
          </div>
        </div>
      </section>
      {/* End Hero */}
      {/* ======= Features Section ======= */}
      <section id="features" className="features">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <h2>Overview</h2>
            <p>Top IT Companies in {city}: A Comparative Overview</p>
          </header>
          <div className="row">
            <div className="col-lg-12 mt-5 mt-lg-0 d-flex">
              <div className="row align-self-center gy-4">
                <div
                  className="col-md-12"
                  data-aos="zoom-out"
                  data-aos-delay={200}
                >
                  <div className="feature-box d-flex align-items-center">
                    <i className="bi bi-check" />
                    <div className="col-md-2">
                      <a href="https://www.infoerasoftware.com/">
                        {" "}
                        <img
                          src="assets/img/infoera.png"
                          alt="Logo - Info Era"
                          width="90px"
                          title="Logo of Info Era"
                        />
                      </a>
                    </div>
                    <div className="col-md-10">
                      <a href="https://www.infoerasoftware.com/">
                        {" "}
                        <h3>Info Era Software Services Pvt. Ltd.</h3>
                      </a>
                      <p>
                        Info Era Software Services Pvt. Ltd. is a fast - growing
                        IT company that provides holistic IT solutions to
                        businesses across geographies. So far, we have forayed
                        into Website Designing &amp; Development, Application
                        Designing &amp; Development, Digital Marketing, IT
                        Consulting, Industrial Training, Franchise.
                      </p>
                      <p>
                        <a href="http://www.infoeraservices.com">
                          www.infoeraservices.com
                        </a>
                      </p>
                      <p>
                        Email:{" "}
                        <a href="mailto:contact@infoeraservices.com">
                          contact@infoeraservices.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-12"
                  data-aos="zoom-out"
                  data-aos-delay={300}
                >
                  <div className="feature-box d-flex align-items-center">
                    <i className="bi bi-check" />
                    <div className="col-md-2">
                      <img
                        src="https://www.wipro.com/content/dam/nexus/staticsites/homepage/header/Wipro_Primary%20Logo_Color_RGB.svg"
                        alt="Logo - Wipro"
                        width="90px"
                        title="Logo of Wipro"
                      />
                    </div>
                    <div className="col-md-10">
                      <a href="https://www.wipro.com/contact-wipro/">
                        {" "}
                        <h3>Wipro</h3>
                      </a>
                      <p>
                        {" "}
                        Depending on your role and projects, you may experience
                        a heavy workload at times. This can impact your
                        work-life balance if not managed properly. Client
                        Dependency: Working with clients means that your
                        workload and priorities may shift based on client
                        demands.
                      </p>
                      <p>
                        <a href="http://www.wipro.com">www.wipro.com</a>
                      </p>
                      <p>
                        Email:{" "}
                        <a href="mailto:info@wipro.com">info@wipro.com</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-12"
                  data-aos="zoom-out"
                  data-aos-delay={500}
                >
                  <div className="feature-box d-flex align-items-center">
                    <i className="bi bi-check" />
                    <div className="col-md-2">
                      <img
                        src="https://media.glassdoor.com/sql/13461/tata-consultancy-services-squareLogo-1715076690903.png"
                        alt="Logo - TCS"
                        width="90px"
                        title="Logo of TCS"
                      />
                    </div>
                    <div className="col-md-10">
                      <a href="https://www.tcs.com/home-page">
                        {" "}
                        <h3>Tata Consultancy Services (TCS)</h3>
                      </a>
                      <div className="col-md-10">
                        <p>
                          It was easy and comfortable. All basics of we have
                          strong fundamentals it is easy to crack the interview.
                          Asked questions only from the topics which we have
                          experience and whatever we mentioned in resume.
                        </p>
                        <p>
                          <a href="http://www.tcs.com">www.tcs.com</a>
                        </p>
                        <p>
                          Email: <a href="mailto:info@tcs.com">info@tcs.com</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-12"
                  data-aos="zoom-out"
                  data-aos-delay={600}
                >
                  <div className="feature-box d-flex align-items-center">
                    <i className="bi bi-check" />
                    <img
                      src="https://media.glassdoor.com/sql/8014/cognizant-technology-solutions-squareLogo-1651131366751.png"
                      alt="Logo - Infosys"
                      width="90px"
                      title="Logo of Infosys"
                    />
                    <div className="col-md-2">
                      <a href="https://www.cognizant.com/in/en">
                        <h3>Cognizant Technology Solutions</h3>
                      </a>
                    </div>
                    <div className="col-md-10">
                      <p>
                        Some projects in Infra support are very bad Semi night
                        and Full night shift candidates are paid the same amount
                        of NSA which is very low compared to the stress an
                        Associate has to overtake in a Full Night Shift
                        Promotion
                      </p>
                      <p>
                        <a href="http://www.infosys.com">www.infosys.com</a>
                      </p>
                      <p>
                        Email:{" "}
                        <a href="mailto:contact@infosys.com">
                          contact@infosys.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-12"
                  data-aos="zoom-out"
                  data-aos-delay={600}
                >
                  <div className="feature-box d-flex align-items-center">
                    <i className="bi bi-check" />
                    <div className="col-md-2">
                      <img
                        src="https://media.glassdoor.com/sql/6036/amazon-squarelogo-1552847650117.png"
                        alt="Logo - Amazon"
                        width="90px"
                        title="Logo of Amazon"
                      />
                    </div>
                    <div className="col-md-10">
                      <a href="https://www.amazon.jobs/en/teams/global-it-services">
                        <h3>Amazon</h3>
                      </a>
                      <p>
                        Amazon is growing quickly, both in terms of our business
                        and our great team of Amazonians. Our people are the
                        secret to our success and an important factor in
                        supporting their productivity is ensuring they have the
                        technology they need to do their jobs effectively.
                        Global IT Services is the organization that manages
                        Amazon’s procurement of computers, software and
                        peripherals, develops hardware policy and usage
                        frameworks, and provides one-on-one assistance to
                        employees. From managing hundreds of thousands of
                        assets, to developing programs that ensure our
                        information security standards are upheld, to assisting
                        employees who choose to bring their own devices to work,
                        we balance frugality with practicality, ensuring that
                        employees have the tools and support they need to focus
                        their attention on their jobs and their customers.
                      </p>
                      <p>
                        <a href="https://www.amazon.jobs/en/teams/global-it-services">
                          www.infosys.com
                        </a>
                      </p>
                      <p>
                        Email:{" "}
                        <a href="mailto:cs-reply@amazon.in">
                          cs-reply@amazon.in
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* / row */}
        </div>
      </section>
      {/* End Features Section */}
    </>
  );
}

export default SeoSearch;
