import { useState, useEffect } from "react";
import { useRazorpay } from "react-razorpay";
import toast from "react-hot-toast";
import uploadFile from "../lib/uploadFile";
import Spinner from "../components/loader/Spinner";
import WebDevelopmentBanner from "../courses/webDevelopmentCourse/WebDevelopmentBanner";
import { Helmet } from "react-helmet";
import axios from "axios";

function Training() {
  const { Razorpay } = useRazorpay();
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [tempFile, setTempFile] = useState({
    file: null,
    fileType: null,
    fileName: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [trainingFormData, setTrainingFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    courseType: "",
    feeAmount: 0,
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
    // interestedFor: "",
    profilePhoto: {
      src: null, // File path or URL
      fileType: "", // e.g., "image/jpeg"
      fileName: "" // e.g., "photo.jpg"
    }
  });

  // Add useEffect to fetch courses
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_REACT_APP_BACKEND_BASEURL
          }/api/training-category/training-fees`
        );
        if (response.data.success) {
          setCourses(response.data.data);
        }
      } catch (error) {
        toast.error("Failed to load courses");
        console.error(error);
      }
    };
    fetchCourses();
  }, []);

  // Update handleInputChange for course selection
  const handleCourseChange = (e) => {
    const courseId = e.target.value;
    const course = courses.find((c) => c._id === courseId);
    if (course) {
      setSelectedCourse(course);
      setTrainingFormData((prev) => ({
        ...prev,
        courseType: course._id,
        feeAmount: course.feeAmount
      }));
    }
  };

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
     if (!selectedCourse) {
       toast.error("Please select a course");
       return;
     }

    try {
      setIsSubmitting(true);

      // Upload file and submit form
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

      // Submit form data
      const response = await axios.post(
        `${
          import.meta.env.VITE_REACT_APP_BACKEND_BASEURL
        }/api/training/student-training`,
        data
      );

       if (response.data.success) {
         // Initiate payment after successful form submission
         const orderResponse = await axios.post(
           `${
             import.meta.env.VITE_REACT_APP_BACKEND_BASEURL
           }/api/payments/create-order`,
           {
             amount: selectedCourse.feeAmount,
             courseId: selectedCourse._id // Send course ID for verification
           }
         );

         const options = {
           key: import.meta.env.VITE_REACT_APP_RAZORPAY_KEY_ID,
           amount: orderResponse.data.order.amount,
           currency: "INR",
           name: "Info Era Software Services",
           description: `Payment for ${selectedCourse.categoryName}`,
           order_id: orderResponse.data.order.id,
           handler: async (paymentResponse) => {
             try {
               await axios.post(
                 `${
                   import.meta.env.VITE_REACT_APP_BACKEND_BASEURL
                 }/api/payments/verify-payment`,
                 {
                   order_id: paymentResponse.razorpay_order_id,
                   payment_id: paymentResponse.razorpay_payment_id,
                   signature: paymentResponse.razorpay_signature,
                   courseId: selectedCourse._id // Include course ID in verification
                 }
               );
               toast.success("Payment Successful!");
               // Reset form
              //  setTrainingFormData(/* initial state */);
              setTrainingFormData({
                name: "",
                email: "",
                mobile: "",
                courseType: "",
                feeAmount: 0,
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
                profilePhoto: {
                  src: null, // File path or URL
                  fileType: "", // e.g., "image/jpeg"
                  fileName: "" // e.g., "photo.jpg"
                }
              });
             } catch (error) {
               toast.error("Payment verification failed");
               console.error(error);
             }
           },
           prefill: {
             name: trainingFormData.name,
             email: trainingFormData.email,
             contact: trainingFormData.mobile
           },
           theme: { color: "#3399cc" }
         };

         const rzp = new Razorpay(options);
         rzp.open();
       }
    } catch (error) {
      toast.error(error.response?.data?.message || "Submission failed");
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

        {/* Google site Verification  Start */}
        <meta
          name="google-site-verification"
          content="KrFf109xrwKNRJTWVipUzNV7ZMCJn5vGEdhwxAWcuSg"
        />
        {/* End */}

        <title>
          {" "}
          IT Training Institute in Patna, IT Training Internship Company in
          Patna Bihar - Info Era Software Services
        </title>
        <meta
          name="description"
          content="New Student Training Program in Patna, Php Oracle Training for BSc BE BTech BSC-IT BCA MCA BBA MBA Engineering Freshmen, Second, Third, and Final Year Students in Patna in MySQL C C++ C# Java JSP ASP Dot Net Python MVC Android SQL MySQL"
        />

        <meta
          name="keywords"
          content="Two, three, four, six, nine, and ten weeks of training on real projects for new students in Patna, Training Program Providing Companies in Patna Bihar, Training Program for Second Third Final Year Students in Patna"
        />
        <link
          rel="canonical"
          href="http://infoera.in/training"
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
          content="E-Learning Solutions Service provider in Patna"
        />
        <meta name="Distribution" content="Global" />
        <meta
          name="document-classification"
          content="Info Era Software Services Pvt. Ltd. Contact_Number-7008411312 Email-infoerapvtltd@gmail.com Website-www.infoera.in"
        />
        <meta
          name="Keyphrase"
          content="Best Treaning Center in Patna Bihar, IT Treaning Center in Patna, Top IT Treaning Center in Bihar India, Website Designing Treaning Center in Patna Bihar, Top Treaning Institute in Patna "
        />
        <meta
          name="copyright"
          content="Copyright (c) 2014 by Info Era Software Services Pvt. Ltd."
        />

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
              <img
                src="/assets/img/training.png"
                className="img-fluid"
                alt="It Training - Info Era"
                title="It Training - Info Era"
              />
            </div>
          </div>
        </div>
      </section>
      {/* End Hero */}

      {/* Courses Section */}
      <section id="courses" className="courses">
        <div className="container aos-init aos-animate" data-aos="fade-up">
          {/* <WebDesignBanner /> */}
          <h1
            style={{ color: "#0c219a", fontWeight: 700, marginBottom: "1rem" }}
          >
            Our Upcoming Training Session.
          </h1>
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

              {/* Add Course Selection in Personal Details */}
              {/* <div className="col-lg-4 col-md-6">
                <label htmlFor="courseType">Course Type</label>
                <select
                  name="courseType"
                  id="courseType"
                  className="form-control"
                  value={trainingFormData.courseType}
                  onChange={handleCourseChange}
                  required
                >
                  <option value="">Select Course</option>
                  {courses.map((course) => (
                    <option key={course._id} value={course._id}>
                      {course.categoryName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-lg-4 col-md-6">
                <label htmlFor="feeAmount">Course Fee (₹)</label>
                <input
                  type="number"
                  id="feeAmount"
                  className="form-control"
                  value={trainingFormData.feeAmount}
                  readOnly
                  disabled
                  style={{ cursor: "not-allowed", backgroundColor: "#e9ecef" }}
                  onKeyDown={(e) => e.preventDefault()}
                  onMouseDown={(e) => e.preventDefault()}
                />
              </div> */}
              {/* First Row */}
              <div className="row">
                <div className="col-lg-4 col-md-6 mb-3">
                  <label htmlFor="courseType">Course Type</label>
                  <select
                    name="courseType"
                    id="courseType"
                    className="form-control"
                    value={trainingFormData.courseType}
                    onChange={handleCourseChange}
                    required
                  >
                    <option value="">Select Course</option>
                    {courses.map((course) => (
                      <option key={course._id} value={course._id}>
                        {course.categoryName}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-lg-4 col-md-6 mb-3">
                  <label htmlFor="feeAmount">Course Fee (₹)</label>
                  <input
                    type="number"
                    id="feeAmount"
                    className="form-control"
                    value={trainingFormData.feeAmount}
                    readOnly
                    disabled
                    style={{
                      cursor: "not-allowed",
                      backgroundColor: "#e9ecef"
                    }}
                  />
                </div>

                <div className="col-lg-4 col-md-6 mb-3">
                  <label htmlFor="name">Full Name</label>
                  <input
                    name="name"
                    type="text"
                    id="name"
                    value={trainingFormData.name}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Enter Full Name"
                    required
                  />
                </div>
              </div>

              {/* Second Row */}
              <div className="row">
                <div className="col-lg-4 col-md-6 mb-3">
                  <label htmlFor="fatherName">Father&apos;s Name</label>
                  <input
                    name="fatherName"
                    type="text"
                    id="fatherName"
                    className="form-control"
                    value={trainingFormData.fatherName}
                    onChange={handleInputChange}
                    placeholder="Enter Father's Name"
                    required
                  />
                </div>
                <div className="col-lg-4 col-md-6 mb-3">
                  <label htmlFor="gender">Gender</label>
                  <select
                    name="gender"
                    id="gender"
                    className="form-control"
                    value={trainingFormData.gender}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">-- Select Gender --</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                <div className="col-lg-4 col-md-6 mb-3">
                  <label htmlFor="mobile">Mobile Number</label>
                  <input
                    name="mobile"
                    type="tel"
                    id="mobile"
                    value={trainingFormData.mobile}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Enter Mobile Number"
                    required
                  />
                </div>
              </div>
              {/* Third Row */}
              <div className="row">
                <div className="col-lg-4 col-md-6 mb-3">
                  <label htmlFor="email">Email Address</label>
                  <input
                    name="email"
                    type="email"
                    id="email"
                    value={trainingFormData.email}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Enter Email Address"
                    required
                  />
                </div>

                <div className="col-lg-4 col-md-6 mb-3">
                  <label htmlFor="profilePhoto">Upload Photo</label>
                  <input
                    type="file"
                    name="profilePhoto"
                    id="profilePhoto"
                    accept="image/*"
                    className="form-control"
                    onChange={handleFileUpload}
                    required
                  />
                </div>
              </div>
              {/* <div className="col-lg-4 col-md-6">
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
              </div> */}
              {/* <div className="col-lg-4 col-md-6">
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
              </div> */}
              {/* Move Profile Photo to Personal Details */}
              {/* <div className="col-lg-4 col-md-6">
                <label htmlFor="profilePhoto">Upload Photo</label>
                <input
                  type="file"
                  name="profilePhoto"
                  id="profilePhoto"
                  accept="image/*"
                  className="form-control"
                  onChange={handleFileUpload}
                  required
                />
              </div> */}
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
                  Pincode is require
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

                  {/* <label htmlFor="interestedFor">Interested for</label>
                  <input
                    name="interestedFor"
                    type="text"
                    id="interestedFor"
                    className="form-control"
                    placeholder="Interested for"
                    value={trainingFormData.interestedFor}
                    onChange={handleInputChange}
                  />
                  <br /> */}
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

                  {/* <label htmlFor="profilePhoto">Upload Photo</label>
                  <input
                    type="file"
                    name="profilePhoto"
                    id="profilePhoto"
                    accept="image/*"
                    className="form-control"
                    onChange={handleFileUpload}
                  /> */}
                  {/* <br /> */}
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
