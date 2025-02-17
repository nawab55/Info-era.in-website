import { useState } from "react";
import toast from "react-hot-toast";
import Spinner from "../components/loader/Spinner";
// import { Helmet } from "react-helmet";
import { Helmet } from "react-helmet-async";

function Bbc() {
  // State to manage form input values
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    gender: "",
    aadhaar: "",
    pan: "",
    gst: "",
    email: "",
    mobile: "",
    state: "",
    district: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const states = [
    "Andaman and Nicobar Islands",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chandigarh",
    "Chhattisgarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Ladakh",
    "Lakshadweep",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Puducherry",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      const response = await fetch(
        `${
          import.meta.env.VITE_REACT_APP_BACKEND_BASEURL
        }/api/co-partners/bbc/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {
        toast.success(data.message);
        setFormData({
          name: "",
          company: "",
          gender: "",
          aadhaar: "",
          pan: "",
          gst: "",
          email: "",
          mobile: "",
          state: "",
          district: "",
        });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
       <Helmet>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />

        <meta name="google-site-verification" content="KrFf109xrwKNRJTWVipUzNV7ZMCJn5vGEdhwxAWcuSg" />
       
        <title>Info Era Software Services Pvt. Ltd. | Software Company</title>
        <meta
          name="description"
          content="Info Era Software Services Pvt. Ltd. is a fast - growing IT company that provides holistic IT solutions to businesses across geographies. So far, we have forayed into healthcare, food services, travel &amp; tourism, logistics &amp; shipping, e-commerce, banking, technology, manufacturing, and IT-enabled education service industries."
        />
        <meta
          name="keywords"
          content="Info Era Software Services Pvt Ltd, Website Designing company, software company, industrial training "
        />
        <link rel="canonical" href="https://infoera.in/bbc" aria-label="Canonical - Info Era Software Services Pvt. Ltd." />
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
        <meta name="keyphrases" content="bbc, BBC Info Era, BBC Patna, it training in bihar, "/>
        <meta name="copyright" content="Copyright (c) 2014 by Info Era Software Services Pvt. Ltd." />

        <meta name="Publisher" content="www.infoera.in" />
      </Helmet>

      <section id="hero" className="hero d-flex align-items-center">
        <br />
        <br />
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <header className="section-header">
            <h2
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "#4154f1",
                textTransform: "none",
              }}
            />
          </header>
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h3 style={{ color: "#0c219a", fontWeight: 700 }}>
                What is BBC
                <br />
                <span style={{ fontSize: 20 }}>
                  (Business Business Consultant)?
                </span>
              </h3>
              <p style={{ textAlign: "justify" }}>
                A BBC (Business Business Consultant) is an organization, which
                works with Info Era Software Services Pvt. Ltd. to help every
                individual’s business, school, hospitals, start up’s
                entrepreneurs, working professionals and students to grow in
                their career and their business by giving Info Era Software
                Services Pvt. Ltd. products &amp; services in the market for a
                certain amount of commission.
              </p>
              <p style={{ textAlign: "justify" }}>OR</p>
              <p style={{ textAlign: "justify" }}>
                A BBC (Business Business Consultant) is a Mini-Franchise&nbsp;of
                Info Era Software Services Pvt. Ltd.
                <br />
                You don’t require any office, infrastructure or employees to
                start BBC Business. You can work from as per your convenience
                (Part-time or Full-time).
              </p>
              <p style={{ textAlign: "justify" }} />
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
                src="assets/img/bbc-1.gif"
                className="img-fluid"
                alt="best software company in Patna"
                title="Best Software Company - Info Era"
              />
            </div>
          </div>
        </div>
      </section>
      {/* ======= Form BBC ======= */}
      <section id="features" className="features">
        <form
          onSubmit={handleSubmit}
          className="container aos-init"
          data-aos="fade-up"
        >
          <header className="section-header">
            <h2>Become a BBC (Business Business Consultanat)</h2>
            <p>BBC Registration form</p>
          </header>
          <div className="row">
            <div className="col-lg-4 mt-5 mt-lg-0">
              <label htmlFor="name">Name</label>
              <input
                name="name"
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter Name"
              />
              <span
                id="ContentPlaceHolder1_RequiredFieldValidator1"
                style={{ color: "red", visibility: "hidden" }}
              >
                Name is require
              </span>
              <br />
              <label htmlFor="company">Conpany/Organization Name</label>
              <input
                name="company"
                type="text"
                id="company"
                value={formData.company}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter Company/Organization Name"
              />
              <span
                id="ContentPlaceHolder1_RequiredFieldValidator9"
                style={{ color: "red", visibility: "hidden" }}
              >
                Company/Organization is require
              </span>
              <br />
              <label htmlFor="gender">Gender</label>
              <select
                name="gender"
                id="gender"
                value={formData.gender}
                onChange={handleChange}
                className="form-control"
              >
                <option value="">---Select---</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <br />
              <label htmlFor="aadhaar">Adhar No.</label>
              <input
                name="aadhaar"
                type="text"
                id="aadhaar"
                value={formData.aadhaar}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter Adhar no."
              />
              <span
                id="ContentPlaceHolder1_RequiredFieldValidator2"
                style={{ color: "red", visibility: "hidden" }}
              >
                Adhar is require
              </span>
              <br />
            </div>
            <div className="col-lg-4">
              <label htmlFor="pan">PAN</label>
              <input
                name="pan"
                type="text"
                value={formData.pan}
                onChange={handleChange}
                id="pan"
                className="form-control"
                placeholder="Enter PAN"
              />
              <span
                id="ContentPlaceHolder1_RequiredFieldValidator7"
                style={{ color: "red", visibility: "hidden" }}
              >
                PAN is require
              </span>
              <br />
              <label htmlFor="gst">GST (If available)</label>
              <input
                name="gst"
                type="text"
                value={formData.gst}
                onChange={handleChange}
                id="gst"
                className="form-control"
                placeholder="Enter GST (If available)"
              />
              <br />
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="text"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter Email"
              />
              <span
                id="ContentPlaceHolder1_RequiredFieldValidator3"
                style={{ color: "red", visibility: "hidden" }}
              >
                Email is require
              </span>
              <span
                id="ContentPlaceHolder1_RegularExpressionValidator1"
                style={{ color: "red", visibility: "hidden" }}
              >
                Enter a valid Email ID
              </span>
              <br />
            </div>
            <div className="col-lg-4">
              <label htmlFor="mobile">Mobile</label>
              <input
                name="mobile"
                type="text"
                value={formData.mobile}
                onChange={handleChange}
                id="mobile"
                className="form-control"
                placeholder="Enter Mobile"
              />
              <span
                id="ContentPlaceHolder1_RequiredFieldValidator4"
                style={{ color: "red", visibility: "hidden" }}
              >
                Mobile is require
              </span>
              <br />
              <label htmlFor="state">Select State</label>
              <select
                name="state"
                id="state"
                className="form-control"
                value={formData.state}
                onChange={handleChange}
              >
                <option value="">---Select---</option>
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
              <br />
              <label htmlFor="district">District</label>
              <input
                name="district"
                type="text"
                id="district"
                value={formData.district}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter District"
              />
              <span
                id="ContentPlaceHolder1_RequiredFieldValidator6"
                style={{ color: "red", visibility: "hidden" }}
              >
                District is require
              </span>
              <br />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <button
                type="submit"
                disabled={isSubmitting}
                name="ctl00$ContentPlaceHolder1$btnsubmit"
                id="ContentPlaceHolder1_btnsubmit"
                className="btn btn-primary mr-2"
              >
                {isSubmitting ? <Spinner /> : "Submit"}
              </button>
              <button type="reset" className="btn btn-danger">
                Cancel
              </button>
            </div>
          </div>
        </form>
      </section>
      {/* ======= Features Section ======= */}
      <section id="Section5" className="features">
        <div className="container aos-init aos-animate" data-aos="fade-up">
          {/* <header class="section-header">
    <h2>About Us</h2>
    <p>Welcome to Info Era Software Services Pvt. Ltd.</p>
  </header> */}
          <div className="row">
            <div className="col-lg-6">
              <img
                src="assets/img/bbc-3.gif"
                className="img-fluid"
                alt="best software company in bihar"
                title="Best Software Company - Info Era"
              />
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0 d-flex">
              <div className="row align-self-center gy-4">
                <h3 style={{ color: "#012970", fontWeight: 700 }}>
                  BBC (Business Business Consultant)
                </h3>
                <p style={{ marginTop: 7, textAlign: "justify" }}>
                  As a BBC (Business Business Consultant), you work
                  independently and earn commission by consulting or selling
                  products &amp; services of Info Era Software Services Pvt.
                  Ltd.
                </p>
                <p style={{ marginTop: 7, textAlign: "justify" }}>
                  The primary responsibility of a BBC is to recommend products
                  &amp; services of Info Era Software Services Pvt. Ltd. to
                  prospective buyers like Start Up’s business, Students,
                  Schools, Hospitals, Businessmen, Working Professionals etc.
                  based on their business requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="Section1" className="features">
        <div className="container aos-init" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-12 mt-5 mt-lg-0 d-flex">
              <div className="row align-self-center gy-4">
                <h3 style={{ color: "#012970", fontWeight: 700 }}>
                  Why become a BBC?
                  <br />
                  <span style={{ fontSize: 20 }}>
                    All you need is to know BBC Model.
                  </span>
                </h3>
                <div className="col col1" id="col">
                  <h5>1. Earning with Learning</h5>
                </div>
                <div className="col col2" id="col">
                  <h5>2. Work form home</h5>
                </div>
                <div className="col col3" id="col">
                  <h5>3. Support</h5>
                </div>
                <div className="col col4" id="col">
                  <h5>4. Weekly/Monthly Pay Out</h5>
                </div>
                <div className="col col5" id="col">
                  <h5>5. Tech Support</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        style={{
          background: "url(assets/img/handshake.png)",
          padding: "10rem 0px",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          overflowX: "hidden",
        }}
        className=" container parallax"
      >
        <div className="row">
          <div className="col-lg-2 col-md-2" />
          <div className="col-lg-5 col-md-5 col-sm-6 col-xs-6">
            <ul style={{ color: "#fff", fontSize: 18 }}>
              <li>Become your own boss.</li>
              <li>No Restriction.</li>
              <li>No Reporting.</li>
            </ul>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 col-xs-6">
            <ul style={{ color: "#fff", fontSize: 18 }}>
              <li>Business Skills.</li>
              <li>Consultancy Skills.</li>
              <li>Customer Generation.</li>
              <li>Sales Techniques</li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-2" />
          <br />
          <h3 style={{ color: "#fff", textAlign: "center" }}>
            Your commission amount will be credited to your account
            weekly/monthly.
          </h3>
        </div>
      </div>
      {/* ======= Features Section ======= */}
      <section id="Section2" className="features">
        <div className="container aos-init" data-aos="fade-up">
          {/* <header class="section-header">
    <h2>About Us</h2>
    <p>Welcome to Info Era Software Services Pvt. Ltd.</p>
  </header> */}
          <div className="row">
            <div className="col-lg-12 mt-5 mt-lg-0">
              <div className="row align-self-center gy-4">
                <h3 style={{ color: "#012970", fontWeight: 700 }}>
                  Benefits of becoming a BBC
                </h3>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        style={{ background: "#4154f1", color: "#fff" }}
                      >
                        Start your business with a very low investment.
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">No limit of your earning.</th>
                    </tr>
                    <tr>
                      <th scope="row">Start earning from your first sale.</th>
                    </tr>
                    <tr>
                      <th scope="row">
                        Create an additional source of income.
                      </th>
                    </tr>
                    <tr>
                      <th scope="row">
                        A business model which is growing even in a recession.
                      </th>
                    </tr>
                    <tr>
                      <th scope="row">
                        Work part-time or full-time as you please.
                      </th>
                    </tr>
                    <tr>
                      <th scope="row">Ease of doing business.</th>
                    </tr>
                    <tr>
                      <th scope="row">
                        No capping of commission, earn as much as you can.
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ======= Features Section ======= */}
      <section id="Section3" className="features">
        <div className="container aos-init" data-aos="fade-up">
          {/* <header class="section-header">
    <h2>About Us</h2>
    <p>Welcome to Info Era Software Services Pvt. Ltd.</p>
  </header> */}
          <div className="row">
            <h3 style={{ color: "#012970", fontWeight: 700 }}>
              Our Products and Services
            </h3>
            <div className="col-lg-6 mt-5 mt-lg-0">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      style={{ background: "#4154f1", color: "#fff" }}
                    >
                      Services
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Website Designing &amp; Development</th>
                  </tr>
                  <tr>
                    <th scope="row">Desktop Applications</th>
                  </tr>
                  <tr>
                    <th scope="row">Web Applications</th>
                  </tr>
                  <tr>
                    <th scope="row">Android &amp; IOS Applications</th>
                  </tr>
                  <tr>
                    <th scope="row">IT Consulting</th>
                  </tr>
                  <tr>
                    <th scope="row">Industrial Training</th>
                  </tr>
                  <tr>
                    <th scope="row">Cloud Services</th>
                  </tr>
                  <tr>
                    <th scope="row">Cyber Security</th>
                  </tr>
                  <tr>
                    <th scope="row">Graphics Designing</th>
                  </tr>
                  <tr>
                    <th scope="row">Digital Marketing</th>
                  </tr>
                  <tr>
                    <th scope="row">Search Engine Optimization (SEO)</th>
                  </tr>
                  <tr>
                    <th scope="row">Bulk SMS &amp; E-mail</th>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-lg-6">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      style={{ background: "#4154f1", color: "#fff" }}
                    >
                      Products
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">School Management System.</th>
                  </tr>
                  <tr>
                    <th scope="row">Hospitals Management System.</th>
                  </tr>
                  <tr>
                    <th scope="row">Multi-Level Marketing.</th>
                  </tr>
                  <tr>
                    <th scope="row">E-Commerce Management System.</th>
                  </tr>
                  <tr>
                    <th scope="row">Real Estate Management System.</th>
                  </tr>
                  <tr>
                    <th scope="row">Hospital Information Management System.</th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <section id="Section4" className="features">
        <div className="container aos-init" data-aos="fade-up">
          {/* <header class="section-header">
    <h2>About Us</h2>
    <p>Welcome to Info Era Software Services Pvt. Ltd.</p>
  </header> */}
          <div className="row">
            <div className="col-lg-12 mt-5 mt-lg-0">
              <div className="row align-self-center gy-4">
                <h3 style={{ color: "#012970", fontWeight: 700 }}>
                  Our Package
                </h3>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th
                        colSpan={2}
                        scope="col"
                        style={{ background: "#4154f1", color: "#fff" }}
                      >
                        Plan for 1 year
                      </th>
                      <th
                        colSpan={2}
                        scope="col"
                        style={{ background: "#4154f1", color: "#fff" }}
                      >
                        Plan for 3 year
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Investment</th>
                      <th scope="row">22,000</th>
                      <th scope="row">Investment</th>
                      <th scope="row">45,000</th>
                    </tr>
                    <tr>
                      <th scope="row">GST</th>
                      <th scope="row">22,000 X 18% = 3,960</th>
                      <th scope="row">GST</th>
                      <th scope="row">45,000 X 18% = 8,100</th>
                    </tr>
                    <tr>
                      <th scope="row">Total Investment</th>
                      <th scope="row">25,960</th>
                      <th scope="row">Total Investment</th>
                      <th scope="row">53,100</th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ======= Features Section ======= */}
      <section id="Section6" className="features">
        <div className="container aos-init" data-aos="fade-up">
          {/* <header class="section-header">
    <h2>About Us</h2>
    <p>Welcome to Info Era Software Services Pvt. Ltd.</p>
  </header> */}
          <div className="row">
            <div className="col-lg-12 mt-5 mt-lg-0">
              <div className="row align-self-center gy-4">
                <h3 style={{ color: "#012970", fontWeight: 700 }}>
                  Our company provides to BBC
                </h3>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        style={{ background: "#4154f1", color: "#fff" }}
                      >
                        Individual Website
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Co-Partner</th>
                    </tr>
                    <tr>
                      <th scope="row">Banner of our company.</th>
                    </tr>
                    <tr>
                      <th scope="row">
                        30% of investment to join a new IBC with our company.
                      </th>
                    </tr>
                    <tr>
                      <th scope="row">25% on sale of per product.</th>
                    </tr>
                    <tr>
                      <th scope="row">10% on sale of per service.</th>
                    </tr>
                    <tr>
                      <th scope="row">2 days training</th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Bbc;
