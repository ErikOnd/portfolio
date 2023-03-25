import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const AboutMeComponent = () => {
  return (
    <div>
      <Container className="mt-5 about-me-container">
        <Row className="align-items-center">
          <Col className="d-flex align-content-start me-emoji-div">
            <Image
              src="https://res.cloudinary.com/dyy38u8x7/image/upload/v1679731256/portfolio/me-img_jxqazk.png"
              alt="me-img"
              className="me-img"
              fluid
            ></Image>
          </Col>
          <Col className="about-me-text">
            <Row className="flex-column">
              <h2 className="about-me">About Me</h2>
              <div className="info-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                magni ipsa, quisquam autem corrupti dolores placeat nesciunt
                earum facilis mollitia laborum porro similique asperiores
                voluptatibus. A quia soluta iste sunt, aut incidunt facere
                explicabo aspernatur quod magnam earum atque, fugit non
                provident!
              </div>
            </Row>
            <Row>
              <span className="download-cv">Download CV</span>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutMeComponent;
