import AxiosClient from "../../utils/axios-client/axiosClient";
import { productActions } from "../action.type";

export const getSearchedProducts =
  (skip = 0, search) =>
  async (dispatch) => {
    dispatch({
      type: productActions.SET_LOADING_STATUS,
      payload: true,
    });
    const apiUrl = `products${
      search ? "/search?q=" + search + "&" : "?"
    }limit=30&skip=${skip}`;
    AxiosClient.get(apiUrl).then(async (res) => {
      await dispatch({
        type: productActions.GET_SEARCHED_PRODUCTS,
        payload: { result: res.data, isLoadMore: !!skip },
      });
      await dispatch({
        type: productActions.SET_LOADING_STATUS,
        payload: false,
      });
    });
  };
