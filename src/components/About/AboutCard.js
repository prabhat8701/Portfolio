import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Prabhat Singh </span>
            from <span className="purple"> Arrah Bihar, India.</span>
            <br />
            I have completed B.E in Computer science engineering at Chandigarh University.
            <br />
            My passion is to develop innovative and user friendly applications that can make a real difference in the
            Currently working as a Web Developer and passionate about learning new technologies.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Prabhat</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
