import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const AssessmentTest = () => {
  const [studentDetails, setStudentDetails] = useState({
    name: "",
    mobile: ""
  });
  const [questionsByType, setQuestionsByType] = useState([]);
  const [answers, setAnswers] = useState({}); // Store answers with question IDs
  const [currentTypeIndex, setCurrentTypeIndex] = useState(0); // For pagination
  const [timeLeft, setTimeLeft] = useState(60 * 60); // 60 minutes in seconds
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
        console.log("Student Details:", response);
        setStudentDetails({
          name: response?.name,
          mobile: response?.mobile
        });
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
      console.log(courseName);
      try {
        const { data } = await axios.get(
          `${
            import.meta.env.VITE_REACT_APP_BACKEND_BASEURL
          }/api/assessment/course/${courseName}`,
          { withCredentials: true }
        );
        console.log("Course Data:", data);
        const course = data?.course;
        // setBackground(course?.background);
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

    fetchStudentDetails();
  }, []);

  // Timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          handleAutoSubmit(); // Auto-submit when time runs out
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handle answer selection
  const handleAnswerChange = (questionId, option) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: option
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

  const handleAutoSubmit = () => {
    submitAnswers();
  };

  const submitAnswers = async () => {
    const payload = {
      studentDetails,
      answers
    };
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/assessment-test/submit-test`,
        payload,
        { withCredentials: true }
      );
      toast.success("Assessment submitted successfully!");
      console.log(response.data);
    } catch (error) {
      toast.error("Failed to submit assessment. Please try again.");
      console.error(error);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  // // Render questions dynamically
  // const renderQuestions = () =>
  //   questionsByType.map((type) => (
  //     <div key={type.questionType} className="mb-4">
  //       <h4 className="">{type.questionType} Questions</h4>
  //       {type.questions.map((question) => (
  //         <div key={question._id} className="card mb-3 border rounded">
  //           <div className="card-body">
  //             <h5 className="card-title">{question.question}</h5>
  //             <div>
  //               {Object.entries(question.options).map(([key, option]) => (
  //                 <div key={key} className="form-check">
  //                   <input
  //                     type="radio"
  //                     id={`${question._id}-${key}`}
  //                     name={question._id}
  //                     value={option}
  //                     className="form-check-input"  
  //                     onChange={() => handleAnswerChange(question._id, option)}
  //                     required 
  //                   />
  //                   <label
  //                     htmlFor={`${question._id}-${key}`}
  //                     className="form-check-label"
  //                   >
  //                     {option}
  //                   </label>
  //                 </div>
  //               ))}
  //             </div>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   ));

  return (
    <div className="container mt-5 p-4 bg-light border rounded">
      <div className="d-flex justify-content-between align-items-center mb-4">
      <h3 className="fs-1">Assessment Test</h3>
        <div className="timer bg-warning text-dark px-3 py-2 rounded">
          <strong>Time Left: {formatTime(timeLeft)}</strong>
        </div>
      </div>
      <div className="text-center mb-5">
        <p>
          <strong>{studentDetails.name}</strong> | Mobile:{" "}
          <strong>{studentDetails.mobile}</strong>
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        {questionsByType.length > 0 && (
          <div>
            <h4 className="mb-4 text-secondary">
              {questionsByType[currentTypeIndex]?.questionType} Questions
            </h4>
            {questionsByType[currentTypeIndex]?.questions.map((question) => (
              <div key={question._id} className="card mb-3 border rounded">
                <div className="card-body">
                  <h5 className="card-title">{question.question}</h5>
                  <div>
                    {Object.entries(question.options).map(([key, option]) => (
                      <div key={key} className="form-check">
                        <input
                          type="radio"
                          id={`${question._id}-${key}`}
                          name={question._id}
                          value={option}
                          className="form-check-input"
                          onChange={() =>
                            handleAnswerChange(question._id, option)
                          }
                          required
                        />
                        <label
                          htmlFor={`${question._id}-${key}`}
                          className="form-check-label"
                        >
                          {option}
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
            <button type="submit" className="btn btn-success btn-lg">
              Submit Assessment
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default AssessmentTest;
