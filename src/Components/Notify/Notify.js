import React from "react";
import "./Notify.scss";
function Notify({ type, msg }) {
  return (
    <div className={`notify-${type} msg-wrapper`}>
      <p>{msg}</p>
    </div>
  );
}

export default Notify;
