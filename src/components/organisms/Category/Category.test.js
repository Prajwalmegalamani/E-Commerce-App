import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Category from "./Category";

test("should test Category", async () => {
  render(
    <BrowserRouter>
      <Category />
    </BrowserRouter>
  );

  const ListOfCategories = screen.getByText("Categories");
  expect(ListOfCategories).toBeInTheDocument();


});
