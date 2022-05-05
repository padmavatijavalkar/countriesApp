import axios from "axios";
import {FETCH_USER_REQUEST,FETCH_USER_SUCCESS,FETCH_USER_FAILURE} from "./types";


export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error
  };
};

export const fetchUsers = (region) => async (dispatch) => {
 
    await axios
      .get(`https://restcountries.com/v2/region/${region}`)
      .then((response) => {
        
        const users = response.data;
      
        dispatch(fetchUsersSuccess(users));}).catch(error => {
        const errorMSG = error.message;
        
        dispatch(fetchUsersFailure(errorMSG));
      });
  };

