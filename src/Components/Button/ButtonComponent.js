import React from "react";
import "./Button.scss";
function ButtonComponent({ children, onClick, ...attributes }) {
  return (
    <div>
      <button onClick={onClick} {...attributes}>
        <span>{children}</span>
      </button>
    </div>
  );
}

export default ButtonComponent;
