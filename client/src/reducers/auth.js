import { AUTH, LOGOUT, LOADING } from '../constants/actionTypes'

const initialState = { authData: null, isLoading: false, message:''};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {...state, isLoading: action?.payload?.loaderState, message: action?.payload?.message};
    case LOGOUT:
      localStorage.clear()
      return {...state, authData: null}
    case AUTH:
      localStorage.setItem('profile', JSON.stringify({...action?.payload}))
      return {...state, authData: action?.payload}
    default:
      return state;
  }
};
