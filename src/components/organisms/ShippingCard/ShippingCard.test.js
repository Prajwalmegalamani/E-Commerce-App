import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ShippingCard from "./ShippingCard";
test("render Standard Ground Component", () => {
  render(<ShippingCard />, {
    wrapper: BrowserRouter,
  });
  const cardElement = screen.getByTestId("card");
  expect(cardElement).toBeInTheDocument();
});
