import { productActions } from "../action.type";
import AxiosClient from "../../utils/axios-client/axiosClient";

export const getProductCategories = async (dispatch) => {
  dispatch({
    type: productActions.GET_PRODUCT_CATEGORIES,
    payload: [
      "smartphones",
      "laptops",
      "fragrances",
      "skincare",
      "groceries",
      "home-decoration",
    ],
  });
  // const apiUrl = "products/categories";
  // AxiosClient.get(apiUrl).then((res) => {
  //   dispatch({
  //     type: productActions.GET_PRODUCT_CATEGORIES,
  //     payload: res.data,
  //   });
  // });
};
