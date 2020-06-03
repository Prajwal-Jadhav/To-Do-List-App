import React from "react";

import "./App.css";
import InputBar from "./InputBar";
import TaskList from "./TaskList";

function App() {
  return (
    <div className="App">
      <header className="App-header">To-Do-List</header>
      <p className="author__name">created with ❤ by Prajwal Jadhav</p>
      <InputBar />
      <TaskList />
    </div>
  );
}

export default App;
