import {
  ADD_FILTER,
  ADD_SORTBY,
  FILTERED_PRODUCTS,
  productActions,
} from "../action.type";
import { baseUrl } from "../../config";

import AxiosClient from "../../utils/axios-client/axiosClient";
import { getFilterResult } from "../../utils/filterUtility";

export const addFilter = (filterObj) => (dispatch) => {
  dispatch({
    type: ADD_FILTER,
    payload: filterObj,
  });
};

export const addSortBy = (index) => (dispatch) => {
  dispatch({
    type: ADD_SORTBY,
    payload: index,
  });
};

export const getProductsByCategory = (category) => async (dispatch) => {
  dispatch({
    type: productActions.SET_LOADING_STATUS,
    payload: true,
  });
  AxiosClient({
    url: `${baseUrl}/products/category/${category}`,
    method: "get",
  }).then((res) => {
    dispatch({
      type: productActions.GET_PRODUCTS_BY_CATEGORY,
      payload: res.data,
    });
    dispatch({
      type: productActions.SET_LOADING_STATUS,
      payload: false,
    });
  });
};

export const getFilteredProducts = (category, selected, searchStr) => async (dispatch) => {

  dispatch({
    type: productActions.SET_LOADING_STATUS,
    payload: true,
  });

  let url = `${baseUrl}/products?limit=100&skip=0`
  if( searchStr ) {
    url =  `products/search?q=${searchStr}&limit=30&skip=0`
  } else if ( category ) {
    url = `${baseUrl}/products/category/${category}`
  }
  AxiosClient({
    url: url,
    method: "get",
  }).then((res) => {
    const result = selected.length? getFilterResult( selected, res.data ) : res.data.products
    dispatch({
      type: FILTERED_PRODUCTS,
      payload: result,
    });
    dispatch({
      type: productActions.SET_LOADING_STATUS,
      payload: false,
    });
  });
};
