import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import FilterMobileContent from "./FilterMobileContent";

const heading = "Test";
const handleClick = jest.fn();

test("should render mobile content", async () => {
  render(<FilterMobileContent heading={heading} onCloseClick={handleClick} />);

  const headingEl = screen.queryByText(heading);
  expect(headingEl).toBeInTheDocument();

  const buttonEl = screen.queryByRole("button");
  expect(buttonEl).toBeInTheDocument();
  fireEvent.click(buttonEl);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
