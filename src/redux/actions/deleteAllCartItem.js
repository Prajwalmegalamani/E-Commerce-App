import { cartActions } from "../action.type";
export const deleteAllFromCart = (payload) => async (dispatch) => {
    dispatch({
        type: cartActions.DELETE_ALL_FROM_CART,
        payload: payload,
    });
};