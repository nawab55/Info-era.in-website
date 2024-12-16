import { useState } from "react";
import CertificatePage from "../components/CertificatePage";
import toast from "react-hot-toast";

function Certificate() {
  const [regNo, setRegNo] = useState("");
  const [certificateData, setCertificateData] = useState("");
  const [studentData, setStudentData] = useState("");

  async function getCertificate(e) {
    e.preventDefault();
    try {
      const encodedRegNo = encodeURIComponent(regNo); // Encode the regNo
      const res = await fetch(
        `${
          import.meta.env.VITE_REACT_APP_BACKEND_BASEURL
        }/api/certificate/get-by-regno/${encodedRegNo}`
      );

      const data = await res.json();
      setCertificateData(data.data);
      const studentRes = await fetch(
        `${
          import.meta.env.VITE_REACT_APP_BACKEND_BASEURL
        }/api/student/get-student/${encodedRegNo}`
      );
      const studentData = await studentRes.json();
      setStudentData(studentData.student);
      toast.success("Certificate found successfully!");
    } catch (error) {
      toast.error("Certificate not Found for this Registration Number.");
      console.error("Error fetching certificate", error);
      setCertificateData(null);
    }
  }

  return (
    <div style={{ minHeight: "100vh" }}>
      <section>
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
            <div className="col-lg-12 d-flex flex-column justify-content-center bg">
              <h3 style={{ color: "#0c219a", fontWeight: 700, fontSize: 50 }}>
                Certificate
                <span style={{ color: "orange" }} />
              </h3>
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
                      htmlFor="ContentPlaceHolder1_txtReg"
                      className="form-label fw-bold"
                    >
                      Registration No
                    </label>
                    <input
                      name="ctl00$ContentPlaceHolder1$txtReg"
                      type="text"
                      value={regNo}
                      onChange={(e) => setRegNo(e.target.value)}
                      id="ContentPlaceHolder1_txtReg"
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

      {certificateData && (
        <CertificatePage
          certificateData={certificateData}
          studentData={studentData}
        />
      )}

      <div className="container-fluid" style={{ marginTop: 40 }}>
        <div className="container">&nbsp;</div>
      </div>
      {/* End Footer */}
    </div>
  );
}

export default Certificate;
