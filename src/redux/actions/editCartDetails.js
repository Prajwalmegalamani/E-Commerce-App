import { cartActions } from "../action.type";

export const editProductFromCart = (payload) => async (dispatch) => {
    dispatch({
        type: cartActions.EDIT_FROM_CART,
        payload: payload,
    });
};