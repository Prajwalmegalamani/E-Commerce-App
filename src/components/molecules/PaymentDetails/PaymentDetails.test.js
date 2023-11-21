import { render, screen } from "@testing-library/react";

import PaymentDetails from "./index";

const data = {
  address1: "110 Swainton Goshen Road, Cape may courthouse, NJ 08210, US",
  address2: "Abcd",
  city: "Mum",
  code: "400009",
  email: "rehan@gmail.com",
  firstName: "Rehan",
  lastName: "Pathan",
  mobile: "897676703",
  state: "Delhi",
};

describe("Testing Footer", () => {
  it("should test footer", () => {
    render(<PaymentDetails address={data} />);

    const paymentHeading = screen.getByText("Payment Details");
    expect(paymentHeading).toBeInTheDocument();

    const email = screen.getByText(data.email);
    expect(email).toBeInTheDocument();
  });
});
