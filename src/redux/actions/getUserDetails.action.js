import { userActions } from "../action.type";
import AxiosClient from "../../utils/axios-client/axiosClient";

export const getUserDetails = (id) => async (dispatch) => {
  AxiosClient.get(`users/${id}`).then((res) => {
    dispatch({
      type: userActions.GET_USER_DETAILS,
      payload: res.data
    });
  });
};
