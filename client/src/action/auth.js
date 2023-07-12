import { AUTH, LOADING } from "../constants/actionTypes";
import * as api from "../api/index";

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    dispatch({ type: LOADING, payload: {loaderState: true} });
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, payload: data });
    dispatch({ type: LOADING, payload: {loaderState: false} });
    navigate("/dashboard");
  } catch (error) {
    console.log(error.message);
    dispatch({ type: LOADING, payload: {loaderState: false, message:'Username or passowrd is invalid'} });
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    dispatch({ type: LOADING, payload: {loaderState: true} });
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, payload: data });
    dispatch({ type: LOADING, payload: {loaderState: false} });
    navigate("/dashboard");
  } catch (error) {
    console.log(error);

  }
};
