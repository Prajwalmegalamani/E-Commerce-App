import { notifySuccess } from "../../utils/helper";
import { cartActions } from "../action.type";

export const addToCart = (payload) => async (dispatch) => {
  dispatch({
    type: cartActions.SET_CART,
    payload: payload,
  });
  notifySuccess("Product Added To Cart Succesfully");

};
