import { combineReducers } from "redux";

export const addPostToListReducer = (oldTaskList = [], action) => {
  switch (action.type) {
    case "FETCH_ALL_NOTES":
      return action.payload;
    case "CREATE_TASK":
      return [...oldTaskList, action.payload];
    case "CHANGE_COMPLETE_STATUS":
      return oldTaskList.map(task => {
        if (task.id === action.payload.uniqId) {
          return Object.assign({}, task, { isCompleted: !task.isCompleted });
        }

        return task;
      });
    case "DELETE_TASK":
      return oldTaskList.filter(task => task.id !== action.payload.deleteId);
    default:
      return oldTaskList;
  }
};

//   if (action.type === "CREATE_TASK") {
//     return [...oldTaskList, action.payload];
//   } else if (action.type === "CHANGE_COMPLETE_STATUS") {
//     return oldTaskList.map(task => {
//       if (task.id === action.payload.uniqId) {
//         return Object.assign({}, task, { isCompleted: !task.isCompleted });
//       }

//       return task;
//     });
//   } else if (action.type === "DELETE_TASK") {
//     return oldTaskList.filter(task => task.id !== action.payload.deleteId);
//   }

//   return oldTaskList;
// };

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
