import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

import HeroHeader from "./HeroHeader";

const title = "HOLIDAY GIFTS";
const subtitleL1 = "For Everyone on";
const subtitleL2 = "Your List";
const linkText = "Shop the Gift Guide";

test("Hero Header on desktop", () => {
    render(
        <HeroHeader
            title={title}
            subtitleL1={subtitleL1}
            subtitleL2={subtitleL2}
            link="/"
            linkText={linkText}
        />,
        { wrapper: BrowserRouter }
    );
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(subtitleL1)).toBeInTheDocument();
    expect(screen.getByText(subtitleL2)).toBeInTheDocument();
    expect(screen.getByText(linkText)).toBeInTheDocument();
});
