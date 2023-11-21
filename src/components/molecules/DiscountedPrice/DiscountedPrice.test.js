import React from 'react';
import { render, screen } from '@testing-library/react';

import DiscountedPrice from './DiscountedPrice';

const MOCK_PRICE = 549;
const MOCK_DISCOUNT = 12.96;

const renderComponent = (props) => {
  return render(<DiscountedPrice originalPrice={MOCK_PRICE} discount={MOCK_DISCOUNT} {...props} />);
};
describe("DiscountedPrice Component", () => {
  test('renders original price with discounted price', () => {
    renderComponent();
    const EXPECTED_DISCOUNT = 477.85;

    const originalPriceElement = screen.getByText(`$${MOCK_PRICE}`);
    expect(originalPriceElement).toBeInTheDocument();

    const discountedPriceElement = screen.getByText(`$${EXPECTED_DISCOUNT}`);
    expect(discountedPriceElement).toBeInTheDocument();
  });

  test('renders original price with zero discounted price', () => {
    renderComponent({ discount: 0 });

    const originalPriceElement = screen.getByText(`$${MOCK_PRICE}`);
    expect(originalPriceElement).toBeInTheDocument();
  });
})

