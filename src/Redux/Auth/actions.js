import {
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
} from "./actionType";

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});
export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload: payload,
});
export const loginFailure = (errorMessage) => ({
  type: LOGIN_FAILURE,
  payload: errorMessage,
});

export const signUpRequest = () => ({
  type: SIGNUP_REQUEST,
});
export const signUpSuccess = (payload) => ({
  type: SIGNUP_SUCCESS,
  payload: payload,
});
export const signUpFailure = (errorMessage) => ({
  type: SIGNUP_FAILURE,
  payload: errorMessage,
});
