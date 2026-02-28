import React from "react";
import { Row } from "react-bootstrap";

function Techstack() {
  const skills = [
    { icon: "☕", name: "Java" },
    { icon: "📜", name: "JavaScript/TypeScript" },
    { icon: "🐍", name: "Python" },
    { icon: "🗄️", name: "SQL" },
    { icon: "🐧", name: "Linux Shell Scripting" },
    { icon: "📡", name: "5G & LTE" },
    { icon: "📶", name: "W-CDMA" },
    { icon: "☸️", name: "Kubernetes" },
    { icon: "🔥", name: "Prometheus" },
    { icon: "📊", name: "Grafana" },
    { icon: "🃏", name: "Jest" },
    { icon: "⚙️", name: "System Integration" }
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <div className="tech-pill-container">
        {skills.map((skill, index) => (
          <div className="tech-pill" key={index}>
            <span className="tech-icon">{skill.icon}</span>
            <span className="tech-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </Row>
  );
}

export default Techstack;