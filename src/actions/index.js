import { axiosWithAuth } from "../utils/axiosWithAuth";

export const ADD_CLASS = "ADD_CLASS";
export const SCHEDULE_CLASS = "SCHEDULE_CLASS";
export const UNSCHEDULE_CLASS = "UNSCHEDULE_CLASS";
export const EDIT_CLASS = "EDIT_CLASS";
export const DELETE_CLASS = "DELETE_CLASS";

export const LOGOUT = "LOGOUT";
export const ADD_USER = "ADD_USER";
export const REMOVE_USER = "REMOVE_USER";

export const START_FETCHING = "START_FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const FETCHCAT_SUCCESS = "FETCHCAT_SUCCESS";
export const FETCHCLASS_SUCCESS = "FETCHCLASS_SUCCESS";

export const addClass = newClass => {
  return { type: ADD_CLASS, payload: newClass };
};

export const scheduleClass = scheduleClass => {
  return { type: SCHEDULE_CLASS, payload: scheduleClass };
};
export const unscheduleClass = unscheduleClass => {
  return { type: UNSCHEDULE_CLASS, payload: unscheduleClass };
};
export const deleteClass = id => {
  return { type: DELETE_CLASS, payload: id };
};

export const fetchClasses = () => dispatch => {
  dispatch({ type: START_FETCHING });
  axiosWithAuth()
    .get("/api/classes")
    .then(res => {
      console.log(res, "CLASS get");
      dispatch({ type: FETCHCLASS_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
};

export const editClass = editClass => {
  return { type: EDIT_CLASS, payload: editClass };
};

export const logOut = () => {
  return { type: LOGOUT };
};

export const addUser = user => {
  return { type: ADD_USER, payload: user };
};

export const removeUser = user => {
  return { type: REMOVE_USER };
};
