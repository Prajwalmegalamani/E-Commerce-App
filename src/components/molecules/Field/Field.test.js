import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { within } from "@testing-library/react";

import Field from "./Field";

test("TextBox with Label is rendered", () => {
  render(
    <Field id="firstName" label="First Name" onChangeHandler={jest.fn()} required={true} />
  );
  const textBox = screen.getByRole("textbox", { name: /First Name/i });
  expect(textBox).toBeInTheDocument();

  expect(screen.getByText(/First Name/i).classList).toContain("required");
});
test("Select with Label is rendered if fieldType is provided", () => {
  render(
    <Field
      id="state"
      label="state"
      onChangeHandler={jest.fn()}
      fieldType="select"
    />
  );
  const selectElement = screen.getByRole("combobox", { name: /state/i });
  expect(selectElement).toBeInTheDocument();
});
test("Select element with selected option is rendered", async () => {
  const user = userEvent.setup();
  const options = ["UP", "GOA", "PUNJAB"];
  render(
    <Field
      id="state"
      label="state"
      onChangeHandler={jest.fn()}
      fieldType="select"
      Options={options}
    />
  );
  const selectElement = screen.getByRole("combobox", { name: /State/i });
  const option = screen.getByRole("option", { name: "UP" });
  await user.selectOptions(
    selectElement,
    within(selectElement).getByRole("option", { name: "UP" })
  );
  await user.selectOptions(selectElement, option);
  expect(selectElement.value).toBe("UP");
  expect(option.selected).toBe(true);
});
