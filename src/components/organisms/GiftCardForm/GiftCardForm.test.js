import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import GiftCardForm from "./GiftCardForm";

test("rendering GiftCardForm cart page", () => {
    render(<GiftCardForm />, {
        wrapper: BrowserRouter,
    });

    const apply = screen.getByTestId("apply");
    const cardNumber = screen.getByTestId("giftCardNumber");
    const pin = screen.getByTestId("pin");
    fireEvent.change(cardNumber, { target: { value: '444444' } });
    fireEvent.change(pin, { target: { value: '1234' } });
    fireEvent.click(apply);
    const card = screen.getByText('Gift Card Number');
    expect(card).toBeInTheDocument();
});

