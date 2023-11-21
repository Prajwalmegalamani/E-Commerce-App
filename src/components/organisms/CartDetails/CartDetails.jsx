import React from "react";
import PropTypes from "prop-types";

import DisplayCartDetails from "../DisplayCartDetails/DisplayCartDetails";
import "./CartDetails.scss";


function CartDetails({ quantity, cartData }) {
  return (
    <div>
      <div>
        <h3 className="container-box cart-text-font">
          Your Cart ({quantity})
        </h3>
      </div>
      <div className="container-box">
        {cartData?.map((product) => {
          return (
            <div key={product.id}>
              <DisplayCartDetails data={product} cartPage={"cart"} />
              <hr />
            </div>
          );
        })}
      </div>

    </div>
  );
}

CartDetails.propTypes = {
  quantity: PropTypes.number,
  cartData: PropTypes.array
};

export default CartDetails