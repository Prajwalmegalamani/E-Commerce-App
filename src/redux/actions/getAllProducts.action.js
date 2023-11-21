import { productActions } from "../action.type";
import AxiosClient from "../../utils/axios-client/axiosClient";

export const getAllProducts =
  (skip = 0) =>
  async (dispatch) => {
    dispatch({
      type: productActions.SET_LOADING_STATUS,
      payload: true,
    });
    AxiosClient({
      url: `products?limit=30&skip=${skip}`,
      method: "get",
    }).then((res) => {
      dispatch({
        type: productActions.GET_ALL_PRODUCTS,
        payload: { result: res.data, isLoadMore: !!skip },
      });
      dispatch({
        type: productActions.SET_LOADING_STATUS,
        payload: false,
      });
    });
  };
