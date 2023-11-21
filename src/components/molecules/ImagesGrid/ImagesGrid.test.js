import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { MOCK_PRODUCTS } from '../../../mocks/products.mock';
import ImagesGrid from './ImagesGrid';

const productImages = MOCK_PRODUCTS[0].images;

describe.only("ImagesGrid Component", () => {
    test('renders images grid', async () => {
        global.innerHeight = 0;

        render(<ImagesGrid images={productImages} />);

        productImages.forEach(async (element, index) => {
            const imgElement = screen.getByAltText(`product-img-${index}`);
            expect(imgElement).toBeInTheDocument();
            await fireEvent.load(imgElement);
        });

        const showMoreBtnEl = screen.getByText('Show More');

        expect(showMoreBtnEl).toBeInTheDocument(1);
        fireEvent.click(showMoreBtnEl);
        const showLessBtnEl = screen.getByText('Show Less');
        expect(showLessBtnEl).toBeInTheDocument(1);
    });
})
