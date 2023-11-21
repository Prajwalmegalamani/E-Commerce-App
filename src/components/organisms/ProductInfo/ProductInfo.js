import React from "react";
import PropTypes from "prop-types";

import DiscountedPrice from "../../molecules/DiscountedPrice";
import StarRating from "../../molecules/StarRating";
import ShippingMethod from "../../molecules/ShippingMethod";
import Divider from "../../atoms/Divider/Divider";
import "./ProductInfo.scss";
import Button from "../../atoms/Button";
import BookMark from "../../atoms/BookMark/BookMark";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/actions/addToCart.action";
import { useNavigate } from "react-router-dom";

function ProductInfo({ product }) {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  const addCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <>
      <div className="bookmark">
        <h5>{product.category}</h5>
        <BookMark />
      </div>
      <h3>{product.title}</h3>
      <Divider />
      <div className="price-wrapper">
        <DiscountedPrice
          originalPrice={product.price}
          discount={product.discountPercentage}
        />
        <StarRating defaultRating={product.rating} />
      </div>

      <Divider />
      <p>{product.description}</p>
      <div className="actions">
        <Button
          ariaLabel="Add to Cart"
          className="fill"
          onClickHandler={() => addCart(product)}
        >
          Add to Cart
        </Button>
        <Button
          ariaLabel="Express Checkout"
          onClickHandler={() => navigate("/cart")}
        >
          Express Checkout
        </Button>
      </div>
      <div className="shipping-methods">
        <ShippingMethod
          method="Shipping Available to "
          id="ShippingPin"
          address="30346"
          tagline="Free Standard Shipping"
          name="shippingmethod"
          isChecked={true}
        />
        <ShippingMethod
          method="Free Pickup Available at "
          id="FreePickup"
          address="ABC at Perimeter Mall"
          tagline="Order online now and pick up tomorrow in store"
          name="shippingmethod"
        />
      </div>
    </>
  );
}

ProductInfo.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductInfo;
