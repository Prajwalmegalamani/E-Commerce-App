import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import * as router from "react-router";
import thunk from "redux-thunk";

import SignUp from "./SignUp";

const middlewares = [];
const mockStore = configureStore([thunk]);
const navigate = jest.fn();
beforeEach(() => {
  jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
});

describe("UserRegistration Component", () => {
  let store;
  const handleShow = jest.fn();
  test("should show form heading", async () => {
    store = mockStore({
      user: { isLoading: false },
    });
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SignUp />
        </BrowserRouter>
      </Provider>
    );
    const formHeading = screen.getByText("Create Your Account");
    expect(formHeading).toBeInTheDocument();

    let emailElem = screen.getByLabelText("Email");
  });

  test("rendering and submitting a basic Formik form", async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <SignUp />
        </Provider>
      </BrowserRouter>
    );
    const user = userEvent.setup();
    const registerUser = jest.fn();

    await user.type(screen.getByLabelText(/first name/i), "John");
    await user.type(screen.getByLabelText(/last name/i), "Dee");
    await user.type(screen.getByLabelText("Email"), "john.dee@someemail.com");
    await user.type(
      screen.getByLabelText("Confirm Email"),
      "john.dee@someemail.com"
    );
    await user.type(screen.getByLabelText("User Name"), "atuny0");
    await user.selectOptions(screen.getByLabelText("Country"), "India");
    await user.type(screen.getByLabelText("Password"), "9uQFF1Lh");
    await user.type(screen.getByLabelText("Confirm Password"), "9uQFF1Lh");
    await user.click(screen.getByRole("button"), { name: /Register/i });
    waitFor(() =>
      expect(handleSubmit).toHaveBeenCalledWith({
        email: "john.dee@someemail.com",
        confirmEmail: "john.dee@someemail.com",
        fname: "John",
        lname: "Dee",
        country: "India",
        uname: "atuny0",
        password: "9uQFF1Lh",
        confirmPassword: "9uQFF1Lh",
      })
    );
  });
});
