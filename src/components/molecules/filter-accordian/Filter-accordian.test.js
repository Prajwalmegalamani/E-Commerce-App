import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FilterAccordian from "./Filter-accordian";

const discountRange = [
  { name: "10%", isApply: false },
  { name: "20%", isApply: false },
  { name: "50%", isApply: false },
  { name: "Free", isApply: false },
];

const title = "Discount Range";
const handleChange = jest.fn();

test("Checkbox is checked on list click ?", async () => {
  render(<FilterAccordian title={title} items={discountRange} onChangeStatus={handleChange} />);
  const accBtn = screen.getByText(title);
  expect(accBtn).toBeInTheDocument();
  await fireEvent.click(accBtn);
  const listItem = screen.getAllByRole("listitem");
  const checkbox = screen.queryByRole("checkbox", { name: "10%" });
  expect(listItem[0]).toBeInTheDocument();
  expect(checkbox).toBeInTheDocument();
  await fireEvent.click(listItem[0]);
  expect(handleChange).toHaveBeenCalledTimes(1);
});

test("Checkbox is checked on enter key press ?", async () => {
  render(<FilterAccordian title={title} items={discountRange} onChangeStatus={handleChange} />);
  const accBtn = screen.getByText(title);
  expect(accBtn).toBeInTheDocument();
  await fireEvent.click(accBtn);
  const listItem = screen.getAllByRole("listitem");
  const checkbox = screen.queryByRole("checkbox", { name: "10%" });
  expect(listItem[0]).toBeInTheDocument();
  expect(checkbox).toBeInTheDocument();
  await fireEvent.keyDown(listItem[0], {
    key: "Space",
    code: "Space",
    keyCode: 32,
    charCode: 32,
  });
  expect(handleChange).not.toHaveBeenCalled();

  await fireEvent.keyDown(listItem[0], {
    key: "Enter",
    code: "Enter",
    keyCode: 13,
    charCode: 13,
  });
  expect(handleChange).toHaveBeenCalledTimes(1);
});
