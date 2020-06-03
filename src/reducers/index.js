import { combineReducers } from "redux";

export const addPostToListReducer = (oldTaskList = [], action) => {
  if (action.type === "CREATE_TASK") {
    return [...oldTaskList, action.payload];
  } else if (action.type === "CHANGE_COMPLETE_STATUS") {
    return oldTaskList.map(task => {
      if (task.id === action.payload.uniqId) {
        return Object.assign({}, task, { isCompleted: !task.isCompleted });
      }

      return task;
    });
  } else if (action.type === "DELETE_TASK") {
    return oldTaskList.filter(task => task.id !== action.payload.deleteId);
  }

  return oldTaskList;
};

const inputValueReducer = (oldInputValue = "", action) => {
  if (action.type === "CHANGE_INPUT") {
    oldInputValue = action.payload.value;
    return oldInputValue;
  }

  return oldInputValue;
};

export default combineReducers({
  taskList: addPostToListReducer,
  inputValue: inputValueReducer,
});
