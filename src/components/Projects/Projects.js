import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Real Estate Booking"
              description="Developed a MongoDB database schema for storing real estate-related data including property details,
              user information, and transactions."
              ghLink="https://github.com/prabhat8701/Real-estate.git"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Crime-Record Management"
              description="Developed MySQL databases and structured data models using PHP to accurately and eﬃciently store
              crime-related information."
              ghLink="https://github.com/prabhat8701/Crime-record-.git"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Fusion"
              description="Online Editor which supports html, css, and js code with instant view of website"
              ghLink="https://github.com/prabhat8701/fusion.git"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Zoom-Clone"
              description="Implement a system for users to sign up, log in, and manage their accounts securely. Develop real-time video conferencing functionality, allowing multiple users to join a meeting, share video, audio, and screens."
              ghLink="https://github.com/prabhat8701/Zoom_Clone.git"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Manufac"
              description="Utility functions to calculate the class-wise mean, median, mode of
              “Flavanoids” for the entire dataset.
              function that helps you create a new property “Gamma” for each point of
              the dataset. “Gamma” can be calculated as Gamma = (Ash * Hue) / Magnesium.
              Thereafter, calculate the class-wise mean, median, mode of “Gamma” for the
              entire dataset"
              ghLink="https://github.com/prabhat8701/Manufac.git"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
