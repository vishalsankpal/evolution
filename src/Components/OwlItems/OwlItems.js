import React from "react";

function OwlItems({ children, ...attributes }) {
  return (
    <div className="item" {...attributes}>
      {children}
    </div>
  );
}

export default OwlItems;
