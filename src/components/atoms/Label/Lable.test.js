import React from "react";
import { render, screen } from "@testing-library/react";

import Label from "./Label";

test("label atom is rendering", () => {
    render(<Label>name</Label>);
    const labelElement = screen.getByText(/name/i);
    expect(labelElement).toBeInTheDocument();
});