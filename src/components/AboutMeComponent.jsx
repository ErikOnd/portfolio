import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const AboutMeComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = React.useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current);
        }
      },
      {
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <Container
        className={`mt-5 about-me-container ${isVisible ? "fade-in" : ""}`}
        ref={ref}
      >
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
                As a full-stack software developer, I am passionate about
                creating innovative solutions that solve real-world problems.
                Currently, I am a student at Epicode where I am expanding my
                skills in React and Node.js, with the goal of becoming an expert
                in these technologies. Previously, I worked as a software
                developer for Tricept AG for over a year. During my time there,
                I gained valuable experience in the software development life
                cycle and working collaboratively with a team to deliver quality
                products. However, I wanted to explore the exciting world of
                JavaScript, so I decided to further my education at Epicode. I
                am eager to apply my skills and knowledge in a new role starting
                in June. With a strong foundation in full-stack development and
                experience working in a team environment, I am confident in my
                ability to contribute to any project. Please feel free to
                connect with me to discuss potential opportunities!
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
