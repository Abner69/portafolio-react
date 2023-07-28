import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { SoftSkills } from "./components/SoftSkills";
import { HardSkills } from "./components/HardSkills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { OthersSkills } from "./components/OthersSkills";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Abner's Portfolio</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="My Portfolio" />
      </Helmet>
      <NavBar />
      <Banner />
      <SoftSkills />
      <HardSkills />
      <OthersSkills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
