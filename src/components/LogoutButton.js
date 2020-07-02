import React, { Component } from "react";

export default class LogoutButton extends Component {
  render() {
    return (
      <button className="AuthButton">
        <a href="http://localhost:8000/auth/logout">Logout</a>
      </button>
    );
  }
}
