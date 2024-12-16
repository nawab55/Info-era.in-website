/* eslint-disable react/prop-types */
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const formatDate = (date) => {
  const options = { day: "2-digit", month: "2-digit", year: "numeric" };
  return new Date(date)
    .toLocaleDateString("en-GB", options)
    .replace(/\//g, "/");
};

const CertificatePage = ({ certificateData, studentData }) => {
  const printRef = useRef(null);
  const reactToPrintFn = useReactToPrint({ contentRef: printRef });

  const handlePrint = () => {
    printRef.current.style.height = "100vh";
    reactToPrintFn();
    printRef.current.style.height = "";
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center mx-auto"
      style={{ padding: "0px 5rem", flexDirection: "column", width: "80%" }}
    >
      <div className="d-flex justify-content-center py-4 align-items-center">
        <button
          onClick={handlePrint}
          className="btn btn-primary d-inline-flex align-items-center justify-content-center"
        >
          <span>Print</span>
        </button>
      </div>

      <div
        ref={printRef}
        className="d-flex flex-column justify-content-between"
        style={{ border: "1px solid gray", padding: "2rem", height: "auto" }}
      >
        {/* Header Section */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          {/* Logo */}
          <div className="">
            <img
              src="/infoera.png"
              alt="Company Logo"
              style={{ height: "auto" }}
            />
            <div className="fs-4">
              <h4 className="fw-bold fs-3 text-nowrap mb-1">
                Info Era Software Services Pvt. Ltd.
              </h4>
              <p className="mb-1">ISO: 9001:2015, 27001:2013</p>
              <p className="mb-1">CIN No: U72300BR20114PTC022956</p>
              <p className="mb-1">Email: info@infoera.in</p>
              <p className="mb-0">Website: www.infoera.in</p>
            </div>
          </div>

          {/* Header Image */}
          <div className="w-100 h-100">
            <img
              src="/certificate-header.png"
              alt="Certificate Header"
              style={{
                width: "100%",
                height: "100%",
                margin: "0",
                padding: "0",
              }}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center" style={{ marginTop: "-1rem" }}>
          <div className="mb-4">
            <h3 className="fs-2 fw-bold">To Whom It May Concern</h3>
          </div>
          <div className="mb-4">
            <h1 className=" fw-bold">CERTIFICATE OF COMPLETION</h1>
          </div>

          <div className="text-justify mb-0 px-5">
            <p className="fs-4 p-0 m-0">
              This certificate is proudly awarded to{" "}
              <b>{certificateData.studentName}</b> for the completion of the{" "}
              <b>{certificateData.projectName}</b> on{" "}
              <b>{studentData.trainingTopic}</b> with Info Era Software Services
              Pvt. Ltd.
            </p>
          </div>

          <div className="text-justify mb-0 px-5">
            <p className="fs-4 m-0 mb-1 p-0 ">
              We Congratulate you for your outstanding performance in this
              training program, conducted from{" "}
              <b>{formatDate(certificateData.fromDate)}</b> to{" "}
              <b>{formatDate(certificateData.toDate)}</b>.
            </p>
          </div>

          <div className="text-justify mb-0 px-5">
            <p className="fs-4 ">
              During this period, the training undertaken by{" "}
              <b>{certificateData.studentName}</b> was evaluated as excellent.
            </p>
          </div>

          <div className="mb-0">
            <p className="fs-4 font-italic">
              &quot;We wish you all the best for your future endeavors&quot;
            </p>
          </div>
        </div>

        {/* Signature Section */}
        <div className=" d-flex justify-content-start px-5">
          <div className="w-50 border-top border-2 pt-2 text-center">
            <h4 className="display-6">
              RAHUL RAJ
              <br />
              <span className="h5 font-weight-light">MANAGING DIRECTOR</span>
            </h4>
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-4">
          <img
            src="/certificate-footer.png"
            alt="Certificate Footer"
            className="w-100"
            style={{ height: "8rem" }}
          />
        </div>
      </div>
    </div>
  );
};

export default CertificatePage;
