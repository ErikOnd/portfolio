import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
const ProjectsComponent = () => {
  return (
    <div>
      <Row className="mt-5 mx-0">
        <Col className="mt-5">
          <h2 className="mt-3 mb-5">Projects</h2>
        </Col>
      </Row>
      <Row className="justify-content-center m-0">
        <div className="info-text">
          <a href="https://github.com/ErikOnd?tab=repositories">
            My GitHub Reposetories
            {/* display images here */}
          </a>
        </div>
      </Row>
    </div>
  );
};

export default ProjectsComponent;
