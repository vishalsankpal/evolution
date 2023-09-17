import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ButtonComponent from "../Button/ButtonComponent";
import "./Initiative.scss";
import OwlItems from "../OwlItems/OwlItems";
function Initiative() {
  const [initiative, setInitiative] = useState([
    {
      title: "Banganga Revival",
      info: `Our First project in collaboration with MCGM (D Ward) and DoAM.
                The focus is on uplifting community spaces and spreading
                awareness about Banganga, rediscovering its heritage by
                augmenting experiences, improving accessibility of the site, and
                making heritage relevant for our future generation with
                collectibles.`,
    },
    {
      title: "Banganga Revival",
      info: `Our First project in collaboration with MCGM (D Ward) and DoAM.
                The focus is on uplifting community spaces and spreading
                awareness about Banganga, rediscovering its heritage by
                augmenting experiences, improving accessibility of the site, and
                making heritage relevant for our future generation with
                collectibles.`,
    },
    {
      title: "Test",
      info: `Our First project in collaboration with MCGM (D Ward) and DoAM.
                The focus is on uplifting community spaces and spreading
                awareness about Banganga, rediscovering its heritage by
                augmenting experiences, improving accessibility of the site, and
                making heritage relevant for our future generation with
                collectibles.`,
    },
  ]);
  return (
    <section className="initiatives-section">
      <Container>
        <h2 className="section-title dark">
          Read About Our <br />
          <span>Initiatives</span>
        </h2>
      </Container>
      <div className="initiative-slider-wrapper">
        <Container className="initiative-slide-container">
          <OwlCarousel
            className="owl-theme owl-wrapper"
            loop={false}
            margin={0}
            items={1}
            nav={true}
            dots={false}
          >
            {initiative.map((item) => (
              <OwlItems>
                <h3 className="initiative-title">{item.title}</h3>
                <p className="initiative-small-information">{item.info}</p>
                <ButtonComponent className="large">KNOW MORE</ButtonComponent>
              </OwlItems>
            ))}
          </OwlCarousel>
        </Container>
      </div>
    </section>
  );
}

export default Initiative;
