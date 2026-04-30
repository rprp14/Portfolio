import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import Particle from "../Particle";

// Import images (make sure these exist inside src/Assets/Projects/)
import crimeRateImg from "../../Assets/Projects/Crime-rate.png";
import fitnessTrackerImg from "../../Assets/Projects/FitnessTracker.png";
import notesImg from "../../Assets/Projects/tipCalc.png";
import weatherCalcImg from "../../Assets/Projects/Weathercal.png";
import amazonPrimeImg from "../../Assets/Projects/Amazon.png";
import psoEdgeImg from "../../Assets/Projects/Pso.png";
import courierImg from "../../Assets/Projects/Currier.png";
import skillMartImg from "../../Assets/Projects/skillmart.png";
import resultManImg from "../../Assets/Projects/ResultMan.png";
import vrmImg from "../../Assets/Projects/vrm.png";
import onlineCompilerImg from "../../Assets/Projects/OnlineCompiler.png";
import blogImg from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={crimeRateImg}
              title="Crime Rate Predictor"
              description="Predicts crime rates with graphs, charts, and heatmaps based on selected country, state, cities, time, and crime type."
              ghLink="https://github.com/rprp14/Crime-Rate"
              isBlog={false}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={fitnessTrackerImg}
              title="Fitness Tracker"
              description="A web app to track fitness activities, calories, and workouts with stats visualization."
              ghLink="https://github.com/rprp14/Fitness-Tracker"
              isBlog={false}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={notesImg}
              title="Tip Calculator"
              description="An easy tip calculator for quick bill splitting."
              ghLink="https://github.com/rprp14/Tip-Calculator"
              isBlog={false}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={weatherCalcImg}
              title="Weather Calculator"
              description="A web app that fetches weather data and displays it with analytics."
              ghLink="https://github.com/rprp14/Weather-Calculator"
              isBlog={false}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={amazonPrimeImg}
              title="Amazon Prime Dashboard"
              description="Interactive dashboard analyzing Amazon Prime Video content, highlighting insights like total titles, ratings, genres, countries, and release year trends."
              ghLink="https://github.com/rprp14/Amazon-prime-Dashboard"
              isBlog={false}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={psoEdgeImg}
              title="PSO Edge Detection"
              description="Edge detection technique using Particle Swarm Optimization (PSO) combined with image sharpening filters, implemented in Python."
              ghLink="https://github.com/rprp14/PSO_Edge_Detection"
              isBlog={false}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={courierImg}
              title="Courier Management System"
              description="A courier management project for handling booking, delivery tracking, and shipment updates."
              ghLink="#"
              isBlog={false}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={skillMartImg}
              title="Skill Mart"
              description="A platform for managing and showcasing skills, courses, or learning resources."
              ghLink="#"
              isBlog={false}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={resultManImg}
              title="Student Result System"
              description="A student result management system for storing and viewing marks, grades, and results."
              ghLink="#"
              isBlog={false}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={vrmImg}
              title="VRM"
              description="A virtual resource management project for organizing and monitoring system records."
              ghLink="#"
              isBlog={false}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={onlineCompilerImg}
              title="Online Compiler"
              description="A browser-based online compiler and code editor for writing and testing code quickly."
              ghLink="#"
              isBlog={false}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={blogImg}
              title="Personal Blog"
              description="A personal blog project for sharing posts, ideas, and updates."
              ghLink="#"
              isBlog={false}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
