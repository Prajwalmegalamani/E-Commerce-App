import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import FilterAccordian from "../../molecules/filter-accordian/Filter-accordian";
import "./Filter-list.scss";
import { addFilter } from "../../../redux/actions/products.action";
import FilterMobileContent from "../../molecules/FilterMobileContent";
import Button from "../../atoms/Button";
import { productActions } from "../../../redux/action.type";

export default function FilterList({ show, setShow }) {
  const { filters, products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const filterChangeHandler = (filterObj) => {
    dispatch(addFilter(filterObj));
  };

  const resetFilters = () => {
    dispatch({
      type: productActions.RESET_PRODUCTS_FILTERS,
    });
  }

  const countFilters = useMemo(
    () =>
      Object.values(filters).reduce(
        (total, categoryFilter) =>
          categoryFilter.filter((value) => value.isApply).length + total,
        0
      ),
    [filters]
  );

  return (
    <>
      {show && (
        <div className="filter-list-wrapper show">
          <FilterMobileContent
            heading={`Filter ${countFilters ? "(" + countFilters + ")" : ""}`}
            onCloseClick={() => setShow(!show)}
          />
          <div className="filter-list">
            <FilterAccordian
              items={filters.discountPercentage}
              title="Discount Range"
              onChangeStatus={(status) =>
                filterChangeHandler({ discountPercentage: status })
              }
            />
            <FilterAccordian
              items={filters.price}
              title="Price Range"
              onChangeStatus={(status) =>
                filterChangeHandler({ price: status })
              }
            />
            <FilterAccordian
              items={filters.brand}
              title="Brand"
              onChangeStatus={(status) =>
                filterChangeHandler({ brand: status })
              }
            />
            <FilterAccordian
              items={filters.rating}
              title="Rating"
              onChangeStatus={(status) =>
                filterChangeHandler({ rating: status })
              }
            />
          </div>
          <div className="filter-footer">
            <Button ariaLabel="Show Products" className="fill" onClickHandler={() => setShow(!show)}>
              Show {products.products.length} Products
            </Button>
            {!!countFilters && (
              <Button ariaLabel="Clear All" className="clear-btn" onClickHandler={resetFilters}>
                Clear All
              </Button>
            )}
          </div>
        </div>
      )}
    </>
  );
}

FilterList.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
};
