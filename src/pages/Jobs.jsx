import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import uploadFile from "../lib/uploadFile";
import Spinner from "../components/loader/Spinner";
import axios from "axios";
import { Helmet } from "react-helmet";

function Jobs() {
  const [jobData, setJobData] = useState({
    name: "",
    email: "",
    fatherName: "",
    country: "",
    gender: "",
    mobile: "",
    state: "",
    district: "",
    address: "",
    pinCode: "",
    qualification: "",
    resume: {
      src: null,
      fileName: null,  
      fileType: null,
    },
    // resume: ""
  });

  const [errors, setErrors] = useState({});
  const [jobs, setJobs] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoadingJobs, setIsLoadingJobs] = useState(true);
  const [tempFile, setTempFile] = useState({
    file: null,
    fileType: null,
    fileName: null
  });

  const navigate = useNavigate();
  const formRef = useRef(null); // Add a ref for the form section

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear error when user types
  };
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // const reader = new FileReader();

      // reader.onload = (event) => {
      //   const base64String = event.target.result; // Get the Base64 string
      //   setJobData((prev) => ({ ...prev, resume: base64String }));
      // };

      // Read the file as a Data URL (Base64 string)
      // reader.readAsDataURL(file);
      setTempFile({ file: file, fileType: file.type, fileName: file.name });
      setErrors((prev) => ({ ...prev, resume: "" })); // Clear file error
    } else {
      setErrors((prev) => ({
        ...prev,
        resume: "Invalid file. Please upload a valid resume."
      }));
    }
  };

  const validateFields = () => {
    const newErrors = {};

    // Validating text input fields
    if (!jobData.name.trim()) newErrors.name = "Name is required.";
    if (!jobData.email) newErrors.email = "Email is required.";
    if (!jobData.fatherName.trim())
      newErrors.fatherName = "Father's Name is required.";
    if (!jobData.country.trim()) newErrors.country = "Country is required.";
    if (!jobData.gender) newErrors.gender = "Gender is required.";
    if (!jobData.mobile.trim()) newErrors.mobile = "Mobile number is required.";
    if (!jobData.state.trim()) newErrors.state = "State is required.";
    if (!jobData.district.trim()) newErrors.district = "District is required.";
    if (!jobData.address.trim()) newErrors.address = "Address is required.";
    if (!jobData.pinCode.trim()) newErrors.pinCode = "Pin code is required.";
    if (!jobData.qualification.trim())
      newErrors.qualification = "Qualification is required.";
    // if (!tempFile.file) newErrors.resume = "Please upload a resume.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateFields()) {
      toast.error("Please fill out all required fields.");
      return;
    }
    if (!tempFile.file){
      toast.error("Please upload a resume");
      return;
    }
    setIsSubmitting(true);
    try {
      const { success, fileId } = await uploadFile(tempFile.file, tempFile.fileType);
      if (!success) {
        toast.error("Error uploading file.");
        return;
      }
      const data = {
        ...jobData,
        resume: {
          src: fileId,
          fileType: tempFile.fileType,
          fileName: tempFile.fileName,
        },
      };

      // const response = await fetch(
      //   `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/jobform/post-jobForm`,
      //   {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify(data),
      //   }
      // );
      // const resData = await response.json();

      // console.log(data)

      const response = await axios.post(
        `${
          import.meta.env.VITE_REACT_APP_BACKEND_BASEURL
        }/api/jobform/post-jobForm`,
        data
      );
      const resData = response.data; // Extracting the response data
      if (resData.success) {
        toast.success(resData.message);
        setJobData({
          name: "",
          email: "",
          fatherName: "",
          country: "",
          gender: "",
          mobile: "",
          state: "",
          district: "",
          address: "",
          pinCode: "",
          qualification: "",
          resume: {
            src: null,
            fileName: null,
            fileType: null,
          },
          // resume: ""
        });
        setTempFile(null);
      } else {
        toast.error(resData.message);
      }
    } catch (error) {
      toast.error("Error submitting job application.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const getJobs = async () => {
      try {
        setIsLoadingJobs(true);
        const response = await axios.get(
          `${
            import.meta.env.VITE_REACT_APP_BACKEND_BASEURL
          }/api/jobs/get-all-jobs`
        );
        setJobs(response.data.jobs || []);
        // const response = await fetch(
        //   `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/jobs/get-all-jobs`
        // );
        // const data = await response.json();
        // if (data.jobs) {
        //   setJobs(data.jobs);
        // }
      } catch (error) {
        toast.error("Error fetching job listings.");
        console.error(error);
      } finally {
        setIsLoadingJobs(false);
      }
    };
    getJobs();
  }, []);

  const handleViewDetails = (job) => {
    navigate("/view-details", { state: { job } });
  };
  const handleApplyNow = () => {
    // Scroll to the form section
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
    <Helmet>
      <meta charSet="utf-8"/>
      <title>IT Jobs in Patna bihar | Software Development Jobs in Patna Bihar </title>
       {/* Google site Verification  Start */}
       <meta name="google-site-verification" content="KrFf109xrwKNRJTWVipUzNV7ZMCJn5vGEdhwxAWcuSg" />
        {/* End */}
      <meta name="discription" content="Join the best IT training center in Bihar offering internships, IT jobs, website designing, graphic designing, and software jobs in Patna. Build your career with us!"/>
      <meta name="Keywords" content="it treaning center, it jobs, best it company in bihar, best it company treaning , Internship, Jobs, naukari, it jobs, website designing jobs in bihar, software jobs in patna bihar, best it company jobs in patna bihar, graphic designing jobs in patna bihar"/>
      <link rel="canonical" href="https://infoera.in/jobs" aria-label="Canonical - Info Era Software Services Pvt. Ltd."/>
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
        <meta name="document-classification" content="Website Designing and Development Company Perth" />
        <meta name="Distribution" content="Global" />
        <meta name="copyright" content="Copyright (c) 2014 by Info Era Software Services Pvt. Ltd."/>
    </Helmet>
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
                We&apos;re<span style={{ color: "orange" }}> Hiring</span>
              </h3>
              <p>Info Era Software Services is hiring on various positions.</p>
            </div>
            <div
              className="col-lg-6 hero-img aos-init aos-animate"
              data-aos="zoom-out"
            >
              <img src="assets/img/hiring.png" className="img-fluid" alt="Hiring -Info Era" title="Hiring - Info Era" />
            </div>
          </div>
        </div>
      </section>
      {/* End Hero */}
      <main id="main">
        {/* ======= Features Section ======= */}
        <section id="Section1" className="features">
          <div className="container aos-init aos-animate" data-aos="fade-up">
            <div className="row">
              <h3
                style={{ color: "#0c219a", fontWeight: 700 }}
                className="px-4"
              >
                Latest Jobs
              </h3>
              {isLoadingJobs ? (
                <Spinner />
              ) : jobs.length === 0 ? (
                <p>No job listings available.</p>
              ) : (
                <>
                  {jobs.map((job) => (
                    <div key={job._id} className="col-lg-6 col-md-6 mb-3">
                      <div
                        className="card"
                        style={{
                          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                          border: "none"
                        }}
                      >
                        <div className="card-body">
                          <h5 className="card-title">
                            <strong>
                              <span id="ContentPlaceHolder1_JobList_lblTitle_0">
                                {job.jobTitle}
                              </span>
                            </strong>
                          </h5>
                          <h6 className="card-subtitle mb-2 text-muted">
                            <span id="ContentPlaceHolder1_JobList_Label1_0">
                              {job.experience}
                            </span>
                          </h6>
                          <p className="card-text">
                            <span id="ContentPlaceHolder1_JobList_Label2_0">
                              {job.description.substring(0, 200)}
                            </span>
                          </p>
                          <button
                            onClick={handleApplyNow}
                            className="card-link btn btn-primary btn-sm"
                          >
                            Apply Now
                          </button>
                          <button
                            onClick={() => handleViewDetails(job)}
                            className="card-link btn btn-secondary btn-sm"
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
          {/* / row */}
        </section>
        {/* ======= Form Section ======= */}
        <section id="features" ref={formRef} className="features">
          <form
            onSubmit={handleSubmit}
            className="container aos-init aos-animate"
            data-aos="fade-up"
            id="section_1"
          >
            <div className="row">
              <h3
                style={{ color: "#0c219a", fontWeight: 700, marginBottom: 35 }}
              >
                <u>Student Registration Form for Jobs</u>
              </h3>
              <div className="col-lg-4">
                <label htmlFor="name">
                  Name <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  name="name"
                  type="text"
                  id="name"
                  value={jobData.name}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter Name"
                  // required
                />
                {errors.name && (
                  <span style={{ color: "red" }}>{errors.name}</span>
                )}
                <br />
                <label htmlFor="gender">
                  Gender <span style={{ color: "red" }}>*</span>
                </label>
                <select
                  name="gender"
                  id="gender"
                  value={jobData.gender}
                  onChange={handleInputChange}
                  className="form-control"
                >
                  <option value="">--Select-- </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                {errors.gender && (
                  <span style={{ color: "red" }}>{errors.gender}</span>
                )}
                <br />
                <label htmlFor="qualification">
                  Highest Qualification <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  name="qualification"
                  type="text"
                  value={jobData.qualification}
                  id="qualification"
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter Heighest Qualification"
                />
                {errors.qualification && (
                  <span style={{ color: "red" }}>{errors.qualification}</span>
                )}
                <br />
                <label htmlFor="resume">
                  Upload Resume
                  <span style={{ color: "red" }}> only .pdf format</span>
                </label>
                <input
                  type="file"
                  name="resume"
                  id="resume"
                  accept=".pdf"
                  onChange={handleFileUpload}
                  className="form-control"
                />
                {errors.resume && (
                  <span style={{ color: "red" }}>{errors.resume}</span>
                )}
                <br />
              </div>
              <div className="col-lg-4">
                <label htmlFor="fatherName">
                  Father&apos;s Name <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  name="fatherName"
                  type="text"
                  value={jobData.fatherName}
                  id="fatherName"
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter Father's Name"
                />
                {errors.fatherName && (
                  <span style={{ color: "red" }}>{errors.fatherName}</span>
                )}
                <br />
                <label htmlFor="mobile">
                  Mobile <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  name="mobile"
                  type="text"
                  id="mobile"
                  value={jobData.mobile}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter Mobile"
                />
                {errors.mobile && (
                  <span style={{ color: "red" }}>{errors.mobile}</span>
                )}

                <br />
                <label htmlFor="email">
                  Email <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  name="email"
                  type="text"
                  onChange={handleInputChange}
                  id="email"
                  value={jobData.email}
                  className="form-control"
                  placeholder="Enter Email"
                />
                {errors.email && (
                  <span style={{ color: "red" }}>{errors.email}</span>
                )}
                <br />
                <label htmlFor="address">
                  Address <span style={{ color: "red" }}>*</span>
                </label>
                <textarea
                  name="address"
                  rows={2}
                  cols={20}
                  id="address"
                  value={jobData.address}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter Address..."
                  style={{ height: 124 }}
                />
                {errors.address && (
                  <span style={{ color: "red" }}>{errors.address}</span>
                )}
                <br />
              </div>
              <div className="col-lg-4">
                <label htmlFor="country">
                  Country <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  name="country"
                  type="text"
                  id="country"
                  value={jobData.country}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter Country"
                />
                {errors.country && (
                  <span style={{ color: "red" }}>{errors.country}</span>
                )}
                <br />
                <label htmlFor="state">
                  State <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  name="state"
                  type="text"
                  id="state"
                  value={jobData.state}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter State"
                />
                {errors.state && (
                  <span style={{ color: "red" }}>{errors.state}</span>
                )}
                <br />
                <label htmlFor="district">
                  District <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  name="district"
                  type="text"
                  id="district"
                  value={jobData.district}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter District"
                />
                {errors.district && (
                  <span style={{ color: "red" }}>{errors.district}</span>
                )}
                <br />
                <label htmlFor="pinCode">
                  PIN Code <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  name="pinCode"
                  type="text"
                  id="pinCode"
                  value={jobData.pinCode}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter PIN Code"
                />
                {errors.pinCode && (
                  <span style={{ color: "red" }}>{errors.pinCode}</span>
                )}
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
    </>
  );
}

export default Jobs;
