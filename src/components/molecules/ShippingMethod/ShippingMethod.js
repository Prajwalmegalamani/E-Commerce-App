import React from 'react';
import PropTypes from 'prop-types';

import './ShippingMethod.scss';
import Radio from '../../atoms/Radio';

function ShippingMethod({ method, address, tagline, name, isChecked, id }) {
    return (
        <div className='shipping-method-wrapper'>
            <Radio defaultChecked={isChecked} name={name} id={id} />
            <label htmlFor={id}>
                <div className='address-wrapper'><span className='shipping-method'>{method}</span><address className='shipping-address'>{address}</address></div>
                <p>{tagline}</p>
            </label>
        </div>
    )
}

ShippingMethod.propTypes = {
    method: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isChecked: PropTypes.bool,
    id: PropTypes.string.isRequired,
}

export default ShippingMethod;