import React, { Component } from "react";

export default class LogoutButton extends Component {
  render() {
    return (
      <button className="AuthButton">
        <a href={`${process.env.REACT_APP_API_ADDRESS}/auth/logout`}>Logout</a>
      </button>
    );
  }
}
