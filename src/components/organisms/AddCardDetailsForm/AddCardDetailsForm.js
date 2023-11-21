import React, { useState } from "react";
import { useFormik } from "formik";
import { object, string } from "yup";
import PropTypes from "prop-types";
import Field from "../../molecules/Field";
import Button from "../../atoms/Button/Button";
import ChoiceField from "../../molecules/ChoiceField";
import "./AddCardDetailsForm.scss";
export default function AddCardDetailsForm({ setPaymentDetailsFilled, setCardDetails, cardDetails }) {
  let formik = useFormik({
    initialValues: {
      name: cardDetails.name || "",
      cardNumber: cardDetails.cardNumber || "",
      expirationDate: cardDetails.expirationDate || "",
      cvv: cardDetails.cvv || "",
    },
    onSubmit: function (value) {
      setPaymentDetailsFilled(true)
      setCardDetails(value)
    },
    validationSchema: object({
      name: string().required("Please fill out this field."),
      cardNumber: string()
        .required("Please fill out this field.")
        .matches(
          /[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$/,
          "Card Number is not valid"
        ),
      expirationDate: string().required("Please fill out this field.").test(
        'test-credit-card-expiration-date',
        'Invalid Expiration Date has past',
        expirationDate => {
          if (!expirationDate) {
            return false
          }
          const today = new Date()
          const monthToday = today.getMonth() + 1
          const yearToday = today
            .getFullYear()
            .toString()
            .substr(-2)

          const [expMonth, expYear] = expirationDate.split('/')

          if (Number(expYear) < Number(yearToday)) {
            return false
          } else if (
            Number(expMonth) < monthToday &&
            Number(expYear) <= Number(yearToday)
          ) {
            return false
          }
          return true
        }
      ).test(
        'test-credit-card-expiration-date',
        'Invalid Expiration Month',
        expirationDate => {
          if (!expirationDate) {
            return false
          }
          const [expMonth] = expirationDate.split('/')
          if (Number(expMonth) > 12) {
            return false
          }
          return true
        }
      ),
      cvv: string()
        .required("Please fill out this field.")
        .matches(/^[1-9][0-9]{2,4}$/, "CVV Number is not valid"),
    }),
  });
  const [billingAdressChoice, setBillingAddress] = useState(true);
  const handleBillingAddress = (e) => {
    setBillingAddress(e.target.checked);
  };
  function addGaps(str, gapNo) {
    let newStr = " ";
    str = str.replace(/ /g, '')
    let len = str.length;
    for (let i = 0; i < len; i++) {
      newStr = newStr + str[i];
      while (newStr.length % (gapNo) === 0) {
        newStr = newStr + " ";
      }
    }
    return newStr.trim(" ");
  }
  function cardRestructure() {
    let cardDetail = formik.values.cardNumber
    cardDetail = addGaps(cardDetail, 5)
    return cardDetail
  }
  function addSlash(value) {
    if (value.length === 2)
      value = value + '/'
    else
      if (value.length === 3 && value.charAt(2) === '/')
        value = value.replace('/', '');
    return value
  }
  function expRestructure() {
    let expDate = formik.values.expirationDate
    expDate = addSlash(expDate)
    return expDate
  }
  return (
    <div>
      <div className="card_heading">Add Card Details</div>
      <form onSubmit={formik.handleSubmit} name="card form">
        <Field
          id="name"
          placeholder="Your Name (as appears on card)"
          className={`${formik.touched.name && formik.errors.name ? "invalid" : ""
            }`}
          name="name"
          value={formik.values.name}
          onChangeHandler={formik.handleChange}
          onInputHandler={formik.handleBlur}
          onBlurHandler={formik.handleBlur}
          label="Your Name (as appears on card)"
          required={true}
        />
        {formik.touched.name && formik.errors.name && (
          <div className="error-text">{formik.errors.name}</div>
        )}
        <Field
          id="cardNumber"
          placeholder="Card Number"
          className={`${formik.touched.cardNumber && formik.errors.cardNumber
            ? "invalid"
            : ""
            }`}
          name="cardNumber"
          value={cardRestructure()}
          onChangeHandler={formik.handleChange}
          onInputHandler={formik.handleBlur}
          onBlurHandler={formik.handleBlur}
          label="Card Number"
          required={true}
          type="text"
          maxlength="19"
        />
        {formik.touched.cardNumber && formik.errors.cardNumber && (
          <div className="error-text">{formik.errors.cardNumber}</div>
        )}
        <Field
          id="expirationDate"
          placeholder="Expiration Date(MM/YY)"
          className={`${formik.touched.expirationDate && formik.errors.expirationDate
            ? "invalid"
            : ""
            }`}
          name="expirationDate"
          value={expRestructure()}
          onChangeHandler={formik.handleChange}
          onInputHandler={formik.handleBlur}
          onBlurHandler={formik.handleBlur}
          label="Expiration Date (MM/YY)"
          required={true}
          type="text"
          maxlength="5"
        />
        {formik.touched.expirationDate && formik.errors.expirationDate && (
          <div className="error-text">{formik.errors.expirationDate}</div>
        )}
        <Field
          id="cvv"
          placeholder="CVV"
          className={`${formik.touched.cvv && formik.errors.cvv ? "invalid" : ""
            }`}
          name="cvv"
          value={formik.values.cvv}
          onChangeHandler={formik.handleChange}
          onInputHandler={formik.handleBlur}
          onBlurHandler={formik.handleBlur}
          label="CVV"
          required={true}
          type="password"
          maxlength="3"
        />
        {formik.touched.cvv && formik.errors.cvv && (
          <div className="error-text">{formik.errors.cvv}</div>
        )}
        <ChoiceField
          id="billing_address"
          fieldType="checkbox"
          label="Use Shipping Address for Billing"
          name="gift_Card"
          className="marginY"
          checked={billingAdressChoice}
          onChangeHandler={handleBillingAddress}
          value="Use Shipping Address for Billing"
        ></ChoiceField>
        <Button
          type="submit"
          id="submitCardDetails"
          name="submit"
          className="fill changebutton"
          dataTestId="addCard"
        >
          Continue
        </Button>
      </form>
    </div>
  );
}

AddCardDetailsForm.propTypes = {
  setPaymentDetailsFilled: PropTypes.func.isRequired,
  setCardDetails: PropTypes.func.isRequired,
  cardDetails: PropTypes.object,
};
