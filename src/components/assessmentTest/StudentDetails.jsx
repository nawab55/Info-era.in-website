import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const StudentDetails = () => {
  const [student, setStudent] = useState({ 
    name: "", 
    email: "",
    mobile: "", 
    course: ""
  });
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  // Fetch courses on component mount
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/assessment/course`,
          { withCredentials: true}
        );
        setCourses(response.data);
      } catch (error) {
        // toast.error("Failed to fetch courses. Please try again.");
        console.error(error);
      }
    };

    fetchCourses();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/assessment/student-details/add`,
        student,
        { withCredentials: true}
      );
      console.log(response.data)
      // toast.success("Details saved successfully!");
      navigate("/assessment-test");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to save details. Please try again.");
      console.error(error);
    }
  };

  return (
    <section className="mt-5" >
      <div className="container my-5">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title text-center mb-4">Student Details</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={student.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={student.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="mobile" className="form-label">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="mobile"
                  name="mobile"
                  value={student.mobile}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="course" className="form-label">
                  Select Course
                </label>
                <select
                  className="form-control"
                  id="course"
                  name="course"
                  value={student.course}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select a course...
                  </option>
                  {courses.map((course) => (
                    <option key={course._id} value={course.name}>
                      {course.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary">
                  Proceed to Assessment Test
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentDetails;
