import creativity from "../assets/img/creativity-idea-svgrepo-com.svg";
import leadership from "../assets/img/leadership-svgrepo-com.svg";
import adaptability from "../assets/img/settings-cogwheel-svgrepo-com.svg";
import commitment from "../assets/img/loyalty-svgrepo-com.svg";
import teamwork from "../assets/img/teamwork-team-people-business-meeting-group-office-svgrepo-com.svg";
import fast_learning from "../assets/img/thinking-person-svgrepo-com.svg";
import motivation from "../assets/img/victory-motivation-svgrepo-com.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const SoftSkills = () => {
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
            <div className="skill-bx wow zoomIn">
              <h2>Soft Skills</h2>
              <p>
                In the dynamic and evolving field of computer engineering, I
                have developed and refined a diverse range of skills that have
                been crucial to my professional growth. I believe these key
                abilities differentiate me and equip me to take on and solve
                complex challenges. My skills include:
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={creativity} alt="Creativty icon" />
                  <h5>Creativity</h5>
                  <p>
                    My creative mindset allows me to think outside the box,
                    devise innovative solutions to problems, and bring a unique
                    perspective to my work.
                  </p>
                </div>
                <div className="item">
                  <img src={leadership} alt="Leadership icon" />
                  <h5>Leadership</h5>
                  <p>
                    I have honed my leadership abilities by taking initiative in
                    projects and guiding teams towards successful outcomes.
                  </p>
                </div>
                <div className="item">
                  <img src={adaptability} alt="Adaptability icon" />
                  <h5>Adaptability</h5>
                  <p>
                    In the face of new challenges and changing circumstances, I
                    have learned to adapt quickly and effectively.
                  </p>
                </div>
                <div className="item">
                  <img src={commitment} alt="Commitment icon" />
                  <h5>Commitment</h5>
                  <p>
                    I have a strong sense of dedication to my work, always
                    striving for excellence and continuous improvement.
                  </p>
                </div>
                <div className="item">
                  <img src={teamwork} alt="Teamwork icon" />
                  <h5>Teamwork</h5>
                  <p>
                    My collaborative nature and ability to work effectively with
                    diverse teams has led to successful project outcomes.
                  </p>
                </div>
                <div className="item">
                  <img src={fast_learning} alt="Fast Learning icon" />
                  <h5>Fast Learning</h5>
                  <p>
                    I thrive in learning new technologies, paradigms, and
                    concepts quickly which helps me to stay on top of the
                    evolving tech landscape.
                  </p>
                </div>
                <div className="item">
                  <img src={motivation} alt="Motivation icon" />
                  <h5>Motivation</h5>
                  <p>
                    My intrinsic motivation drives me to take on new challenges,
                    constantly push my boundaries, and achieve my professional
                    goals.
                  </p>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="Backgroud blur"
      />
    </section>
  );
};
