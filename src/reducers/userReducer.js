import {
    SET_USER,
    USER_FAILURE
  } from '../actions/users';

export default function user (state = {}, action) {
  console.log(action);
  switch(action.type) {
    case SET_USER:
      return { ...state, list: action.payload };
    case USER_FAILURE:
      return { ...state, userinfo: false, error: { userinfo: action.payload } };
  }
  return state;
}
