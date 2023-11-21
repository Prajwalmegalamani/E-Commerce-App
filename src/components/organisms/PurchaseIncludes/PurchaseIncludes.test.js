import { render, screen } from '@testing-library/react';

import PurchaseIncludes from './PurchaseIncludes';

describe("PurchaseIncludes Component", () => {
    test('renders product inclusion heading', () => {
        render(<PurchaseIncludes />);

        const titleElement = screen.getByText('Included with this Purchase');

        expect(titleElement).toBeInTheDocument();
    });
})
