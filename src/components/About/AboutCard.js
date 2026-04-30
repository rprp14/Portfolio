import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pranjali Bodke</span>{" "}
            from <span className="purple">Maharashtra, India.</span>
            <br />
            I am a <span className="purple">Full Stack Developer</span> and
            <span className="purple"> Machine Learning Enthusiast</span> who enjoys
            building useful and scalable products.
            <br />
            I love turning ideas into real applications by combining web development,
            automation, and intelligent systems.
            <br />
            <br />
            Apart from tech, some other activities that I love to do include:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling and photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Keep learning, keep growing, and build with purpose!"{" "}
          </p>
          <footer className="blockquote-footer">Pranjali</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
