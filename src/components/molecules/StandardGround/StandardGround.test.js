import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import StandardGround from "./StandardGround";
test("render Standard Ground Component", () => {
  render(<StandardGround />, {
    wrapper: BrowserRouter,
  });
  const radioBtn = screen.getByRole("radio", {
    name: /Standard Ground 7-10 Buisness Days/i,
  });
  const link = screen.getByRole("link", { name: /Choose faster shipping/i });

  expect(radioBtn).toBeChecked();
  expect(link).toBeInTheDocument();
});
