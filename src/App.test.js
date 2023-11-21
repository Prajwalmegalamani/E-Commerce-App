import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import thunk from "redux-thunk";

import App from "./App";
import { MOCK_PRODUCTS } from "./mocks/products.mock";


const mockStore = configureStore([thunk]);

describe("App Component", () => {
  let store;
  test("should render application logo", () => {
    store = mockStore({
      products: {
        products: MOCK_PRODUCTS,
        total: 3,
        isModalOpen: false,
        productCategories: [MOCK_PRODUCTS[0].category],
      },
      user: {
        isUserLoggedIn: true
      }
    });

    render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );

    const logo = screen.getByText( "ABC" );
    expect( logo ).toBeInTheDocument();
  });
});
