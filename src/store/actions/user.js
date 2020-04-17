import { GET_USERS, GET_ADD_USERS } from "./types";

export const setUsers = users => dispatch => {
  dispatch({
    type: GET_USERS,
    payload: users
  })
};

export const setAddUsers = addUsers => {
  return {
    type: GET_ADD_USERS,
    payload: addUsers
  }
}