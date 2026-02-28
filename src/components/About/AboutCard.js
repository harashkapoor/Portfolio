import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="tech-blue">Harsh Kapoor</span>{" "}
            from <span className="tech-blue">Thorold, ON</span>.
            <br />
            I recently graduated with a{" "}
            <span className="tech-blue">Bachelor of Science in Computer Science</span> from{" "}
            <span className="tech-blue">Brock University</span>.
            <br />
            I am currently actively seeking full-time opportunities where I can apply my experience in system integration, quality assurance, and building scalable applications.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music 🎧
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            Never give up, keep trying. You only live once so make it count!"{" "}
          </p>
          <footer className="blockquote-footer">Bernard Albertson</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;