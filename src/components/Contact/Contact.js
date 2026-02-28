import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Button from "react-bootstrap/Button";

function Contact() {
  return (
    <Container fluid className="contact-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Get in <strong className="tech-blue">Touch</strong>
            </h1>
            <p style={{ color: "white" }}>
              I am currently looking for new opportunities. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
            </p>
            
            {/* The Formspree Form */}
            <form
              action="https://formspree.io/f/xbdabzqk" 
              method="POST"
              className="contact-form"
            >
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
              </div>
              <Button type="submit" variant="primary" className="submit-btn">
                Send Message
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;