import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import CustomerService from "./CustomerService";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../redux/store";

test("CustomerService", async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <CustomerService />
      </BrowserRouter>
    </Provider>
  );
  expect(screen.getByText("ABC at your Service")).toHaveTextContent(
    "ABC at your Service"
  );
  expect(
    screen.getByText("World class quality meets world class customer service.")
  ).toHaveTextContent(
    "World class quality meets world class customer service."
  );

  expect(screen.getByText("5-Year Warranty")).toHaveTextContent(
    "5-Year Warranty"
  );

  expect(screen.getByText("Free Gift Boxing")).toHaveTextContent(
    "Free Gift Boxing"
  );
  expect(screen.getByText("Shop Gifts")).toHaveTextContent("Shop Gifts");

  expect(screen.getByText("Free Shipping & Returns")).toHaveTextContent(
    "Free Shipping & Returns"
  );

  expect(screen.getByText("Make it Yours")).toHaveTextContent("Make it Yours");
  expect(screen.getByText("Customize and Monogram")).toHaveTextContent(
    "Customize and Monogram"
  );
});
