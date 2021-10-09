import {
    LOGIN_REQUEST,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
} from "./actionType";
import axios from 'axios'
import swal from 'sweetalert';


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

export const login = payload => async dispatch => {
    console.log('payload:', payload)
    dispatch(loginRequest())
    try {
        const { data } = await axios.post(`http://localhost:5000/api/v1/auth/login`, payload)
        console.log('data:', data)
        dispatch(loginSuccess())
    }
    catch (err) {
        dispatch(loginFailure(err))
    }
}

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

export const signup = payload => async dispatch => {
    dispatch(signUpRequest())
    try {
        const { data } = await axios.post(`http://localhost:5000/api/v1/auth/signup`, payload)
        // console.log('data:', data)
        if (data.token) {
            swal({
                title: "Account created successfully!",
                icon: "info",
                button: "Okay",
            });
        }
        else {

        }
        dispatch(signUpSuccess(data.token))
    }
    catch (err) {
        console.log('err:', err.message)
        dispatch(signUpFailure(err))
    }
}
