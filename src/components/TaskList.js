import React from "react";
import { connect } from "react-redux";
import Task from "./Task";

const TaskList = ({ taskList }) => {
  if (taskList.length === 0)
    return <div className="prompt__message">Add a task</div>;

  return (
    <div>
      {taskList.map(task => (
        <Task key={task._id} task={task} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    taskList: state.taskList,
  };
};

export default connect(mapStateToProps)(TaskList);
