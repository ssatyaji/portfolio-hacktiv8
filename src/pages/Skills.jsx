import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default class Skills extends React.Component {
  render() {
    return (
      <div
        className="section container-fluid min-vh-100 d-flex justify-content-center flex-column"
        id="skills"
      >
        <h1>Skills</h1>
        <div className="row">
          <div className="col-lg-6">
            <ul className="px-0">
              <li>Interest</li>
              <li><FontAwesomeIcon icon={faCircleCheck} /> Frontend Development</li>
              <li><FontAwesomeIcon icon={faCircleCheck} /> Backend Development</li>
            </ul>
          </div>
          <div className="col-lg-6">
            <ul className="px-0">
              <li>Programming Language</li>
              <li><FontAwesomeIcon icon={faCircleCheck} /> Javascript</li>
              <li><FontAwesomeIcon icon={faCircleCheck} /> Java</li>
              <li><FontAwesomeIcon icon={faCircleCheck} /> PHP</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
