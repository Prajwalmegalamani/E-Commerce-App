import { cartActions } from "../action.type";
export const deleteFromCart = (payload) => async (dispatch) => {
  dispatch({
    type: cartActions.DELETE_FROM_CART,
    payload: payload,
  });
};
