import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { ExternalLink } from "react-external-link";

export default class About extends React.Component {
  render() {
    return (
      <div
        className="section container-fluid min-vh-100 d-flex justify-content-center flex-column"
        id="about"
      >
        <h1>About</h1>
        <span className="pt-2 pb-2">+628512345678</span>
        <p className="pt-2">
          Hello Wolrd! my name is Sidiq Satyaji
        </p>
        <p className="pt-2">
          I am very passionate in programming and news (Technology). For now, I
          work in a company engaged in Information Technology. My current
          position is Web Developer. Furthermore, I am a fast learner and easily
          adapt to a new technology. I have good communication thus I can work
          as a team or individually.
        </p>
        <ul className="px-0 d-flex">
          <li className="pe-3">
            <ExternalLink href={"https://github.com/ssatyaji"}>
              <FontAwesomeIcon icon={faGithub} />
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href={"https://linkedin.com/in/ssatyaji"}>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </ExternalLink>
          </li>
        </ul>
      </div>
    );
  }
}
