import axios from "axios";

export const createTask = (text, randomIdGenerator) => {
  return {
    type: "CREATE_TASK",
    payload: {
      text: text,
      id: randomIdGenerator(),
      isCompleted: false,
    },
  };
};

export const deleteTask = id => {
  return {
    type: "DELETE_TASK",
    payload: {
      deleteId: id,
    },
  };
};

export const changeInputValue = text => {
  return {
    type: "CHANGE_INPUT",
    payload: {
      value: text,
    },
  };
};

export const changeCompleteStatus = id => {
  return {
    type: "CHANGE_COMPLETE_STATUS",
    payload: {
      uniqId: id,
    },
  };
};

// To Do change to real heroku address
export const fetchCurrentUser = () => {
  return async dispatch => {
    const res = await axios.get("http://localhost:8000/auth/current_user", {
      withCredentials: true,
    });
    console.log(res);

    dispatch({ type: "FETCH_CURRENT_USER", payload: res.data });
  };
};
