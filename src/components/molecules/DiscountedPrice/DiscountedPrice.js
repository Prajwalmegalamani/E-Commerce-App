import React from 'react';
import PropTypes from 'prop-types';

import './DiscountedPrice.scss';

function DiscountedPrice({ originalPrice, discount }) {

    if (discount <= 0) {
        return (
            <h3>${originalPrice}</h3>
        )
    }

    const discountedPrice = (originalPrice - Math.abs((discount * originalPrice) / 100)).toFixed(2);
    return (
        <h3><span className='original-price'>${originalPrice}</span> <span className='discounted-price'>${discountedPrice}</span> </h3>
    )
}

DiscountedPrice.propTypes = {
    originalPrice: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired,
}

export default DiscountedPrice;