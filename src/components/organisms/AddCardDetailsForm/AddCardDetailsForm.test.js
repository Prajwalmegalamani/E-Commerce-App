import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { cardDetail } from '../../../utils/constants';
import AddCardDetailsForm from './AddCardDetailsForm';


describe("add Card Details Component", () => {
    test('renders product card payment', () => {
        const mockFn = jest.fn()
        const result = render(<BrowserRouter><AddCardDetailsForm setPaymentDetailsFilled={mockFn} setCardDetails={mockFn} cardDetails={cardDetail} /></BrowserRouter>);
        expect(screen.getByLabelText("Your Name (as appears on card)")).toHaveValue(cardDetail.name);
        expect(screen.getByLabelText("Card Number")).toHaveValue(cardDetail.cardNumber);
        expect(screen.getByLabelText("CVV")).toHaveValue(cardDetail.cvv);
        expect(screen.getByLabelText("Expiration Date (MM/YY)")).toHaveValue(cardDetail.expirationDate);
        const defaultShipping = screen.getByLabelText("Use Shipping Address for Billing")
        fireEvent.click(defaultShipping)
        const addCard = screen.getByTestId("addCard");
        expect(addCard).toBeInTheDocument();
        fireEvent.click(addCard)

    });
})
