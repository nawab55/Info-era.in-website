import { useState } from "react";
import toast from "react-hot-toast";
import Spinner from "../components/loader/Spinner";
// import { Helmet } from "react-helmet";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitHanlder = async (e) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);
      const response = await fetch(
        `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/contact/create`,
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
          email: "",
          mobile: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
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
        <title>
          {" "}
          Info Era Patna, Top Software Development Company in Patna Biha{" "}
        </title>
        <meta
          name="description"
          content="Main Office Address - Flat No. 604, 6th Floor
Narain Plaza, Exhibition Road, Patna, (Bihar) 800001, Mobile – 7008411312, Email - infoerapvtltd@gmail.com, Website - www.infoera.in – Leading and Trustworthy Software Company in Patna Bihar"
        />

        <meta
          name="keywords"
          content="Branch Office Address - VIP Road, Balbhadrapur, Laheriasarai, Darbhanga, (Bihar) 846001., 
          Mobile – 7008411312, Email - infoerapvtltd@gmail.com, Website - www.infoera.in – Leading and Trustworthy 
          Software Company in Darbhanga Bihar"
        />
        <link
          rel="canonical"
          href="https://infoera.in/contact"
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
          name="document-classification"
          content="Info Era Software Services Pvt. Ltd. Contact_Number-7008411312 Email-infoerapvtltd@gmail.com Website-www.infoera.in"
        />

        <meta
          name="copyright"
          content="Copyright (c) 2014 by Info Era Software Services Pvt. Ltd."
        />

        <meta name="Publisher" content="www.infoera.in" />
      </Helmet>
      <div>
        <br />
        <br />
        <br />
        {/* ======= Contact Section ======= */}
        <section id="contact" className="contact">
          <div className="container" data-aos="fade-up">
            <br />
            <br />
            <br />
            <header className="section-header">
              <h2>Contact Us</h2>
            </header>
            <div className="row gy-4">
              <div className="col-lg-6">
                <div className="row gy-4">
                  <div className="col-md-6">
                    <div className="info-box">
                      <i className="bi bi-telephone" />
                      <h3>Call Us</h3>
                      <p>
                        +91 7008411312
                        <br />
                        +91 8674964901
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info-box">
                      <i className="bi bi-clock" />
                      <h3>Open Hours</h3>
                      <p>
                        Monday - Saturday
                        <br />
                        10:00AM - 07:00PM
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info-box">
                      <i className="bi bi-envelope" />
                      <h3>Email Us</h3>
                      <p>
                        info@infoerasoftware.com
                        <br />
                        contact@infoerasoftware.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <form onSubmit={submitHanlder} className="col-lg-6">
                <div className="row gy-4">
                  <div className="col-md-6">
                    <label htmlFor="name"></label>
                    <input
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={onInputChange}
                      id="name"
                      className="form-control"
                      placeholder="Your Name"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="col-md-6 ">
                    <label htmlFor="email"></label>
                    <input
                      name="email"
                      type="text"
                      id="email"
                      value={formData.email}
                      onChange={onInputChange}
                      className="form-control"
                      placeholder="Your Email"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="subject"></label>
                    <input
                      name="subject"
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={onInputChange}
                      className="form-control"
                      placeholder="Subject"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="mobile"></label>
                    <input
                      name="mobile"
                      type="text"
                      id="mobile"
                      value={formData.mobile}
                      onChange={onInputChange}
                      className="form-control"
                      placeholder="Mobile"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="message"></label>
                    <textarea
                      name="message"
                      id="message"
                      rows={6}
                      cols={20}
                      value={formData.message}
                      onChange={onInputChange}
                      className="form-control"
                      placeholder="Message"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="col-md-12 text-center">
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
            </div>
            <div className="row gy-4">
              <div className="col-lg-12">
                <div className="info-box text-center">
                  <i className="bi bi-geo-alt" />
                  <h3>
                    <u>Our Branches</u>
                  </h3>
                </div>
              </div>
              <div className="col-md-4">
                <div className="info-box">
                  <i className="bi bi-buildings-fill" />
                  <h3>Bhubneshwar</h3>
                  <p>
                    Plot No.-252, District Center, Chandrasekharpur,
                    Bhubaneswar, (Odisha) 751016.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="info-box">
                  <i className="bi bi-buildings-fill" />
                  <h3>Patna</h3>
                  <p>
                    Flat No. 604, 6th Floor
                    <br />
                    Narain Plaza, Exhibition Road, Patna, (Bihar) 800001.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="info-box">
                  <i className="bi bi-buildings-fill" />
                  <h3>Darbhanga</h3>
                  <p>
                    VIP Road, Balbhadrapur, Laheriasarai, Darbhanga, (Bihar)
                    846001.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Contact Section */}
      </div>
    </>
  );
};

export default Contact;
