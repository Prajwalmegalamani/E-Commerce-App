import React from "react";
import PropTypes from "prop-types";
import Visa from "../../atoms/Icons/Visa";
export default function PaymentDetails({ address }) {
  return (
    <div className="center">
      <div className="payment-details">
        <h4 className="payment-details__heading">Payment Details</h4>
        <div className="gift-card">
          <span>Gift card: 35526</span>
          <span>$60.00</span>
        </div>
        <div className="card-details">
          <Visa />
          <p>Visa ending in 3452</p>
        </div>
        <div className="shipping-address">
          <span>Shipping Address</span>
          <address className="shipping-address__content">
            <span className="address">{address.address1}</span>
            <span>{address.email}</span>
            <span>{address.mobile}</span>
          </address>
        </div>
      </div>
    </div>
  );
}
PaymentDetails.propTypes = {
  address: PropTypes.object
};