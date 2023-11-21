import { render, screen, waitFor } from "@testing-library/react";
import ShippingForm from "./ShippingForm";
import userEvent from "@testing-library/user-event";
import { within } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
test("render continue button", () => {
  render(<ShippingForm />, {
    wrapper: BrowserRouter,
  });

  const btn = screen.getByRole("button", { name: /Continue/i });
  expect(btn).toBeInTheDocument();
});
test("continue button functionality", async () => {
  const formHandler = jest.fn();
  const detailsHandler = jest.fn();
  render(
    <ShippingForm
      shippingFormHandler={formHandler}
      shippingDetailsHandler={detailsHandler}
    />,
    {
      wrapper: BrowserRouter,
    }
  );
  const user = userEvent.setup();
  const btn = screen.getByRole("button", { name: /Continue/i });
  await user.type(screen.getByLabelText(/First Name/i), "john");
  await user.type(screen.getByLabelText(/Last Name/i), "dee");
  await user.type(screen.getByLabelText(/Address 1/i), "abc colony");
  await user.type(screen.getByLabelText("Address 2(optional)"), "colony");
  await user.type(screen.getByLabelText(/City/i), "xyz");
  const dropdown = screen.getByRole("combobox", { name: /State/i });
  await user.selectOptions(
    dropdown,
    within(dropdown).getByRole("option", { name: "Uttar Pradesh" })
  );
  await user.type(screen.getByLabelText(/Zip Code/i), "140603");
  await user.type(screen.getByLabelText(/Mobile/i), "7508125499");
  await user.type(screen.getByLabelText(/Email/i), "abc@gmail.com");
  await user.click(btn);
});
