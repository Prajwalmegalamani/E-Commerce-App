import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import BestSeller from "./BestSeller";
import { MOCK_PRODUCTS } from "../../../mocks/products.mock";

const mockStore = configureStore([thunk]);
describe("BestSeller Component", () => {
  let store;

  test("BestSeller", async () => {
    store = mockStore({
      products: {
        products: {
          products: MOCK_PRODUCTS,
          total: MOCK_PRODUCTS.length,
        },
      }
    });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <BestSeller />
        </BrowserRouter>
      </Provider>
    );

    const productImages = screen.getAllByRole("img");
    expect(productImages).toHaveLength(MOCK_PRODUCTS.length);

    expect(screen.getByText(MOCK_PRODUCTS[0].title)).toBeInTheDocument();
    expect(screen.getByText('$' + MOCK_PRODUCTS[0].price)).toBeInTheDocument();
  });
});
