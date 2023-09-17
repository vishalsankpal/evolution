import React, { useState, useEffect } from "react";
import scroller from "../../assets/images/scroller.png";
import "./Scroller.scss";
function Scroller() {
  const [scrollToTop, setscrollToTop] = useState(false);

  //here 96(px) - height of current header

  useEffect(() => {
    const handleScroll = () => {
      setscrollToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scrolling behavior
    });
  };
  return (
    <div className={scrollToTop ? "scroller" : ""} onClick={scrollTopHandler}>
      <img src={scroller} alt="scroller" />
    </div>
  );
}

export default Scroller;
