import React from "react";

import { useFormik } from "formik";
import { object, string } from "yup";
import Field from "../../molecules/Field";
import Button from "../../atoms/Button/Button";

export default function GiftCardForm() {
  let formik = useFormik({
    initialValues: {
      cardNumber: "",
      pin: "",
    },
    onSubmit: function (value) { },
    validationSchema: object({
      cardNumber: string().required("Please fill out this field."),
      pin: string()
        .required("Please fill out this field.")
        .test("len", "Must be exactly 4 characters", (val) => {
          if (val) {
            return val.length === 4;
          }
          return false;
        }),
    }),
  });
  return (
    <form onSubmit={formik.handleSubmit} name="gift_card_form">
      <Field
        id="giftCardNumber"
        placeholder="Gift Card Number"
        className={`${formik.touched.cardNumber && formik.errors.cardNumber ? "invalid" : ""
          }`}
        dataTestId="giftCardNumber"
        name="cardNumber"
        value={formik.values.cardNumber}
        onChangeHandler={formik.handleChange}
        onInputHandler={formik.handleBlur}
        onBlurHandler={formik.handleBlur}
        label="Gift Card Number"
        required={true}
      />
      {formik.touched.cardNumber && formik.errors.cardNumber && (
        <div className="error-text">{formik.errors.cardNumber}</div>
      )}
      <Field
        id="pin"
        placeholder="Pin"
        dataTestId="pin"
        className={`${formik.touched.pin && formik.errors.pin ? "invalid" : ""
          }`}
        name="pin"
        value={formik.values.pin}
        onChangeHandler={formik.handleChange}
        onInputHandler={formik.handleBlur}
        onBlurHandler={formik.handleBlur}
        label="Pin"
        required={true}
      />
      {formik.touched.pin && formik.errors.pin && (
        <div className="error-text">{formik.errors.pin}</div>
      )}
      <Button
        type="submit"
        id="submitGiftCardDetails"
        className="Apply"
        name="submit"
        dataTestId="apply"
      >
        Apply
      </Button>
    </form>
  );
}
