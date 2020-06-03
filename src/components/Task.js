import React from "react";
import { connect } from "react-redux";
import { changeCompleteStatus, deleteTask } from "../actions/index";

function Task({ task, changeCompleteStatus, deleteTask }) {
  return (
    <div className="Task">
      <div className="task__text__div">
        <input
          type="checkbox"
          id={task.id}
          name="status"
          onChange={() => changeCompleteStatus(task.id)}
        />
        <label
          htmlFor={task.id}
          className={"task__text" + (task.isCompleted ? " crossed-line" : "")}
        >
          {task.text}
        </label>
      </div>
      <i className="fas fa-trash-alt" onClick={() => deleteTask(task.id)}></i>
    </div>
  );
}

export default connect(null, { changeCompleteStatus, deleteTask })(Task);
