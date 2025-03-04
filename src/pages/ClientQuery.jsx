import { useState } from "react";
import Spinner from "../components/loader/Spinner";
import toast from "react-hot-toast";
// import { Helmet } from "react-helmet";
import { Helmet } from "react-helmet-async";

const ClientQuery = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    country: "",
    businessType: "",
    mobile: "",
    state: "",
    requirementFor: "",
    email: "",
    district: "",
    address: "",
    pinCode: "",
  });

  const [other, setOther] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onChangeHanlder = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitHanlder = async (e) => {
    e.preventDefault();
    try {
      if (formData.requirementFor === "Other") {
        setFormData((prev) => ({ ...prev, requirementFor: other }));
      }
      setIsSubmitting(true);
      const response = await fetch(
        `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/query/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      if (data.success) {
        toast.success(data.message);
        setFormData({
          name: "",
          gender: "",
          country: "",
          businessType: "",
          mobile: "",
          state: "",
          requirementFor: "",
          email: "",
          district: "",
          address: "",
          pinCode: "",
        });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="google-site-verification"
          content="KrFf109xrwKNRJTWVipUzNV7ZMCJn5vGEdhwxAWcuSg"
        />
        <title> Client Query | Info Era </title>
        <meta
          name="description"
          content="Get in touch with Info Era Software Services for queries, support, or collaborations. Contact us today to join and grow with Info Era. We're here to assist you!"
        />

        <meta
          name="keywords"
          content="Contact with infoera, join with infoera, contect us , Info Era Contect Number, Info Era Query, Query with Info Era Software Services"
        />
        <link
          rel="canonical"
          href="https://infoera.in/client-query"
          aria-label="Canonical - Info Era Software Services Pvt. Ltd."
        />
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
        <meta
          name="document-classification"
          content="Software & Website development company"
        />
        <meta name="Distribution" content="Global" />

        <meta
          name="copyright"
          content="Copyright (c) 2014 by Info Era Software Services Pvt. Ltd."
        />

        <meta name="Publisher" content="www.infoera.in" />
      </Helmet>
      <div>
        {/* ======= Hero Section ======= */}
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
                  textTransform: "none"
                }}
              />
            </header>
            <div className="row">
              <div className="col-lg-6 d-flex flex-column justify-content-center">
                <h3 style={{ color: "#0c219a", fontWeight: 700, fontSize: 50 }}>
                  We always care about our{" "}
                  <span style={{ color: "orange" }}> Customer</span>
                </h3>
                <p>
                  If you&apos;ve any requirement or query please let us know.
                  We&apos;ll contact you as soon as possible.
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
                  src="/assets/img/client.png"
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
            <form
              onSubmit={submitHanlder}
              className="container aos-init aos-animate"
              data-aos="fade-up"
            >
              <div className="row">
                <h3
                  style={{
                    color: "#0c219a",
                    fontWeight: 700,
                    marginBottom: 35
                  }}
                >
                  <u>Your response is important to us</u>
                </h3>
                <div className="col-lg-4">
                  <label htmlFor="name">Name</label>
                  <input
                    name="name"
                    type="text"
                    value={formData.name}
                    id="name"
                    className="form-control"
                    placeholder="Enter Name"
                    onChange={onChangeHanlder}
                  />
                  <span
                    id="ContentPlaceHolder1_ctl00"
                    style={{
                      color: "red",
                      marginBottom: 8,
                      visibility: "hidden"
                    }}
                  >
                    Name is require
                  </span>
                  <br />
                  <label htmlFor="businessType">Business Type</label>
                  <input
                    name="businessType"
                    type="text"
                    value={formData.businessType}
                    id="businessType"
                    className="form-control"
                    onChange={onChangeHanlder}
                    placeholder="Enter Business Type"
                  />
                  <span
                    id="ContentPlaceHolder1_requirefield1"
                    style={{ color: "red", visibility: "hidden" }}
                  >
                    Business Type is require
                  </span>
                  <br />
                  <div id="ContentPlaceHolder1_UpdatePanel1">
                    <label htmlFor="requirementFor">Requirement For</label>
                    <select
                      name="requirementFor"
                      value={formData.requirementFor}
                      id="requirementFor"
                      className="form-control"
                      onChange={onChangeHanlder}
                    >
                      <option value={""}>--Select--</option>
                      <option value={"Website"}>Website</option>
                      <option value={"Web application"}>Web application</option>
                      <option value={"Mobile application"}>
                        Mobile application
                      </option>
                      <option value={"Seo"}>Seo</option>
                      <option value={"Digital marketing"}>
                        Digital marketing
                      </option>
                      <option value={"Consulting"}>Consulting</option>
                      <option value={"Other"}>Other</option>
                    </select>
                  </div>
                  <br />
                  <p style={{ color: "red", fontSize: 12 }} />
                  {formData.requirementFor === "Other" && (
                    <>
                      <span
                        id="ContentPlaceHolder1_Label1"
                        htmlFor="requirementFor"
                      >
                        Other
                        <span style={{ color: "red", fontSize: 12 }}>
                          (If your requirement is not present in the list then
                          please write down your requirement otherwise leave it
                          blank)
                        </span>
                      </span>
                      <label htmlFor="requirementFor"></label>
                      <input
                        name="requirementFor"
                        value={other}
                        type="text"
                        onChange={(e) => setOther(e.target.value)}
                        id="requirementFor"
                        className="form-control"
                        placeholder="Other"
                      />
                    </>
                  )}
                  <br />
                </div>
                <div className="col-lg-4">
                  <label htmlFor="gender">Gender</label>
                  <select
                    name="gender"
                    id="gender"
                    className="form-control"
                    value={formData.gender}
                    onChange={onChangeHanlder}
                  >
                    <option value="">---Select---</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  <br />
                  <label htmlFor="mobile">Mobile</label>
                  <input
                    name="mobile"
                    type="text"
                    id="mobile"
                    className="form-control"
                    placeholder="Enter Mobile"
                    value={formData.mobile}
                    onChange={onChangeHanlder}
                  />
                  <span
                    id="ContentPlaceHolder1_RequiredFieldValidator6"
                    style={{ color: "red", visibility: "hidden" }}
                  >
                    Mobile is require
                  </span>
                  <br />
                  <label htmlFor="email">Email</label>
                  <input
                    name="email"
                    type="text"
                    id="email"
                    className="form-control"
                    value={formData.email}
                    onChange={onChangeHanlder}
                    placeholder="Enter Email"
                  />
                  <span
                    id="ContentPlaceHolder1_RequiredFieldValidator4"
                    style={{ color: "red", visibility: "hidden" }}
                  >
                    Email is require
                  </span>
                  <br />
                  <label htmlFor="address">Address</label>
                  <textarea
                    name="address"
                    rows={2}
                    cols={20}
                    id="address"
                    className="form-control"
                    placeholder="Enter Address..."
                    style={{ height: 124 }}
                    onChange={onChangeHanlder}
                    value={formData.address}
                  />
                  <span
                    id="ContentPlaceHolder1_RequiredFieldValidator3"
                    style={{ color: "red", visibility: "hidden" }}
                  >
                    Address is require
                  </span>
                  <br />
                </div>
                <div className="col-lg-4">
                  <label htmlFor="country">Country</label>
                  <input
                    name="country"
                    type="text"
                    id="country"
                    value={formData.country}
                    onChange={onChangeHanlder}
                    className="form-control"
                    placeholder="Enter Country"
                  />
                  <span
                    id="ContentPlaceHolder1_RequiredFieldValidator2"
                    style={{ color: "red", visibility: "hidden" }}
                  >
                    Country is require
                  </span>
                  <br />
                  <label htmlFor="state">State</label>
                  <input
                    name="state"
                    value={formData.state}
                    onChange={onChangeHanlder}
                    type="text"
                    id="state"
                    className="form-control"
                    placeholder="Enter State"
                  />
                  <span
                    id="ContentPlaceHolder1_RequiredFieldValidator1"
                    style={{ color: "red", visibility: "hidden" }}
                  >
                    State is require
                  </span>
                  <br />
                  <label htmlFor="district">District</label>
                  <input
                    name="district"
                    value={formData.district}
                    onChange={onChangeHanlder}
                    type="text"
                    id="district"
                    className="form-control"
                    placeholder="Enter District"
                  />
                  <span
                    id="ContentPlaceHolder1_RequiredFieldValidator7"
                    style={{ color: "red", visibility: "hidden" }}
                  >
                    District is require
                  </span>
                  <br />
                  <label htmlFor="pinCode">PIN Code</label>
                  <input
                    name="pinCode"
                    value={formData.pinCode}
                    onChange={onChangeHanlder}
                    type="text"
                    id="pinCode"
                    className="form-control"
                    placeholder="Enter PIN Code"
                  />
                  <span
                    id="ContentPlaceHolder1_RequiredFieldValidator5"
                    style={{ color: "red", visibility: "hidden" }}
                  >
                    PIN is require
                  </span>
                  <br />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary"
                  >
                    {isSubmitting ? <Spinner /> : "Submit"}
                  </button>
                </div>
              </div>
            </form>
          </section>
        </main>
      </div>
    </>
  );
};

export default ClientQuery;
