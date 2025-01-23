import { Link } from "react-router-dom";
import "./temp.css";
import { Helmet } from "react-helmet";

function WebDesignBanner() {
  return (
    <>
    <Helmet>
      <title>Best MERN Stack Development Center in Patna Bihar</title>
      <meta name="keywords" content="Best MERN Stack Development Cources in Patna, Best Web Designing Treaning Center in Patna, It Treaning Center in Patna Bihar, Website Designing course in Patna, Top Treaning Company in Patna, IT Company, Website Designing"></meta>
      <meta name="discription" content="Join the best MERN Stack and Web Designing courses in Patna at the top IT training center. Learn from experts and build your career in web development today!"/>
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
        <meta name="document-classification" content="Web Designing Treaning Center Bihar" />
        <meta name="Distribution" content="Global" />
        <meta name="contactorganization" content="Info Era Software Services Private Limited"/>
        <meta name="contactstreetaddress" content="Jehanabad"/>
        <meta name="contactzipcode" content="800001"/>
        <meta name="contactcity" content="Patna"/>
        <meta name="contactcountry" content="India"/>
        <meta name="Geography" content="Patna, Bihar, India"/>
        <meta name="country" content="INDIA"/>
        <meta name="contactmobilenumber" content="+91 -7008411312"/>
        <meta name="Product" content="Inventory Management Software in Jehanabad, Billing & Invoicing Software in Jehanabad, Counter Billing Software in Jehanabad, GST Billing Software in Jehanabad, Retailing and POS Software in Jehanabad, Super Market Billing Software in Jehanabad, Customized Billing Software in Jehanabad, IT Software Solutions in Jehanabad Bihar"/>
        <meta name="copyright" content="Copyright (c) 2014 by Info Era Software Services Pvt. Ltd."></meta>
        <meta name="Publisher" content="Info Era Software Services pvt.Ltd. " />
    </Helmet>
        <div className="web-design-banner">
      {/* Image Section */}
      <img src="assets/img/web-design-course.jpg" alt="Web Design Course" title="Web Design Course-Info Era Software Services" />

      {/* Content Section */}
      <div className="web-design-content">
        <h2 className="banner-heading">Web Design Course by Info Era</h2>
        <p>
          At <strong>Info Era Software Services Pvt. Ltd</strong>, we are
          committed to equipping individuals with the latest skills in web
          design to thrive in the modern digital landscape. Our{" "}
          <strong>Web Design Course</strong> is meticulously designed to provide
          both beginners and professionals with the tools and knowledge needed
          to create stunning, responsive, and user-friendly websites.
        </p>
        <p>
          Through this course, participants will learn essential skills,
          including <strong>HTML</strong>, <strong>CSS</strong>,{" "}
          <strong>JAVASCRIPT</strong>, <strong>JQUERY</strong>,{" "}
          <strong>AJAX</strong>, <strong>PHOTOSHOP</strong> and design
          principles that emphasize creativity and functionality. Our
          experienced instructors ensure hands-on training, allowing learners to
          work on real-world projects and build portfolios that showcase their
          talent.
        </p>
        <p>
          Join Info Era Software Services and step into a rewarding career in
          web design. Whether you&apos;re looking to start a new journey or
          enhance your existing skills, this course is tailored to meet your
          aspirations.
        </p>
        {/* <div className="course-btn">
          <a className="btn-get-started" href="/web-design-course">
            <span>Register Now</span>
            <i className="bi bi-arrow-right mx-2"></i>
          </a>
        </div> */}
        <div className="text-center text-lg-start">
          <Link
            to="/web-design-course"
            className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
          >
            <span>Register Now</span>
            <i className="bi bi-arrow-right ml-2 " />
          </Link>
        </div>
      </div>
    </div>
    </>
    
  );
}

export default WebDesignBanner;
