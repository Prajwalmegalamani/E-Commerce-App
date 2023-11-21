import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CheckoutPage from "./CheckOutPage";
import OrderSummary from "../../organisms/OrderSummary";
import ShippingCard from "../../organisms/ShippingCard";
import { sampleProducts } from "../../../utils/constants";
import { useSelector } from 'react-redux'
jest.mock('react-redux');

test("render Checkout page", () => {
  useSelector.mockReturnValue({ products: [sampleProducts] })
  render(<CheckoutPage />, {
    wrapper: BrowserRouter,
  });
  const product = screen.getByText(sampleProducts.title);
  expect(product).toBeInTheDocument();
});

test("rendering Order Summary component in cart page", () => {
  render(<OrderSummary />, {
    wrapper: BrowserRouter,
  });

  const promoButton = screen.getByTestId("Apply");
  expect(promoButton).toBeInTheDocument();
});
test("rendering Shipping Card component in cart page", () => {
  render(<ShippingCard />, {
    wrapper: BrowserRouter,
  });
});
