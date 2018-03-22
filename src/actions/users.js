import axios from 'axios';
import { API_URL } from '../components/config';

export const SET_USER = 'SET_USER';
export const USER_FAILURE = 'USER_FAILURE';

export function setUser() {

  return function (dispatch) {
    // console.log('**', axios.get(API_URL));
      axios.get(API_URL)
        .then(response => {
          dispatch({
            type: SET_USER,
            payload: response.data,
          })
        }).catch(error => {
          dispatch({
            type: USER_FAILURE,
            payload: error,
          })
         
        });;
        
      }
}
