import "./App.css";
import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./template/Home";
import { Route, Routes } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    );
  }
}

export default App;
