import React from 'react';
import { render, screen } from '@testing-library/react';

import ShippingMethod from './ShippingMethod';

const MOCK_METHOD = 'Shipping Available to';
const MOCK_ADDRESS = '30346';
const MOCK_TAGLINE = 'Free Standard Shipping';

const renderComponent = (props) => {
  return render(<ShippingMethod method={MOCK_METHOD} address={MOCK_ADDRESS} tagline={MOCK_TAGLINE} name="shippingmethod" isChecked={true} {...props}/>);
};

describe("ShippingMethod Component", () => { 
  test('renders original price with discounted price', () => {
    renderComponent();
    const methodElement = screen.getByText(MOCK_METHOD);
    expect(methodElement).toBeInTheDocument();
  
    const addressElement = screen.getByText(MOCK_ADDRESS);
    expect(addressElement).toBeInTheDocument();
  
    const taglineElement = screen.getByText(MOCK_TAGLINE);
    expect(taglineElement).toBeInTheDocument();
  });
});

