import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Spinner from "../components/loader/Spinner";
import toast from "react-hot-toast";
import axios from "axios";

function JobsViewDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [job, setJob] = useState(state?.job || null);
  const [isLoading, setIsLoading] = useState(!state?.job); // Only show loading if job is not in state

  useEffect(() => {
    // Fetch job details only if job is not available in state
    if (!job) {
      const fetchJobDetails = async () => {
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/jobs/${
              state?.job?._id
            }`
          );
          if (response.data?.job) {
            setJob(response.data.job);
          } else {
            toast.error("Job details not found.");
            navigate(-1); // Redirect to the previous page
          }
        } catch (error) {
          toast.error("Error fetching job details.");
          console.error(error);
          navigate(-1); // Redirect on error
        } finally {
          setIsLoading(false);
        }
      };

      fetchJobDetails();
    } else {
      setIsLoading(false); // Data already available
    }
  }, [job, navigate, state?.job]);

  if (isLoading) {
    return <Spinner />;
  }

  if (!job) {
    return <p>Job details not found.</p>;
  }
  return (
    <>
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
            <h3 style={{ color: "#0c219a", fontWeight: 700 }}>Latest Jobs</h3>
            <div className="col-lg-12 col-md-12 mb-3">
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
                      <span id="ContentPlaceHolder1_lblTitle">
                        {job.jobTitle}
                      </span>
                    </strong>
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    <span id="ContentPlaceHolder1_Label1">
                      {job.experience}
                    </span>
                  </h6>
                  <p className="card-text">
                    <span id="ContentPlaceHolder1_Label2">
                      {job.description}
                    </span>
                  </p>
                </div>
              </div>
              <button
                onClick={() => navigate(-1)}
                className="card-link btn btn-primary btn-sm"
                style={{
                  marginTop: "20px", // Adds margin from the top
                  padding: "10px 20px", // Adds padding inside the button (Y: 10px, X: 20px)
                  width: "fit-content", // Adjusts width based on content
                  fontSize: "14px", // Ensures text is readable
                  fontWeight: "600", // Slightly bold text
                  borderRadius: "8px", // Adds rounded corners
                  backgroundColor: "#4154f1", // Custom color matching your theme
                  border: "none", // Removes border
                  color: "white", // White text for contrast
                  cursor: "pointer", // Changes the cursor on hover
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px", // Subtle shadow for depth
                  transition: "background-color 0.3s ease" // Smooth hover effect
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#3b4ec9")
                } // Darkens color on hover
                onMouseOut={(e) => (e.target.style.backgroundColor = "#4154f1")} // Resets color on hover out
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default JobsViewDetails;
