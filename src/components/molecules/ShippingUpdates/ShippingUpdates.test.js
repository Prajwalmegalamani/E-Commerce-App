import React from "react";

import { render, screen } from "@testing-library/react";

import ShippingUpdatesMessage from "./ShippingUpdates";

describe("Testing shipping updates component", () => {
  it("should render text headding", () => {
    render(<ShippingUpdatesMessage />);

    const heading = screen.getByText("Enable Shipping Updates?");
    const checkbox = screen.getByRole("checkbox");
    expect(heading).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveClass("toggle_switch");
  });
});
