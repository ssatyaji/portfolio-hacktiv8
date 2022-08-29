import React from "react";

export default class Experience extends React.Component {
  render() {
    return (
      <div
        className="section container-fluid min-vh-100 d-flex justify-content-center flex-column"
        id="experience"
      >
        <h1 className="pb-4">Experience</h1>
        <div className="row border-bottom pt-2">
          <div className="col-lg-10 experience">
            <h3>PT. Bank Permata Tbk. (Fulltime)</h3>
            <p>Web Developer</p>
          </div>
          <div className="col-lg-2 date-exp">
            <p>Oct 2021 - Now</p>
          </div>
        </div>
        <div className="row border-bottom pt-2">
          <div className="col-lg-10 experience">
            <h3>PT. Bank Negara Indonesia Tbk. (Contract)</h3>
            <p>Web Developer</p>
          </div>
          <div className="col-lg-2 date-exp">
            <p>Sep 2019 - Oct 2021</p>
          </div>
        </div>
        <div className="row border-bottom pt-2">
          <div className="col-lg-10 experience">
            <h3>PT. Mitra Integrasi Informatika (Contract)</h3>
            <p>Application Developer Jr.</p>
          </div>
          <div className="col-lg-2 date-exp">
            <p>Jul 2019 - Oct 2021</p>
          </div>
        </div>
      </div>
    );
  }
}
