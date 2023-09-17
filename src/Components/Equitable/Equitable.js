import React from "react";
import ButtonComponent from "../Button/ButtonComponent";
import temple from "../../assets/images/temple.png";
import "./Equitable.scss";
function Equitable() {
  return (
    <section className="equitable">
      <h2 className="section-title text-center dark">
        Let's Build An <br />
        <span> Equitable</span> Society
      </h2>
      <div className="make-donation-btn-wrapper">
        <ButtonComponent className="large">
          <span>MAKE A DONATION</span>
        </ButtonComponent>
      </div>
      <div className="equitable-temple-wrapper">
        <img src={temple} alt="temple" />
      </div>
    </section>
  );
}

export default Equitable;
