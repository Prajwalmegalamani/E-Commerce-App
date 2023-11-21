import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import UserProfilePage from "./UserProfilePage";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import userEvent from "@testing-library/user-event";
import setToLocalStorage from "../../../utils/setToLocalStorage";

const mockStore = configureStore([thunk]);
const handleSubmit = jest.fn();

describe("User Profile Component", () => {
  let store;
  test("Should call handleToggle", async () => {
    store = mockStore({
      user: {
        userDetails: [
          {
            id: "1",
            firstName: "Terry",
            lastName: "Medhurst",
            gender: "male",
            email: "atuny0@sohu.com",
            confirmEmail: "atuny0@sohu.com",
            phone: "+63 791 675 8914",
            birthDate: "2000-12-25",
            password: "9uQFF1Lh",
            oldPassword: "9uQFF1Lh",
            newPassword: "Hello@123",
            confirmPassword: "Hello@123",
          },
        ],
      },
    });
    setToLocalStorage("userDetails", {
      id: "1",
      firstName: "Terry",
      lastName: "Medhurst",
    });
    render(
      <Provider store={store}>
        <BrowserRouter>
          <UserProfilePage onSubmit={handleSubmit} />
        </BrowserRouter>
      </Provider>
    );

    const user = await userEvent.setup();

    const editBtn = screen.getByRole("button", { name: "Edit" });
    await user.click(editBtn);

    const submitBtn = screen.getByRole("button", { name: "Save Changes" });

    await user.type(screen.getByLabelText("Current Password"), "9uQFF1Lh");

    await user.type(screen.getByLabelText(/FirstName-input-box/i), "Terry");
    await user.type(screen.getByLabelText(/LastName-input-box/i), "kminchelle");
    await user.type(
      screen.getByLabelText(/birthDate-input-box/i),
      "2000-12-26"
    );
    await user.type(screen.getByLabelText("Email"), "atuny0@sohu.com");
    await user.type(
      screen.getByLabelText(/confirmEmail-input-box/i),
      "atuny0@sohu.com"
    );
    await user.type(screen.getByLabelText(/gender-select-box/i), "Male");
    await user.type(
      screen.getByLabelText(/phone-input-box/i),
      "+63 791 675 8913"
    );
    await user.click(submitBtn);

    waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledWith({
        id: "1",
        firstName: "Terry",
        lastName: "Medhurst",
        gender: "male",
        email: "atuny0@sohu.com",
        phone: "+63 791 675 8914",
        birthDate: "2000-12-25",
        password: "Hello@123",
      });
    });
  });
});
