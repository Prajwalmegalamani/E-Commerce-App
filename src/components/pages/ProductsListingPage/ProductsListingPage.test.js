import { render, screen } from "@testing-library/react";
import configureStore from 'redux-mock-store';
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { MOCK_PRODUCTS } from "../../../mocks/products.mock";
import { BrowserRouter } from "react-router-dom";
import ProductsListingPage from "./ProductsListingPage";
import { PRODUCT_FILTERS } from "../../../utils/constants";

const mockStore = configureStore([thunk]);

describe("ProductListingPage Component", () => {
  let store;
  test("should list all products", async () => {
    store = mockStore({
      products: {
        products: {
          products: MOCK_PRODUCTS,
          total: MOCK_PRODUCTS.length
        },
        filters: PRODUCT_FILTERS
      }
    });

    render(
      <Provider store={store}>
        <ProductsListingPage />
      </Provider>
      , { wrapper: BrowserRouter });
    const titleEl = screen.getByText(MOCK_PRODUCTS[0].title);
    expect(titleEl).toBeInTheDocument();
  });
});
