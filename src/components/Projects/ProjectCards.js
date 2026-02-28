import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite, CgFileDocument } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  const githubLink = props.ghLink || "https://github.com/harashkapoor";

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        
        {/* Always show the GitHub button */}
        <Button variant="primary" href={githubLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>

        {/* If a paperLink is provided, show the Research Paper button next to it! */}
        {props.paperLink && (
          <Button 
            variant="primary" 
            href={props.paperLink} 
            target="_blank" 
            style={{ marginLeft: "10px" }}
          >
            <CgFileDocument /> &nbsp;
            Paper
          </Button>
        )}
        
        {"\n"}
        {"\n"}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;