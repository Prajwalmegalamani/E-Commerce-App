import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import Radio from "./Radio";

test("radio atom is rendering", () => {
  render(<Radio />);
  const checkElement = screen.getByRole("radio");
  fireEvent.click(checkElement);
  expect(checkElement).toBeChecked();
});

test("radio atom props passing", () => {
  render(<Radio checked={false} />);
  const checkElement = screen.getByRole("radio");
  expect(checkElement).not.toBeChecked();
});
