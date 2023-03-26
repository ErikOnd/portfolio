import React from "react";
import { Col, Row, Form, Button, Container, Image } from "react-bootstrap";
import { useState } from "react";

const ContactComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
  };

  return (
    <div>
      <Container className="pb-5">
        <Row className="mt-5 mx-0">
          <Col className="mt-5">
            <h2 className="mt-3 mb-5">Get in touch</h2>
          </Col>
        </Row>
        <Row className="justify-content-around align-items-center">
          <Image
            src="https://res.cloudinary.com/dyy38u8x7/image/upload/v1679845249/portfolio/kindpng_3938892_yfmmkr.png"
            alt="get in touch logo"
            className="mail-logo mb-5"
            fluid
          ></Image>

          <Form onSubmit={handleSubmit} className="text-left contact-form">
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Send
            </Button>
          </Form>
        </Row>
      </Container>
    </div>
  );
};

export default ContactComponent;
