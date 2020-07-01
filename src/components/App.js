import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

import { fetchCurrentUser } from "../actions/index";

import "./App.css";
import Dashboard from "./Dashboard";
import LandingPage from "./LandingPage";
import AuthButton from "./AuthButton";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchCurrentUser();
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <AuthButton />
          <Route exact path="/" component={LandingPage} />
          <Route path="/dashboard" component={Dashboard} />
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, { fetchCurrentUser })(App);
