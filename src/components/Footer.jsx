import { Link } from "react-router-dom";
// import RazorpayPaymentButton from "./RazorpayPayment/RazorpayPaymentButton";

function Footer() {
  return (
    <>
      <footer id="footer" className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-5 col-md-12 footer-info">
                <Link to="/" className="logo d-flex align-items-center">
                  <img
                    src="/assets/img/infoera.png"
                    alt="Info Era Software Services Logo"
                    title="Logo - Info Era Software Services Pvt.Ltd "
                  />
                  {/* <span>FlexStart</span> */}
                </Link>
                <p>
                  Info Era is a leading global Next-Generation Software Services
                  platform providing client oriented solution. Our clients are
                  in different states of India and across globe.
                  <Link to="about"> read more.</Link>
                </p>
                <div className="social-links mt-3">
                  <Link
                    to="https://twitter.com/INFOERASOFTWAR1" aria-label="Twitter"
                    title="Twitter"
                    className="twitter"
                    target="_blank"
                  >
                    <i className="bi bi-twitter" />
                  </Link>
                  <Link
                    to="https://www.facebook.com/infoerasoftware" aria-label="Facebook" title="Facebook"
                    className="facebook"
                    target="_blank"
                  >
                    <i className="bi bi-facebook" />
                  </Link>
                  <Link
                    to="https://www.instagram.com/infoerasoftwareservices/?hl=en" aria-label="Instagram" title="Instagram"
                    className="instagram"
                    target="_blank"
                  >
                    <i className="bi bi-instagram" />
                  </Link>
                  <Link
                    to="https://in.linkedin.com/in/info-era-software-services-pvt-ltd-5b0688a5?trk=people-guest_people_search-card" aria-label="Linkedin" title="Linkedin"
                    className="linkedin"
                    target="_blank"
                  >
                    <i className="bi bi-linkedin" />
                  </Link>
                  <Link
                    to="https://www.youtube.com/@user-yf2in7if6y" aria-label="Youtube" title="Youtube"
                    className="youtube"
                    target="_blank"
                  >
                    <i className="bi bi-youtube" />
                  </Link>
                </div>
                <div className="paynow" style={{ marginTop: 20 }}>
                  <div className="pm-button">
                    {/* <Link
                      to="https://www.payumoney.com/paybypayumoney/#/6DB40DF7CFCA4EEC115857CA73883749" aria-label="Payment" title="Pay Now"
                      target="_blank"
                    >
                      <img
                        src="https://www.payumoney.com/media/images/payby_payumoney/new_buttons/21.png" 
                        alt="Pay Now"
                        title="Pay Now - Info Era Software"
                      />
                    </Link> */}
                    {/* <RazorpayPaymentButton /> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-6 footer-links">
                <h4 className="important-font-size">Useful Links</h4>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <Link to="/" title="Index Page" aria-label="Home page">
                      Home
                    </Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <Link to="activity" title="Activity Page" aria-label="activity">
                      Activity
                    </Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <Link to="blog" title="Blog Page" aria-label="blog">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <Link to="return-policy" title="Company Policy" aria-label="Company Policy">
                      Return Policy
                    </Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <Link to="terms-conditions" title="Conditions Page" aria-label="Conditions Page">
                      Terms of Condition
                    </Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <Link to="privacy-policy" title="Company Privacy Policy" aria-label="Company Privacy Policy">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-6 footer-links">
                <h4 className="important-font-size">Our Services</h4>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <Link to="website-design" aria-label="Web App Development" title="Web App Development">Web &amp; App Development</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <Link to="digital-marketing" aria-label="Digital Marketing " title="Digital Marketing">Digital Marketing</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <Link to="consulting" aria-label="IT Consulting" title="IT Consulting">IT Consulting</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <Link to="training" aria-label="Industrial Training" title="Industrial Training">Industrial Training</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <Link to="ibc" aria-label="BBC" title="BBc">Co-Partners (IBC/BBC)</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                <h4 className="important-font-size" aria-label="Contact us" title="Contact Us">Contact Us</h4>
                <p>
                  <strong>Phone:</strong> +91 7008411312
                  <br />
                  <strong>Email:</strong> contact@infoerasoftware.com
                  <br />
                  <br />
                  <strong>Our Branches:</strong>
                  <br />
                  Bhubneshwar | Patna | Darbhanga
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            Copyright © 2014{" "}
            <strong>
              <span>Info Era Software Services Pvt. Ltd.</span>
            </strong>{" "}
            | All Rights Reserved.
          </div>
          <div className="credits">
            Designed &amp; Developed by{" "}
            <Link to="https://infoerasoftware.com/" aria-label="Info Era Software Services Pvt. Ltd." title="Info Era Software Services Pvt. Ltd." target="_blank">
              Info Era Software Services Pvt. Ltd.
            </Link>
          </div>
        </div>
        <a href="/robots.txt" title="Robots file - Info Era" aria-label="Robots" >
        
        </a>
        <a href="/sitemap.xml" title="Sitemap - Info Era" aria-label="SiteMap" >
        
        </a>
      </footer>
      {/* End Footer */}
    </>
  );
}

export default Footer;
