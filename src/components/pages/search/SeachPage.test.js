import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../../redux/store";
import userEvent from "@testing-library/user-event";

import SearchPage from "./SearchPage";

test.only("initial check", async () => {
  const user = userEvent.setup();
  render(
    <Provider store={store}>
      <BrowserRouter>
        <SearchPage />
      </BrowserRouter>
    </Provider>
  );

  const searchTxtBox = screen.getByLabelText(/Search products/i);
  await user.type(searchTxtBox, "b");
  await expect(searchTxtBox.value).toBe("b");
});
