import React, { Component } from "react";

import InputBar from "./InputBar";
import TaskList from "./TaskList";

export default class Dashboard extends Component {
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
