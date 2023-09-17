import React, { useRef, useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import "./header.scss";
import logo from "../../assets/images/Logo.png";
import ButtonComponent from "../Button/ButtonComponent";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
function Header() {
  const [mobileOpenNav, setMobileOpenNav] = useState(false);
  const toggleHandler = () => {
    if (mobileOpenNav) {
      setMobileOpenNav(false);
    } else {
      setMobileOpenNav(true);
    }
  };
  const [
    isScrollValueMoreThanHeaderHeight,
    setIsScrollValueMoreThanHeaderHeight,
  ] = useState(false);

  //here 96(px) - height of current header

  useEffect(() => {
    const handleScroll = () => {
      setIsScrollValueMoreThanHeaderHeight(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      // className={mobileOpenNav ? `active ${vishal}` : `${vishal}`}
      className={`header header-inner-wrapper ${
        (mobileOpenNav ? "active " : "") +
        (isScrollValueMoreThanHeaderHeight ? "sticky" : "")
      }`}
    >
      <Container fluid>
        <div
          className="header-inner-wrapper"
          // className={"header-inner-wrapper" + mobileOpenNav ? `active` : ``}
        >
          <Navbar expand="xl" className="bg-body-tertiary">
            <Navbar.Brand href="#" className=" d-xl-none">
              <img src={logo} alt="logo" className="logo-img" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" onClick={toggleHandler}>
              <span className="custom-toggler"></span>
            </Navbar.Toggle>
            <Navbar.Collapse
              id="navbarScroll"
              // className={
              //   mobileOpenNav
              //     ? "center-logo-container"
              //     : "center-logo-container show"
              // }
              className="center-logo-container"
            >
              <Nav className=" my-2 my-lg-0" navbarScroll>
                <Nav.Link href="#action1">OUR WORK</Nav.Link>

                <NavDropdown title="COLLECTABLES" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#action2">EVENTS</Nav.Link>
                <NavDropdown title="PRESS MEDIA" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Navbar.Brand href="#" className="d-none d-xl-block me-0">
                <img src={logo} alt="logo" className="logo-img" />
              </Navbar.Brand>
              <Nav className=" my-2 my-lg-0" navbarScroll>
                <Nav.Link href="#action1">
                  <NavDropdown title="Anout us" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav.Link>
                <Nav.Link href="#action1">GALLERY</Nav.Link>
                <ButtonComponent className="small">
                  MAKE A DONATION
                </ButtonComponent>
              </Nav>
              {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
            </Navbar.Collapse>
          </Navbar>
        </div>
      </Container>
    </header>
  );
}

export default Header;
