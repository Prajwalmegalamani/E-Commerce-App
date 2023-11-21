import React from "react";
import PropTypes from "prop-types";
import ChoiceField from "../../molecules/ChoiceField";
import "./PaymentOptions.scss";
export default function PaymentOptions({
  showPaymentOption,
  handlePaymentOption,
}) {
  return (
    <div className="options_card">
      <ChoiceField
        id="card_payment"
        fieldType="radio"
        label="Credit or Debit Card"
        name="payment_option"
        value="card payment"
        onChangeHandler={(e) => handlePaymentOption(e.target.value)}
        checked={showPaymentOption === "card payment"}
      ></ChoiceField>
      <ChoiceField
        id="pay_pal"
        fieldType="radio"
        label=""
        name="payment_option"
        value="pay pal"
        onChangeHandler={(e) => handlePaymentOption(e.target.value)}
        checked={showPaymentOption === "pay pal"}
      ></ChoiceField>
      <ChoiceField
        id="pay_later"
        fieldType="radio"
        label="Pay Later"
        name="payment_option"
        value="pay later"
        onChangeHandler={(e) => handlePaymentOption(e.target.value)}
        checked={showPaymentOption === "pay later"}
      ></ChoiceField>
      <ChoiceField
        id="apple_pay"
        fieldType="radio"
        label=""
        name="payment_option"
        value="apple pay"
        onChangeHandler={(e) => handlePaymentOption(e.target.value)}
        checked={showPaymentOption === "apple pay"}
      ></ChoiceField>
    </div>
  );
}

PaymentOptions.propTypes = {
  handlePaymentOption: PropTypes.func.isRequired,
  showPaymentOption: PropTypes.string.isRequired,
};
