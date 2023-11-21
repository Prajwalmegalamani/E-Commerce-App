import React from "react";
import { render, screen } from "@testing-library/react";

import Paragraph from "./Paragraph";

test("Check for initial render", () => {
  render(<Paragraph>This is paragraph testing</Paragraph>);
  const element = screen.getByText(/This is paragraph/i);
  expect(element).toBeInTheDocument();
});
