import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import * as routeData from 'react-router';

import Breadcrumb from "./Breadcrumb";

const MOCK_LINKS = [
    { path: "/path1", text: "Path1" },
    { path: "/path2", text: "Path2" },
];

const renderComponent = (props) => {
    return render(<Breadcrumb routes={MOCK_LINKS} {...props} />, {
        wrapper: BrowserRouter,
    });
};

describe("Breadcrumb Component", () => {
    test("renders links", () => {
        renderComponent();
        const linkElements = screen.getAllByRole("link");
        expect(linkElements.length).toEqual(3);
    });

    test("render text if current url matches with path", () => {
        const mockLocation = {
            pathname: '/path2',
            hash: '',
            search: '',
            state: ''
        }

        jest.spyOn(routeData, 'useLocation').mockReturnValue(mockLocation)


        renderComponent();
        const linkElements = screen.getAllByRole("link");
        expect(linkElements.length).toEqual(2);
    });
});
