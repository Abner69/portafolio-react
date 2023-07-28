import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import wsp from "../assets/img/whatsapp-social-media-svgrepo-com.svg";
import gmail from "../assets/img/official-gmail-icon-2020-.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <Row>
                    <Col>
                      <button
                        onClick={(event) =>
                          (window.location.href = "https://wa.me/529542023998")
                        }
                      >
                        <img src={wsp} alt="Whatsapp" />
                        <h5>Whatsapp</h5>
                      </button>
                    </Col>
                    <Col>
                      <button
                        onClick={(event) =>
                          (window.location.href =
                            "mailto:abnercd1299@gmail.com")
                        }
                      >
                        <img src={gmail} alt="Whatsapp" />
                        <h5>Gmail</h5>
                      </button>
                    </Col>
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
