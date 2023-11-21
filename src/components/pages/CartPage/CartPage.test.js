import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CartPage from "./CartPage";
import OrderSummary from "../../organisms/OrderSummary";
import { useSelector } from 'react-redux'
import { sampleProducts } from "../../../utils/constants";
jest.mock('react-redux');

test("render Cart page", () => {
  useSelector.mockReturnValue({ products: [sampleProducts] })

  render(<CartPage />, {
    wrapper: BrowserRouter,
  });
  const product = screen.getByText(sampleProducts.title);
  expect(product).toBeInTheDocument();

});
test("render empty Cart page", () => {
  useSelector.mockReturnValue({ products: [] })

  render(<CartPage />, {
    wrapper: BrowserRouter,
  });
  const empty = screen.getByText(/Your Shopping cart is empty/i);
  expect(empty).toBeInTheDocument();
});

test("rendering Order Summary component in cart page", () => {
  useSelector.mockReturnValue({ products: [sampleProducts] })

  render(<OrderSummary />, {
    wrapper: BrowserRouter,
  });

  const promoButton = screen.getByTestId("Apply");
  expect(promoButton).toBeInTheDocument();
});
