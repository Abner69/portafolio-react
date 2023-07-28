import scrum from "../assets/img/scrum-svgrepo-com.svg";
import figma from "../assets/img/figma-svgrepo-com.svg";
import slack from "../assets/img/slack-icon-svgrepo-com.svg";
import microsoft from "../assets/img/microsoft-windows-svgrepo-com.svg";
import git from "../assets/img/git-svgrepo-com.svg";
import htmlla from "../assets/img/html-5-svgrepo-com.svg";
import cssla from "../assets/img/css-3-svgrepo-com.svg";
import selenium from "../assets/img/selenium-svgrepo-com.svg";
import intellij from "../assets/img/intellij-idea-svgrepo-com.svg";
import vscode from "../assets/img/visual-studio-code-svgrepo-com.svg";
import eclipse from "../assets/img/eclipse-icon-svgrepo-com.svg";
import bash from "../assets/img/bash-icon-svgrepo-com.svg";
import linux from "../assets/img/linux-tux-svgrepo-com.svg";
import nodejss from "../assets/img/nodejs-icon-svgrepo-com.svg";
import arduino from "../assets/img/arduino-svgrepo-com.svg";
import "react-multi-carousel/lib/styles.css";
import { Col, Container, Row } from "react-bootstrap";

export const OthersSkills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="sskill" id="sskills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx2 wow zoomIn">
              <h2>Additional skills</h2>
              <Container responsive={responsive}>
                <Row>
                  <Col>
                    <img src={scrum} alt="Creativty icon" />
                    <h5>Scrum</h5>
                  </Col>
                  <Col>
                    <img src={nodejss} alt="Leadership icon" />
                    <h5>Node.Js</h5>
                  </Col>
                  <Col>
                    <img src={figma} alt="Adaptability icon" />
                    <h5>Figma</h5>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <img src={git} alt="Motivation icon" />
                    <h5>Git</h5>
                  </Col>
                  <Col>
                    <img src={selenium} alt="Teamwork icon" />
                    <h5>Selenium</h5>
                  </Col>
                  <Col>
                    <img src={intellij} alt="Fast Learning icon" />
                    <h5>IntellijIDEA</h5>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <img src={slack} alt="Motivation icon" />
                    <h5>Slack</h5>
                  </Col>
                  <Col>
                    <img src={microsoft} alt="Teamwork icon" />
                    <h5>Office Suite</h5>
                  </Col>
                  <Col>
                    <img src={arduino} alt="Fast Learning icon" />
                    <h5>Arduino</h5>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <img src={htmlla} alt="Motivation icon" />
                    <h5>HTML</h5>
                  </Col>
                  <Col>
                    <img src={cssla} alt="Teamwork icon" />
                    <h5>CSS</h5>
                  </Col>
                  <Col>
                    <img src={vscode} alt="Fast Learning icon" />
                    <h5>Visual Studio Code</h5>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <img src={eclipse} alt="Motivation icon" />
                    <h5>Eclipse IDE</h5>
                  </Col>
                  <Col>
                    <img src={bash} alt="Teamwork icon" />
                    <h5>Bash</h5>
                  </Col>
                  <Col>
                    <img src={linux} alt="Fast Learning icon" />
                    <h5>Linux Systems</h5>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
