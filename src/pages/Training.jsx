import { useState } from "react";
import toast from "react-hot-toast";
import uploadFile from "../lib/uploadFile";
import Spinner from "../components/loader/Spinner";
import WebDevelopmentBanner from "../courses/webDevelopmentCourse/WebDevelopmentBanner";
import { Helmet } from "react-helmet";

function Training() {
  const [trainingFormData, setTrainingFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    gender: "", // Can be "male" or "female"
    fatherName: "",
    perCountry: "",
    perState: "",
    perDistrict: "",
    perPinCode: "",
    perAddress: "",
    corCountry: "",
    corState: "",
    corDistrict: "",
    corPinCode: "",
    corAddress: "",
    qualification: "",
    collegeName: "",
    passingYear: "",
    universityName: "",
    collegeRollNo: "",
    streamName: "",
    universityRegNo: "",
    interestedFor: "",
    profilePhoto: {
      src: null, // File path or URL
      fileType: "", // e.g., "image/jpeg"
      fileName: "" // e.g., "photo.jpg"
    }
  });

  const [tempFile, setTempFile] = useState({
    file: null,
    fileType: null,
    fileName: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTrainingFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.file || e.target.files[0];
    setTempFile({ file: file, fileType: file.type, fileName: file.name });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // handle more erros
      if (!tempFile.file) return;

      setIsSubmitting(true);

      const { success, fileId } = await uploadFile(
        tempFile.file,
        tempFile.fileType
      );

      if (!success) {
        toast.error("Error With Uploading File");
        return;
      }

      const data = {
        ...trainingFormData,
        profilePhoto: {
          src: fileId,
          fileType: tempFile.fileType,
          fileName: tempFile.fileName
        }
      };

      const response = await fetch(
        `${
          import.meta.env.VITE_REACT_APP_BACKEND_BASEURL
        }/api/training/student-training`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        }
      );

      const resData = await response.json();

      if (resData.success) {
        toast.success(resData.message);
        setTrainingFormData({
          name: "",
          email: "",
          mobile: "",
          gender: "", // Can be "male" or "female"
          fatherName: "",
          perCountry: "",
          perState: "",
          perDistrict: "",
          perPinCode: "",
          perAddress: "",
          corCountry: "",
          corState: "",
          corDistrict: "",
          corPinCode: "",
          corAddress: "",
          qualification: "",
          collegeName: "",
          passingYear: "",
          universityName: "",
          collegeRollNo: "",
          streamName: "",
          universityRegNo: "",
          interestedFor: "",
          profilePhoto: {
            src: null, // File path or URL
            fileType: "", // e.g., "image/jpeg"
            fileName: "" // e.g., "photo.jpg"
          }
        });
      } else {
        toast.error(resData.message);
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
        
        <title>  IT Training Institute in Patna, IT Training Internship Company in Patna Bihar - Info Era Software Services</title>
        <meta
          name="description"
          content="New Student Training Program in Patna, Php Oracle Training for BSc BE BTech BSC-IT BCA MCA BBA MBA Engineering Freshmen, Second, Third, and Final Year Students in Patna in MySQL C C++ C# Java JSP ASP Dot Net Python MVC Android SQL MySQL" />

        <meta
          name="keywords"
          content="Two, three, four, six, nine, and ten weeks of training on real projects for new students in Patna, Training Program Providing Companies in Patna Bihar, Training Program for Second Third Final Year Students in Patna"
        />
        <link rel="canonical" href="http://infoera.in/training" />
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
        <meta name="document-classification" content="E-Learning Solutions Service provider in Patna" />
        <meta name="Distribution" content="Global" />
        <meta name="document-classification" content="Info Era Software Services Pvt. Ltd. Contact_Number-7008411312 Email-infoerapvtltd@gmail.com Website-www.infoera.in" />
        <meta name="Keyphrase" content ="Best Treaning Center in Patna Bihar, IT Treaning Center in Patna, Top IT Treaning Center in Bihar India, Website Designing Treaning Center in Patna Bihar, Top Treaning Institute in Patna "/>
        <meta name="copyright" content="Copyright (c) 2014 by Info Era Software Services Pvt. Ltd." />

        <meta name="Publisher" content="www.infoera.in" />


      </Helmet>
      {/* ======= Hero Section ======= */}
      <section id="hero" className="hero d-flex align-items-center">
        <br />
        <br />
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h3 style={{ color: "#0c219a", fontWeight: 700 }}>
                We provide Trainings on various Programming Languages
              </h3>
              <p>
                Info Era Software Services provides Trainings on various
                Programming Languages like HTML/CSS, Bootstrap, JavaScript,
                ASP.Net, Python, PHP etc. We have a high skilled experts.
              </p>
            </div>
            <div
              className="col-lg-6 hero-img aos-init aos-animate"
              data-aos="zoom-out"
            >
              <img src="assets/img/training.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* End Hero */}

      {/* Courses Section */}
      <section id="courses" className="courses">
        <div className="container aos-init aos-animate" data-aos="fade-up">
          {/* <WebDesignBanner /> */}
          <h3 style={{ color: "#0c219a", fontWeight: 700, marginBottom: "1rem" }}>
           Our Upcoming Training Session.
          </h3>
          <WebDevelopmentBanner />
        </div>
      </section>
      {/* End Courses Section */}

      <main id="main">
        {/* ======= Features Section ======= */}
        <form
          onSubmit={handleSubmit}
          id="features"
          className="features"
          style={{ overflowX: "hidden" }}
        >
          <div className="container aos-init aos-animate" data-aos="fade-up">
            <div className="row">
              <h3 style={{ color: "#0c219a", fontWeight: 700 }}>
                <u>Student registration form for training</u>
              </h3>
              <h5
                style={{ paddingTop: 35, fontWeight: "bold", color: "#0d6efd" }}
              >
                Personal Details:<span style={{ color: "red" }}> *</span>
              </h5>
              <hr style={{ color: "red", marginBottom: 40 }} />
              <div className="col-lg-4 col-md-6">
                <label htmlFor="name">Name</label>
                <input
                  name="name"
                  type="text"
                  id="name"
                  value={trainingFormData.name}
                  onChange={handleInputChange}
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
                <label htmlFor="fatherName">Father&apos;s Name</label>
                <input
                  name="fatherName"
                  type="text"
                  id="fatherName"
                  className="form-control"
                  value={trainingFormData.fatherName}
                  onChange={handleInputChange}
                  placeholder="Enter Father's Name"
                />
                <span
                  id="ContentPlaceHolder1_RequiredFieldValidator2"
                  style={{ color: "red", visibility: "hidden" }}
                >
                  Father&apos;s Name is require
                </span>
                <br />
              </div>
              <div className="col-lg-4 col-md-6">
                <label htmlFor="gender">Gender</label>
                <select
                  name="gender"
                  id="gender"
                  className="form-control"
                  value={trainingFormData.gender}
                  onChange={handleInputChange}
                >
                  <option value="">--Select--</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <br />
                <label htmlFor="email">Email</label>
                <input
                  name="email"
                  type="text"
                  id="email"
                  value={trainingFormData.email}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter Email"
                />
                <span
                  id="ContentPlaceHolder1_RequiredFieldValidator3"
                  style={{ color: "red", visibility: "hidden" }}
                >
                  Email is require
                </span>
                <br />
              </div>
              <div className="col-lg-4 col-md-6">
                <label htmlFor="mobile">Mobile</label>
                <input
                  name="mobile"
                  type="text"
                  id="mobile"
                  value={trainingFormData.mobile}
                  onChange={handleInputChange}
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
              </div>
              <h5
                style={{ paddingTop: 25, fontWeight: "bold", color: "#0d6efd" }}
              >
                Permanent Address:<span style={{ color: "red" }}> *</span>
              </h5>
              <hr style={{ color: "red", marginBottom: 40 }} />
              <div className="col-lg-4 col-md-6">
                <label htmlFor="perAddress">Address</label>
                <textarea
                  name="perAddress"
                  rows={2}
                  cols={20}
                  value={trainingFormData.perAddress}
                  onChange={handleInputChange}
                  id="perAddress"
                  className="form-control"
                  placeholder="Enter Full Address..."
                  style={{ height: 125 }}
                  defaultValue={""}
                />
                <span
                  id="ContentPlaceHolder1_RequiredFieldValidator5"
                  style={{ color: "red", visibility: "hidden" }}
                >
                  Address is require
                </span>
                <br />
              </div>
              <div className="col-lg-4 col-md-6">
                <label htmlFor="perCountry">Country</label>
                <input
                  name="perCountry"
                  type="text"
                  value={trainingFormData.perCountry}
                  onChange={handleInputChange}
                  id="perCountry"
                  className="form-control"
                  placeholder="Enter Country"
                />
                <span
                  id="ContentPlaceHolder1_RequiredFieldValidator6"
                  style={{ color: "red", visibility: "hidden" }}
                >
                  Country is require
                </span>
                <br />
                <label htmlFor="perState">State</label>
                <input
                  name="perState"
                  type="text"
                  id="perState"
                  value={trainingFormData.perState}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter State"
                />
                <span
                  id="ContentPlaceHolder1_RequiredFieldValidator7"
                  style={{ color: "red", visibility: "hidden" }}
                >
                  State is require
                </span>
                <br />
              </div>
              <div className="col-lg-4 col-md-6">
                <label htmlFor="perDistrict">District</label>
                <input
                  name="perDistrict"
                  type="text"
                  value={trainingFormData.perDistrict}
                  onChange={handleInputChange}
                  id="perDistrict"
                  className="form-control"
                  placeholder="Enter District"
                />
                <span
                  id="ContentPlaceHolder1_RequiredFieldValidator8"
                  style={{ color: "red", visibility: "hidden" }}
                >
                  District is require
                </span>
                <br />
                <label htmlFor="perPinCode">PIN Code</label>
                <input
                  name="perPinCode"
                  type="text"
                  value={trainingFormData.perPinCode}
                  onChange={handleInputChange}
                  id="perPinCode"
                  className="form-control"
                  placeholder="Enter PIN Code"
                />
                <span
                  id="ContentPlaceHolder1_RequiredFieldValidator9"
                  style={{ color: "red", visibility: "hidden" }}
                >
                  Pin is require
                </span>
                <br />
              </div>
              <h5
                style={{ paddingTop: 25, fontWeight: "bold", color: "#0d6efd" }}
              >
                Corospondance Address:<span style={{ color: "red" }}> *</span>
              </h5>
              <hr style={{ color: "red", marginBottom: 40 }} />
              <div className="col-lg-4 col-md-6">
                <label htmlFor="corAddress">Address</label>
                <textarea
                  name="corAddress"
                  rows={2}
                  cols={20}
                  id="corAddress"
                  value={trainingFormData.corAddress}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter Full Address..."
                  style={{ height: 125 }}
                  defaultValue={""}
                />
                <span
                  id="ContentPlaceHolder1_RequiredFieldValidator10"
                  style={{ color: "red", visibility: "hidden" }}
                >
                  Address is require
                </span>
                <br />
              </div>
              <div className="col-lg-4 col-md-6">
                <label htmlFor="corCountry">Country</label>
                <input
                  name="corCountry"
                  type="text"
                  id="corCountry"
                  value={trainingFormData.corCountry}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter Country"
                />
                <span
                  id="ContentPlaceHolder1_RequiredFieldValidator11"
                  style={{ color: "red", visibility: "hidden" }}
                >
                  Country is require
                </span>
                <br />
                <label htmlFor="corState">State</label>
                <input
                  name="corState"
                  type="text"
                  id="corState"
                  value={trainingFormData.corState}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter State"
                />
                <span
                  id="ContentPlaceHolder1_RequiredFieldValidator12"
                  style={{ color: "red", visibility: "hidden" }}
                >
                  State is require
                </span>
                <br />
              </div>
              <div className="col-lg-4 col-md-6">
                <label htmlFor="corDistrict">District</label>
                <input
                  name="corDistrict"
                  type="text"
                  id="corDistrict"
                  value={trainingFormData.corDistrict}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter District"
                />
                <span
                  id="ContentPlaceHolder1_RequiredFieldValidator13"
                  style={{ color: "red", visibility: "hidden" }}
                >
                  District is require
                </span>
                <br />
                <label htmlFor="corPinCode">PIN Code</label>
                <input
                  name="corPinCode"
                  type="text"
                  id="corPinCode"
                  value={trainingFormData.corPinCode}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter PIN Code"
                />
                <span
                  id="ContentPlaceHolder1_RequiredFieldValidator14"
                  style={{ color: "red", visibility: "hidden" }}
                >
                  Name is require
                </span>
                <br />
              </div>
              <h5
                style={{ paddingTop: 25, fontWeight: "bold", color: "#0d6efd" }}
              >
                Educational Details:<span style={{ color: "red" }}> *</span>
              </h5>
              <hr style={{ color: "red", marginBottom: 40 }} />
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <label htmlFor="qualification">Highest Qualification</label>
                  <input
                    name="qualification"
                    type="text"
                    id="qualification"
                    className="form-control"
                    placeholder="Enter Highest Qualification"
                    value={trainingFormData.qualification}
                    onChange={handleInputChange}
                  />
                  <span style={{ color: "red", visibility: "hidden" }}>
                    Highest Qualification is required
                  </span>
                  <br />

                  <label htmlFor="universityName">University Name</label>
                  <input
                    name="universityName"
                    type="text"
                    id="universityName"
                    className="form-control"
                    placeholder="Enter University Name"
                    value={trainingFormData.universityName}
                    onChange={handleInputChange}
                  />
                  <br />

                  <label htmlFor="universityRegNo">
                    University Registration No.
                  </label>
                  <input
                    name="universityRegNo"
                    type="text"
                    id="universityRegNo"
                    className="form-control"
                    placeholder="Enter University Registration No."
                    value={trainingFormData.universityRegNo}
                    onChange={handleInputChange}
                  />
                  <br />
                </div>

                <div className="col-lg-4 col-md-6">
                  <label htmlFor="collegeName">College Name</label>
                  <input
                    name="collegeName"
                    type="text"
                    id="collegeName"
                    className="form-control"
                    placeholder="Enter College Name"
                    value={trainingFormData.collegeName}
                    onChange={handleInputChange}
                  />
                  <br />

                  <label htmlFor="collegeRollNo">College Roll Number</label>
                  <input
                    name="collegeRollNo"
                    type="text"
                    id="collegeRollNo"
                    className="form-control"
                    placeholder="Enter College Roll No."
                    value={trainingFormData.collegeRollNo}
                    onChange={handleInputChange}
                  />
                  <br />

                  <label htmlFor="interestedFor">Interested for</label>
                  <input
                    name="interestedFor"
                    type="text"
                    id="interestedFor"
                    className="form-control"
                    placeholder="Interested for"
                    value={trainingFormData.interestedFor}
                    onChange={handleInputChange}
                  />
                  <br />
                </div>

                <div className="col-lg-4 col-md-6">
                  <label htmlFor="passingYear">Passing Year</label>
                  <input
                    name="passingYear"
                    type="text"
                    id="passingYear"
                    className="form-control"
                    placeholder="Enter year of passing"
                    value={trainingFormData.passingYear}
                    onChange={handleInputChange}
                  />
                  <br />

                  <label htmlFor="streamName">Stream Name</label>
                  <input
                    name="streamName"
                    type="text"
                    id="streamName"
                    className="form-control"
                    placeholder="Enter Stream Name"
                    value={trainingFormData.streamName}
                    onChange={handleInputChange}
                  />
                  <br />

                  <label htmlFor="profilePhoto">Upload Photo</label>
                  <input
                    type="file"
                    name="profilePhoto"
                    id="profilePhoto"
                    accept="image/*"
                    className="form-control"
                    onChange={handleFileUpload}
                  />
                  <br />
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
            </div>{" "}
            {/* / row */}
          </div>
        </form>
      </main>
      {/* End Footer */}
    </>
  );
}

export default Training;
