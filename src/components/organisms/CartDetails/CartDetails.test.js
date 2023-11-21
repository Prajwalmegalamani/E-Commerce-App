import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import CartDetails from "./CartDetails";
import { products_data } from "../../../utils/constants";
import { useDispatch } from 'react-redux'
jest.mock('react-redux');
const quantity = 3;

describe("Testing CartDetails Props", () => {
  it("should test cartdetails", () => {
    useDispatch.mockReturnValue(function () { })
    render(<CartDetails quantity={quantity} cartData={products_data} />, {
      wrapper: BrowserRouter,
    });

    const quantity_render = screen.getByText("Your Cart (" + quantity + ")");
    expect(quantity_render).toBeInTheDocument();
  });
});
