import { productActions } from "../action.type";
import AxiosClient from "../../utils/axios-client/axiosClient";

export const getProductCategories = async (dispatch) => {
  const apiUrl = "products/categories";
  AxiosClient.get(apiUrl).then((res) => {
    dispatch({
      type: productActions.GET_PRODUCT_CATEGORIES,
      payload: res.data,
    });
  });
};
