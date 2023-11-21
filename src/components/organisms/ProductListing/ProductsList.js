import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../../redux/actions/getAllProducts.action";

import {
  getFilteredProducts,
  getProductsByCategory,
} from "../../../redux/actions/products.action";
import LoadMoreProducts from "../../molecules/LoadMoreProducts/LoadMoreProducts";
import ProductCard from "../ProductCard";
import "./ProductsList.scss";
import { getSearchedProducts } from "../../../redux/actions/productSearch.action";
import Loader from "../../atoms/Loader/Loader";
import { productActions } from "../../../redux/action.type";

export default function ProductsList({
  category,
  searchStr,
  loadedFromSearch,
  selected,
  show
}) {
  const dispatch = useDispatch();
  const { products, sortBy, isLoading } = useSelector(
    (state) => state.products
  );

  let items = products.products ?? [];

  useEffect(() => {
    if (loadedFromSearch) {
      if (searchStr == "") {
        dispatch({
          type: productActions.GET_ALL_PRODUCTS,
          payload: { result: { products: [], total: 0 } },
        });
      } else {
        if (searchStr.length >= 3) {
          dispatch(getFilteredProducts(category, selected, searchStr))
        }
      }
    } else {
      category
        ? dispatch(getProductsByCategory(category))
        : dispatch(getAllProducts());
    }
  }, [dispatch, category, searchStr, loadedFromSearch]);

  switch (sortBy) {
    case 0: {
      items = items.sort((a, b) => (a.price > b.price ? 1 : -1));
      break;
    }
    case 1: {
      items = items.sort((a, b) =>
        a.price > b.price ? -1 : 1
      );
      break;
    }
    case 2: {
      items = items.sort((a, b) =>
        a.rating > b.rating ? -1 : 1
      );
      break;
    }
    default:
      break;
  }

  const loadMore = () => {
    if (loadedFromSearch) {
      dispatch(getSearchedProducts(items.length, searchStr));
    } else {
      dispatch(getAllProducts(items.length, searchStr));
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      {products?.products?.length === 0 && searchStr !== "" && (
        <div className="products-container">
          <div className="products-count">No product found!</div>
        </div>
      )}
      {searchStr === "" && loadedFromSearch && products?.products?.length === 0 &&(
        <div className="products-container">
          <div className="products-count">
            Please type something to search products!
          </div>
        </div>
      )}
      <div className="products-container">
        {items &&
          items?.map((product) => (
            <ProductCard key={product.id} item={product} show={show}/>
          ))}
        {items.length > 0 && (
          <div className="products-count">
            Viewing {items.length} of {products.total} products
          </div>
        )}
        {items.length !== products.total && (
          <LoadMoreProducts loadMore={loadMore} />
        )}
      </div>
    </>
  );
}
