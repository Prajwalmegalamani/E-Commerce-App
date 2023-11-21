import AxiosClient from "../../utils/axios-client/axiosClient";

import { SET_LOADING_STATUS, userActions } from "../action.type";

export const userRegistration = (payload) => async (dispatch) => {
  console.log("userRegistration");
  let registrationSuccess = false;
  const apiUrl = "users/add";
  dispatch({
    type: userActions.SET_USER_LOADING_STATUS,
    payload: true,
  });
  await AxiosClient.post(apiUrl, payload).then((res) => {
    if (res.status === 200 || res.status === 201) {
      registrationSuccess = true;
    }
    dispatch({
      type: userActions.SET_USER_LOADING_STATUS,
      payload: false,
    });
  });
  return registrationSuccess;
};
