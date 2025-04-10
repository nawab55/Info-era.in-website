import { Helmet } from "react-helmet";
import AOS from "aos";
import "../styles/Team.css";
import "aos/dist/aos.css";
import { useEffect } from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Reusable Team Member Card Component
const TeamMemberCard = ({
  imageSrc,
  name,
  position,
  description,
  linkedInLink, // Change twitterLink to linkedInLink
  facebookLink
}) => {
  return (
    <div className="team-card-container">
      <div className="team-card">
        <div className="team-image-wrapper">
          <img
            className="team-member-image"
            src={imageSrc}
            alt={`${name} - Team Member`}
          />
        </div>
        <p className="team-text name">{name}</p>
        <p className="team-text position">{position}</p>
        <p className="team-text description">{description}</p>
        <div className="team-social-icons">
          <a href={linkedInLink} target="_blank" rel="noopener noreferrer">
            <img
              className="linkedin-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
              alt="LinkedIn"
            />
          </a>
          <a href={facebookLink} target="_blank" rel="noopener noreferrer">
            <img
              className="facebook-icon"
              src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon-1.svg"
              alt="Facebook"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

TeamMemberCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  linkedInLink: PropTypes.string.isRequired, 
  facebookLink: PropTypes.string.isRequired
};

// Reusable Expert Card Component
const ExpertCard = ({ imageSrc, name, position, description, experience }) => {
  return (
    <div className="expert-card-container">
      <div className="expert-card">
        <div className="expert-image-wrapper">
          <img
            className="expert-image"
            src={imageSrc}
            alt={`${name} - Expert Instructor`}
          />
        </div>
        <p className="expert-text expert-name">{name}</p>
        <p className="expert-text expert-position">{position}</p>
        <p className="expert-text expert-description">{description}</p>
        <p className="expert-text expert-experience">{experience}</p>
      </div>
    </div>
  );
};

ExpertCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  experience: PropTypes.string.isRequired
};

function Team() {
  useEffect(() => {
    AOS.init();
  }, []);

  const teamMembers = [
    {
      imageSrc: "assets/teamSlider/shubhamSir.png",
      name: "Shubham Raj",
      position: "CMO of Info Era Software",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      linkedInLink: "https://www.linkedin.com", // Updated to LinkedIn link
      facebookLink: "https://www.facebook.com"
    },
    {
      imageSrc: "assets/teamSlider/anjaliKumariImg.png",
      name: "Anjali Kumari",
      position: "HR Manager",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      linkedInLink: "https://www.linkedin.com", // Updated to LinkedIn link
      facebookLink: "https://www.facebook.com"
    },
    {
      imageSrc: "assets/teamSlider/images/aman.png",
      name: "Aman Soben",
      position: "Software Developer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      linkedInLink: "https://www.linkedin.com", // Updated to LinkedIn link
      facebookLink: "https://www.facebook.com"
    },
    {
      imageSrc: "assets/teamSlider/images/rohitImg.jpg",
      name: "Rohit Kumar",
      position: "Digital Marketing Executive",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      linkedInLink: "https://www.linkedin.com", // Updated to LinkedIn link
      facebookLink: "https://www.facebook.com"
    },

    {
      imageSrc: "assets/teamSlider/images/kunalImg.jpeg",
      name: "Kishan Kunal",
      position: "Software Engineer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      linkedInLink: "https://www.linkedin.com", // Updated to LinkedIn link
      facebookLink: "https://www.facebook.com"
    },
    {
      imageSrc: "assets/teamSlider/images/HimanshuImg.jpg",
      name: "Himanshu Shekhar",
      position: "Software Engineer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      linkedInLink: "https://www.linkedin.com", // Updated to LinkedIn link
      facebookLink: "https://www.facebook.com"
    },
    {
      imageSrc: "assets/teamSlider/images/gauravverma.png",
      // imageSrc: "assets/teamSlider/images/gaurav.jpg",
      name: "Gaurav kumar",
      position: "Software Engineer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      linkedInLink: "https://www.linkedin.com", // Updated to LinkedIn link
      facebookLink: "https://www.facebook.com"
    },
    {
      imageSrc: "assets/teamSlider/images/samir.png",
      name: "Samir Ansari",
      position: "Software Developer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      linkedInLink: "https://www.linkedin.com", // Updated to LinkedIn link
      facebookLink: "https://www.facebook.com"
    },
    {
      // imageSrc: "assets/teamSlider/images/Md_Nawab.png",
      imageSrc: "assets/teamSlider/images/nawab-img.png",
      name: "Md Nawab",
      position: "Software Engineer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      linkedInLink: "https://www.linkedin.com", // Updated to LinkedIn link
      facebookLink: "https://www.facebook.com"
    },
    {
      imageSrc: "assets/teamSlider/images/ashish chandra.jpeg",
      name: "Ashish Chandra",
      position: "Software Developer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      linkedInLink: "https://www.linkedin.com", // Updated to LinkedIn link
      facebookLink: "https://www.facebook.com"
    },
    {
      imageSrc: "assets/teamSlider/images/ved prakash.jpeg",
      name: "Ved Prakash Pandey",
      position: "Software Developer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      linkedInLink: "https://www.linkedin.com", // Updated to LinkedIn link
      facebookLink: "https://www.facebook.com"
    }
  ];

  const eventImages = [
    "/assets/teamSlider/events/pic ok4.png",
    "/assets/teamSlider/events/IMG_9846.JPG",
    "/assets/teamSlider/events/R_6P0843 (2).JPG",
    "/assets/teamSlider/events/IMG_9821.JPG",
    "/assets/teamSlider/events/rrr (1).png",
    "/assets/teamSlider/events/IMG_9859 (1).JPG",
  ];

  const experts = [
    {
      imageSrc: "/assets/teamSlider/expert/Niraj_sir.png",
      name: "Niraj Vinod Sinha",
      position: "Mentor",
      description: "MBA, IT (IIM Calcutta)",
      experience: "More than 15+ years of Experience in IT Domain"
    },
    {
      imageSrc: "/assets/teamSlider/expert/Pkrao.png",
      name: "Mr. P. K. Rao",
      position: "Training & Placement Expert",
      description: "DSTTE-BIHAR",
      experience: "More than 15+ years of Experience"
    },
    {
      imageSrc: "assets/teamSlider/expert/Ambar_kumar.png",
      name: "Ambar Kumar",
      position: "Manager HR & IR",
      description: "MBA from BHU",
      experience: "More than 17+ years of Experience in Core Domain"
    },
    {
      imageSrc: "assets/teamSlider/expert/Ayush_dev.png",
      name: "Ayush Dev",
      position: "AI Engineer and Consultant",
      description: "BSc Artificial Intelligence & Physics, Virginia Tech USA",
      experience: "More than 5+ years of Experience"
    },
    {
      imageSrc: "assets/teamSlider/expert/Ridhima-madam.png",
      name: "Ridhima Srivastava",
      position: "Senior Advisor",
      description: "MBA- HR & IT",
      experience: "More than 15+ years of Experience in IT Domain"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Info Era Software Services Teams</title>
        <meta
          name="google-site-verification"
          content="KrFf109xrwKNRJTWVipUzNV7ZMCJn5vGEdhwxAWcuSg"
        />
        <meta
          name="Keywords"
          content="Info Era Teams, Era Teams, Teams, It Company, Website Designing Teams, Best Software Service Provider, Top Digital Platform Providers, Website Designing Company in Patna bihar, Gaurav Kumar Info Era, Rohit Kumar Info Era, Samir ansari info Era, CEO"
        />
        <meta
          name="Description"
          content="Our dedicated team at Info Era Software Services has been driving innovation since 2014, revolutionizing IT in Bihar, Odisha, and across India with passion and expertise."
        />
        <link
          rel="canonical"
          href="https://infoera.in/team"
          aria-label="Canonical - Info Era Software Services Pvt. Ltd."
        />
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
          content="Info Era Software Services Teams"
        />
        <meta
          name="copyright"
          content="Copyright (c) 2014 by Info Era Software Services Pvt. Ltd."
        />
      </Helmet>
      <div>
        {/* ======= Hero Banner Section ======= */}
        <section
          id="hero"
          className="hero-banner-section"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div className="hero-banner-content">
            <h1
              className="hero-banner-title"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              Meet Our Exceptional Team
            </h1>
            <p
              className="hero-banner-subtitle"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              Driving Innovation and Excellence Since 2014
            </p>
          </div>
        </section>
        {/* End Hero Banner */}

        {/* ======= Events Section ======= */}
        <section
          id="events"
          className="events-section"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="container">
            <h2
              className="events-title text-center mb-4"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              Our Memorable Events
            </h2>
            <p
              className="events-text text-center mb-5"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              We celebrate our journey with vibrant events that bring our team
              together, fostering creativity, collaboration, and fun. Here are
              some highlights from our memorable moments.
            </p>
            <div className="row g-4">
              {eventImages.map((src, index) => (
                <div
                  className="col-lg-4 col-md-6"
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  data-aos-duration="800"
                >
                  <div className="event-image-wrapper">
                    <img
                      src={src}
                      alt={`Event ${index + 1}`}
                      className="event-image img-fluid"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* End Events Section */}

        {/* ======= Our Team Section ======= */}
        <section
          id="our-team"
          className="our-team-section"
          data-aos="slide-up"
          data-aos-duration="1000"
        >
          <div className="team-container">
            <p className="team-head-text">Our Team</p>
            <div className="team-slider-container">
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={20}
                slidesPerView={4}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false
                }}
                speed={800}
                navigation={{
                  nextEl: ".team-swiper-button-next",
                  prevEl: ".team-swiper-button-prev"
                }}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  992: { slidesPerView: 3 },
                  1200: { slidesPerView: 4 }
                }}
              >
                {teamMembers.map((member, index) => (
                  <SwiperSlide key={index}>
                    <TeamMemberCard
                      imageSrc={member.imageSrc}
                      name={member.name}
                      position={member.position}
                      // description={member.description}
                      twitterLink={member.twitterLink}
                      facebookLink={member.facebookLink}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="team-swiper-button-prev">
                <ChevronLeft size={24} color="#012970" />
              </div>
              <div className="team-swiper-button-next">
                <ChevronRight size={24} color="#012970" />
              </div>
            </div>
          </div>
        </section>
        {/* End Our Team */}

        {/* ======= Our Expertise Section ======= */}
        <section
          id="expertise"
          className="expertise-section"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="expertise-outer-container">
            <p
              className="expertise-title"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              Meet Our Expert Instructors
            </p>
            <div className="expertise-slider-container">
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={20}
                slidesPerView={4}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false
                }}
                speed={800}
                navigation={{
                  nextEl: ".expert-swiper-button-next",
                  prevEl: ".expert-swiper-button-prev"
                }}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  992: { slidesPerView: 3 },
                  1200: { slidesPerView: 4 }
                }}
              >
                {experts.map((expert, index) => (
                  <SwiperSlide key={index}>
                    <ExpertCard
                      imageSrc={expert.imageSrc}
                      name={expert.name}
                      position={expert.position}
                      description={expert.description}
                      experience={expert.experience}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="expert-swiper-button-prev">
                <ChevronLeft size={24} color="#012970" />
              </div>
              <div className="expert-swiper-button-next">
                <ChevronRight size={24} color="#012970" />
              </div>
            </div>
          </div>
        </section>
        {/* End Our Expertise */}

        {/* Existing Sections */}
        <main id="main">
          <section
            id="features"
            className="features"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-6 order-md-2">
                  <img
                    src="assets/img/team-img.png"
                    className="img-fluid"
                    alt="Successfully - Info Era"
                  />
                </div>
                <div className="col-lg-6 mt-5 mt-lg-0 d-flex order-md-1">
                  <div className="row align-self-center gy-4">
                    <h3 style={{ color: "#012970", fontWeight: 700 }}>
                      Successfully Running Since 10 Years
                    </h3>
                    <p style={{ marginTop: 7, textAlign: "justify" }}>
                      We are an established company running successfully for 10
                      years with a great team of Web Developers, Marketing
                      Executives, Assistant Managers, and HR. In this journey of
                      rising power, we are spreading happiness by connecting
                      people to the digital world.
                    </p>
                    <p style={{ marginTop: 7, textAlign: "justify" }}>
                      We led our exponential growth in the past years by
                      connecting foreign clients into our business. We have
                      1000+ clients in India and across the globe. We are
                      growing, and people are growing with us.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default Team;
