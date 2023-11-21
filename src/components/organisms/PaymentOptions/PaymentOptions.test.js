import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PaymentOptions from './PaymentOptions';


describe("payment options Component", () => {
    test('renders product card payment', () => {
        const mockFn = jest.fn()
        const result = render(<BrowserRouter><PaymentOptions handlePaymentOption={mockFn} showPaymentOption={"card payment"} /></BrowserRouter>);
        const titleElement = result.container.querySelector('#card_payment');
        fireEvent.click(titleElement);

        expect(titleElement).toBeInTheDocument();
    });
    test('renders product paypal', () => {
        const mockFn = jest.fn()
        const result = render(<BrowserRouter><PaymentOptions handlePaymentOption={mockFn} showPaymentOption={"pay pal"} /></BrowserRouter>);
        const titleElement = result.container.querySelector('#pay_pal');
        fireEvent.click(titleElement);

        expect(titleElement).toBeInTheDocument();
    });
    test('renders product card paylater', () => {
        const mockFn = jest.fn()
        const result = render(<BrowserRouter><PaymentOptions handlePaymentOption={mockFn} showPaymentOption={"pay later"} /></BrowserRouter>);
        const titleElement = result.container.querySelector('#pay_later');
        fireEvent.click(titleElement);
        expect(titleElement).toBeInTheDocument();
    });
    test('renders product card apple pay', () => {
        const mockFn = jest.fn()
        const result = render(<BrowserRouter><PaymentOptions handlePaymentOption={mockFn} showPaymentOption={"apple pay"} /></BrowserRouter>);
        const titleElement = result.container.querySelector('#apple_pay');
        fireEvent.click(titleElement);
        expect(titleElement).toBeInTheDocument();
    });
})
