import { useEffect, useState } from "react";
import "./AssessmentTest.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useTimer } from "react-timer-hook"; // For persistent timer
import { useNavigate } from "react-router-dom";
import { FaUser, FaPhone } from "react-icons/fa";

const AssessmentTest = () => {
  const [studentDetails, setStudentDetails] = useState({
    name: "",
    mobile: ""
  });
  const [questionsByType, setQuestionsByType] = useState([]);
  const [answers, setAnswers] = useState({}); // Store answers with question IDs
  const [currentTypeIndex, setCurrentTypeIndex] = useState(0); // For pagination
  const [isSubmitted, setIsSubmitted] = useState(false); // Track submission status
  const [redirectTimer, setRedirectTimer] = useState(5); // Timer for redirect

  const navigate = useNavigate();

   // Handle auto-submit when time expires
   const handleAutoSubmit = () => {
    if (!isSubmitted) {
      submitAnswers();
      toast.warning("Time is up! The assessment has been submitted automatically.");
    }
  };

  // Initialize the timer with a deadline saved in localStorage or a default value
  const timerDeadline = new Date(
    parseInt(localStorage.getItem("assessmentDeadline") || Date.now() + 60 * 60 * 1000)
  );

  const { seconds, minutes, hours, restart } = useTimer({
    expiryTimestamp: timerDeadline,
    onExpire: handleAutoSubmit
  });

  // Fetch student details from cookies and questions
  useEffect(() => {
    const fetchStudentDetails = async () => {
      try {
        const { data } = await axios.get(
          `${
            import.meta.env.VITE_REACT_APP_BACKEND_BASEURL
          }/api/assessment/student-details/get-student-cookies`,
          { withCredentials: true }
        );
        const response = data?.data;
        // console.log("Student Details:", response);
        setStudentDetails({ name: response?.name, mobile: response?.mobile });
        if (response?.course) {
          fetchCourseData(response?.course);
        } else {
          toast.error("Course not found in student details.");
        }
      } catch (error) {
        toast.error(
          error.response?.data?.message || "Failed to fetch student details."
        );
        console.error(error);
      }
    };

    const fetchCourseData = async (courseName) => {
      try {
        const { data } = await axios.get(
          `${
            import.meta.env.VITE_REACT_APP_BACKEND_BASEURL
          }/api/assessment/course/${courseName}`,
          { withCredentials: true }
        );
        // console.log("Course Data:", data);
        const course = data?.course;
        if (course?.background) {
          fetchQuestions(course?.background);
        } else {
          toast.error("Background not found for the course.");
        }
      } catch (error) {
        toast.error("Failed to fetch course data.");
        console.error(error);
      }
    };

    const fetchQuestions = async (background) => {
      try {
        const { data } = await axios.get(
          `${
            import.meta.env.VITE_REACT_APP_BACKEND_BASEURL
          }/api/assessment/question/background`,
          { params: { background }, withCredentials: true }
        );
        console.log("Questions Data:", data.questionsByType);
        setQuestionsByType(data.questionsByType);
      } catch (error) {
        toast.error("Failed to fetch questions.");
        console.error(error);
      }
    };

     // Save the deadline to localStorage if not already set
     if (!localStorage.getItem("assessmentDeadline")) {
      const newDeadline = Date.now() + 60 * 60 * 1000; // 60 minutes
      localStorage.setItem("assessmentDeadline", newDeadline.toString());
      restart(new Date(newDeadline));
    }

    fetchStudentDetails();
    // fetchCourseData(courseData);
    // fetchQuestions(backgroundData);
  }, [restart]);

  // Handle answer selection
  const handleAnswerChange = (questionId, key) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: key  // Store the key (A, B, C, or D)
    }));
  };

  const handleNext = () => {
    if (currentTypeIndex < questionsByType.length - 1) {
      setCurrentTypeIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentTypeIndex > 0) {
      setCurrentTypeIndex((prevIndex) => prevIndex - 1);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    submitAnswers();
  };

  const submitAnswers = async () => {
    if (isSubmitted) return; // Prevent duplicate submissions
    const responses = questionsByType.flatMap((type) =>
      type.questions.map((question) => ({
        questionTypeId: type._id, // Associate the questionTypeId
        questionId: question._id,
        selectedOption: answers[question._id], // Store the selected option
      }))
    );
    const payload = {
      studentDetails,
      responses, // Updated to include questionTypeId and questionId for each question
    };
    // const payload = {
    //   studentDetails,
    //   questionTypeId: questionsByType[currentTypeIndex]?._id, // Question type ID
    //   answers,
    // };
    try {
      console.log(payload);
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/assessment-test/submit-test`,
        payload,
        { withCredentials: true }
      );
      setIsSubmitted(true);
      toast.success("Assessment submitted successfully!");
      console.log(response.data);
      localStorage.removeItem("assessmentDeadline"); // Clear the timer on submission
      // Start redirect timer
      const interval = setInterval(() => {
        setRedirectTimer((prev) => {
          if (prev === 1) {
            clearInterval(interval);
            navigate("/");
          }
          return prev - 1;
        });
      }, 1000);
    } catch (error) {
      toast.error("Failed to submit assessment. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="container exam-form mt-5 p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3>Assessment Test</h3>
        {!isSubmitted && (
          <div className="timer">
            <strong>
              Time Left: {hours.toString().padStart(2, "0")}:
              {minutes.toString().padStart(2, "0")}:
              {seconds.toString().padStart(2, "0")}
            </strong>
          </div>
        )}
      </div>
      {isSubmitted ? (
        <div className="thank-you-message text-center">
          <h4>Thank you for completing the assessment!</h4>
          <p>Redirecting to the home page in {redirectTimer} seconds...</p>
        </div>
      ) : (
        <>
          <div className="student-details mb-5">
            <p>
              <FaUser className="icon" /> <strong>{studentDetails.name}</strong>
              <span> | </span>
              <FaPhone className="icon" /> <strong>{studentDetails.mobile}</strong>
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            {questionsByType.length > 0 && (
              <div>
                <h4 className="mb-4 text-secondary">
                  {questionsByType[currentTypeIndex]?.questionType} Questions
                </h4>
                {questionsByType[currentTypeIndex]?.questions.map((question) => (
                  <div key={question._id} className="card mb-3">
                    <div className="card-body">
                      <h5>{question.question}</h5>
                      <div>
                        {Object.entries(question.options).map(([key, value]) => (
                          <div
                            key={key}
                            className={`form-check ${
                              answers[question._id] === key ? "selected-answer" : ""
                            }`}
                          >
                            <label htmlFor={`${question._id}-${key}`} className="form-check-label">
                              <input
                                type="radio"
                                id={`${question._id}-${key}`}
                                name={question._id}
                                value={key}
                                className="form-check-input"
                                onChange={() => handleAnswerChange(question._id, key)}
                                checked={answers[question._id] === key}
                                required
                              />
                               {value}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className="d-flex justify-content-between mt-4">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handlePrevious}
                disabled={currentTypeIndex === 0}
              >
                Previous
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleNext}
                disabled={currentTypeIndex === questionsByType.length - 1}
              >
                Next
              </button>
            </div>
            {currentTypeIndex === questionsByType.length - 1 && (
              <div className="text-center mt-4">
                <button type="submit" className=" btn-submit">
                  Submit Assessment
                </button>
              </div>
            )}
          </form>
        </>
      )}
    </div>
  );
};

export default AssessmentTest;




// <div className="container mt-5 p-4 bg-light border rounded">
    //   <div className="d-flex justify-content-between align-items-center mb-4">
    //   <h3 className="fs-1">Assessment Test</h3>
    //     <div className="timer bg-warning text-dark px-3 py-2 rounded">
    //     <strong>
    //         Time Left: {hours.toString().padStart(2, "0")}:
    //         {minutes.toString().padStart(2, "0")}:
    //         {seconds.toString().padStart(2, "0")}
    //       </strong>
    //     </div>
    //   </div>
    //   <div className="text-center mb-5">
    //     <p>
    //       <strong>{studentDetails.name}</strong> | Mobile:{" "}
    //       <strong>{studentDetails.mobile}</strong>
    //     </p>
    //   </div>
    //   <form onSubmit={handleSubmit}>
    //     {questionsByType.length > 0 && (
    //       <div>
    //         <h4 className="mb-4 text-secondary">
    //           {questionsByType[currentTypeIndex]?.questionType} Questions
    //         </h4>
    //         {questionsByType[currentTypeIndex]?.questions.map((question) => (
    //           <div key={question._id} className="card mb-3 border rounded">
    //             <div className="card-body">
    //               <h5 className="card-title">{question.question}</h5>
    //               <div>
    //                 {Object.entries(question.options).map(([key, option]) => (
    //                   <div key={key} className={`form-check ${
    //                     answers[question._id] === option
    //                       ? "selected-answer"
    //                       : ""
    //                   }`}>
    //                     <input
    //                       type="radio"
    //                       id={`${question._id}-${key}`}
    //                       name={question._id}
    //                       value={option}
    //                       className="form-check-input"
    //                       onChange={() =>
    //                         handleAnswerChange(question._id, option)
    //                       }
    //                       checked={answers[question._id] === option}
    //                       required
    //                     />
    //                     <label
    //                       htmlFor={`${question._id}-${key}`}
    //                       className="form-check-label"
    //                     >
    //                       {option}
    //                     </label>
    //                   </div>
    //                 ))}
    //               </div>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     )}

    //     <div className="d-flex justify-content-between mt-4">
    //       <button
    //         type="button"
    //         className="btn btn-secondary"
    //         onClick={handlePrevious}
    //         disabled={currentTypeIndex === 0}
    //       >
    //         Previous
    //       </button>
    //       <button
    //         type="button"
    //         className="btn btn-primary"
    //         onClick={handleNext}
    //         disabled={currentTypeIndex === questionsByType.length - 1}
    //       >
    //         Next
    //       </button>
    //     </div>

    //     {currentTypeIndex === questionsByType.length - 1 && (
    //       <div className="text-center mt-4">
    //         <button type="submit" className="btn btn-success btn-lg">
    //           Submit Assessment
    //         </button>
    //       </div>
    //     )}
    //   </form>
    // </div>
