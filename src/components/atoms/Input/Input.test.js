import { fireEvent, render, screen } from "@testing-library/react";

import Input from "./Input";

describe("testing input", () => {
  it("should test if it has type as text", () => {
    render(<Input type={"text"} ariaLabel={"input"} className={"primary"} handleChange={jest.fn()} />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "text");
    expect(input).toBeTruthy();
    expect(input).toHaveValue("");
    fireEvent.change(input, { target: { value: '1234' } });
    expect(input.value).toBe('1234');
  });
});
