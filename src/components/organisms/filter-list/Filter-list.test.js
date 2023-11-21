import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import configureStore from 'redux-mock-store';
import { Provider } from "react-redux";

import FilterList from "./Filter-list";
import { PRODUCT_FILTERS } from "../../../utils/constants";
import * as ProductsActions from "../../../redux/actions/products.action";
import thunk from "redux-thunk";
import { MOCK_PRODUCTS } from "../../../mocks/products.mock";


const mockStore = configureStore([thunk]);

describe("FilterList Component", () => {
  let store;
  const handleShow = jest.fn();
  test("should show filters", async () => {
    const addFilterCall = jest.spyOn(ProductsActions, 'addFilter');
    const percentFilter = PRODUCT_FILTERS.discountPercentage;
    percentFilter[3].isApply = true;
    store = mockStore({
      products: { filters: { ...PRODUCT_FILTERS, discountPercentage: percentFilter }, products: { products: MOCK_PRODUCTS } }
    });
    render(<Provider store={store}><FilterList show={true} setShow={handleShow} /></Provider>);

    const accordianTitle = screen.queryByText('Discount Range');
    expect(accordianTitle).toBeInTheDocument();
    fireEvent.click(accordianTitle);

    const disPercentageEle = screen.queryByText(PRODUCT_FILTERS.discountPercentage[0].name);
    expect(disPercentageEle).toBeInTheDocument();
    fireEvent.click(disPercentageEle);
    expect(addFilterCall).toHaveBeenCalled();

    fireEvent.click(screen.queryByText('Brand'));
    const brandEle = screen.queryByText(PRODUCT_FILTERS.brand[0].name);
    expect(brandEle).toBeInTheDocument();
    fireEvent.click(brandEle);
    expect(addFilterCall).toHaveBeenCalled();

    fireEvent.click(screen.queryByText('Price Range'));
    const priceEle = screen.queryByText(PRODUCT_FILTERS.price[0].name);
    expect(priceEle).toBeInTheDocument();
    fireEvent.click(priceEle);
    expect(addFilterCall).toHaveBeenCalled();

    fireEvent.click(screen.queryByText('Rating'));
    const ratingEle = screen.queryByText(PRODUCT_FILTERS.rating[0].name);
    expect(ratingEle).toBeInTheDocument();
    fireEvent.click(ratingEle);
    expect(addFilterCall).toHaveBeenCalled();

    const clearAllBtn = screen.getByRole("button", { name: "Clear All" });
    expect(clearAllBtn).toBeInTheDocument();
    fireEvent.click(clearAllBtn);
    expect(screen.queryByTestId("mobile-content-heading").textContent).toContain("Filter ");

  });
});

