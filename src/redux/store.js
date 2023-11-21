import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { cartReducer } from "./reducers/cart.reducer";
import { productsReducer } from "./reducers/products.reducer";
import { userReducer } from "./reducers/user.reducer";

const rootReducer = combineReducers({
  products: productsReducer,
  user: userReducer,
  cart: cartReducer,
});

const store = createStore(
  rootReducer,
  {},
  process.env.NODE_ENV === "production"
    ? compose(applyMiddleware(thunk))
    : composeWithDevTools(applyMiddleware(thunk))
);
export default store;
