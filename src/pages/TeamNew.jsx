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
  twitterLink,
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
          <a href={twitterLink} target="_blank" rel="noopener noreferrer">
            <img
              className="twitter-icon"
              src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon.svg"
              alt="Twitter"
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
  twitterLink: PropTypes.string.isRequired,
  facebookLink: PropTypes.string.isRequired
};

// Reusable Expert Card Component
const ExpertCard = ({
  imageSrc,
  name,
  position,
  twitterLink,
  facebookLink,
  instagramLink,
  emailLink
}) => {
  return (
    <div
      className="expert-card-container"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
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
        <div className="expert-social-links">
          <a href={twitterLink} target="_blank" rel="noopener noreferrer">
            <img
              src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg"
              alt="Twitter"
            />
          </a>
          <a href={facebookLink} target="_blank" rel="noopener noreferrer">
            <img
              src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg"
              alt="Facebook"
            />
          </a>
          <a href={instagramLink} target="_blank" rel="noopener noreferrer">
            <img
              src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg"
              alt="Instagram"
            />
          </a>
          <a href={emailLink} target="_blank" rel="noopener noreferrer">
            <img
              src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg"
              alt="Email"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

ExpertCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  twitterLink: PropTypes.string.isRequired,
  facebookLink: PropTypes.string.isRequired,
  instagramLink: PropTypes.string.isRequired,
  emailLink: PropTypes.string.isRequired
};

function Team() {
  useEffect(() => {
    AOS.init();
  }, []);

  const teamMembers = [
    {
      imageSrc:
        "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png",
      name: "Davis George",
      position: "CEO",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      twitterLink: "https://www.twitter.com",
      facebookLink: "https://www.facebook.com"
    },
    {
      imageSrc:
        "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert2.png",
      name: "Davis George",
      position: "CEO",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      twitterLink: "https://www.twitter.com",
      facebookLink: "https://www.facebook.com"
    },
    {
      imageSrc:
        "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET7.14.png",
      name: "Davis George",
      position: "CEO",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      twitterLink: "https://www.twitter.com",
      facebookLink: "https://www.facebook.com"
    },
    {
      imageSrc:
        "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET7.15.png",
      name: "Davis George",
      position: "CEO",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      twitterLink: "https://www.twitter.com",
      facebookLink: "https://www.facebook.com"
    },
    {
      imageSrc:
        "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert2.png",
      name: "Davis George",
      position: "CEO",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      twitterLink: "https://www.twitter.com",
      facebookLink: "https://www.facebook.com"
    }
  ];

  const eventImages = [
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1561489396-888724a1543d?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
  ];

  const experts = [
    {
      imageSrc:
        "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png",
      name: "Maxwell Doe",
      position: "Instructor",
      twitterLink: "http://www.twitter.com/",
      facebookLink: "http://www.facebook.com/",
      instagramLink: "http://www.instagram.com/",
      emailLink: "mailto:maxwell@example.com"
    },
    {
      imageSrc:
        "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert2.png",
      name: "Maxwell Doe",
      position: "Instructor",
      twitterLink: "http://www.twitter.com/",
      facebookLink: "http://www.facebook.com/",
      instagramLink: "http://www.instagram.com/",
      emailLink: "mailto:maxwell@example.com"
    },
    {
      imageSrc:
        "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png",
      name: "Maxwell Doe",
      position: "Instructor",
      twitterLink: "http://www.twitter.com/",
      facebookLink: "http://www.facebook.com/",
      instagramLink: "http://www.instagram.com/",
      emailLink: "mailto:maxwell@example.com"
    },
    {
      imageSrc:
        "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert2.png",
      name: "Maxwell Doe",
      position: "Instructor",
      twitterLink: "http://www.twitter.com/",
      facebookLink: "http://www.facebook.com/",
      instagramLink: "http://www.instagram.com/",
      emailLink: "mailto:maxwell@example.com"
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
                  delay: 3000, // 3 seconds delay between slides
                  disableOnInteraction: false
                }}
                speed={800} // Smooth sliding speed
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
                      description={member.description}
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
            <div className="expertise-inner-container">
              <p
                className="expertise-title"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                Meet Our Expert Instructors
              </p>
              <p
                className="expertise-subtitle"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="expertise-grid">
                {experts.map((expert, index) => (
                  <ExpertCard
                    key={index}
                    imageSrc={expert.imageSrc}
                    name={expert.name}
                    position={expert.position}
                    twitterLink={expert.twitterLink}
                    facebookLink={expert.facebookLink}
                    instagramLink={expert.instagramLink}
                    emailLink={expert.emailLink}
                  />
                ))}
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
