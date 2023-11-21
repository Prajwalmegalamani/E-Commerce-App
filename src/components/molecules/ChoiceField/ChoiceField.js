import React from "react";
import Label from "../../atoms/Label/Label.jsx";
import Radio from "../../atoms/Radio";
import Checkbox from "../../atoms/Checkbox";
import PropTypes from "prop-types";
import "./ChoiceField.scss";
import ApplePay from "../../atoms/Icons/ApplePay";
import Card from "../../atoms/Icons/Card";
import Paypal from "../../atoms/Icons/Paypal";
import Paylater from "../../atoms/Icons/Paylater";
import GiftIcon from "../../atoms/Icons/GiftIcon";
export default function ChoiceField({
  id,
  fieldType,
  label,
  name,
  checked,
  className,
  onChangeHandler,
  value,
}) {
  function getLabel(id, label_name) {
    switch (id) {
      case "card_payment":
        return <Card></Card>
      case "pay_pal":
        return <Paypal></Paypal>
      case "pay_later":
        return <Paylater></Paylater>
      case "apple_pay":
        return <ApplePay></ApplePay>
      case "gift_Card":
        return <GiftIcon></GiftIcon>
      default:
        return null
    }
  }

  return (
    <div className={`choice ${className}`}>
      {fieldType === "radio" ? (
        <Radio
          id={id}
          name={name}
          checked={checked}
          value={value}
          onChangeHandler={onChangeHandler}
          className="allign-icon"
        ></Radio>
      ) : (
        <Checkbox
          id={id}
          checked={checked}
          onChangeHandler={onChangeHandler}
          value={value}
          className="allign-icon"
        ></Checkbox>
      )}
      <Label htmlFor={id} className="label allign-label">
        {getLabel(id, label)}
        <span className="label-text">
          {label}
        </span>
      </Label>
    </div>
  );
}
ChoiceField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  fieldType: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChangeHandler: PropTypes.func,
  value: PropTypes.string.isRequired,
};
