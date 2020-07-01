import React, { Component } from "react";

export default class AuthButton extends Component {
  render() {
    return (
      <button className="AuthButton">
        <a href="http://localhost:8000/auth/google">Sign In with Google</a>
      </button>
    );
  }
}
