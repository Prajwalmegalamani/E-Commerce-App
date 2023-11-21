import { render, screen, waitFor } from "@testing-library/react";
import ShippingDetails from "./ShippingDetails";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
test("Change Address Button", async () => {
  const shippingDetailsHandler = jest.fn();
  render(
    <ShippingDetails
      shippingDetailsHandler={shippingDetailsHandler}
    />,
    {
      wrapper: BrowserRouter,
    }
  );
  const user = userEvent.setup();
  const btn = screen.getByTestId("ChangeAddress");
  user.click(btn);
  await waitFor(() => {
    expect(shippingDetailsHandler).toHaveBeenCalled();
  });
});
