import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import frame1 from "../../assets/images/frame1.png";
import frame2_1 from "../../assets/images/frame2_1.png";
import frame2_2 from "../../assets/images/frame2_2.png";
import frame3 from "../../assets/images/frame3.png";
import frame4 from "../../assets/images/frame4.png";
import frame5_1 from "../../assets/images/farme5_1.png";
import frame5_2 from "../../assets/images/frame5_2.png";
import "./OneFrame.scss";
import ButtonComponent from "../Button/ButtonComponent";
function OneFrame() {
  const options = {
    loop: true,
    margin: 30,
    nav: false,
    center: true,
    dots: false,
    items: 4,
    responsive: {
      1200: {
        items: 4,
      },
      320: {
        items: 3,
      },
    },
  };
  return (
    <section className="one-frame">
      <p className="section-subtitle text-center">
        Validating the needs of our society and trying to work on <br /> areas
        that are left untouched by others.
      </p>
      <h2 className="section-title text-center light">
        One Frame At <br />
        <span>A Time</span>
      </h2>
      <OwlCarousel className="owl-theme frame-carousel" {...options}>
        <div class="item">
          <img src={frame1} alt="frame1" loading="lazy" />
        </div>
        <div class="item">
          <img src={frame2_1} alt="frame1" loading="lazy" />
          <img src={frame2_2} alt="frame1" loading="lazy" />
        </div>
        <div class="item">
          <img src={frame3} alt="frame1" loading="lazy" />
        </div>
        <div class="item">
          <img src={frame4} alt="frame1" loading="lazy" />
        </div>
        <div class="item">
          <img src={frame5_1} alt="frame1" loading="lazy" />
          <img src={frame5_2} alt="frame1" loading="lazy" />
        </div>
      </OwlCarousel>
      <div className="explore-btn">
        <ButtonComponent class="large">
          <span>EXPLORE ALL</span>
        </ButtonComponent>
      </div>
    </section>
  );
}

export default OneFrame;
