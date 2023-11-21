import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

import Footer from "./index";

test("should test footer", async () => {
  const user = await userEvent.setup();
  render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );

  const facebookImage = screen.getByAltText("Facebook Icon");
  expect(facebookImage).toBeInTheDocument();

  const twitterImage = screen.getByAltText("Twitter Icon");
  expect(twitterImage).toBeInTheDocument();

  const themeToggle = screen.getByRole("checkbox");
  expect(themeToggle).toBeInTheDocument();
  await user.click(themeToggle);
  expect(screen.getByLabelText("theme").checked).toBe(true);
  await user.click(themeToggle);
  expect(screen.getByLabelText("theme").checked).toBe(false);
});
