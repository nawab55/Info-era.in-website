/* eslint-disable react/prop-types */
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const formatDate = (date) => {
  const options = { day: "2-digit", month: "2-digit", year: "numeric" };
  return new Date(date)
    .toLocaleDateString("en-GB", options)
    .replace(/\//g, "/");
};

const CertificatePage = ({ certificateData }) => {
  const printRef = useRef(null);
  const reactToPrintFn = useReactToPrint({ contentRef: printRef });

  const handlePrint = () => {
    printRef.current.style.height = "100vh";
    reactToPrintFn();
    printRef.current.style.height = "";
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ padding: "0px 5rem", flexDirection: "column" }}
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
        className="d-flex flex-column  justify-content-between"
        style={{ border: "1px solid gray", padding: "1rem", height: "auto" }}
      >
        {/* Header Image */}
        <div>
          <img
            src={"/certificate-header.png"}
            alt="Certificate Header"
            className="w-100"
            style={{ height: "16rem" }}
          />
        </div>

        {/* Main Content */}
        <div className="text-center" style={{ marginTop: "-3rem" }}>
          <div className="mb-4">
            <div className="d-flex justify-content-center mb-2">
              <img
                src={"/infoera.png"}
                alt="Company Logo"
                style={{ width: "20rem", height: "auto" }}
              />
            </div>
            <h4 className="mt-n3 display-6 font-weight-bold">
              Info Era Software Services Pvt. Ltd.
            </h4>
          </div>

          <div className="mb-4">
            <h1 className="display-4 font-weight-bold">CERTIFICATE</h1>
            <h2 className="display-6">OF COMPLETION</h2>
          </div>

          <div className="mb-4">
            <h3 className="display-6 font-weight-semibold">
              To Whom It May Concern
            </h3>
          </div>

          <div className="mb-4">
            <p className="fs-3">
              This is to certify that <b>{certificateData.studentName}</b>, a
              student of <b>{certificateData.course}</b> Final Year from{" "}
              <b>{certificateData.collegeName}</b>, has successfully completed
              their internship at <b>Info Era Software Services Pvt. Ltd.</b>{" "}
              Patna from <b>{formatDate(certificateData.fromDate)}</b> to{" "}
              <b>{formatDate(certificateData.toDate)}</b>.
            </p>
          </div>

          <div className="mb-4">
            <p className="fs-3">
              This work entitled <b>{certificateData.projectName}</b> done by{" "}
              <b>{certificateData.studentName}</b> was completed with excellent
              conduct and performance.
            </p>
          </div>

          <div className="mb-4">
            <p className="fs-3 font-italic">
              &quot;We wish him all the best in his future endeavors&quot;
            </p>
          </div>

          <div className="mt-5">
            <div className="d-flex justify-content-end">
              <div className="w-50 border-top pt-2 text-center">
                <h4 className="display-6">
                  RAHUL RAJ
                  <br />
                  <span className="h5 font-weight-light">
                    MANAGING DIRECTOR
                  </span>
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Image */}
        <div>
          <img
            src={"/certificate-footer.png"}
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
