import "./temp.css";

function WebDesignBanner() {
  return (
    <div className="web-design-banner">
      {/* Image Section */}
      <img src="assets/img/web-design-course.jpg" alt="Web Design Course" />

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
        <div className="course-btn">
          <a className="btn-get-started" href="/web-design-course">
            <span>Register Now</span>
            <i className="bi bi-arrow-right mx-2"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default WebDesignBanner;
