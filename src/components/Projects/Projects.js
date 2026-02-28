import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Images
import recipica from "../../Assets/Projects/recipica.png";
import resumexImg from "../../Assets/Projects/resumex.png";
import testbedImg from "../../Assets/Projects/testbed.png";

// Import your Research Paper PDF here!
import testbedPaper from "../../Assets/Projects/5G_Research_Paper.pdf";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="tech-blue">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          {/* Project 1: 5G Testbed */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={testbedImg} 
              isBlog={false}
              title="Performance Monitoring of Cloud-Native 5G Core Network"
description="Deployed a Kubernetes-based Free5GC testbed to explore 5G core network observability. Configured Prometheus and Grafana, achieving 99.9% metric collection reliability and reducing mean time to detect (MTTD) by 60%."              ghLink="https://github.com/yathy1040/free5gc-k8s" 
              paperLink={testbedPaper} 
            />
          </Col>

          {/* Project 2: COSC-4P02-Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resumexImg} 
              isBlog={false}
              title="COSC-4P02-Project"
              description="Designed and implemented a comprehensive test strategy across the full development lifecycle. Wrote 65+ Jest test cases for automated execution of critical platform functionality, including payment flows and user registration."
              ghLink="https://github.com/RohittPillai/COSC-4P02-PROJECT" 
            />
          </Col>

          {/* Project 3: Recipica */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recipica} 
              isBlog={false}
              title="Java Mobile App - Recipica"
              description="Developed a modular Android application using Java and Object-Oriented Programming principles. Integrated external APIs using Retrofit for real-time data exchange, building robust features including keyword search, tag-based filtering, and recipe navigation."
              ghLink="https://github.com/harashkapoor/recipica" 
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;