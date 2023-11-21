import { render, screen } from "@testing-library/react";
import configureStore from 'redux-mock-store';
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import FilterTags from "./FilterTags";
import { filterData } from "../../../utils/constants";
import { useSelector } from 'react-redux'
jest.mock('react-redux');

const mockStore = configureStore([thunk]);

describe("filter tag Component", () => {
  let store;
  useSelector.mockReturnValue({ products: filterData })

  test("displaying a tag", async () => {
    store = mockStore({
      products: filterData
    });

    render(
      <Provider store={store}>
        <FilterTags />
      </Provider>);

    setTimeout(() => {
      const tagsContainer = screen.getByText("10%")
      expect(tagsContainer).toBeInTheDocument()
    }, 2000)

  });

  test("displaying multiple tags", async () => {
    store = mockStore({
      products: {
        filterData
      }
    });

    render(
      <Provider store={store}>
        <FilterTags />
      </Provider>);

    setTimeout(() => {
      const tag1 = screen.getByText("10%")
      expect(tag1).toBeInTheDocument()

      const tag2 = screen.getByText("10%")
      expect(tag2).toBeInTheDocument()

      const closeButton = screen.getByTestId("close-tag");
      fireEvent.click(closeButton);

      const clearAll = screen.getByText("Clear All")
      expect(clearAll).toBeInTheDocument()
    }, 2000)

  });

});