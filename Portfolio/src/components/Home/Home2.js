import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Pranjali Photo.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ABOUT <span className="purple">ME</span>
            </h1>

            <p className="home-about-body">
              I am a <b className="purple">Full Stack Developer</b> and
              <b className="purple"> Machine Learning Enthusiast</b> who loves
              building impactful and scalable applications. 🚀
              <br />
              <br />
              I specialize in combining{" "}
              <b className="purple">Web Development</b> with{" "}
              <b className="purple">Artificial Intelligence</b> to solve
              real-world problems efficiently.
              <br />
              <br />
              My focus is on creating systems that are not just functional but also{" "}
              <b className="purple">smart, optimized, and user-friendly</b>.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-description">
            <h1>
              MY <span className="purple">PROJECTS</span>
            </h1>

            <p className="home-about-body">
              🔹 <b className="purple">Adaptive Edge Detection using PSO & ML</b>
              <br />
              A smart image processing system that uses Machine Learning and
              Particle Swarm Optimization for accurate edge detection.
              <br />
              <br />
              🔹 <b className="purple">Career Compass – Skill to Job Mapping</b>
              <br />
              A full-stack platform that recommends jobs, internships, and
              courses based on user skills using intelligent matching.
              <br />
              <br />
              🔹 <b className="purple">Skill Exchange Platform</b>
              <br />
              A web application where users can exchange skills and connect
              based on mutual learning interests.
              <br />
              <br />
              🔹 <b className="purple">Online Compiler IDE</b>
              <br />
              A browser-based coding environment supporting code execution
              and real-time output.
            </p>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-description">
            <h1>
              MY <span className="purple">SKILLS</span>
            </h1>

            <p className="home-about-body">
              💻 <b className="purple">Programming:</b> Python, JavaScript, SQL
              <br />
              🌐 <b className="purple">Frontend:</b> HTML, CSS, React.js, Bootstrap
              <br />
              ⚙️ <b className="purple">Backend:</b> Django, Flask, REST APIs
              <br />
              🤖 <b className="purple">Machine Learning:</b> Scikit-learn, Image Processing
              <br />
              🛠 <b className="purple">Tools:</b> Git, GitHub, VS Code
              <br />
              ☁️ <b className="purple">Concepts:</b> API Integration, System Design, Optimization
            </p>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONNECT WITH ME</h1>
            <p>Let's build something amazing together 🚀</p>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/rprp14"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://x.com/PranjaliBo29130"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/pranjali-bodke-404111282/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.instagram.com/pranjal_bodke/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
