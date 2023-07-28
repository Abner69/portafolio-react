import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import secprojImg1 from "../assets/img/secproject-img1.png";
import secprojImg2 from "../assets/img/secproject-img2.png";
import secprojImg3 from "../assets/img/secproject-img3.png";
import secprojImg4 from "../assets/img/secproject-img4.png";
import secprojImg5 from "../assets/img/secproject-img5.png";
import certifImg1 from "../assets/img/certif-img1.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "UI/UX Development",
      description:
        "Development of UI/UX for a mobile and web-based university social networking platform.",
      imgUrl: projImg1,
    },
    {
      title: "Point of Sale Development",
      description:
        "Point of Sale Development using Java, Maven, Spring, JUnit, Primefaces, MySQL, and Agile methodologies",
      imgUrl: projImg2,
    },
    {
      title: "Use Case Diagram Generator",
      description:
        "Planning, design, and development of a Class Diagram Generator from Use Case Documents using Python and Django for the backend, as well as StanzaNLP for language analysis, and Bootstrap for the frontend.",
      imgUrl: projImg3,
    },
    {
      title:
        "Software application designed for the educational staff of a university",
      description:
        "Development of a Mobile and Web Application for teachers of the Technological University of Mixteca, developed using Android Studio for mobile and Angular for the web platform.",
      imgUrl: projImg4,
    },
    {
      title: "UI/UX Development",
      description:
        "UI/UX development and programming of a project management platform for a company. The designs were created and the platform was programmed using Angular with Typescript.",
      imgUrl: projImg5,
    },
  ];
  const secprojects = [
    {
      title: "Client/Server communication project",
      description:
        "Developed a client/server communication system programmed in C, leveraging TCP protocols for effective data transmission and network communication.",
      imgUrl: secprojImg1,
    },
    {
      title: "Arduino Calculator Project",
      description:
        "Developed a calculator using Arduino, programmed in C. The project involved the use of a matrix keypad for input and a LED display for output, enhancing my skills in hardware interfacing and embedded system programming.",
      imgUrl: secprojImg2,
    },
    {
      title: "My Portfolio",
      description:
        "Designed, developed, and deployed my personal portfolio website utilizing React for the development. This project showcases my skills, experiences, and projects, serving as a comprehensive online resume and personal brand representation.",
      imgUrl: secprojImg3,
    },
    {
      title: "Video game Development",
      description:
        "Developed a video game using the Unity platform. Involved in both the design and programming stages, utilizing C# for game logic and functionality, demonstrating my skills in game development and object-oriented programming.",
      imgUrl: secprojImg4,
    },
    {
      title: "Video game to demonstrate the use of TCP/IP",
      description:
        "Development of a local multiplayer video game specifically designed to demonstrate the use of TCP/IP. The game was programmed purely in C, with SDL used for graphics rendering",
      imgUrl: secprojImg5,
    },
  ];
  const certifications = [
    {
      title: "Scrum Foundation Professional Certificate SFPC",
      description:
        "On August 3rd, 2022, I obtained my Scrum Foundation Professional Certificate (SFPC).",
      imgUrl: certifImg1,
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I have been involved in numerous projects spanning various
                    areas of computer science, such as UI/UX, AI, point-of-sale
                    development using agile methodologies, embedded systems
                    projects, and more.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Principal Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Secondary Projecs</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Certifications</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                        <p>Main projects I have participated in</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {secprojects.map((secproject, index) => {
                            return <ProjectCard key={index} {...secproject} />;
                          })}
                        </Row>
                        <p>
                          Secondary, personal, and academic projects, from which
                          I have learned to handle most of the languages and
                          tools I have mentioned in my Portfolio and Resume.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {certifications.map((certification, index) => {
                            return (
                              <ProjectCard key={index} {...certification} />
                            );
                          })}
                        </Row>
                        <p>Certifications I possess</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background blur"
      ></img>
    </section>
  );
};
