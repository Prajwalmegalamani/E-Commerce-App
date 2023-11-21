import { render, screen } from '@testing-library/react';

import { MOCK_PRODUCTS } from '../../../mocks/products.mock';
import ProductDetails from './ProductDetails';
import { useDispatch } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
jest.mock('react-redux');

describe("ProductDetails Component", () => {
    test('renders product details', () => {
        useDispatch.mockReturnValue(function () { })
        render(<ProductDetails product={MOCK_PRODUCTS[0]} />, { wrapper: BrowserRouter });

        const titleElement = screen.getByText(MOCK_PRODUCTS[0].title);

        expect(titleElement).toBeInTheDocument();
    });
})
