import axios from "axios";

export const createTask = text => async dispatch => {
  const res = await axios.post(
    `${process.env.REACT_APP_API_ADDRESS}/api/v1/notes`,
    {
      text: text,
    },
    { withCredentials: true }
  );

  dispatch({ type: "CREATE_TASK", payload: res.data });
};

export const fetchAllPosts = () => async dispatch => {
  const res = await axios.get(
    `${process.env.REACT_APP_API_ADDRESS}/api/v1/notes`,
    {
      withCredentials: true,
    }
  );

  console.log(res.data);
  dispatch({ type: "FETCH_ALL_NOTES", payload: res.data });
};

export const deleteTask = taskId => async dispatch => {
  const res = await axios.delete(
    `${process.env.REACT_APP_API_ADDRESS}/api/v1/notes/${taskId}`,
    { withCredentials: true }
  );

  console.log(res.data);

  dispatch({ type: "DELETE_TASK", payload: res.data });
};

export const changeInputValue = text => {
  return {
    type: "CHANGE_INPUT",
    payload: {
      value: text,
    },
  };
};

export const changeCompleteStatus = (taskId, status) => async dispatch => {
  const res = await axios.patch(
    `${process.env.REACT_APP_API_ADDRESS}/api/v1/notes/${taskId}`,
    { completed: !status },
    { withCredentials: true }
  );

  console.log(res.data);

  dispatch({ type: "CHANGE_COMPLETE_STATUS", payload: res.data });
};

// To Do change to real heroku address
export const fetchCurrentUser = () => {
  return async dispatch => {
    const res = await axios.get(
      `${process.env.REACT_APP_API_ADDRESS}/auth/current_user`,
      {
        withCredentials: true,
      }
    );

    dispatch({ type: "FETCH_CURRENT_USER", payload: res.data });
  };
};
