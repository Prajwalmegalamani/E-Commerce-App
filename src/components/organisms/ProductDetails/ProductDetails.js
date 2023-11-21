import React from 'react';
import PropTypes from 'prop-types';

import ProductInfo from '../ProductInfo';
import './ProductDetails.scss';
import ImageGrid from '../../molecules/ImagesGrid';

function ProductDetails({ product }) {
    return (
        <div className='product-details'>
            <div className='six columns img-grid'>
                <ImageGrid images={product.images} />
            </div>
            <div className='six columns'>
                <ProductInfo product={product} />
            </div>
        </div>
    )
}

ProductDetails.propTypes = {
    product: PropTypes.object.isRequired,
}

export default ProductDetails;