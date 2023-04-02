import React, { useRef, useEffect } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const SkillsComponent = () => {
  const observer = useRef(
    new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    })
  );

  const hiddenElements = useRef([]);
  useEffect(() => {
    observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });
    hiddenElements.current.forEach((el) => {
      observer.current.observe(el);
    });
  }, []);

  return (
    <Container fluid="sm">
      <Row className="mt-5 mx-0">
        <Col className="mt-5">
          <h2 className="mt-3 mb-5">Skills</h2>
        </Col>
      </Row>
      <Row xs={2} md={3} xl={5} className="justify-content-center">
        <Col
          className="skill-logo hidden"
          ref={(el) => hiddenElements.current.push(el)}
        >
          <Image
            src="https://res.cloudinary.com/dyy38u8x7/image/upload/v1679382531/portfolio/logos/htmlLogo_ksuzuh.png"
            alt="html img"
            className="skills-img"
          ></Image>
        </Col>
        <Col
          className="skill-logo hidden"
          ref={(el) => hiddenElements.current.push(el)}
        >
          <Image
            src="https://res.cloudinary.com/dyy38u8x7/image/upload/v1679733728/portfolio/logos/pngwing.com_fg7bl2.png"
            alt="css img"
            className="skills-img"
          ></Image>
        </Col>
        <Col
          className="skill-logo hidden"
          ref={(el) => hiddenElements.current.push(el)}
        >
          <Image
            src="https://res.cloudinary.com/dyy38u8x7/image/upload/v1679733808/portfolio/logos/pngwing.com_1_lln9dq.png"
            alt="bootstrap img"
            className="skills-img"
          ></Image>
        </Col>
        <Col
          className="skill-logo hidden"
          ref={(el) => hiddenElements.current.push(el)}
        >
          <Image
            src="https://res.cloudinary.com/dyy38u8x7/image/upload/v1679382532/portfolio/logos/jsLogo_y1lsre.png"
            alt="js img"
            className="skills-img"
          ></Image>
        </Col>
        <Col
          className="skill-logo hidden"
          ref={(el) => hiddenElements.current.push(el)}
        >
          <Image
            src="https://res.cloudinary.com/dyy38u8x7/image/upload/v1679818984/portfolio/pngwing.com_3_h0jhke.png"
            alt="ts img"
            className="skills-img"
          ></Image>
        </Col>
        <Col
          className="skill-logo hidden"
          ref={(el) => hiddenElements.current.push(el)}
        >
          <Image
            src="https://res.cloudinary.com/dyy38u8x7/image/upload/v1679733882/portfolio/logos/pngwing.com_2_ixlrla.png"
            alt="html img"
            className="skills-img"
          ></Image>
        </Col>

        <Col
          className="skill-logo hidden"
          ref={(el) => hiddenElements.current.push(el)}
        >
          <Image
            src="https://res.cloudinary.com/dyy38u8x7/image/upload/v1679734163/portfolio/logos/NodeJS-768x768_thbogo.png"
            alt="html img"
            className="skills-img"
          ></Image>
        </Col>
        <Col
          className="skill-logo hidden"
          ref={(el) => hiddenElements.current.push(el)}
        >
          <Image
            src="https://res.cloudinary.com/dyy38u8x7/image/upload/v1679382532/portfolio/logos/msSqlLogo_bknd6u.png"
            alt="html img"
            className="skills-img"
          ></Image>
        </Col>
        <Col
          className="skill-logo hidden"
          ref={(el) => hiddenElements.current.push(el)}
        >
          <Image
            src="https://res.cloudinary.com/dyy38u8x7/image/upload/v1679382532/portfolio/logos/mongoLogo_k5vebr.png"
            alt="html img"
            className="skills-img"
          ></Image>
        </Col>
        <Col
          className="skill-logo hidden"
          ref={(el) => hiddenElements.current.push(el)}
        >
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
