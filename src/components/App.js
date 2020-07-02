import React from "react";
import { connect } from "react-redux";
import { Router, Route } from "react-router-dom";

import { fetchCurrentUser } from "../actions/index";
import history from "../history";

import "./App.css";
import Dashboard from "./Dashboard";
import LandingPage from "./LandingPage";
import AuthButton from "./AuthButton";
import LogoutButton from "./LogoutButton";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchCurrentUser();
  }

  render() {
    return (
      <div className="App">
        <Router history={history}>
          {this.props.auth ? <LogoutButton /> : <AuthButton />}
          <Route exact path="/" component={LandingPage} />
          <Route path="/dashboard" component={Dashboard} />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { fetchCurrentUser })(App);
