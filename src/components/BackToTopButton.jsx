import { useState, useEffect } from "react";

// Function to scroll to top
export function ScrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Monitor scroll position to show or hide the button
  const toggleVisibility = () => {
    if (window.scrollY > 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={ScrollToTop}
      className={`back-to-top d-flex align-items-center justify-content-center ${
        isVisible ? "active" : ""
      }`}
      style={{
        display: isVisible ? "flex" : "none",
        borderRadius: "4px",
        border: "0px transparent",
      }}
    >
      <i className="bi bi-arrow-up-short" />
    </button>
  );
}

export default BackToTopButton;
