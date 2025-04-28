/* eslint-disable react/prop-types */



import "./webdev.css";
import { Helmet } from "react-helmet";

function SummerInternshipTraining({ onRegisterNow }) {
  return (
    <>
      <Helmet>
        <title>Best MERN Stack Development Center in Patna Bihar</title>
        <meta
          name="keywords"
          content="Best MERN Stack Development Cources in Patna, Best Web Designing Treaning Center in Patna, It Treaning Center in Patna Bihar, Website Designing course in Patna, Top Treaning Company in Patna, IT Company, Website Designing"
        ></meta>
        <meta
          name="discription"
          content="Join the best MERN Stack and Web Designing courses in Patna at the top IT training center. Learn from experts and build your career in web development today!"
        />
        <link rel="canonical" href="" />
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
          content="Web Designing Treaning Center Bihar"
        />
        <meta name="Distribution" content="Global" />
        <meta
          name="contactorganization"
          content="Info Era Software Services Private Limited"
        />
        <meta name="contactstreetaddress" content="Patna" />
        <meta name="contactzipcode" content="800001" />
        <meta name="contactcity" content="Patna" />
        <meta name="contactcountry" content="India" />
        <meta name="Geography" content="Patna, Bihar, India" />
        <meta name="country" content="INDIA" />
        <meta name="contactmobilenumber" content="+91 -7008411312" />
        <meta
          name="Product"
          content="Inventory Management Software in Jehanabad, Billing & Invoicing Software in Jehanabad, Counter Billing Software in Jehanabad, GST Billing Software in Jehanabad, Retailing and POS Software in Jehanabad, Super Market Billing Software in Jehanabad, Customized Billing Software in Jehanabad, IT Software Solutions in Jehanabad Bihar"
        />
        <meta
          name="copyright"
          content="Copyright (c) 2014 by Info Era Software Services Pvt. Ltd."
        ></meta>
        <meta name="Publisher" content="Info Era Software Services pvt.Ltd. " />
      </Helmet>

      <div className="container-fluid py-5 mx-auto web-development-banner">
        <div className="row align-items-center banner-section">
          {/* Image Section */}
          <div className="col-lg-6 col-md-12 text-center mb-4 mb-lg-0 banner-img-section">
            <img
              src="assets/img/course/SummerInternship-training.jpeg"
              alt="Summer Internship Training"
              title="Summer Internship Training - Info Era Software Services"
              className="img-fluid"
            />
            ;
          </div>

          {/* Content Section */}
          <div className="col-lg-6 col-md-12 px-4 content-section-webdev">
            <h2 className="banner-heading ">Full STACK Online Workshop</h2>
            <p className="workshop-tagline text-muted">
              🌟 Transform Your Web Development Skills! 🌟
            </p>
            <h3>🚀 Workshop Overview:</h3>
            <p>
              This 45-day intensive training program is designed to equip
              aspiring developers with the essential skills of Full Stack Web
              Development. Participants will learn to build dynamic, responsive,
              and professional web applications from scratch using
              industry-standard tools and technologies.
            </p>
            <h3>📅 Date & Time:</h3>
            <p>
              🗓️ Start Date: 5 May 2025 <br /> ⏰ Daily Time: 2 Hours Live
              Sessions + Practical Assignments
            </p>
            <h3>👩‍💻 What You&apos;ll Learn:</h3>
            <ul>
              <li>
                • HTML5, CSS3, Responsive Design (Flexbox, Grid, Media Queries)
                JavaScript ES6+, DOM Manipulation
              </li>
              <li>• React.js (Components, Props, State, Hooks, Routing)</li>
              <li>• Node.js (Server-Side Scripting)</li>
              <li>• Express.js (Routing, Middleware, REST API Development)</li>
              <li>• MongoDB (CRUD Operations, Mongoose ORM)</li>
              <li>
                • Full Stack Projects (Task Manager / E-commerce Mini App)
                Internship Certificate.
              </li>
            </ul>

            {/* Register Now Button */}
            <div className="text-center text-lg-start">
              <button
                onClick={onRegisterNow}
                className="btn-get-started d-inline-flex align-items-center justify-content-center"
              >
                <span>Register Now</span>
                <i className="bi bi-arrow-right ms-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SummerInternshipTraining;
