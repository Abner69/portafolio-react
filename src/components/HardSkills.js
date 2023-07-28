import java from "../assets/img/java-iconsvg.svg";
import python from "../assets/img/python-icon.svg";
import clanguaje from "../assets/img/c-svgrepo-com.svg";
import csharp from "../assets/img/c-sharp-svgrepo-com.svg";
import javascriptlang from "../assets/img/javascript-svgrepo-com.svg";
import kotlinlag from "../assets/img/kotlin-svgrepo-com.svg";
import angulaframe from "../assets/img/angular-icon-svgrepo-com.svg";
import reactframe from "../assets/img/react-svgrepo-com.svg";
import django from "../assets/img/django-icon-svgrepo-com.svg";
import mysqldata from "../assets/img/mysql-svgrepo-com.svg";
import postgrest from "../assets/img/postgresql-svgrepo-com.svg";
import mongo from "../assets/img/mongodb-svgrepo-com.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const HardSkills = () => {
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
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx1 wow zoomIn">
              <h2>Hard Skills</h2>
              <p>
                In the ever-evolving tech industry, I have amassed a strong set
                of technical skills through my education and work experience.
                These skills have equipped me to tackle complex challenges and
                effectively contribute to the development and execution of
                software solutions. Here's an overview of my technical
                proficiencies:
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={clanguaje} alt="C languaje" />
                  <h5>C</h5>
                  <p>I've worked with C languaje for over five years.</p>
                </div>
                <div className="item">
                  <img src={java} alt="Java languaje" />
                  <h5>Java</h5>
                  <p>
                    I have over three years of experience working with Java.
                  </p>
                </div>
                <div className="item">
                  <img src={python} alt="Python languaje" />
                  <h5>Python</h5>
                  <p>I've worked with Python for over three years.</p>
                </div>
                <div className="item">
                  <img src={javascriptlang} alt="Javascript languaje" />
                  <h5>Javascript</h5>
                  <p>
                    I've worked with Javascript languaje for over three year.
                  </p>
                </div>
                <div className="item">
                  <img src={csharp} alt="C# languaje" />
                  <h5>C#</h5>
                  <p>I've worked with C# languaje for over one year.</p>
                </div>
                <div className="item">
                  <img src={kotlinlag} alt="Kotlin languaje" />
                  <h5>Kotlin</h5>
                  <p>I've worked with Kotlin languaje for over one year.</p>
                </div>
                <div className="item">
                  <img src={angulaframe} alt="Angular framework" />
                  <h5>Angular</h5>
                  <p>I've worked with Angular Framework for over two years.</p>
                </div>
                <div className="item">
                  <img src={reactframe} alt="React framework" />
                  <h5>React</h5>
                  <p>I've worked with React Framework for over two years.</p>
                </div>
                <div className="item">
                  <img src={django} alt="Django framework" />
                  <h5>Django</h5>
                  <p>I've worked with Django Framework for over two years.</p>
                </div>
                <div className="item">
                  <img src={mysqldata} alt="MySQL database" />
                  <h5>MySQL</h5>
                  <p>I've worked with MySQL Database for over three years.</p>
                </div>
                <div className="item">
                  <img src={postgrest} alt="PostgreSQL database" />
                  <h5>PostgreSQL</h5>
                  <p>I've worked with MySQL Database for over one year.</p>
                </div>
                <div className="item">
                  <img src={mongo} alt="Mongo database" />
                  <h5>MongoDB</h5>
                  <p>I've worked with MongoDB Database for over one year.</p>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
