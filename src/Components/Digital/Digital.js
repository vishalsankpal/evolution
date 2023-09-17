import React from "react";
import MediumContainer from "../../UI-kit/MediumContainer/MediumContainer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Digital.scss";
import ButtonComponent from "../Button/ButtonComponent";
function Digital() {
  return (
    <section className="digital-direction">
      <MediumContainer>
        <Row>
          <Col md={6}>
            <h2 className="section-title light">
              Digital <span>Direction</span>
            </h2>
            <p className="digital-info">
              Amble is a mobile application with self-guided heritage walking
              tours. It enables visitors to have an enhanced experience of our
              heritage by taking them back in time. It is endorsed by the
              Maharashtra Tourism Development Corporation and Municipal
              Corporation of Greater Mumbai.
            </p>
            <h3 className="ample-heading">
              Download <strong>Amble App</strong> from
            </h3>
            <div className="store-wrapper">
              <img src="" alt="playstore" className="playstore" />
              <img src="" alt="appleStore" className="appleStore" />
            </div>
            <ButtonComponent className="large">KNOW MORE</ButtonComponent>
          </Col>
          <Col></Col>
        </Row>
      </MediumContainer>
    </section>
  );
}

export default Digital;
