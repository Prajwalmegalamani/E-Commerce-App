import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { sampleProducts } from "../../../utils/constants";
import OrderSummary from "../../organisms/OrderSummary";

test("rendering Order Summary component in cart page", () => {
    render(<OrderSummary data={200} cartPage={"cart"} cartData={[sampleProducts]} />, {
        wrapper: BrowserRouter,
    });

    const promoButton = screen.getByTestId("Apply");

    const btn = screen.getByTestId("CheckoutNow");
    fireEvent.click(btn);
    const input = screen.getByTestId("promo");
    expect(promoButton).toBeInTheDocument();
    fireEvent.change(input, { target: { value: '1234' } });
    fireEvent.click(promoButton);
    fireEvent.change(input, { target: { value: 'FLAT50' } });
    fireEvent.click(promoButton);
});

