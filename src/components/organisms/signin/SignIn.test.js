import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../../redux/store";
import Signin from "./Signin";
const handleSubmit = jest.fn();
const user = userEvent.setup();
beforeEach(() => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Signin onSubmitForTest={handleSubmit} />
      </BrowserRouter>
    </Provider>
  );
});
test("Formik form submission check", async () => {
  await user.type(screen.getByLabelText(/User Name/i), "kminchelle");
  await user.type(screen.getByLabelText(/Password/i), "0lelplR");
  await user.click(screen.getByRole("button", { name: /Sign In/i }));

  waitFor(() => {
    expect(handleSubmit).toHaveBeenCalledWith({
      email: "kminchelle",
      password: "0lelplR",
    });
  });
});
