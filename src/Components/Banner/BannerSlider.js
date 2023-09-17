import React from "react";
import "./Banner.scss";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import banner from "../../assets/images/banner.png";
// import bannerBottom from "../../assets/images/bannerBg.png";
import ButtonComponent from "../Button/ButtonComponent";
import OwlItems from "../OwlItems/OwlItems";
function BannerSlider() {
  return (
    <section className="bannerSection banner-section">
      <OwlCarousel className="owl-theme" loop={false} margin={0} nav items={1}>
        <OwlItems style={{ backgroundImage: `url(${banner})` }}>
          <div className="banner-content-wrapper">
            <p className="banner-small-text">AN RPG FOUNDATION INITIATIVE</p>
            <h2 className="banner-title">
              Bringing To Life <br /> <span>Stories </span> Of The Past
            </h2>
            <ButtonComponent className="large">SEE OUR WORK</ButtonComponent>
          </div>
        </OwlItems>
        <OwlItems style={{ backgroundImage: `url(${banner})` }}>
          <div className="banner-content-wrapper">
            <p className="banner-small-text">AN RPG FOUNDATION INITIATIVE</p>
            <h2 className="banner-title">
              Bringing To Life <br /> <span>Stories </span> Of The Past
            </h2>
            <ButtonComponent className="large">SEE OUR WORK</ButtonComponent>
          </div>
        </OwlItems>
        <OwlItems style={{ backgroundImage: `url(${banner})` }}>
          <div className="banner-content-wrapper">
            <p className="banner-small-text">AN RPG FOUNDATION INITIATIVE</p>
            <h2 className="banner-title">
              Bringing To Life <br /> <span>Stories </span> Of The Past
            </h2>
            <ButtonComponent className="large">SEE OUR WORK</ButtonComponent>
          </div>
        </OwlItems>
      </OwlCarousel>
      {/* <div
        style={{ backgroundImage: `url(${bannerBottom})` }}
        className="bannerBottom"
      ></div> */}
    </section>
  );
}

export default BannerSlider;
