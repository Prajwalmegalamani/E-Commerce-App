import { render, screen } from "@testing-library/react";
import CardHeader from "./CardHeader";

test("Card Header is rendered properly", () => {
  render(<CardHeader stepNumber={1} cardHeading="Shipping Address" />);
  const heading = screen.getByRole("heading", { name: /Shipping Address/i });
  const stepNumber = screen.getByTestId("stepNumber");
  expect(stepNumber).toBeInTheDocument();
  expect(heading).toBeInTheDocument();
});
