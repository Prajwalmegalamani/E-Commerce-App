import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import FilterToggleButton from "../../molecules/filter-toggle-button/Filter-toggle-button";
import Breadcrumb from "../../molecules/Breadcrumb/Breadcrumb";
import FilterList from "../../organisms/filter-list/Filter-list";
import SortingDropdown from "../../organisms/SortingDropdown";
import ProductsList from "../../organisms/ProductListing";
import FilterTags from "../../molecules/FilterTags/FilterTags";

import "./ProductsListingPage.scss";
import { getFilteredProducts, getProductsByCategory } from "../../../redux/actions/products.action";
import { getAllProducts } from "../../../redux/actions/getAllProducts.action";
import { getSelectedFilters } from "../../../utils/filterUtility";
import { getSearchedProducts } from "../../../redux/actions/productSearch.action";
import Recommendations from "../../organisms/Recommendations";
import useWindowSize from "../../../hooks/useWindowSize";

export default function ProductsListingPage(props) {
  const [show, setShow] = useState(false);
  let { category } = useParams();
  const dispatch = useDispatch();
  const { products, filters } = useSelector((state) => state.products);
  let [isFilterApplied, setIsFilterApplied] = useState(false)
  const handleToggle = (isShow) => {
    setShow(isShow);
  };
  const [width, height] = useWindowSize();

  let selected = getSelectedFilters(filters);

    useEffect(() => {
      const filterProducts = () => {
        setIsFilterApplied(false)
        if( selected.length ) {
          setIsFilterApplied(true)
          dispatch(getFilteredProducts(category, selected, props.searchStr))
        } else if ( category ) {
          dispatch(getProductsByCategory(category))
        } else if ( props.searchStr || props.loadedFromSearch ) {
          if( props.searchStr.length >= 3) 
            dispatch(getSearchedProducts(0, props.searchStr))
        } else {
          dispatch(getAllProducts())
        }
      };
  
      filterProducts();
    }, [filters, dispatch, category, props.searchStr, props.loadedFromSearch]);
  

  return (
    <div className="container product-page-wraper">
      {(products?.products?.length > 0 || !props.loadedFromSearch || isFilterApplied) && (
        <div>
          <section>
            <div className="product-header-section">
              {!props.loadedFromSearch && (
                <div className="bredcrum-section row">
                  {category ? (
                    <Breadcrumb
                      routes={[
                        { path: `/products/${category}`, text: `${category}` },
                      ]}
                    />
                  ) : (
                    <Breadcrumb
                      routes={[{ path: `/products`, text: "Products" }]}
                    />
                  )}
                </div>
              )}
              <div className="filter-section">
                <div className="seven columns listing-header">
                  {category ? category : "All Products"}({products.total})
                </div>
                <div className="filter-buttons">
                  <FilterToggleButton show={show} setShow={handleToggle} />
                  <SortingDropdown />
                </div>
              </div>
            </div>
          </section>
          <section>
            <hr className="separator" />
          </section>
        </div>
      )}
      <section>
        <div className="product-main-section">
        {(products?.products?.length > 0 || !props.loadedFromSearch || isFilterApplied) && (
          <div>
            <FilterTags />
          </div>
        )}
          <div className="product-main-section-wrapper row">
          {(products?.products?.length > 0 || !props.loadedFromSearch || isFilterApplied) && (
              <div className={width > 1150 ? "two columns" : "three columns"}>
                <FilterList show={show} setShow={handleToggle}/>
              </div>
          )}

            <div className={show ? width > 1150 ? "ten columns": "nine columns" : "twelve columns"}>
              <ProductsList
                category={category}
                searchStr={props.searchStr}
                loadedFromSearch={props.loadedFromSearch}
                selected={selected}
                show={show}
              />
            </div>
          </div>
        </div>
      </section>
      {!props.loadedFromSearch && <Recommendations />}
  
    </div>
  );
}
