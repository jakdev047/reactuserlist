import { GET_USERS } from "./types";

export const setUsers = users => dispatch => {
  dispatch({
    type: GET_USERS,
    payload: users
  })
}