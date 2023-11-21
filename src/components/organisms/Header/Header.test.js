import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import userEvent from "@testing-library/user-event";

import Header from "./Header";
import { MOCK_PRODUCTS } from "../../../mocks/products.mock";

const mockStore = configureStore([thunk]);

describe("Header Component", () => {
  let store;
  test("Should call handleToggle", async () => {
    store = mockStore({
      products: {
        products: MOCK_PRODUCTS,
        total: 3,
        isModalOpen: false,
        productCategories: [MOCK_PRODUCTS[0].category],
      },
    });

    const user = await userEvent.setup();
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );

    window.innerWidth = 500;
    fireEvent(window, new Event("resize"));
    const hamburgerMenu = screen.getByLabelText("hamburger Menu");
    user.click(hamburgerMenu);
    await expect(hamburgerMenu).toHaveClass("default_empty header-menu-toggle");
  });
});
