import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";

const SkillsComponent = () => {
  return (
    <Container fluid="sm">
      <Row className="mt-5 mx-0">
        <Col className="mt-5">
          <h2 className="mt-3 mb-5">Skills</h2>
        </Col>
      </Row>
      <Row xs={2} md={3} xl={3} className="justify-content-center">
        <Col className="skill-logo">
          <Image
            src="https://res.cloudinary.com/dyy38u8x7/image/upload/v1679382531/portfolio/logos/htmlLogo_ksuzuh.png"
            alt="html img"
            className="skills-img"
          ></Image>
        </Col>
        <Col className="skill-logo">
          <Image
            src="https://res.cloudinary.com/dyy38u8x7/image/upload/v1679733728/portfolio/logos/pngwing.com_fg7bl2.png"
            alt="html img"
            className="skills-img"
          ></Image>
        </Col>
        <Col className="skill-logo">
          <Image
            src="https://res.cloudinary.com/dyy38u8x7/image/upload/v1679733808/portfolio/logos/pngwing.com_1_lln9dq.png"
            alt="html img"
            className="skills-img"
          ></Image>
        </Col>
        <Col className="skill-logo">
          <Image
            src="https://res.cloudinary.com/dyy38u8x7/image/upload/v1679382532/portfolio/logos/jsLogo_y1lsre.png"
            alt="html img"
            className="skills-img"
          ></Image>
        </Col>
        <Col className="skill-logo">
          <Image
            src="https://res.cloudinary.com/dyy38u8x7/image/upload/v1679733882/portfolio/logos/pngwing.com_2_ixlrla.png"
            alt="html img"
            className="skills-img"
          ></Image>
        </Col>

        <Col className="skill-logo">
          <Image
            src="https://res.cloudinary.com/dyy38u8x7/image/upload/v1679734163/portfolio/logos/NodeJS-768x768_thbogo.png"
            alt="html img"
            className="skills-img"
          ></Image>
        </Col>
        <Col className="skill-logo">
          <Image
            src="https://res.cloudinary.com/dyy38u8x7/image/upload/v1679382532/portfolio/logos/msSqlLogo_bknd6u.png"
            alt="html img"
            className="skills-img"
          ></Image>
        </Col>
        <Col className="skill-logo">
          <Image
            src="https://res.cloudinary.com/dyy38u8x7/image/upload/v1679382532/portfolio/logos/mongoLogo_k5vebr.png"
            alt="html img"
            className="skills-img"
          ></Image>
        </Col>
        <Col className="skill-logo">
          <Image
            src="https://res.cloudinary.com/dyy38u8x7/image/upload/v1679733108/portfolio/logos/pngegg_bp2yae.png"
            alt="html img"
            className="skills-img"
          ></Image>
        </Col>
      </Row>
    </Container>
  );
};

export default SkillsComponent;
