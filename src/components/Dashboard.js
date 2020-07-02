import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import InputBar from "./InputBar";
import TaskList from "./TaskList";

class Dashboard extends Component {
  componentDidMount() {
    if (this.props.auth === false) {
      this.props.history.push("/");
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.auth !== this.props.auth) {
      if (this.props.auth === false) {
        this.props.history.push("/");
      }
    }
  }

  render() {
    return (
      <>
        <header className="App-header">To-Do-List</header>
        <p className="author__name">created with ❤ by Prajwal Jadhav</p>
        <InputBar />
        <TaskList />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

// Using withRouter to get access to history object
export default withRouter(connect(mapStateToProps)(Dashboard));
