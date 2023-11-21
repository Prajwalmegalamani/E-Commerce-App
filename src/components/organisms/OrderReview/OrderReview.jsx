import React from "react";
import PropTypes from "prop-types";
import Button from "../../atoms/Button";

import CardHeader from "../../atoms/CardHeader";
import "./OrderReview.scss";

function OrderReview({ placeOrder, detailsFilled, paymentDetailsFilled }) {
  return (
    <div className="order-review ">
      <CardHeader
        stepNumber={3}
        cardHeading="Order Review"
        className={detailsFilled && paymentDetailsFilled ? "" : "disabled"}
      />
      {detailsFilled && paymentDetailsFilled && (
        <div className="padding-form">
          <span className="text-small">
            By placing this order, you agree to ABC's Terms & Conditions and
            Privacy Policy
          </span>
          <Button
            className="place-order"
            onClickHandler={placeOrder}
            dataTestId="PlaceOrder"
          >
            place Order
          </Button>
        </div>
      )}
    </div>
  );
}
OrderReview.propTypes = {
  placeOrder: PropTypes.func,
  detailsFilled: PropTypes.bool,
  paymentDetailsFilled: PropTypes.bool,
};

export default OrderReview;
