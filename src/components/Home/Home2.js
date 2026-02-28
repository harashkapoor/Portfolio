import React, { Profiler } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile.png";
import Tilt from "react-parallax-tilt";
import Button from "react-bootstrap/Button";
import {
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="tech-blue"> INTRODUCE </span> MYSELF
            </h1>
           <p className="home-about-body">
         I’m a <span className="tech-blue">Software Engineer</span> and recent <span className="tech-blue">Computer Science graduate</span> from <span className="tech-blue">Brock University</span>.
             <br />
             <br />
           I love transforming complex requirements into reliable, scalable systems, with experience in system integration, quality assurance, and network observability.
           <br />
           <br />
           I am currently <span className="tech-blue">actively seeking full-time opportunities</span> to apply my skills in automated testing and cloud-native environments.
             <br />
              <br />
           I am fluent in classics like
             <i>
    <b className="tech-blue"> Java, Python and SQL. </b>
  </i>
</p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid rounded-circle" alt="Harsh Kapoor" />
            </Tilt>
          </Col>
        </Row>
        
        {/* --- NEW CONTACT FORM SECTION --- */}
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME <span className="tech-blue">ON</span></h1>
            <p>
              Feel free to <span className="tech-blue">connect </span>with me
            </p>
            
            <Row style={{ justifyContent: "center" }}>
              <Col md={6}>
                <form
                  action="https://formspree.io/f/xbdabzqk" 
                  method="POST"
                  className="home-contact-form"
                >
                  <div className="form-group mb-3">
                    <input type="text" name="name" className="form-control" placeholder="Name" required />
                  </div>
                  <div className="form-group mb-3">
                    <input type="email" name="email" className="form-control" placeholder="Email" required />
                  </div>
                  <div className="form-group mb-3">
                    <textarea name="message" className="form-control" rows="4" placeholder="Message" required></textarea>
                  </div>
                  <Button type="submit" variant="primary" className="submit-btn">
                    Send Message
                  </Button>
                </form>
              </Col>
            </Row>

            <ul className="home-about-social-links" style={{ marginTop: "25px" }}>
              <li className="social-icons">
                <a
                  href="https://github.com/harashkapoor"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/harashkapoor"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:hk20ob@brocku.ca"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;