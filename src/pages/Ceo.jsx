import "../styles/Ceo.css";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

const Ceo = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="ceo-page container" style={{ marginTop: "100px" }}>
      <div className="ceo-header text-center" data-aos="fade-up">
        <h1>Meet Our CEO</h1>
        <p>Leading the way with innovation and excellence</p>
      </div>
      <div className="ceo-content row">
        <div className="col-md-6" data-aos="fade-right">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGNFT3xlbnwwfHx8fDE2ODExNjY0NzA&ixlib=rb-1.2.1&q=80&w=400"
            alt="CEO"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6" data-aos="fade-left">
          <h2>John Doe</h2>
          <p>
            John Doe is a visionary leader with over 20 years of experience in
            the tech industry. Under his guidance, InfoEra has reached new
            heights, delivering cutting-edge solutions to clients worldwide.
          </p>
          <p>
            His commitment to innovation and excellence has been the driving
            force behind our success. Join us as we continue to shape the
            future of technology.
          </p>
        </div>
      </div>
      <div className="ceo-achievements" data-aos="fade-up">
        <h2 className="text-center">Achievements</h2>
        <ul>
          <li>Recipient of the Global Tech Leader Award 2023</li>
          <li>Expanded InfoEra to over 50 countries</li>
          <li>Launched innovative AI-driven solutions</li>
        </ul>
      </div>
      <div className="ceo-vision" data-aos="fade-up">
        <h2 className="text-center">Our Vision</h2>
        <p>
          At InfoEra, we aim to revolutionize the tech industry by delivering
          innovative and sustainable solutions that empower businesses and
          individuals alike.
        </p>
      </div>
    </div>
  );
};

export default Ceo;