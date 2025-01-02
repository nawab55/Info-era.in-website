import { Link } from "react-router-dom";
import "./webdev.css";

function WebDevelopmentBanner() {
  return (
    <div className="container-fluid py-5 mx-auto web-development-banner">
      <div className="row align-items-center banner-section">
        {/* Image Section */}
        <div className="col-lg-6 col-md-12 text-center mb-4 mb-lg-0 banner-img-section">
          <img
            src="assets/img/course/mernStackDevelopmentCourse.jpg"
            alt="MERN Stack Workshop"
            className="img-fluid"
          />
        </div>

        {/* Content Section */}
        <div className="col-lg-6 col-md-12 px-4 content-section-webdev">
          <h2 className="banner-heading ">
            MERN STACK Online Workshop
          </h2>
          <p className="workshop-tagline text-muted">
            🌟 Transform Your Web Development Skills! 🌟
          </p>
          <h3>🚀 Workshop Overview:</h3>
          <p>
            Join our immersive MERN Stack Online Workshop and master one of the
            most in-demand tech stacks in web development! Learn to build
            dynamic, scalable, and responsive web applications using MongoDB,
            Express.js, React.js, and Node.js.
          </p>
          <h3>📅 Date & Time:</h3>
          <p>
            🗓️ 20th January to 27th January <br />
            ⏰ 5 PM to 7 PM ONLINE
          </p>
          <h3>👩‍💻 What You&apos;ll Learn:</h3>
          <ul>
            <li>• MongoDB: Database design, CRUD operations, and schema creation.</li>
            <li>• Express.js: Building robust back-end APIs and middleware.</li>
            <li>• React.js: Crafting stunning, responsive, and dynamic user interfaces.</li>
            <li>• Node.js: Server-side scripting and integrating back-end with front-end.</li>
            <li>• Full-stack integration to build a complete web application.</li>
          </ul>

          {/* Register Now Button */}
          <div className="text-center text-lg-start">
            <Link
              to="/mern-stack-workshop"
              className="btn-get-started d-inline-flex align-items-center justify-content-center"
            >
              <span>Register Now</span>
              <i className="bi bi-arrow-right ms-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebDevelopmentBanner;
