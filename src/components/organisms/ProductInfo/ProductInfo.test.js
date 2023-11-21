import { render, screen } from '@testing-library/react';

import { MOCK_PRODUCTS } from '../../../mocks/products.mock';
import ProductInfo from './ProductInfo';
import { useDispatch } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';

jest.mock('react-redux');

describe("ProductInfo Component", () => {
    test('renders learn react link', () => {
        useDispatch.mockReturnValue(function () { })
        const product = { ...MOCK_PRODUCTS[0], description: 'An apple mobile which is nothing' };
        render(<ProductInfo product={product} />, { wrapper: BrowserRouter });

        const titleElement = screen.getByText(product.title);

        expect(titleElement).toBeInTheDocument();
        expect(screen.getByText(product.description)).toBeInTheDocument();
    });
})
