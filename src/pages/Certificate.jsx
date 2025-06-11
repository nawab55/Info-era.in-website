//new code for certificate and redirect to dashboard page
import { useState } from "react";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

function Certificate() {
  const [regNo, setRegNo] = useState("");

  async function getCertificate(e) {
    e.preventDefault();
    try {
      if (!regNo) {
        toast.error("Please enter a Registration Number.");
        return;
      }

      const encodedRegNo = encodeURIComponent(regNo); // Encode the regNo for the URL
      // Redirect to the CertificateDetails page on dashboard.infoera.in
      // window.location.href = `https://dashboard.infoera.in/certificate-details/regno/${encodedRegNo}`;
      window.location.href = `${
        import.meta.env.VITE_REACT_APP_DASHBOARD_BASEURL
      }/certificate-details/regno/${encodedRegNo}`;
    } catch (error) {
      toast.error("An error occurred while redirecting. Please try again.");
      console.error("Error during redirection", error);
    }
  }

  return (
    <>
      <Helmet>
        <title>Info Era Certificate</title>
        <meta
          name="google-site-verification"
          content="KrFf109xrwKNRJTWVipUzNV7ZMCJn5vGEdhwxAWcuSg"
        />
        <meta
          name="keywords"
          content="Info Era Certificate, Info Era Certification, Download Certificate, Download Info Era Software Services Certificate, Info Era Treaning Certificate, Certificate of Info Era"
        />
        <meta
          name="description"
          content="Students can easily download their certificates online, ensuring quick access to their achievements anytime, anywhere."
        />
        <link
          rel="canonical"
          href="https://infoera.in/certificate"
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
          content="Treaning and Internship Certificate"
        />
        <meta name="Distribution" content="Global" />
        <meta
          name="copyright"
          content="Copyright (c) 2014 by Info Era Software Services Pvt. Ltd."
        />
        <meta name="Publisher" content="www.infoera.in" />
      </Helmet>
      <div style={{ minHeight: "100vh" }}>
        <section>
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
              <div className="col-lg-12 d-flex flex-column justify-content-center bg">
                {/* <h3 style={{ color: "#0c219a", fontWeight: 700, fontSize: 50 }}>
                  Certificate
                  <span style={{ color: "orange" }} />
                </h3> */}
              </div>
            </div>
          </div>
        </section>
        {/* End Hero */}
        <div id="ContentPlaceHolder1_form" className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <div className="card shadow">
                <div className="card-body p-4">
                  <h5 className="card-title text-center mb-4">
                    Certificate Lookup
                  </h5>
                  <form onSubmit={getCertificate} className="row g-3">
                    <div className="col-12">
                      <label
                        htmlFor="RegistrationNumber"
                        className="form-label fw-bold"
                      >
                        Registration No
                      </label>
                      <input
                        name="Registration number"
                        type="text"
                        value={regNo}
                        onChange={(e) => setRegNo(e.target.value)}
                        id="RegistrationNumber"
                        className="form-control"
                        placeholder="Enter Registration No"
                      />
                    </div>
                    <div className="col-12 d-grid">
                      <button
                        type="submit"
                        name="ctl00$ContentPlaceHolder1$btnView"
                        id="ContentPlaceHolder1_btnView"
                        className="btn btn-primary"
                      >
                        View Certificate
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid" style={{ marginTop: 40 }}>
          <div className="container"> </div>
        </div>
        {/* End Footer */}
      </div>
    </>
  );
}

export default Certificate;




// old code
// import { useState } from "react";
// import CertificatePage from "../components/CertificatePage";
// import toast from "react-hot-toast";
// import { Helmet } from "react-helmet";

// function Certificate() {
//   const [regNo, setRegNo] = useState("");
//   const [certificateData, setCertificateData] = useState("");
//   const [studentData, setStudentData] = useState("");
//   async function getCertificate(e) {
//     e.preventDefault();
//     try {
//       const encodedRegNo = encodeURIComponent(regNo); // Encode the regNo
//       const res = await fetch(
//         `${
//           import.meta.env.VITE_REACT_APP_BACKEND_BASEURL
//         }/api/certificate/get-by-regno/${encodedRegNo}`
//       );

//       const data = await res.json();
//       setCertificateData(data.data);
//       const studentRes = await fetch(
//         `${
//           import.meta.env.VITE_REACT_APP_BACKEND_BASEURL
//         }/api/student/get-student/${encodedRegNo}`
//       );
//       const studentData = await studentRes.json();
//       setStudentData(studentData.student);
//       toast.success("Certificate found successfully!");
//     } catch (error) {
//       toast.error("Certificate not Found for this Registration Number.");
//       console.error("Error fetching certificate", error);
//       setCertificateData(null);
//     }
//   }

//   return (
//     <>
//       <Helmet>
//         <title>Info Era Certificate </title>
//         <meta
//           name="google-site-verification"
//           content="KrFf109xrwKNRJTWVipUzNV7ZMCJn5vGEdhwxAWcuSg"
//         />

//         <meta
//           name="keywords"
//           content="Info Era Certificate, Info Era Certification, Download Certificate, Download Info Era Software Services Certificate, Info Era Treaning Certificate, Certificate of Info Era"
//         />
//         <meta
//           name="description"
//           content=" Students can easily download their certificates online, ensuring quick access to their achievements anytime, anywhere."
//         />
//         <link
//           rel="canonical"
//           href="https://infoera.in/certificate"
//           aria-label="Canonical - Info Era Software Services Pvt. Ltd."
//         />
//         <meta name="content-language" content="EN" />
//         <meta name="search engines" content="ALL" />
//         <meta name="Robots" content="INDEX,ALL" />
//         <meta name="YahooSeeker" content="INDEX, FOLLOW" />
//         <meta name="msnbot" content="INDEX, FOLLOW" />
//         <meta name="googlebot" content="INDEX, FOLLOW" />
//         <meta name="language" content="en-us" />
//         <meta name="Expires" content="never" />
//         <meta name="rating" content="General" />
//         <meta name="Resource-type" content="document" />
//         <meta name="Author" content="www.infoera.in" />
//         <meta
//           name="document-classification"
//           content="Treaning and Internship Certificate"
//         />
//         <meta name="Distribution" content="Global" />
//         <meta
//           name="copyright"
//           content="Copyright (c) 2014 by Info Era Software Services Pvt. Ltd."
//         />

//         <meta name="Publisher" content="www.infoera.in" />
//       </Helmet>
//       <div style={{ minHeight: "100vh" }}>
//         <section>
//           <div className="container aos-init aos-animate" data-aos="fade-up">
//             <header className="section-header">
//               <h2
//                 style={{
//                   fontSize: 13,
//                   fontWeight: 700,
//                   color: "#4154f1",
//                   textTransform: "none"
//                 }}
//               />
//             </header>
//             <div className="row">
//               <div className="col-lg-12 d-flex flex-column justify-content-center bg">
//                 {/* <h3 style={{ color: "#0c219a", fontWeight: 700, fontSize: 50 }}>
//                 Certificate
//                 <span style={{ color: "orange" }} />
//               </h3> */}
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* End Hero */}
//         <div id="ContentPlaceHolder1_form" className="container py-5">
//           <div className="row justify-content-center">
//             <div className="col-md-8 col-lg-6">
//               <div className="card shadow">
//                 <div className="card-body p-4">
//                   <h5 className="card-title text-center mb-4">
//                     Certificate Lookup
//                   </h5>
//                   <form onSubmit={getCertificate} className="row g-3">
//                     <div className="col-12">
//                       <label
//                         htmlFor="RegistrationNumber"
//                         className="form-label fw-bold"
//                       >
//                         Registration No
//                       </label>
//                       <input
//                         name="Registration number"
//                         type="text"
//                         value={regNo}
//                         onChange={(e) => setRegNo(e.target.value)}
//                         id="RegistrationNumber"
//                         className="form-control"
//                         placeholder="Enter Registration No"
//                       />
//                     </div>
//                     <div className="col-12 d-grid">
//                       <button
//                         type="submit"
//                         name="ctl00$ContentPlaceHolder1$btnView"
//                         id="ContentPlaceHolder1_btnView"
//                         className="btn btn-primary"
//                       >
//                         View Certificate
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {certificateData && (
//           <CertificatePage
//             certificateData={certificateData}
//             studentData={studentData}
//           />
//         )}

//         <div className="container-fluid" style={{ marginTop: 40 }}>
//           <div className="container">&nbsp;</div>
//         </div>
//         {/* End Footer */}
//       </div>
//     </>
//   );
// }

// export default Certificate;





// this is the new code for certificate page based on the new design 
// import { useState, useRef, useEffect } from "react";
// import toast from "react-hot-toast";
// import { Helmet } from "react-helmet";
// import { useReactToPrint } from "react-to-print";
// import NewCertificate from "../components/NewCertificate";
// import "../styles/CertificateDetails.css";
// import {
//   Download,
//   CheckCircle,
//   Clock,
//   User,
//   Scroll,
//   FileText
// } from "lucide-react";
// import axios from "axios";

// function Certificate() {
//   const [regNo, setRegNo] = useState("");
//   const [certificateData, setCertificateData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const certificateRef = useRef();

//   async function getCertificate(e) {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const encodedRegNo = encodeURIComponent(regNo);
//       const res = await axios.get(
//         `${
//           import.meta.env.VITE_REACT_APP_BACKEND_BASEURL
//         }/api/certificate/get-by-regno/${encodedRegNo}`
//       );

//       if (!res.data.data) {
//         throw new Error("Certificate not found");
//       }
//       setCertificateData(res.data.data);
//       toast.success("Certificate found successfully!");
//     } catch (error) {
//       toast.error("Certificate not Found for this Registration Number.");
//       console.error("Error fetching certificate", error);
//       setCertificateData(null);
//     } finally {
//       setLoading(false);
//     }
//   }

//   const formatDateRange = (fromDate, toDate) => {
//     const from = new Date(fromDate);
//     const to = new Date(toDate);
//     const options = { year: "numeric", month: "long", day: "numeric" };
//     return `${from.toLocaleDateString(
//       undefined,
//       options
//     )} to ${to.toLocaleDateString(undefined, options)}`;
//   };

//   const isCertificateDataValid = (data) => {
//     return (
//       data &&
//       data.studentName &&
//       data.regNo &&
//       data.projectName &&
//       data.fromDate &&
//       data.toDate &&
//       data.trainingTopic
//     );
//   };

//   const handlePrint = useReactToPrint({
//     content: () => {
//       console.log(
//         "handlePrint called, certificateRef.current:",
//         certificateRef.current
//       );
//       if (!certificateRef.current) {
//         toast.error(
//           "Certificate content is not available for printing. Please try again."
//         );
//         return null;
//       }
//       return certificateRef.current;
//     },
//     documentTitle: `${certificateData?.studentName || "Certificate"}_${
//       new Date().toISOString().split("T")[0]
//     }`,
//     pageStyle: `
//       @page {
//         size: A4 landscape;
//         margin: 0;
//       }
      
//       @media print {
//         body {
//           -webkit-print-color-adjust: exact;
//           color-adjust: exact;
//         }
        
//         .certificate-container {
//           width: 297mm !important;
//           height: 210mm !important;
//           margin: 0 !important;
//           padding: 0 !important;
//           box-shadow: none !important;
//         }
        
//         .certificate-inner {
//           width: 100% !important;
//           height: 100% !important;
//           margin: 0 !important;
//           padding: 0 !important;
//         }
//       }
//     `,
//     onBeforePrint: () => {
//       console.log("onBeforePrint: Print window is about to open");
//     },
//     onAfterPrint: () => {
//       console.log("onAfterPrint: Print window closed or printing completed");
//     },
//     onPrintError: (errorLocation, error) => {
//       console.error("Print error at", errorLocation, ":", error);
//       toast.error("Error occurred while printing. Please try again.");
//     }
//   });

//   // Add a safeguard to ensure handlePrint is a function
//   const safeHandlePrint = () => {
//     if (typeof handlePrint !== "function") {
//       console.error("handlePrint is not a function:", handlePrint);
//       toast.error("Printing is currently unavailable. Please try again later.");
//       return;
//     }
//     handlePrint();
//   };

//   useEffect(() => {
//     if (certificateData) {
//       console.log("certificateData updated:", certificateData);
//       console.log(
//         "certificateRef.current after update:",
//         certificateRef.current
//       );
//       if (!isCertificateDataValid(certificateData)) {
//         console.warn(
//           "certificateData is missing required fields:",
//           certificateData
//         );
//         toast.error("Certificate data is incomplete. Please contact support.");
//         setCertificateData(null);
//       }
//     }
//   }, [certificateData]);

//   const isValid = true; // Placeholder for validation logic; replace with actual validation if needed

//   return (
//     <>
//       <Helmet>
//         <title>Info Era Certificate</title>
//         <meta
//           name="google-site-verification"
//           content="KrFf109xrwKNRJTWVipUzNV7ZMCJn5vGEdhwxAWcuSg"
//         />
//         <meta
//           name="keywords"
//           content="Info Era Certificate, Info Era Certification, Download Certificate, Download Info Era Software Services Certificate, Info Era Treaning Certificate, Certificate of Info Era"
//         />
//         <meta
//           name="description"
//           content="Students can easily download their certificates online, ensuring quick access to their achievements anytime, anywhere."
//         />
//         <link
//           rel="canonical"
//           href="https://infoera.in/certificate"
//           aria-label="Canonical - Info Era Software Services Pvt. Ltd."
//         />
//         <meta name="content-language" content="EN" />
//         <meta name="search engines" content="ALL" />
//         <meta name="Robots" content="INDEX,ALL" />
//         <meta name="YahooSeeker" content="INDEX, FOLLOW" />
//         <meta name="msnbot" content="INDEX, FOLLOW" />
//         <meta name="googlebot" content="INDEX, FOLLOW" />
//         <meta name="language" content="en-us" />
//         <meta name="Expires" content="never" />
//         <meta name="rating" content="General" />
//         <meta name="Resource-type" content="document" />
//         <meta name="Author" content="www.infoera.in" />
//         <meta
//           name="document-classification"
//           content="Treaning and Internship Certificate"
//         />
//         <meta name="Distribution" content="Global" />
//         <meta
//           name="copyright"
//           content="Copyright (c) 2014 by Info Era Software Services Pvt. Ltd."
//         />
//         <meta name="Publisher" content="www.infoera.in" />
//       </Helmet>

//       <div className="certificate-page">
//         {loading && (
//           <div className="d-flex justify-content-center align-items-center min-vh-100">
//             <div className="spinner-border text-primary" role="status">
//               <span className="visually-hidden">Loading...</span>
//             </div>
//           </div>
//         )}

//         <div className="container py-5">
//           <div className="row justify-content-center">
//             <div className="col-md-10 col-lg-8">
//               <div className="certificate-details-card position-relative bg-white border rounded shadow-sm">
//                 {/* Certificate Lookup Form */}
//                 <div className="p-4 border-bottom">
//                   <h2 className="certificate-details-section-title mb-4">
//                     Certificate Lookup
//                   </h2>
//                   <form onSubmit={getCertificate} className="row g-3">
//                     <div className="col-12">
//                       <label
//                         htmlFor="RegistrationNumber"
//                         className="form-label fw-bold"
//                       >
//                         Registration No
//                       </label>
//                       <input
//                         name="Registration number"
//                         type="text"
//                         value={regNo}
//                         onChange={(e) => setRegNo(e.target.value)}
//                         id="RegistrationNumber"
//                         className="form-control"
//                         placeholder="Enter Registration No"
//                       />
//                     </div>
//                     <div className="col-12 d-grid">
//                       <button
//                         type="submit"
//                         className="btn btn-primary"
//                         disabled={loading}
//                       >
//                         View Certificate
//                       </button>
//                     </div>
//                   </form>
//                 </div>

//                 {/* Certificate Details Section (only shown if data is fetched successfully) */}
//                 {certificateData &&
//                   isCertificateDataValid(certificateData) &&
//                   !loading && (
//                     <>
//                       {/* Decorative Background */}
//                       <div className="certificate-details-bg"></div>

//                       {/* Header */}
//                       <div className="certificate-details-header p-4 text-center text-white">
//                         <h1 className="certificate-details-title mb-2">
//                           Certificate Verification
//                         </h1>
//                         <p className="certificate-details-subtitle">
//                           Issued by Info Era Software Services Pvt Ltd.
//                         </p>
//                       </div>

//                       {/* Validation Message */}
//                       <div className="certificate-details-validation p-3 d-flex align-items-center">
//                         <CheckCircle
//                           className={`validation-icon me-3 ${
//                             isValid ? "valid" : "invalid"
//                           }`}
//                           size={24}
//                         />
//                         <p
//                           className={`validation-text mb-0 ${
//                             isValid ? "valid" : "invalid"
//                           }`}
//                         >
//                           {isValid
//                             ? "This certificate is valid and authorized by Info Era Software Services Pvt Ltd."
//                             : "This certificate is not valid. Please contact support."}
//                         </p>
//                       </div>

//                       {/* Key Details */}
//                       <div className="certificate-details-content p-4">
//                         <h2 className="certificate-details-section-title mb-4">
//                           Certificate Details
//                         </h2>
//                         <div className="certificate-details-grid">
//                           <div className="certificate-details-item d-flex align-items-start p-2">
//                             <User
//                               className="details-icon user-icon me-3"
//                               size={22}
//                             />
//                             <div>
//                               <p className="details-label mb-1">Student Name</p>
//                               <p className="details-value mb-0">
//                                 {certificateData.studentName}
//                               </p>
//                             </div>
//                           </div>
//                           <div className="certificate-details-item d-flex align-items-start p-2">
//                             <Scroll
//                               className="details-icon scroll-icon me-3"
//                               size={22}
//                             />
//                             <div>
//                               <p className="details-label mb-1">
//                                 Registration No
//                               </p>
//                               <p className="details-value mb-0">
//                                 {certificateData.regNo}
//                               </p>
//                             </div>
//                           </div>
//                           <div className="certificate-details-item d-flex align-items-start p-2">
//                             <FileText
//                               className="details-icon file-icon me-3"
//                               size={22}
//                             />
//                             <div>
//                               <p className="details-label mb-1">Technology</p>
//                               <p className="details-value mb-0">
//                                 {certificateData.projectName}
//                               </p>
//                             </div>
//                           </div>
//                           <div className="certificate-details-item d-flex align-items-start p-2">
//                             <Clock
//                               className="details-icon clock-icon me-3"
//                               size={22}
//                             />
//                             <div>
//                               <p className="details-label mb-1">
//                                 Training Period
//                               </p>
//                               <p className="details-value mb-0">
//                                 {formatDateRange(
//                                   certificateData.fromDate,
//                                   certificateData.toDate
//                                 )}
//                               </p>
//                             </div>
//                           </div>
//                         </div>
//                       </div>

//                       {/* Print Button */}
//                       <div className="certificate-details-footer p-4 border-top text-center">
//                         <button
//                           onClick={() => {
//                             console.log(
//                               "Print button clicked, certificateData:",
//                               certificateData
//                             );
//                             safeHandlePrint();
//                           }}
//                           className="btn btn-primary btn-print-certificate"
//                           disabled={
//                             !certificateData ||
//                             !isCertificateDataValid(certificateData)
//                           }
//                         >
//                           <Download className="print-icon me-2" size={20} />
//                           Print Certificate
//                         </button>
//                         <p className="print-instruction mt-2 mb-0">
//                           The certificate will be displayed in the print preview
//                           window.
//                         </p>
//                       </div>

//                       {/* Hidden Certificate for Printing */}
//                       <div style={{ display: "none" }}>
//                         <NewCertificate
//                           ref={certificateRef}
//                           certificateData={certificateData}
//                         />
//                       </div>
//                     </>
//                   )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Certificate;