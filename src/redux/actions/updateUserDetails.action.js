import AxiosClient from "../../utils/axios-client/axiosClient";

import { userActions } from "../action.type";

export const updateUser = (payload, id) => async (dispatch) => {
  let updateSuccess = false;
  const apiUrl = `users/${id}`;
  dispatch({
    type: userActions.UPDATE_USER_LOADING_STATUS,
    payload: true,
  });
  await AxiosClient.put(apiUrl, payload).then((res) => {
    if (res.status === 200 || res.status === 201) {
      updateSuccess = true;
      dispatch({
        type: userActions.SET_USER_DETAILS,
        payload: res.data,
      });
    }
    dispatch({
      type: userActions.UPDATE_USER_LOADING_STATUS,
      payload: false,
    });
  });
};
