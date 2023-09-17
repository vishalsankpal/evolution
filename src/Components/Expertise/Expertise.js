import React from "react";
import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Expertise.scss";
import art1 from "../../assets/images/art1.png";
import art2 from "../../assets/images/art2.png";
import art3 from "../../assets/images/art3.png";
import art4 from "../../assets/images/art4.png";
function Expertise() {
  const [key, setKey] = useState("home");
  const options = {
    items: 4,
    loop: false,
    center: true,
    URLhashListener: true,
    margin: 50,
    dots: false,
    responsive: {
      1200: {
        items: 4,
      },
      768: {
        items: 3,
      },
      575: {
        items: 2,
      },
      320: {
        items: 1,
      },
    },
  };
  return (
    <section className="expertise">
      <div className="expertise-inner-wrapper">
        <h2 className="section-title">
          Our <span>Expertise</span>
        </h2>
      </div>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="home" title="ART & DESIGN">
          <OwlCarousel
            className="owl-theme"
            {...options}
            // loop={false}
            // center={true}
            // URLhashListener={true}
            // margin={50}
            // nav={false}
            // dots={false}
            // items={4}
          >
            <div class="item">
              <div className="expertise-img-wrapper">
                <img src={art1} alt="art1" />
                <div className="caption-wrapper">
                  <p className="art-category">ART & DESIGN</p>
                  <h3 className="art-title">
                    Conveying stories of the Heritage Site
                  </h3>
                </div>
              </div>
            </div>
            <div class="item">
              <div className="expertise-img-wrapper">
                <img src={art2} alt="art2" />
                <div className="caption-wrapper">
                  <p className="art-category">ART & DESIGN</p>
                  <h3 className="art-title">
                    Conveying stories of the Heritage Site
                  </h3>
                </div>
              </div>
            </div>
            <div class="item">
              <div className="expertise-img-wrapper">
                <img src={art3} alt="art3" />
                <div className="caption-wrapper">
                  <p className="art-category">ART & DESIGN</p>
                  <h3 className="art-title">
                    Conveying stories of the Heritage Site
                  </h3>
                </div>
              </div>
            </div>
            <div class="item">
              <div className="expertise-img-wrapper">
                <img src={art4} alt="art4" />
                <div className="caption-wrapper">
                  <p className="art-category">ART & DESIGN</p>
                  <h3 className="art-title">
                    Conveying stories of the Heritage Site
                  </h3>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </Tab>
        <Tab eventKey="profile" title="COMMUNITY DEVELOPEMENT">
          <OwlCarousel
            className="owl-theme"
            {...options}
            // loop={false}
            // center={true}
            // URLhashListener={true}
            // margin={50}
            // nav={false}
            // dots={false}
            // items={4}
          >
            <div class="item">
              <div className="expertise-img-wrapper">
                <img src={art1} alt="art1" />
                <div className="caption-wrapper">
                  <p className="art-category">ART & DESIGN</p>
                  <h3 className="art-title">
                    Conveying stories of the Heritage Site
                  </h3>
                </div>
              </div>
            </div>
            <div class="item">
              <div className="expertise-img-wrapper">
                <img src={art2} alt="art2" />
                <div className="caption-wrapper">
                  <p className="art-category">ART & DESIGN</p>
                  <h3 className="art-title">
                    Conveying stories of the Heritage Site
                  </h3>
                </div>
              </div>
            </div>
            <div class="item">
              <div className="expertise-img-wrapper">
                <img src={art3} alt="art3" />
                <div className="caption-wrapper">
                  <p className="art-category">ART & DESIGN</p>
                  <h3 className="art-title">
                    Conveying stories of the Heritage Site
                  </h3>
                </div>
              </div>
            </div>
            <div class="item">
              <div className="expertise-img-wrapper">
                <img src={art4} alt="art4" />
                <div className="caption-wrapper">
                  <p className="art-category">ART & DESIGN</p>
                  <h3 className="art-title">
                    Conveying stories of the Heritage Site
                  </h3>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </Tab>
        <Tab eventKey="contact" title="HERITAGE URBANISM">
          <OwlCarousel
            className="owl-theme"
            {...options}
            // loop={false}
            // center={true}
            // URLhashListener={true}
            // margin={50}
            // nav={false}
            // dots={false}
            // items={4}
          >
            <div class="item">
              <div className="expertise-img-wrapper">
                <img src={art1} alt="art1" />
                <div className="caption-wrapper">
                  <p className="art-category">ART & DESIGN</p>
                  <h3 className="art-title">
                    Conveying stories of the Heritage Site
                  </h3>
                </div>
              </div>
            </div>
            <div class="item">
              <div className="expertise-img-wrapper">
                <img src={art2} alt="art2" />
                <div className="caption-wrapper">
                  <p className="art-category">ART & DESIGN</p>
                  <h3 className="art-title">
                    Conveying stories of the Heritage Site
                  </h3>
                </div>
              </div>
            </div>
            <div class="item">
              <div className="expertise-img-wrapper">
                <img src={art3} alt="art3" />
                <div className="caption-wrapper">
                  <p className="art-category">ART & DESIGN</p>
                  <h3 className="art-title">
                    Conveying stories of the Heritage Site
                  </h3>
                </div>
              </div>
            </div>
            <div class="item">
              <div className="expertise-img-wrapper">
                <img src={art4} alt="art4" />
                <div className="caption-wrapper">
                  <p className="art-category">ART & DESIGN</p>
                  <h3 className="art-title">
                    Conveying stories of the Heritage Site
                  </h3>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </Tab>
        <Tab
          eventKey="collection"
          title="DIGITAL HERITAGE EXPERIENCES & COLLECTIBLES"
        >
          <OwlCarousel
            className="owl-theme"
            {...options}
            // loop={false}
            // center={true}
            // URLhashListener={true}
            // margin={50}
            // nav={false}
            // dots={false}
            // items={4}
          >
            <div class="item">
              <div className="expertise-img-wrapper">
                <img src={art1} alt="art1" />
                <div className="caption-wrapper">
                  <p className="art-category">ART & DESIGN</p>
                  <h3 className="art-title">
                    Conveying stories of the Heritage Site
                  </h3>
                </div>
              </div>
            </div>
            <div class="item">
              <div className="expertise-img-wrapper">
                <img src={art2} alt="art2" />
                <div className="caption-wrapper">
                  <p className="art-category">ART & DESIGN</p>
                  <h3 className="art-title">
                    Conveying stories of the Heritage Site
                  </h3>
                </div>
              </div>
            </div>
            <div class="item">
              <div className="expertise-img-wrapper">
                <img src={art3} alt="art3" />
                <div className="caption-wrapper">
                  <p className="art-category">ART & DESIGN</p>
                  <h3 className="art-title">
                    Conveying stories of the Heritage Site
                  </h3>
                </div>
              </div>
            </div>
            <div class="item">
              <div className="expertise-img-wrapper">
                <img src={art4} alt="art4" />
                <div className="caption-wrapper">
                  <p className="art-category">ART & DESIGN</p>
                  <h3 className="art-title">
                    Conveying stories of the Heritage Site
                  </h3>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </Tab>
      </Tabs>
    </section>
  );
}

export default Expertise;
