import React, { Component } from "react";

class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
        <h1 className="LandingPage__header">Notejet</h1>
        <p className="LandingPage__subheader--primary">
          A simple, straight-forward and distraction free way of making
          to-do-list
        </p>
        <p className="LandingPage__subheader--secondary">
          Login now and start making to-do items and become productive
        </p>
      </div>
    );
  }
}

export default LandingPage;
