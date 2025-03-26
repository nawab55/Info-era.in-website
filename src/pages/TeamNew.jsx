import TeamSlider from "../components/TeamSlider";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "../styles/Team.css";
import "aos/dist/aos.css";
import { useEffect } from "react";
import PropTypes from "prop-types";

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
    <div
      className="team-card-container"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
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

        {/* ======= Our Team Section ======= */}
        <section
          id="our-team"
          className="our-team-section"
          data-aos="slide-up"
          data-aos-duration="1000"
        >
          <div className="team-container">
            <p className="team-head-text">Our Team</p>
            <div className="team-responsive-container">
              {teamMembers.map((member, index) => (
                <TeamMemberCard
                  key={index}
                  imageSrc={member.imageSrc}
                  name={member.name}
                  position={member.position}
                  description={member.description}
                  twitterLink={member.twitterLink}
                  facebookLink={member.facebookLink}
                />
              ))}
            </div>
          </div>
        </section>
        {/* End Our Team */}

        {/* Existing Sections */}
        <div
          className="container mt-5"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="row">{/* Existing team cards */}</div>
        </div>

        <div className="mt-4 w-100 mx-auto d-flex justify-content-center">
          <div className="d-flex flex-column align-items-center gap-3 w-100">
            <TeamSlider />
          </div>
        </div>

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

// import TeamSlider from "../components/TeamSlider";
// import { Helmet } from "react-helmet";
// import AOS from "aos";
// import "../styles/Team.css";
// import "aos/dist/aos.css";
// import { useEffect } from "react";
// import PropTypes from "prop-types";

// // Reusable Team Member Card Component
// const TeamMemberCard = ({
//   imageSrc,
//   name,
//   position,
//   description,
//   twitterLink,
//   facebookLink
// }) => {
//   return (
//     <div
//       className="team-card-container"
//       data-aos="fade-up"
//       data-aos-duration="1000"
//     >
//       <div className="team-card">
//         <div className="team-image-wrapper">
//           <img
//             className="team-member-image"
//             src={imageSrc}
//             alt={`${name} - Team Member`}
//           />
//         </div>
//         <p className="team-text name">{name}</p>
//         <p className="team-text position">{position}</p>
//         <p className="team-text description">{description}</p>
//         <div className="team-social-icons">
//           <a href={twitterLink} target="_blank" rel="noopener noreferrer">
//             <img
//               className="twitter-icon"
//               src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon.svg"
//               alt="Twitter"
//             />
//           </a>
//           <a href={facebookLink} target="_blank" rel="noopener noreferrer">
//             <img
//               className="facebook-icon"
//               src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon-1.svg"
//               alt="Facebook"
//             />
//           </a>
//         </div>
//       </div>
//     </div>
// )};

// TeamMemberCard.propTypes = {
//   imageSrc: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   position: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   twitterLink: PropTypes.string.isRequired,
//   facebookLink: PropTypes.string.isRequired
// };

// function Team() {
//   useEffect(() => {
//     AOS.init();
//   }, []);

//   const teamMembers = [
//     {
//       imageSrc:
//         "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png",
//       name: "Davis George",
//       position: "CEO",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//       twitterLink: "https://www.twitter.com",
//       facebookLink: "https://www.facebook.com"
//     },
//     {
//       imageSrc:
//         "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert2.png",
//       name: "Davis George",
//       position: "CEO",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//       twitterLink: "https://www.twitter.com",
//       facebookLink: "https://www.facebook.com"
//     },
//     {
//       imageSrc:
//         "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET7.14.png",
//       name: "Davis George",
//       position: "CEO",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//       twitterLink: "https://www.twitter.com",
//       facebookLink: "https://www.facebook.com"
//     },
//     {
//       imageSrc:
//         "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET7.15.png",
//       name: "Davis George",
//       position: "CEO",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//       twitterLink: "https://www.twitter.com",
//       facebookLink: "https://www.facebook.com"
//     }
//     // Add more team members as needed
//   ];

//   return (
//     <>
//       <Helmet>
//         <title> Info Era Software Services Teams </title>
//         <meta
//           name="google-site-verification"
//           content="KrFf109xrwKNRJTWVipUzNV7ZMCJn5vGEdhwxAWcuSg"
//         />
//         <meta
//           name="Keywords"
//           content="Info Era Teams, Era Teams, Teams, It Company, Website Designing Teams, Best Software Service Provider, Top Digital Platform Providers, Website Designing Company in Patna bihar, Gaurav Kumar Info Era, Rohit Kumar Info Era, Samir ansari info Era, CEO"
//         />
//         <meta
//           name="Description"
//           content="Our dedicated team at Info Era Software Services has been driving innovation since 2014, revolutionizing IT in Bihar, Odisha, and across India with passion and expertise."
//         />
//         <link
//           rel="canonical"
//           href="https://infoera.in/team"
//           aria-label="Canonical - Info Era Software Services Pvt. Ltd."
//         />
//         <meta name="content-language" content="EN" />
//         <meta name="search engines" content="ALL" />
//         <meta name="Robots" content="INDEX,ALL" />
//         <meta name="YahooSeeker" content="INDEX, FOLLOW" />
//         <meta name="msnbot" content="INDEX, FOLLOW" />
//         <meta name="googlebot" content="INDEX, FOLLOW" />
//         <meta name="language" content="en-us" />
//         <meta name="Expires" content="never" />
//         <meta name="rating" content="General" />
//         <meta name="Resource-type" content="document" />
//         <meta name="Author" content="www.infoera.in" />
//         <meta
//           name="document-classification"
//           content="Info Era Software Services Teams"
//         />
//         <meta
//           name="copyright"
//           content="Copyright (c) 2014 by Info Era Software Services Pvt. Ltd."
//         />
//       </Helmet>
//       <div>
//         {/* ======= Hero Section ======= */}
//         <section
//           id="hero"
//           className="hero-section hero d-flex align-items-center"
//           data-aos="fade-up"
//         >
//           <div className="container container-fluid p-0">
//             <div className="row m-0 align-items-center">
//               <div className="col-md-6 p-4">
//                 <h3 className="hero-title">From the Desk of the CEO</h3>
//                 <p className="hero-text">
//                   Since we began our journey in 2014, we have been a growing
//                   startup. I started this IT mission to revolutionize the IT
//                   industry in Bihar and Odisha. We started work on our mission
//                   from “Odisha”. We keep growing and now we have our offices in
//                   different states of India.
//                 </p>
//                 <p className="hero-text">
//                   In my college days an idea struck into my mind to begin my own
//                   path by starting my own software company that today is known
//                   as “
//                   <strong>Info Era Software Services Private Limited</strong>”.
//                 </p>
//               </div>
//               <div className="col-md-6 p-0">
//                 <img
//                   src="assets/img/ceo.png"
//                   className="hero-image"
//                   alt="CEO Image - Info Era"
//                 />
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* End Hero */}

//         {/* ======= Our Team Section ======= */}
//         <section
//           id="our-team"
//           className="our-team-section"
//           data-aos="slide-up"
//           data-aos-duration="1000"
//         >
//           <div className="team-container">
//             <p className="team-head-text">Our Team</p>
//             <div className="team-responsive-container">
//               {teamMembers.map((member, index) => (
//                 <TeamMemberCard
//                   key={index}
//                   imageSrc={member.imageSrc}
//                   name={member.name}
//                   position={member.position}
//                   description={member.description}
//                   twitterLink={member.twitterLink}
//                   facebookLink={member.facebookLink}
//                 />
//               ))}
//             </div>
//           </div>
//         </section>
//         {/* End Our Team */}

//         {/* Existing Sections */}
//         <div
//           className="container mt-5"
//           data-aos="fade-up"
//           data-aos-duration="1000"
//         >
//           <div className="row">{/* Existing team cards */}</div>
//         </div>

//         <div className="mt-4 w-full mx-auto d-flex justify-content-center">
//           <div className="d-flex flex-column align-items-center gap-3 w-100">
//             <TeamSlider />
//           </div>
//         </div>

//         <main id="main">
//           <section
//             id="features"
//             className="features"
//             data-aos="fade-up"
//             data-aos-duration="1000"
//           >
//             <div className="container">
//               <div className="row">
//                 <div className="col-lg-6 order-md-2">
//                   <img
//                     src="assets/img/team-img.png"
//                     className="img-fluid"
//                     alt="Successfully - Info Era"
//                   />
//                 </div>
//                 <div className="col-lg-6 mt-5 mt-lg-0 d-flex order-md-1">
//                   <div className="row align-self-center gy-4">
//                     <h3 style={{ color: "#012970", fontWeight: 700 }}>
//                       Successfully running since 10 years
//                     </h3>
//                     <p style={{ marginTop: 7, textAlign: "justify" }}>
//                       We are an established company running successfully for 9
//                       years with a great team of Web Developers, Marketing
//                       Executive, Assistant Manager and HR. In this journey of
//                       rising power we are spreading happiness by connecting
//                       people to the digital world.
//                     </p>
//                     <p style={{ marginTop: 7, textAlign: "justify" }}>
//                       We led our exponential growth in the past years by
//                       connecting foreign clients into our business. We have
//                       1000+ clients in India and across the globe. We are
//                       growing and people are growing with us.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </main>
//       </div>
//     </>
//   );
// }

// export default Team;
