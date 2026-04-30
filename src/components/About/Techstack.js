import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiGit,
  DiJava,
  DiJavascript1,
  DiNodejs,
  DiPython,
  DiReact,
} from "react-icons/di";
import { TbBrandGolang } from "react-icons/tb";
import {
  SiAmazonaws,
  SiDjango,
  SiDocker,
  SiFlask,
  SiGithub,
  SiGooglecolab,
  SiLaravel,
  SiLinux,
  SiMysql,
  SiNumpy,
  SiNextdotjs,
  SiPandas,
  SiPhp,
  SiPowerbi,
  SiPostgresql,
  SiPostman,
  SiSolidity,
  SiTensorflow,
  SiVisualstudiocode,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons"><CgCPlusPlus /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiPython /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiJava /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiJavascript1 /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiPhp /></Col>

      <Col xs={4} md={2} className="tech-icons"><DiReact /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiNodejs /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiDjango /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiFlask /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiLaravel /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiSolidity /></Col>
      <Col xs={4} md={2} className="tech-icons"><TbBrandGolang /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiNextdotjs /></Col>

      <Col xs={4} md={2} className="tech-icons"><SiMysql /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiPostgresql /></Col>

      <Col xs={4} md={2} className="tech-icons"><SiAmazonaws /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiDocker /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiLinux /></Col>

      <Col xs={4} md={2} className="tech-icons"><SiTensorflow /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiPandas /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiNumpy /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiGooglecolab /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiPowerbi /></Col>

      <Col xs={4} md={2} className="tech-icons"><DiGit /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiGithub /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiPostman /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiVisualstudiocode /></Col>
    </Row>
  );
}

export default Techstack;
