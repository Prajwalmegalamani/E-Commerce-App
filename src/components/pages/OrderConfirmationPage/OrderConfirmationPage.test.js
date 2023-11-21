import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CreateAnAccount from "../../molecules/CreateAnAccount/CreateAnAccount";
import OrderConfirmationPage from "./OrderConfirmationPage";

test("render Order Confirmation page", () => {
  render(<OrderConfirmationPage />, {
    wrapper: BrowserRouter,
  });
  const message = screen.getByText("Thank you for your order!");
  expect(message).toBeInTheDocument();
});

test("render according in checkout page", () => {
  render(<CreateAnAccount />, {
    wrapper: BrowserRouter,
  });
  const heading = screen.getByText("Become a Member");
  const button = screen.getByRole("button");
  expect(heading).toBeInTheDocument();
  expect(button).toBeInTheDocument();
  expect(button).toHaveClass("primary");
});
