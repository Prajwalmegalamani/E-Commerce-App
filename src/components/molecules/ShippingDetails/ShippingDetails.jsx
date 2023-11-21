import React from "react";

import Button from "../../atoms/Button/Button";
import StandardGround from "../StandardGround";
import PropTypes from "prop-types";
import getFromStorage from "../../../utils/getFromLocalStorage";
import { defaultAddress } from "../../../utils/constants";

export default function ShippingDetails({
  shippingDetailsHandler,
}) {
  const address = getFromStorage("address") || defaultAddress;
  const shipDetailsHandler = () => {
    shippingDetailsHandler(false);
  };
  return (
    <>
      <div className="shippingDetails">
        <div>
          <span className="firstName">{address?.firstName}</span>
          <span className="lastName">{address?.lastName}</span>
        </div>
        <div>{address?.address1}</div>
        <div>{address?.address2}</div>
        <div>
          {address?.city} {address?.state} {address?.code}
        </div>
        <div>{address?.email}</div>
        <div>{address?.mobile}</div>
      </div>
      <Button
        dataTestId="ChangeAddress"
        type="button"
        ariaLabel="Change Address"
        id="changeAddress"
        name="changeAddress"
        className="empty changebutton"
        onClickHandler={shipDetailsHandler}
      >
        Change Address
      </Button>
      <StandardGround />
    </>
  );
}
ShippingDetails.propTypes = {
  shippingDetailsHandler: PropTypes.func,
};
