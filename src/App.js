// import logo from "./logo.svg";
import React, { useRef, useEffect, useState } from "react";
import "./App.css";
// import Container from "react-bootstrap/Container";
import Header from "./Components/Header/Header";
import BannerSlider from "./Components/Banner/BannerSlider";
import Initiative from "./Components/Initiative/Initiative";
import Digital from "./Components/Digital/Digital";
import Expertise from "./Components/Expertise/Expertise";
import Partners from "./Components/Partners/Partners";
import OneFrame from "./Components/OneFrame/OneFrame";
import Equitable from "./Components/Equitable/Equitable";
import WriteToUs from "./Components/WriteToUs/WriteToUs";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <>
      <Header />
      <BannerSlider />
      <Initiative />
      <Digital />
      <Expertise />
      <Partners />
      <OneFrame />
      <Equitable />
      <WriteToUs />
      <Footer />
    </>
  );
}

export default App;
