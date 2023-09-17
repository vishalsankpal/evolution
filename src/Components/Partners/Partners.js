import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Partners.scss";
import partner1 from "../../assets/images/partner1.png";
import partner2 from "../../assets/images/partner2.png";
import partner3 from "../../assets/images/partner3.png";
function Partners() {
  return (
    <section className="our-partners">
      <Container>
        <h2 className="section-title text-center">
          Our <span>Partners</span>
        </h2>
        <Row className="partners-outer-row">
          <Col xs={10}>
            <Row>
              <Col md={4}>
                <div className="partners-img-wrapper">
                  <img src={partner1} alt="partner1" loading="lazy" />
                </div>
              </Col>
              <Col md={4}>
                <div className="partners-img-wrapper">
                  <img src={partner2} alt="partner1" loading="lazy" />
                </div>
              </Col>
              <Col md={4}>
                <div className="partners-img-wrapper">
                  <img src={partner3} alt="partner1" loading="lazy" />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Partners;
