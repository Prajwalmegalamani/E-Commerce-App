import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import LoginModal from "./LoginModal";
import store from "../../../redux/store";
import userEvent from "@testing-library/user-event";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
const mockStore = configureStore([thunk]);

test("Initial check", async () => {
  const user = await userEvent.setup();
  let store;
  store = mockStore({
    user: {
      isUserLoggedIn: false,
    },
    products: {
      isModalOpen: true,
    },
  });
  render(
    <Provider store={store}>
      <BrowserRouter>
        <LoginModal />
      </BrowserRouter>
    </Provider>
  );
  const btnSelector = await screen.getByLabelText("Close");
  const creatAccountBtn = await screen.getByRole("button", {
    name: "create an account",
  });
  await user.click(btnSelector);
  await user.click(creatAccountBtn);
  await expect(creatAccountBtn).toBeInTheDocument();
});

test("Check user logged in ", async () => {
  const handleSignOut = jest.fn();
  const user = await userEvent.setup();
  let store;
  store = mockStore({
    user: {
      isUserLoggedIn: true,
    },
    products: {
      isModalOpen: true,
    },
  });
  render(
    <Provider store={store}>
      <BrowserRouter>
        <LoginModal />
      </BrowserRouter>
    </Provider>
  );

  const signOutBtn = await screen.getByRole("button", {
    name: "SignOut",
  });
  await user.click(signOutBtn);
  waitFor(() => {
    expect(handleSignOut).toBeCalled();
  });
});
test("Check user logged in ", async () => {
  const handleClose = jest.fn();
  const user = await userEvent.setup();
  let store;
  store = mockStore({
    user: {
      isUserLoggedIn: true,
    },
    products: {
      isModalOpen: true,
    },
  });
  render(
    <Provider store={store}>
      <BrowserRouter>
        <LoginModal />
      </BrowserRouter>
    </Provider>
  );

  const mySettingsLink = await screen.getByText("My Settings").closest("a");
  const myPurchasesLink = await screen.getByText("My Purchases").closest("a");

  const mySavedItemsLink = await screen
    .getByText("My Saved Items")
    .closest("a");
  const repairServicesLink = await screen
    .getByText("Repair Services")
    .closest("a");
  await user.click(mySettingsLink);
  await user.click(myPurchasesLink);
  await user.click(mySavedItemsLink);
  await user.click(repairServicesLink);
  console.log("store", store.getState());
  waitFor(() => {
    expect(handleClose).toBeCalled();
  });
});
