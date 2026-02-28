import React from "react";
import { Row } from "react-bootstrap";

function Toolstack() {
  const tools = [
    { icon: "💻", name: "IntelliJ IDEA" },
    { icon: "🔀", name: "Git" },
    { icon: "📝", name: "Visual Studio" },
    { icon: "🟢", name: "Node.js" },
    { icon: "🚂", name: "Express" },
    { icon: "🐘", name: "PostgreSQL" },
    { icon: "🚀", name: "Postman" },
    { icon: "🐛", name: "Defect Tracking" }
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <div className="tech-pill-container">
        {tools.map((tool, index) => (
          <div className="tech-pill" key={index}>
            <span className="tech-icon">{tool.icon}</span>
            <span className="tech-name">{tool.name}</span>
          </div>
        ))}
      </div>
    </Row>
  );
}

export default Toolstack;