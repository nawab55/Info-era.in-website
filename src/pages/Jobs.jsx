import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import uploadFile from "../lib/uploadFile";
import Spinner from "../components/loader/Spinner";
import axios from "axios";

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
  });

  const [jobs, setJobs] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoadingJobs, setIsLoadingJobs] = useState(true);
  const [tempFile, setTempFile] = useState({
    file: null,
    fileType: null,
    fileName: null,
  });

  const navigate = useNavigate();
  const formRef = useRef(null); // Add a ref for the form section

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if(file){
      setTempFile({ file: file, fileType: file.type, fileName: file.name });
    }
    else {
      toast.error("Invalid file. Please upload a valid resume.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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

      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/jobform/post-jobForm`,
        data, // Body data (JSON automatically handled by Axios)
        {
          headers: {
            "Content-Type": "application/json", // Optional, Axios sets this by default
          },
        }
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
        });
        setTempFile(null);
      } else {
        toast.error(resData.message);
      }

      } catch (error) {
        toast.error("Error submitting job application.");
        console.error(error);
      }finally {
        setIsSubmitting(false);
      }
  };

  useEffect(() => {
    const getJobs = async () => {
      try {
        setIsLoadingJobs(true);
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/jobs/get-all-jobs`
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

  // const handleViewDetails = (id) => {
  //   navigate(`/view-details/${id}`);
  // };

  const handleViewDetails = (job) => {
    navigate("/view-details", { state: { job } });
  };
  const handleApplyNow = () => {
    // Scroll to the form section
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
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
                textTransform: "none",
              }}
            />
          </header>
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h3 style={{ color: "#0c219a", fontWeight: 700, fontSize: 50 }}>
                We&apos;re<span style={{ color: "orange" }}> Hiring</span>
              </h3>
              <p>Info Era Software Services is hiring on various possitions.</p>
             
            </div>
            <div
              className="col-lg-6 hero-img aos-init aos-animate"
              data-aos="zoom-out"
            >
              <img src="assets/img/hiring.png" className="img-fluid" alt="" />
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
                      border: "none",
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
        {/* ======= Features Section ======= */}
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
                <label htmlFor="name">Name</label>
                <input
                  name="name"
                  type="text"
                  id="name"
                  value={jobData.name}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter Name"
                />
                <span
                  id="ContentPlaceHolder1_RequiredFieldValidator1"
                  style={{
                    color: "red",
                    marginBottom: 8,
                    visibility: "hidden",
                  }}
                >
                  Name is require
                </span>
                <br />
                <label htmlFor="gender">Gender</label>
                <select
                  name="gender"
                  id="gender"
                  value={jobData.gender}
                  onChange={handleInputChange}
                  className="form-control"
                >
                  <option value="">--Select--</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <br />
                <label htmlFor="qualification">Heighest Qualification</label>
                <input
                  name="qualification"
                  type="text"
                  value={jobData.qualification}
                  id="qualification"
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter Heighest Qualification"
                />
                <span
                  id="ContentPlaceHolder1_RequiredFieldValidator2"
                  style={{ color: "red", visibility: "hidden" }}
                >
                  Heighest qualification is require
                </span>
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
                <span
                  id="ContentPlaceHolder1_RequiredFieldValidator8"
                  style={{ color: "red", visibility: "hidden" }}
                >
                  Upload is require
                </span>
                <br />
              </div>
              <div className="col-lg-4">
                <label htmlFor="fatherName">Father&apos;s Name</label>
                <input
                  name="fatherName"
                  type="text"
                  value={jobData.fatherName}
                  id="fatherName"
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter Father's Name"
                />
                <span
                  id="ContentPlaceHolder1_requirefield1"
                  style={{ color: "red", visibility: "hidden" }}
                >
                  Father&apos;s name is require
                </span>
                <br />
                <label htmlFor="mobile">Mobile</label>
                <input
                  name="mobile"
                  type="text"
                  id="mobile"
                  value={jobData.mobile}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter Mobile"
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
                  onChange={handleInputChange}
                  id="email"
                  value={jobData.email}
                  className="form-control"
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
                  value={jobData.address}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter Address..."
                  style={{ height: 124 }}
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
                  value={jobData.country}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter Country"
                />
                <span
                  id="ContentPlaceHolder1_RequiredFieldValidator10"
                  style={{ color: "red", visibility: "hidden" }}
                >
                  Country is require
                </span>
                <br />
                <label htmlFor="state">State</label>
                <input
                  name="state"
                  type="text"
                  id="state"
                  value={jobData.state}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter State"
                />
                <span
                  id="ContentPlaceHolder1_RequiredFieldValidator9"
                  style={{ color: "red", visibility: "hidden" }}
                >
                  State is require
                </span>
                <br />
                <label htmlFor="district">District</label>
                <input
                  name="district"
                  type="text"
                  id="district"
                  value={jobData.district}
                  onChange={handleInputChange}
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
                  type="text"
                  id="pinCode"
                  value={jobData.pinCode}
                  onChange={handleInputChange}
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
    </>
  );
}

export default Jobs;
