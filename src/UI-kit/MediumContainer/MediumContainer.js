import React from "react";
import "./MediumContainer.scss";
function MediumContainer({ children, className }) {
  return <div className={`medium-container ${className}`}>{children}</div>;
}

export default MediumContainer;
