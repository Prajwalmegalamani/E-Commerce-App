import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import UserAuth from "./UserAuth";

test("Sign in and register button should be in document", async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <UserAuth />
      </BrowserRouter>
    </Provider>
  );
  const signInBtn = await screen.getByRole("button", {
    name: "Sign In",
  });
  const registerBtn = await screen.getByRole("button", {
    name: "Register Button",
  });
  expect(signInBtn).toBeInTheDocument();
  expect(registerBtn).toBeInTheDocument();
});
