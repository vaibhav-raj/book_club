import {
  ADD_BOOK_REQUEST,
  ADD_BOOK_SUCCESS,
  ADD_BOOK_FAILURE,
  GET_ALL_BOOKS_REQUEST,
  GET_ALL_BOOKS_SUCCESS,
  GET_ALL_BOOKS_FAILURE,
  GET_BOOK_REQUEST,
  GET_BOOK_SUCCESS,
  GET_BOOK_FAILURE,
  ORDER_BOOK_REQUEST,
  ORDER_BOOK_SUCCESS,
  ORDER_BOOK_FAILURE,
} from "./actionType";
import axios from "axios";

// action creators

export const getAllBooksRequest = () => ({
  type: GET_ALL_BOOKS_REQUEST,
});
export const getAllBooksSuccess = (payload) => ({
  type: GET_ALL_BOOKS_SUCCESS,
  payload: payload,
});
export const getAllBooksFailure = (errorMessage) => ({
  type: GET_ALL_BOOKS_FAILURE,
  payload: errorMessage,
});

export const getAllBooks = () => async (dispatch) => {
  dispatch(getAllBooksRequest());
  try {
    const { data } = await axios.get(
      `https://vaibhav-api-data.herokuapp.com/todo`
    );
    dispatch(getAllBooksSuccess(data));
  } catch (error) {
    dispatch(getAllBooksFailure(error));
  }
};

export const getBookRequest = () => ({
  type: GET_BOOK_REQUEST,
});
export const getBookSuccess = (payload) => ({
  type: GET_BOOK_SUCCESS,
  payload: payload,
});
export const getBookFailure = (errorMessage) => ({
  type: GET_BOOK_FAILURE,
  payload: errorMessage,
});

export const getBook = (payload) => async (dispatch) => {
  dispatch(getBookRequest());
  try {
    const { data } = await axios.get(
      `https://vaibhav-api-data.herokuapp.com/todo/${payload}`
    );
    dispatch(getBookSuccess(data));
  } catch (error) {
    dispatch(getBookFailure(error));
  }
};

export const addBookRequest = () => ({
  type: ADD_BOOK_REQUEST,
});
export const addBookSuccess = (payload) => ({
  type: ADD_BOOK_SUCCESS,
  payload: payload,
});
export const addBookFailure = (err) => ({
  type: ADD_BOOK_FAILURE,
  payload: err,
});

export const addBook = (payload) => async (dispatch) => {
  dispatch(addBookRequest());
  try {
    const { data } = await axios.post(
      `https://vaibhav-api-data.herokuapp.com/todo`,
      payload
    );
    dispatch(addBookSuccess(data));
  } catch (error) {
    dispatch(addBookFailure(error));
  }
};

export const orderBookRequest = () => ({
  type: ORDER_BOOK_REQUEST,
});
export const orderBookSuccess = (payload) => ({
  type: ORDER_BOOK_SUCCESS,
  payload: payload,
});
export const orderBookFailure = (errorMessage) => ({
  type: ORDER_BOOK_FAILURE,
  payload: errorMessage,
});

export const orderBook = (payload) => async (dispatch) => {
  dispatch(orderBookRequest());
  try {
    const { data } = await axios.post(
      `https://vaibhav-api-data.herokuapp.com/todo`,
      payload
    );
    dispatch(orderBookSuccess(data));
  } catch (error) {
    dispatch(orderBookFailure(error));
  }
};
