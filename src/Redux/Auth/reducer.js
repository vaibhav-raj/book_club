import {
    LOGIN_REQUEST,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
} from "./actionType";

const initialState = {
    isAuth: false,
    user: {},
    isError: false,
    isLoading: false,
    token: "",
};

export const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                isAuth: true,
                user: payload.user,
                token: payload.token,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            };

        case SIGNUP_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
            };
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                token: payload,
            };
        case SIGNUP_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            };

        default:
            return state;
    }
};
