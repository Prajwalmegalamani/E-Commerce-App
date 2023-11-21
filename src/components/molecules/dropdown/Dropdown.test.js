import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import Dropdown from "./Dropdown";

const optionsList = ["Price Low To High", "Price High To Low", "Top Rated"];

const handleChange = jest.fn();

describe("DropDown Component", () => {
  test("should render options", () => {
    render(<Dropdown optionsList={optionsList} selectedOption={0} onChangeHandler={handleChange} />);
    const option = screen.getByText(/Top Rated/i);
    expect(option).toBeInTheDocument();
  });

  test("should handle change option", () => {
    render(<Dropdown optionsList={optionsList} selectedOption={1} onChangeHandler={handleChange} />);

    const toggleBotton = screen.queryByTestId("toggle");
    fireEvent.click(toggleBotton);

    const backdropEl = screen.getByTestId("select-box-backdrop");
    fireEvent.click(backdropEl);
    expect(backdropEl).not.toBeInTheDocument();

    const liArr = screen.getAllByRole("option");
    expect(liArr.length).toBe(3);

    fireEvent.click(liArr[0]);
    expect(handleChange).toHaveBeenCalled();

    fireEvent.click(toggleBotton);

    const closeButtonEl = screen.getByTestId("close-content");
    fireEvent.click(closeButtonEl);
    expect(backdropEl).not.toBeInTheDocument();
  });

  test("should render option using function", () => {
    render(<Dropdown optionsList={optionsList} selectedOption={1} optionRenderer={jest.fn()} onChangeHandler={handleChange} />);
    const liArr = screen.getAllByRole("option");

    fireEvent.keyDown(liArr[0], { key: 'Escape', code: 27 });
    expect(handleChange).not.toHaveBeenCalled();

    fireEvent.keyDown(liArr[0], { key: 'Enter', code: 13 });
    expect(handleChange).toHaveBeenCalled();

    fireEvent.keyDown(liArr[0], { key: 'ArrowDown', code: 40 });
    expect(handleChange).toHaveBeenCalled();

    fireEvent.keyDown(liArr[0], { key: 'Tab', code: 9 });
    fireEvent.keyDown(liArr[0], { key: 'ArrowUp', code: 38 });
    expect(handleChange).toHaveBeenCalled();

  });
});
