import React from "react";
import { render, screen } from "@testing-library/react";

import Button from "./Button";

describe("Testing button", () => {
  it('should render a button with the class of primary', () => {
    render(<Button className='primary'>submit</Button>)
    const linkElement = screen.getByText("submit");
    expect(linkElement).toBeInTheDocument();
  })
})