import React, { useState } from "react";
import PropTypes from "prop-types";

import CardHeader from "../../atoms/CardHeader";
import AddCardDetailsForm from "../AddCardDetailsForm";
import GiftCardForm from "../GiftCardForm";
import PaymentOptions from "../PaymentOptions";
import ChoiceField from "../../molecules/ChoiceField";
import "./PaymentOptionsCard.scss";
import Visa from "../../atoms/Icons/Visa";
import Button from "../../atoms/Button";
export default function PaymentOptionsCard({ paymentDetailsFilled, setPaymentDetailsFilled, address, detailsFilled }) {
  const [showGiftCard, setGiftCard] = useState();
  const [showPaymentOption, setPaymentOption] = useState("card payment");
  const [cardDetails, setCardDetails] = useState({})
  const handleGiftCardPayment = (e) => {
    setGiftCard(e.target.checked);
  };
  const handlePaymentOption = (val) => {
    setPaymentOption(val);
  };
  function changePaymentDetails(params) {
    setPaymentDetailsFilled(false)
  }
  return (
    <div className="card">
      <CardHeader stepNumber={2} cardHeading="Payment Options" className={!detailsFilled ? "disabled" : ""} />
      {detailsFilled &&
        <div className="padding-form">
          {paymentDetailsFilled ?
            <div>
              <div className="card-detail">
                <Visa />
                <p>Visa ending in {cardDetails?.cardNumber?.substring(cardDetails?.cardNumber?.length - 5, cardDetails?.cardNumber?.length - 1)}</p>
              </div>
              <div >
                <span>Billing Address</span>
                <address className="address_detail">
                  <span className="">{address.address1}</span>
                  <span>{address.email}</span>
                  <span>{address.mobile}</span>
                </address>
              </div>
              <Button
                dataTestId="ChangePayment"
                type="button"
                ariaLabel="Change Payment"
                id="ChangePayment"
                name="ChangePayment"
                className="empty changebutton"
                onClickHandler={changePaymentDetails}
              >
                Change Payment
              </Button>
            </div> :
            <div>
              <ChoiceField
                id="gift_Card"
                fieldType="checkbox"
                label="Pay with ABC gift Card"
                name="gift_Card"
                value="Pay with ABC gift Card"
                onChangeHandler={handleGiftCardPayment}
              ></ChoiceField>
              {showGiftCard && <GiftCardForm></GiftCardForm>}
              <PaymentOptions
                handlePaymentOption={handlePaymentOption}
                showPaymentOption={showPaymentOption}
              ></PaymentOptions>

              {showPaymentOption === "card payment" && (
                <AddCardDetailsForm cardDetails={cardDetails} setCardDetails={setCardDetails} setPaymentDetailsFilled={setPaymentDetailsFilled}></AddCardDetailsForm>
              )}
            </div>
          }
        </div>
      }
    </div>
  );
}

PaymentOptionsCard.propTypes = {
  paymentDetailsFilled: PropTypes.bool,
  setPaymentDetailsFilled: PropTypes.func,
  address: PropTypes.object,
  detailsFilled: PropTypes.bool
};