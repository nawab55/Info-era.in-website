import { useState } from "react";
import toast from "react-hot-toast";
import Spinner from "../components/loader/Spinner";

const Consulting = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    organizationName: "",
    consulting: "Physicial (₹ 5000 per hour)",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      const response = await fetch(
        `${
          import.meta.env.VITE_REACT_APP_BACKEND_BASEURL
        }/api/consulting/create-consulting`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const resData = await response.json();
      if (resData.success) {
        toast.success(resData.message);
        setFormData({
          name: "",
          email: "",
          mobile: "",
          address: "",
          organizationName: "",
          consulting: "Physicial (₹ 5000 per hour)",
        });
      } else {
        toast.error(resData.message);
      }
    } catch (error) {
      toast.error("Error submitting form, please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };
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
                  Consulting
                </h3>
                <p style={{ textAlign: "justify" }}>
                  Consult with clients to determine the scope of website
                  development projects, implement SEO strategies to increase
                  traffic flow to websites, and maintain websites. The service
                  may involve either advisory or implementation services.
                </p>
                <p style={{ textAlign: "justify" }}>
                  Our Web development consulting provides comprehensive support
                  and enhancement of web applications before, during and after
                  their development.
                </p>
                <p style={{ textAlign: "justify" }}>
                  Our website development consultants provide expert web
                  application development and web design services to our
                  clients. Info Era Software Services offers a variety of web
                  development consulting services, from creating responsive
                  web-based solutions and mobile friendly website designs, to
                  building custom ecommerce and intranet experiences using the
                  latest and proven web technologies.
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
                <img src="assets/img/consul.png" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* End Hero */}
        {/* ======= Form consultancy ======= */}
        <section id="features" className="features">
          <div className="container aos-init aos-animate" data-aos="fade-up">
            <header className="section-header">
              <p>IT Consultancy form</p>
            </header>
            <form onSubmit={handleSubmit} className="row">
              <div className="col" />
              <div className="col-lg-4 mt-5 mt-lg-0">
                <label htmlFor="name">Name</label>
                <input
                  name="name"
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Enter Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <span
                  id="ContentPlaceHolder1_RequiredFieldValidator1"
                  style={{ color: "red", visibility: "hidden" }}
                >
                  Name is require
                </span>
                <br />
                <label htmlFor="email">Email</label>
                <input
                  name="email"
                  type="text"
                  id="email"
                  className="form-control"
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={handleChange}
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
                <label htmlFor="mobile">Mobile</label>
                <input
                  name="mobile"
                  type="text"
                  id="mobile"
                  className="form-control"
                  placeholder="Enter Mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                />
                <span
                  id="ContentPlaceHolder1_RequiredFieldValidator4"
                  style={{ color: "red", visibility: "hidden" }}
                >
                  Mobile is require
                </span>
                <br />
                <label htmlFor="address">Address</label>
                <textarea
                  name="address"
                  rows={5}
                  cols={20}
                  id="address"
                  className="form-control"
                  placeholder="Enter Mobile"
                  value={formData.address}
                  onChange={handleChange}
                />
                <span
                  id="ContentPlaceHolder1_RequiredFieldValidator2"
                  style={{ color: "red", visibility: "hidden" }}
                >
                  Address is require
                </span>
                <br />
              </div>
              <div className="col-lg-4">
                <label htmlFor="organizationName">
                  Conpany/Organization Name
                </label>
                <input
                  name="organizationName"
                  type="text"
                  id="organizationName"
                  value={formData.organizationName}
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
                <label htmlFor="consulting">Consulting</label>
                <select
                  name="consulting"
                  id="consulting"
                  className="form-control"
                  value={formData.consulting}
                  onChange={handleChange}
                >
                  <option value="Physicial (₹ 5000 per hour)">
                    Physicial (₹ 5000 per hour)
                  </option>
                  <option value="Virtual (₹ 2000 per hour)">
                    Virtual (₹ 2000 per hour)
                  </option>
                </select>
                <br />
                <br />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary mr-2"
                >
                  {isSubmitting ? <Spinner /> : "Submit"}
                </button>
              </div>
              <div className="col" />
            </form>
            <div className="row">
              <div className="col-md-4"></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Consulting;
