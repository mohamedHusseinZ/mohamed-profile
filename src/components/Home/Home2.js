import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            A developer with this skill set bridges the gap between front-end and back-end development, ensuring seamless user experiences and robust server-side functionality. Their expertise in DevOps practices and CI/CD pipelines automates the deployment process, reducing errors and increasing deployment frequency. By leveraging containerization and IaC, they create scalable and consistent environments. Additionally, their focus on performance optimization and scalability ensures applications can grow and perform efficiently under increasing loads. This holistic approach is essential for modern, agile development teams aiming for rapid, reliable, and scalable software delivery 
i am holding Google IT Support Professional Certificates in System Administration and IT Infrastructure Services, as well as IT Security, is a highly skilled IT professional. They possess strong expertise in managing and maintaining IT systems, including both Windows and Linux operating systems, server management, and network infrastructure. They are proficient in cloud services, automation, backup and recovery, and monitoring IT infrastructure.

In the realm of IT security, they are well-versed in cybersecurity principles, threat analysis, and implementing robust security measures for networks and endpoints. They are adept at managing user access, responding to security incidents, and ensuring compliance with regulatory standards. This individual is known for their problem-solving abilities, commitment to continuous learning, and effective communication skills, making them a valuable asset to any organization.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> python, Javascript  Databases, and Google IT Support Professional,System Administration and IT Infrastructure Services and google IT Security </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                DevOps, Networking and IT specialists.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">python</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/mohamedHusseinZ"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/CamirZaKi5?s=09"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="http://www.linkedin.com/in/mohamed-hussein-mohamed-932b3424b"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/camirzaki19?igsh=MTFka2FyODZ6YzA2dA=="
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
