import { userActions } from "../action.type";

const initialState = {
  userDetails: [],
  isUserLoggedIn: false,
  isLoading: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActions.SET_USER_DETAILS:
      return {
        ...state,
        userDetails: action.payload,
      };
    case userActions.GET_USER_DETAILS:
      return {
        ...state,
        userDetails: action.payload,
      };
    case userActions.SET_USER_LOGIN_STATUS:
      return {
        ...state,
        isUserLoggedIn: action.payload,
      };
    case userActions.UPDATE_USER_LOGIN_STATUS:
      return {
        ...state,
        isUserLoggedIn: action.payload,
      };
    case userActions.SET_USER_LOADING_STATUS:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};
