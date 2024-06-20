import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">mohamed hussein</span>
            from <span className="purple"> Nairobi, kenya.</span>
            <br />
            As an aspiring full-stack developer, I've cultivated a robust skill set through rigorous academic coursework, personal projects, and self-directed learning..
            <br />
            • Aspiring Software Engineer with a solid foundation in JavaScript, 
Python, and various web development frameworks, gained through 
personal projects and self-directed learning. Profcient in technologies 
such as React, Flask, Django, FastAPI, and PostgreSQL. Experienced 
in system administration, IT infrastructure services,Networking, virtualization, 
containerization (Docker, Kubernetes), and CI/CD (Jenkins, GitLab). 
Passionate about creating effcient and scalable applications, with a 
commitment to continuous learning and contributing to open-source 
projects. Seeking an entry-level position to apply my skills and 
contribute to impactful projects.

            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> reading books and watch movies
            </li>
            <li className="about-activity">
              <ImPointRight /> painting
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">zaki</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
