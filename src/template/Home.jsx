import React from "react";
import Navbar from "../components/Navbar";
import About from "../pages/About";
import Experience from "../pages/Experience";
import Education from "../pages/Education";
import Skills from "../pages/Skills";
import Interests from "../pages/Interest";
import Awards from "../pages/Awards";

class Home extends React.Component {
  render() {
    return (
      <div className="row">
        <Navbar />

        <div className="col-10">
          <div
            data-bs-spy="scroll"
            data-bs-target="#navbar-menu"
            data-bs-offset="0"
            tabIndex="0"
          >
              <About />
              <Experience />
              <Education />
              <Skills />
              <Interests />
              <Awards />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
