import React from "react";

import { render, screen } from "@testing-library/react";

import CreateAnAccount from "./CreateAnAccount";

describe("Testing CreateAnAccount Component", () => {
  it("should render text heading", () => {
    render(<CreateAnAccount />);

    const heading = screen.getByText("Become a Member");
    const button = screen.getByRole("button");
    expect(heading).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("primary");
  });
});
