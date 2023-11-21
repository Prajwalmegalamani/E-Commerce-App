import AxiosClient from "../../utils/axios-client/axiosClient";

import { userActions, productActions } from "../action.type";

export const userLogin = (payload) => async (dispatch) => {
  let returnResponse = { status: false, data: {} };
  const apiUrl = "auth/login";
  dispatch({
    type: userActions.SET_USER_LOADING_STATUS,
    payload: true,
  });
  await AxiosClient.post(apiUrl, payload).then((res) => {
    if (res.status === 200 || res.status === 201) {
      dispatch({
        type: userActions.SET_USER_LOGIN_STATUS,
        payload: true,
      });
      dispatch({
        type: productActions.SET_MODAL_STATE,
        payload: false,
      });
      dispatch({
        type: userActions.SET_USER_DETAILS,
        payload: res.data,
      });
      returnResponse.status = true;
      returnResponse.data = res.data;
    }
    dispatch({
      type: userActions.SET_USER_LOADING_STATUS,
      payload: false,
    });
  });
  return returnResponse;
};
