import React, { useEffect } from 'react';

import ProductDetailsLayout from '../../templates/ProductDetailsLayout';

export default function ProductDetailsPage() {
        useEffect(()=>{
            window.scroll(0,0)
        },[])
    return (
        <ProductDetailsLayout />
    )
}
