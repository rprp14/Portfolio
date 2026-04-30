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
            I am a <span className="purple">Full Stack Developer</span> and{" "}
            <span className="purple">Machine Learning & Data Analytics Enthusiast</span>{" "}
            passionate about building real-world, scalable, and intelligent applications. 🚀
            <br />
            <br />

            I have experience working with{" "}
            <span className="purple">Python, JavaScript, PHP, SQL, and MySQL</span>{" "}
            along with frameworks like{" "}
            <span className="purple">Django, Flask, and React.js</span>.
            <br />
            <br />

            I am also familiar with{" "}
            <span className="purple">Linux, AWS, and Cloud-based systems</span>, 
            and I enjoy working on backend systems, APIs, and automation.
            <br />
            <br />

            My interests include{" "}
            <span className="purple">Machine Learning, Data Analytics, and AI-driven Web Applications</span>.
            <br />
            <br />

            I have developed projects like{" "}
            <span className="purple">Adaptive Edge Detection using PSO & ML</span>,{" "}
            <span className="purple">Career Compass (Skill-to-Job Platform)</span>, and{" "}
            <span className="purple">Skill Exchange Web Application</span>.
            <br />
            <br />

            Apart from tech, some activities that I love include:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies & tools
            </li>
            <li className="about-activity">
              <ImPointRight /> Building innovative projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling & photography
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build smart solutions. Keep learning. Stay consistent." ⚡
          </p>
          <footer className="blockquote-footer">Pranjali</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;