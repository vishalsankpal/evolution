import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ButtonComponent from "../Button/ButtonComponent";
import "./WriteToUs.scss";
import Notify from "../Notify/Notify";
// Generally we keep the app apis in .env file
const api = "/url";
function WriteToUs() {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    message: "",
  });
  const [notifyData, setNotifyData] = useState({
    type: "",
    msg: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(data);
    try {
      const response = await fetch(api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add any other headers you need here
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Request was successful, handle the response here
        console.log("Data sent successfully");
        setNotifyData({
          type: "success",
          msg: "Data has been successfully",
        });
        notifyRemover();
      } else {
        // Handle error responses here
        console.error("Error sending data");
        setNotifyData({
          type: "danger",
          msg: "Something went wrong",
        });
        notifyRemover();
      }
    } catch (error) {
      console.error("Error:", error);
      setNotifyData({
        type: "danger",
        msg: "Something went wrong",
      });
      notifyRemover();
    }
  };
  const changeHandler = (e) => {
    const { name, value } = e.target;
    // const value = e.target.value;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const notifyRemover = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 2000);
  };
  return (
    <>
      <section className="write-to-us">
        <Container>
          <h2 className="section-title dark text-center">
            <span>Write</span> To Us
          </h2>
          <p className="section-subtitle text-center">
            For all enquiries, please fill in the form below. We will get back
            to you shortly!
          </p>
          <Row className="write-to-us-row">
            <Col lg={8}>
              <form method="post" onSubmit={formSubmitHandler}>
                <Row>
                  <Col>
                    <input
                      type="text"
                      placeholder="FIRST NAME"
                      name="fname"
                      id="fname"
                      value={data.fname}
                      className="w-100"
                      onChange={changeHandler}
                    />
                  </Col>
                  <Col>
                    <input
                      type="text"
                      placeholder="LAST NAME"
                      name="lname"
                      id="lname"
                      value={data.lname}
                      className="w-100"
                      onChange={changeHandler}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <input
                      type="tel"
                      placeholder="MOBILE NUMBER"
                      name="phone"
                      value={data.phone}
                      id="phone"
                      className="w-100"
                      onChange={changeHandler}
                    />
                  </Col>
                  <Col>
                    <input
                      type="email"
                      placeholder="EMAIL ID"
                      value={data.email}
                      name="email"
                      id="email"
                      className="w-100"
                      onChange={changeHandler}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <textarea
                      placeholder="MESSAGE"
                      name="message"
                      id="message"
                      className="w-100"
                      value={data.message}
                      onChange={changeHandler}
                    ></textarea>
                  </Col>
                </Row>
                <Row>
                  <div className="form-btn-wrapper">
                    <ButtonComponent
                      className="large"
                      type="submit"
                      // onClick={submitHandler}
                    >
                      <span>SUBMIT</span>
                    </ButtonComponent>
                  </div>
                </Row>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
      {isSubmitted && <Notify {...notifyData} />}
    </>
  );
}

export default WriteToUs;
