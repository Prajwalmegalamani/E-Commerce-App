import { fireEvent, render, screen } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import ProductsList from "./ProductsList";
import { MOCK_PRODUCTS } from "../../../mocks/products.mock";
import { BrowserRouter } from "react-router-dom";

const mockStore = configureStore([thunk]);

describe("ProductList Component", () => {
  let store;
  test("fetching all products", async () => {
    store = mockStore({
      products: {
        products: {
          products: MOCK_PRODUCTS,
          total: MOCK_PRODUCTS.length,
        },
      },
    });

    render(
      <Provider store={store}>
        <ProductsList category={MOCK_PRODUCTS[0].category} />
      </Provider>,
      { wrapper: BrowserRouter }
    );
    const imgElements = screen.getAllByRole("img");
    expect(imgElements.length).toEqual(MOCK_PRODUCTS.length);
  });
});

describe("tests search product functionality", () => {
  let store;
  test("fetch searched products", async () => {
    store = mockStore({
      products: {
        products: {
          products: MOCK_PRODUCTS,
          total: MOCK_PRODUCTS.length,
        },
      },
    });

    render(
      <Provider store={store}>
        <ProductsList searchStr="bag" loadedFromSearch="true" selected={[]}/>
      </Provider>,
      { wrapper: BrowserRouter }
    );
    const imgElements = screen.getAllByRole("img");
    expect(imgElements.length).toEqual(MOCK_PRODUCTS.length);
  });

  test("load more products", async () => {
    store = mockStore({
      products: {
        products: {
          products: MOCK_PRODUCTS,
          total: 5,
        },
      },
    });

    render(
      <Provider store={store}>
        <ProductsList category={MOCK_PRODUCTS[0].category} />
      </Provider>,
      { wrapper: BrowserRouter }
    );

    const buttonElement = screen.getByText("Load More");
    expect(buttonElement).toBeInTheDocument();
    fireEvent.click(buttonElement);
  });

  test("sort by price low to high", () => {
    store = mockStore({
      products: {
        products: {
          products: MOCK_PRODUCTS,
          total: 5,
        },
        sortBy: 0,
      },
    });

    render(
      <Provider store={store}>
        <ProductsList category={MOCK_PRODUCTS[0].category} />
      </Provider>,
      { wrapper: BrowserRouter }
    );

    const titleElements = screen.getAllByRole("heading", { level: 5 });
    expect(titleElements[0].textContent).toBe(
      "International Expandable 4 Wheeled Carry-on"
    );
  });

  test("sort by price high to low", () => {
    store = mockStore({
      products: {
        products: {
          products: MOCK_PRODUCTS,
          total: 5,
        },
        sortBy: 1,
      },
    });

    render(
      <Provider store={store}>
        <ProductsList category={MOCK_PRODUCTS[0].category} />
      </Provider>,
      { wrapper: BrowserRouter }
    );

    const titleElements = screen.getAllByRole("heading", { level: 5 });
    expect(titleElements[0].textContent).toBe("Samsung Universe 9");
  });

  test("sort by ratings", () => {
    store = mockStore({
      products: {
        products: {
          products: MOCK_PRODUCTS,
          total: 5,
        },
        sortBy: 2,
      },
    });

    render(
      <Provider store={store}>
        <ProductsList category={MOCK_PRODUCTS[0].category} />
      </Provider>,
      { wrapper: BrowserRouter }
    );

    const titleElements = screen.getAllByRole("heading", { level: 5 });
    expect(titleElements[0].textContent).toBe(
      "International Expandable 4 Wheeled Carry-on"
    );
  });
});
