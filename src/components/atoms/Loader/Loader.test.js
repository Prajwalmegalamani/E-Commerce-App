import React from "react";
import { screen, render } from "@testing-library/react";

import Loader from './Loader'

test("Loader is rendering", () => {
  render(<Loader />);
  const loadElement = screen.getByTestId('loader');
  expect(loadElement).toBeTruthy();
});