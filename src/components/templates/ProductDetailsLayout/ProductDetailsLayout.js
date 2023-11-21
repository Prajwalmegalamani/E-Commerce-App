import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Breadcrumb from "../../molecules/Breadcrumb/Breadcrumb";
import ProductDetails from "../../organisms/ProductDetails/ProductDetails";
import ProductImagesCarousel from "../../molecules/ProductImagesCarousel";
import { baseUrl } from "../../../config";
import PurchaseIncludes from "../../organisms/PurchaseIncludes";
import AxiosClient from "../../../utils/axios-client/axiosClient";
import "./ProductDetailsLayout.scss";
import Recommendations from "../../organisms/Recommendations";
import Loader from "../../atoms/Loader/Loader";

export default function ProductDetailsLayout() {
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { products } = useSelector((state) => state.products);
    const { id } = useParams();

    const getProductDetails = useCallback(async () => {
        setIsLoading(true);
        AxiosClient({
            url: `${baseUrl}/products/${id}`,
            method: "get",
        }).then((res) => {
            setProduct(res.data);
            setIsLoading(false);
        })
    }, [id]);

    useEffect(() => {
        if (products.products.length === 0) {
            getProductDetails();
        } else {
            const productId = +id;
            const storeProduct = products.products.find((prod) => prod.id === productId);
            if( storeProduct ) {
                setProduct(storeProduct);
            } else {
                getProductDetails();
            }
            
        }
    }, [products, id, getProductDetails]);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="product-details-layout">
            {product && (
                <>
                    <div className="container breadummb">
                        <Breadcrumb
                            routes={[
                                {
                                    path: `/products/${product.category}`,
                                    text: product.category,
                                },
                                { path: `/product/${product.id}`, text: product.title },
                            ]}
                        />
                    </div>
                    <section className="img-carousel">
                        <ProductImagesCarousel images={product.images} />
                    </section>
                    <section className="container product-information">
                        <ProductDetails product={product} />
                    </section>
                </>
            )}

            <section className="container">
                <section className="product-inclusion">
                    <PurchaseIncludes />
                </section>
                <section className="product-suggestion">
                    <Recommendations />
                </section>
            </section>
        </div>
    );
}
