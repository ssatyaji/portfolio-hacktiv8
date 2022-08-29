import React from "react";

export default class Education extends React.Component {
  render() {
    return (
      <div
        className="section container-fluid min-vh-100 d-flex justify-content-center flex-column"
        id="education"
      >
        <h1>Education</h1>
        <div className="row border-bottom pt-2">
          <div className="col-lg-10 experience">
            <h3>Universitas Amikom Yogyakarta</h3>
            <p>Majoring in Informatics Engineering</p>
          </div>
          <div className="col-lg-2 date-exp">
            <p>2014 - 2018</p>
          </div>
        </div>
        <div className="row border-bottom pt-2">
          <div className="col-lg-10 experience">
            <h3>SMK Muhammadiyah 1 Klaten Utara</h3>
            <p>Computer and Network Engineering</p>
          </div>
          <div className="col-lg-2 date-exp">
            <p>2011 - 2014</p>
          </div>
        </div>
      </div>
    );
  }
}
