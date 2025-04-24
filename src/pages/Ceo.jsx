// import { useEffect } from "react";
// import AOS from "aos";
// import {
//   Award,
//   Globe,
//   Brain,
//   Target,
//   Quote,
//   // Linkedin,
//   // Twitter
// } from "lucide-react";
// import "../styles/Ceo.css";


// const Ceo = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <div className="ceo-page" style={{ marginTop: "100px" }}>
//       <div className="container">
//         {/* Hero Section */}
//         <div className="ceo-header text-center" data-aos="fade-up">
//           <h1>Leadership That Inspires</h1>
//           <p>
//             “Every journey begins with a single step. Mine began with a laptop,
//             a dream, and an unshakable belief in the power of technology. At
//             Info Era, we are not just developing solutions — we are developing
//             futures. I welcome you to be part of this ever-evolving journey of
//             growth, innovation, and impact.”
//           </p>
//         </div>

//         {/* CEO Profile */}
//         <div className="ceo-profile row" data-aos="fade-up">
//           <div className="col-lg-4">
//             <div className="ceo-image-container">
//               <img
//                 src="/assets/img/ceoimg-bg-remove.png"
//                 alt="Rahul Raj"
//                 className="ceo-image"
//               />
//             </div>
//           </div>

//           <div className="col-lg-8 ceo-info">
//             <h2>Mr. Rahul Raj</h2>
//             <p className="ceo-title">
//               CEO & Founder – Info Era Software Services Pvt. Ltd.
//             </p>
//             <p className="ceo-bio">
//               Behind every great company lies an inspiring journeyand to know
//               more about Mr.Rahul Raj, the visionary founder and CEO of Info Era
//               Software Services Pvt. Ltd., is one of ambition, resilience, and
//               transformation.
//             </p>
//             <p className="ceo-bio">
//               He always believes in leadership is not just about
//               decision-making, but about inspiring others, nurturing talent, and
//               creating a work culture that thrives on innovation, ethics, and
//               collaboration. He’s not just a CEO behind a desk — he&apos;s a
//               mentor, a problem-solver, and a dreamer who walks the talk.
//             </p>
//             <p className="ceo-bio">
//               Mr.Rahul Raj began his professional journey as a passionate tech
//               enthusiast with a deep curiosity for how technology could solve
//               real-world problems. After completing his education in Computer
//               Science/IT he started his career with modest roles in IT support
//               and development. During these early years, he faced numerous
//               challenges — from limited resources to navigating the complexities
//               of the tech world as a newcomer.
//             </p>
//             <p className="ceo-bio">
//               After gaining hands-on experience and industry insights, he took a
//               bold leap — leaving the comfort of a stable job to start his own
//               venture. In 2014, he laid the foundation of Info Era Software
//               Services Pvt. Ltd. with just a small team, a shared dream, and an
//               unrelenting spirit to make a difference. Under his leadership,
//               Info Era has grown from a startup into a leading IT company
//               delivering Customized Web Solutions, Software and Mobile
//               Applications, Digital marketing strategies, and Skill Development
//               Programs. Today, the company serves a diverse range of clients —
//               from small businesses to educational institutions and government
//               projects.
//             </p>
//           </div>
//         </div>

//         {/* CEO Message */}
//         <div className="ceo-quote" data-aos="fade-up">
//           <Quote className="quote-icon" size={48} />
//           <p className="quote-text">
//             &quot;At Info Era, we don’t just build software—we build
//             opportunities, transform ideas into realities, and enable businesses
//             to thrive in a digital-first world. Our journey is powered by our
//             people, our passion, and our purpose to create lasting value for
//             every client and community we serve.&quot;
//           </p>
//         </div>

//         {/* Achievements */}
//         <div className="achievements" data-aos="fade-up">
//           <h2>Milestones & Achievements</h2>
//           <div className="row g-4">
//             {[
//               {
//                 icon: Award,
//                 title: "Innovation Excellence",
//                 description: "Forbes Technology Award 2023",
//                 color: "#f1c40f"
//               },
//               {
//                 icon: Globe,
//                 title: "Global Expansion",
//                 description: "Present in 10+ Countries",
//                 color: "#3498db"
//               },
//               {
//                 icon: Brain,
//                 title: "AI Leadership",
//                 description: "Pioneer in Enterprise AI",
//                 color: "#9b59b6"
//               },
//               {
//                 icon: Target,
//                 title: "Sustainable Growth",
//                 description: "100% YoY Growth",
//                 color: "#2ecc71"
//               }
//             ].map((achievement, index) => (
//               <div key={index} className="col-md-6 col-lg-3">
//                 <div className="achievement-card">
//                   <achievement.icon
//                     className="achievement-icon"
//                     size={48}
//                     color={achievement.color}
//                   />
//                   <h3>{achievement.title}</h3>
//                   <p>{achievement.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Vision */}
//         <div className="vision" data-aos="fade-up">
//           <h2>Our Vision</h2>
//           <p>
//             To be the global leader in innovative technology solutions, creating
//             sustainable digital transformations that empower businesses and
//             enhance lives across the world.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Ceo;


import { useEffect } from "react";
import AOS from "aos";
import { Award, Globe, Brain, Target, Quote } from "lucide-react";
import "../styles/Ceo.css";

const Ceo = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="ceo-page" style={{ marginTop: "100px" }}>
      <div className="container">
        {/* Hero Section */}
        <div className="ceo-header text-center" data-aos="fade-up">
          <h1>Leadership That Inspires</h1>
          <p>
            “Every journey begins with a single step. Mine began with a laptop,
            a dream, and an unshakable belief in the power of technology. At
            Info Era, we are not just developing solutions — we are developing
            futures. I welcome you to be part of this ever-evolving journey of
            growth, innovation, and impact.”
          </p>
        </div>

        {/* CEO Profile */}
        <div className="ceo-profile row align-items-center" data-aos="fade-up">
          <div className="col-12 col-lg-4">
            <div className="ceo-image-container">
              <img
                src="/assets/img/ceoimg-bg-remove.png"
                alt="Rahul Raj"
                className="ceo-image"
              />
            </div>
          </div>
          <div className="col-12 col-lg-8 ceo-info">
            <h2>Mr. Rahul Raj</h2>
            <p className="ceo-title">
              CEO & Founder – Info Era Software Services Pvt. Ltd.
            </p>
            <p className="ceo-bio">
              Behind every great company lies an inspiring journey, and to know
              more about Mr. Rahul Raj, the visionary founder and CEO of Info
              Era Software Services Pvt. Ltd., is one of ambition, resilience,
              and transformation.
            </p>
            <p className="ceo-bio">
              He always believes leadership is not just about decision-making,
              but about inspiring others, nurturing talent, and creating a work
              culture that thrives on innovation, ethics, and collaboration.
              He’s not just a CEO behind a desk — he&apos;s a mentor, a
              problem-solver, and a dreamer who walks the talk.
            </p>
            <p className="ceo-bio">
              Mr. Rahul Raj began his professional journey as a passionate tech
              enthusiast with a deep curiosity for how technology could solve
              real-world problems. After completing his education in Computer
              Science/IT, he started his career with modest roles in IT support
              and development. During these early years, he faced numerous
              challenges — from limited resources to navigating the complexities
              of the tech world as a newcomer.
            </p>
            <p className="ceo-bio">
              After gaining hands-on experience and industry insights, he took a
              bold leap — leaving the comfort of a stable job to start his own
              venture. In 2014, he laid the foundation of Info Era Software
              Services Pvt. Ltd. with just a small team, a shared dream, and an
              unrelenting spirit to make a difference. Under his leadership,
              Info Era has grown from a startup into a leading IT company
              delivering Customized Web Solutions, Software and Mobile
              Applications, Digital marketing strategies, and Skill Development
              Programs. Today, the company serves a diverse range of clients —
              from small businesses to educational institutions and government
              projects.
            </p>
          </div>
        </div>

        {/* CEO Message */}
        <div className="ceo-quote" data-aos="fade-up">
          <Quote className="quote-icon" size={48} />
          <p className="quote-text">
            &quot;At Info Era, we don’t just build software—we build
            opportunities, transform ideas into realities, and enable businesses
            to thrive in a digital-first world. Our journey is powered by our
            people, our passion, and our purpose to create lasting value for
            every client and community we serve.&quot;
          </p>
          <Quote className="quote-icon-close" size={48} />
        </div>

        {/* Achievements */}
        <div className="achievements" data-aos="fade-up">
          <h2>Milestones & Achievements</h2>
          <div className="row g-4">
            {[
              {
                icon: Award,
                title: "Innovation Excellence",
                description: "Forbes Technology Award 2023",
                color: "#f1c40f"
              },
              {
                icon: Globe,
                title: "Global Expansion",
                description: "Present in 10+ Countries",
                color: "#3498db"
              },
              {
                icon: Brain,
                title: "AI Leadership",
                description: "Pioneer in Enterprise AI",
                color: "#9b59b6"
              },
              {
                icon: Target,
                title: "Sustainable Growth",
                description: "100% YoY Growth",
                color: "#2ecc71"
              }
            ].map((achievement, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-3">
                <div className="achievement-card">
                  <achievement.icon
                    className="achievement-icon"
                    size={48}
                    color={achievement.color}
                  />
                  <h3>{achievement.title}</h3>
                  <p>{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision */}
        <div className="vision" data-aos="fade-up">
          <h2>Our Vision</h2>
          <p>
            To be the global leader in innovative technology solutions, creating
            sustainable digital transformations that empower businesses and
            enhance lives across the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ceo;
