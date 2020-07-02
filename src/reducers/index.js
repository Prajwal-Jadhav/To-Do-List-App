import { combineReducers } from "redux";

export const addPostToListReducer = (oldTaskList = [], action) => {
  switch (action.type) {
    case "FETCH_ALL_NOTES":
      return action.payload;
    case "CREATE_TASK":
      return [...oldTaskList, action.payload];
    case "CHANGE_COMPLETE_STATUS":
      return oldTaskList.map(task => {
        if (task._id === action.payload._id) {
          return Object.assign({}, task, { completed: !task.completed });
        }

        return task;
      });
    case "DELETE_TASK":
      return oldTaskList.filter(task => task._id !== action.payload._id);
    default:
      return oldTaskList;
  }
};

const inputValueReducer = (oldInputValue = "", action) => {
  if (action.type === "CHANGE_INPUT") {
    oldInputValue = action.payload.value;
    return oldInputValue;
  }

  return oldInputValue;
};

const authReducer = (state = null, action) => {
  switch (action.type) {
    case "FETCH_CURRENT_USER":
      if (!action.payload) return false;
      else return true;
    default:
      return state;
  }
};

export default combineReducers({
  taskList: addPostToListReducer,
  inputValue: inputValueReducer,
  auth: authReducer,
});
