import { render, screen } from '@testing-library/react';

import { MOCK_PRODUCTS } from '../../../mocks/products.mock';

import ProductImageCarousel from './ProductImagesCarousel';

const productImages = MOCK_PRODUCTS[0].images;

describe("ProductImageCarousel Component", () => {
    test('renders images carousel', () => {
        render(<ProductImageCarousel images={productImages} />);

        const imgElement = screen.getByAltText('product-img-1');

        expect(imgElement).toBeInTheDocument();
    });
})
