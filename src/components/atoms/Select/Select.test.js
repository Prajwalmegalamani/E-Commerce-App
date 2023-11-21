import { render, screen } from "@testing-library/react";
import Select from "./Select";
import userEvent from "@testing-library/user-event";

test("Initial options coming?", () => {
  const options = ["UP", "CHD", "PUNJAB"];
  render(
    <Select Options={options} name="address" placeholderVal="select state" />
  );
  const user = userEvent.setup();

  const selectElement = screen.getByRole("combobox");
  user.click(selectElement);
  const option = screen.getByRole("option", { name: /select state/i });
  expect(option).toBeInTheDocument();
});

test("Options List is rendering?", () => {
  const user = userEvent.setup();
  const options = ["UP", "CHD", "PUNJAB"];
  render(<Select Options={options} name="address" />);
  const selectElement = screen.getByRole("combobox");
  user.click(selectElement);
  const list = screen.getAllByRole("option");
  expect(list.length).toBe(4);
});
