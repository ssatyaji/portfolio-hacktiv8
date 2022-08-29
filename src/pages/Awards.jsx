import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";

export default class Awards extends React.Component {
  render() {
    return (
      <div
        className="section container-fluid min-vh-100 d-flex justify-content-center flex-column"
        id="awards"
      >
        <h1>Awards & Certifications</h1>
        <div className="row">
          <div className="col-lg-6 certificate">
            <ul className="px-0">
              <li><FontAwesomeIcon icon={faCertificate} /> Risk Management Certification - Level 1</li>  
              <li><FontAwesomeIcon icon={faCertificate} /> Program Professional Academy - HTML, CSS, JavaScript</li>  
              <li><FontAwesomeIcon icon={faCertificate} /> Belajar Dasar Pemrograman JavaScript</li>  
            </ul>  
          </div>
          <div className="col-lg-6 certificate">
            <ul className="px-0">
              <li><FontAwesomeIcon icon={faCertificate} /> Belajar Membuat Aplikasi Back-End untuk Pemula</li>  
              <li><FontAwesomeIcon icon={faCertificate} /> Belajar Fundamental Front-End Web Development</li>  
              <li><FontAwesomeIcon icon={faCertificate} /> Belajar Dasar Pemrograman Web</li>    
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
