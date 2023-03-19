import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const MainComponent = () => {
  return (
    <Container>
      <Row className="align-items-center">
        <Col className="text-holder">
          <span className="upper-main">Welcome to my portfolio</span>
          <h1 className="main-text">Hey! I'm a Full Stack Web Developer</h1>
        </Col>
        <Col>
          <Image
            className="code-snipped"
            src="https://res.cloudinary.com/dyy38u8x7/image/upload/v1679234384/portfolio/code-snipped_swa0bz.png"
            alt="say-hello"
            fluid
          ></Image>
        </Col>
      </Row>
    </Container>
  );
};

export default MainComponent;
