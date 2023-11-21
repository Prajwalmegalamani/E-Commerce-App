import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import configureStore from 'redux-mock-store';
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import SortingDropdown from "./SortingDropdown";
import { MOCK_PRODUCTS } from "../../../mocks/products.mock";
import * as ProductsAction from "../../../redux/actions/products.action";

const mockStore = configureStore([thunk]);

describe("SortingDropdown Component", () => {
  let store;
  test("should render options and handle change event", () => {
    store = mockStore({
      products: { products: { products: MOCK_PRODUCTS, limit: 10, skip: 0, total: 3 } },
    });
    const spyCall = jest.spyOn(ProductsAction, 'addSortBy');
    render(<Provider store={store}><SortingDropdown /></Provider>);
    const toggleBotton = screen.queryByTestId("toggle");
    fireEvent.click(toggleBotton);
    const option = screen.getByText(/Top Rated/i);
    expect(option).toBeInTheDocument();

    const liArr = screen.getAllByRole("option");
    expect(liArr.length).toBe(3);
    fireEvent.click(liArr[1]);
    expect(spyCall).toHaveBeenCalled();
  });
});
