import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import FilterToggleButton from "./Filter-toggle-button";

test("Button is rendering or not", () => {
  render(<FilterToggleButton show={false} setShow={jest.fn}/>);
  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
});

test("should handle button click", async() => {
  const mockFn = jest.fn()
  render(<FilterToggleButton show={false} setShow={mockFn}/>);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
  const btnTxt1 = screen.getByText(/show filter/i);
  expect(btnTxt1).toBeInTheDocument();
  await fireEvent.click(button);
  expect(mockFn).toHaveBeenCalledTimes(1)
});

test("should have hide filter", async() => {
  const mockFn = jest.fn()
  render(<FilterToggleButton show={true} setShow={mockFn}/>);
  const btnTxt1 = screen.getByText(/hide filter/i);
  expect(btnTxt1).toBeInTheDocument();
});
