import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import * as Router from 'react-router-dom';
import configureStore from 'redux-mock-store';

import { MOCK_PRODUCTS } from '../../../mocks/products.mock';
import ProductDetailsPage from './ProductDetailsPage';

const mockStore = configureStore([]);

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useParams: jest.fn(),
}));

describe("ProductDetails Component", () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            products: { products: { products: MOCK_PRODUCTS, limit: 10, skip: 0, total: 3 } },
        });
    });

    test('renders product details', () => {
        jest.spyOn(Router, 'useParams').mockReturnValue({ id: '1' });
        render(<Provider store={store}><ProductDetailsPage /></Provider>, { wrapper: Router.BrowserRouter });

        const titleElements = screen.queryAllByText(MOCK_PRODUCTS[0].title);

        expect(titleElements.length).toEqual(2);
    });
})
