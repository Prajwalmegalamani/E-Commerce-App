import React from "react";
import PropTypes from "prop-types";

import ShippingForm from "../ShippingForm";
import ShippingDetails from "../../molecules/ShippingDetails";
import CardHeader from "../../atoms/CardHeader";

export default function ShippingCard({ detailsFilled, setDetailsFilled, setAddress }) {

  return (
    <div className="card" data-testid="card">
      <CardHeader stepNumber={1} cardHeading="Shipping Address" />
      <div className="padding-form">
        {detailsFilled ?
          <ShippingDetails
            shippingDetailsHandler={setDetailsFilled}
          />
          :
          <ShippingForm setAddress={setAddress}
            shippingDetailsHandler={setDetailsFilled}
          />}
      </div>
    </div>
  );
}

ShippingCard.propTypes = {
  detailsFilled: PropTypes.bool,
  setDetailsFilled: PropTypes.func,
  setAddress: PropTypes.func,
};