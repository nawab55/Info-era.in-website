import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navOpen, setNavOpen] = useState(false);
  const [activeDropdowns, setActiveDropdowns] = useState([]);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  const toggleDropdown = (dropdownId) => {
    if (activeDropdowns.includes(dropdownId)) {
      setActiveDropdowns(activeDropdowns.filter((id) => id !== dropdownId));
    } else {
      setActiveDropdowns([...activeDropdowns, dropdownId]);
    }
  };

  const isDropdownActive = (dropdownId) => {
    return activeDropdowns.includes(dropdownId);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { pathname } = useLocation();

  useEffect(() => {
    setNavOpen(false);
  }, [pathname]);

  return (
    <header
      id="header"
      className={`header fixed-top ${
        scrollPosition !== 0 ? "header-scrolled" : ""
      }`}
    >
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <Link
          to={"/"}
          title="Home Page - Info Era"
          className="logo d-flex align-items-center"
        >
          <img
            src="/assets/img/infoera.png"
            alt="Infoera Logo"
            title="Info Era Software Logo"
          />
        </Link>

        <nav id="navbar" className={`${navOpen ? "navbar-mobile" : "navbar"}`}>
          <ul className={navOpen ? "dropdown-active" : ""}>
            <li>
              <Link
                to={"/"}
                className="nav-link scrollto"
                title="Home Page - Info Era"
                onClick={() => setNavOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="dropdown">
              <Link
                to="#"
                title="Company - Info Era"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown("company");
                }}
              >
                <span>Company</span>
                <i className="bi bi-chevron-down" />
              </Link>
              <ul
                className={isDropdownActive("company") ? "dropdown-active" : ""}
              >
                <li>
                  <Link to="about" title="About - info Era">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="team" title="Team - Info Era">
                    Team
                  </Link>
                </li>
                <li>
                  <Link to="why-choose" title="Why Choose - Info Era">
                    Why Choose Us
                  </Link>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <Link
                to="#"
                title="Services"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown("services");
                }}
              >
                <span>Service</span>
                <i className="bi bi-chevron-down" />
              </Link>
              <ul
                className={
                  isDropdownActive("services") ? "dropdown-active" : ""
                }
              >
                <li className="dropdown">
                  <Link
                    to="#"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleDropdown("it-services");
                    }}
                  >
                    <span>IT</span>
                    <i className="bi bi-chevron-right" />
                  </Link>
                  <ul
                    className={
                      isDropdownActive("it-services") ? "dropdown-active" : ""
                    }
                  >
                    <li>
                      <Link to="website-design">
                        Web Designing &amp; Development
                      </Link>
                    </li>
                    <li>
                      <Link to="web-application">Web Application</Link>
                    </li>
                    <li>
                      <Link to="desktop-application">Desktop Application</Link>
                    </li>
                    <li>
                      <Link to="digital-marketing">Digital Marketing</Link>
                    </li>
                    <li>
                      <Link to="seo">SEO</Link>
                    </li>
                    <li>
                      <Link to="bulk-sms">Bulk SMS, Bulk Whatsapp</Link>
                    </li>
                    <li>
                      <Link to="bulk-email">Bulk Email</Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <Link
                    to="#"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleDropdown("hardware");
                    }}
                  >
                    <span>Hardware</span>
                    <i className="bi bi-chevron-right" />
                  </Link>
                  <ul
                    className={
                      isDropdownActive("hardware") ? "dropdown-active" : ""
                    }
                  >
                    <li>
                      <Link to="cctv">CCTV Installation</Link>
                    </li>
                    <li>
                      <Link to="biometric">Biometric</Link>
                    </li>
                    <li>
                      <Link to="computer-supply">Computer Supply</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="consulting">Consulting</Link>
                </li>
              </ul>
            </li>
            {/* Career Dropdown */}
            <li className="dropdown">
              <Link
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown("career");
                }}
              >
                <span>Career</span>
                <i className="bi bi-chevron-down" />
              </Link>
              <ul
                className={isDropdownActive("career") ? "dropdown-active" : ""}
              >
                <li>
                  <Link to="jobs">Jobs</Link>
                </li>
                <li>
                  <Link to="training">Training</Link>
                </li>
                <li>
                  <Link to="certificate">Certificate</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className="nav-link scrollto" to="shop">
                Shop
              </Link>
            </li>
            {/* Co-Partners Dropdown */}
            <li className="dropdown">
              <Link
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown("partners");
                }}
              >
                <span>Co-Partners</span>
                <i className="bi bi-chevron-down" />
              </Link>
              <ul
                className={
                  isDropdownActive("partners") ? "dropdown-active" : ""
                }
              >
                <li>
                  <Link to="ibc">IBC</Link>
                </li>
                <li>
                  <Link to="bbc">BBC</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className="nav-link scrollto" to="contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" to="client-query">
                Query
              </Link>
            </li>
            <li>
              <a
                className="getstarted scrollto"
                href="https://dashboard.infoera.in/client_login"
              >
                Login
              </a>
            </li>
          </ul>

          {navOpen ? (
            <FaTimes
              size={24}
              style={{ color: "white" }}
              className="mobile-nav-toggle"
              onClick={() => setNavOpen(false)}
            />
          ) : (
            <FaBars
              size={24}
              className="mobile-nav-toggle"
              onClick={() => setNavOpen(true)}
            />
          )}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
