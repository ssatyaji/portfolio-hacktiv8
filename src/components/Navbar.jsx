import React from "react";
import { HashLink as Link } from "react-router-hash-link";

class Navbar extends React.Component {
  render() {
    return (
      <div className="col-2 bg">
        <div className="d-flex justify-content-center">
          <nav className="nav min-vh-100 d-flex align-center justify-content-center flex-column position-fixed text-center align-items-center">
            <img
              className="border border-secondary border-5 rounded-circle mb-3"
              src={require("../img/profil.jpg")}
              width="200"
              height="200"
              alt=""
            />
            <Link smooth className="nav-link" to={'#about'}>
              <p>ABOUT</p>
            </Link>
            <Link smooth className="nav-link" to={'#experience'}>
              <p>EXPERIENCE</p>
            </Link>
            <Link smooth className="nav-link" to={'#education'}>
              <p>EDUCATION</p>
            </Link>
            <Link smooth className="nav-link" to={'#skills'}>
              <p>SKILLS</p>
            </Link>
            <Link smooth className="nav-link" to={'#interests'}>
              <p>INTERESTS</p>
            </Link>
            <Link smooth className="nav-link" to={'#awards'}>
              <p>AWARDS</p>
            </Link>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;
