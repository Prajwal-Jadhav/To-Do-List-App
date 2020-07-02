import React, { Component } from "react";

export default class AuthButton extends Component {
  render() {
    return (
      <button className="AuthButton">
        <a href={`${process.env.REACT_APP_API_ADDRESS}/auth/google`}>
          Sign In with Google
        </a>
      </button>
    );
  }
}
