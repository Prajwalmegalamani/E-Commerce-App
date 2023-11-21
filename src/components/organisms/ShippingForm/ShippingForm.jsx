import React from "react";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import { object, string } from "yup";
import Button from "../../atoms/Button";
import StandardGround from "../../molecules/StandardGround";
import Field from "../../molecules/Field";
import { defaultAddress, state } from "../../../utils/constants";
import setToLocalStorage from "../../../utils/setToLocalStorage";
import getFromStorage from "../../../utils/getFromLocalStorage";

export default function ShippingForm({
  shippingDetailsHandler,
  setAddress
}) {

  let addressDetails = getFromStorage("address") || defaultAddress;
  let formik = useFormik({
    initialValues: {
      firstName: addressDetails?.firstName || "",
      lastName: addressDetails?.lastName || "",
      address1: addressDetails?.address1 || "",
      address2: addressDetails?.address2 || "",
      city: addressDetails?.city || "",
      state: addressDetails?.state || "",
      code: addressDetails?.code || "",
      mobile: addressDetails?.mobile || "",
      email: addressDetails?.email || "",
    },
    onSubmit: function (value) {
      setToLocalStorage("address", value);
      shippingDetailsHandler(true);
      setAddress(value)
    },
    validationSchema: object({
      firstName: string().required("Please fill out this field."),
      lastName: string().required("Please fill out this field."),
      address1: string().required("Please fill out this field."),
      city: string().required("Please fill out this field."),
      state: string().required("Please select an item in the list"),
      code: string()
        .required("Please select an item in the list")
        .matches(/^[1-9][0-9]{5}$/, "Pincode is not valid"),
      mobile: string()
        .required("Please fill out this field.")
        .matches(
          /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
          "Phone number is not valid"
        ),
      email: string()
        .email("Not a proper email")
        .required("Please fill out this field."),
    }),
  });
  return (
    <form onSubmit={formik.handleSubmit} name="shipping form">
      <Field
        id="firstName"
        placeholder="First Name"
        className={`${formik.touched.firstName && formik.errors.firstName ? "invalid" : ""
          }`}
        name="firstName"
        value={formik.values.firstName}
        onChangeHandler={formik.handleChange}
        onInputHandler={formik.handleBlur}
        onBlurHandler={formik.handleBlur}
        label="First Name"
        required={true}
      />
      {formik.touched.firstName && formik.errors.firstName && (
        <div className="error-text">{formik.errors.firstName}</div>
      )}
      <Field
        id="lastName"
        placeholder="Last Name"
        className={`${formik.touched.lastName && formik.errors.lastName ? "invalid" : ""
          }`}
        name="lastName"
        value={formik.values.lastName}
        onChangeHandler={formik.handleChange}
        onInputHandler={formik.handleBlur}
        onBlurHandler={formik.handleBlur}
        label="Last Name"
        required={true}
      />

      {formik.touched.lastName && formik.errors.lastName && (
        <div className="error-text">{formik.errors.lastName}</div>
      )}
      <Field
        id="address1"
        placeholder="Address 1"
        className={`${formik.touched.address1 && formik.errors.address1 ? "invalid" : ""
          }`}
        name="address1"
        value={formik.values.address1}
        onChangeHandler={formik.handleChange}
        onInputHandler={formik.handleBlur}
        onBlurHandler={formik.handleBlur}
        label="Address 1"
        required={true}
      />

      {formik.touched.address1 && formik.errors.address1 && (
        <div className="error-text">{formik.errors.address1}</div>
      )}
      <Field
        id="address2"
        placeholder="Address 2(optional)"
        name="address2"
        value={formik.values.address2}
        onChangeHandler={formik.handleChange}
        onInputHandler={formik.handleBlur}
        onBlurHandler={formik.handleBlur}
        label="Address 2(optional)"
      />
      <Field
        id="city"
        placeholder="City"
        className={`${formik.touched.city && formik.errors.city ? "invalid" : ""
          }`}
        name="city"
        value={formik.values.city}
        onChangeHandler={formik.handleChange}
        onInputHandler={formik.handleBlur}
        onBlurHandler={formik.handleBlur}
        label="City"
        required={true}
      />

      {formik.touched.city && formik.errors.city && (
        <div className="error-text">{formik.errors.city}</div>
      )}

      <div className="codeState">
        <div className="width-half state-field">
          <Field
            id="state"
            placeholder="Please Select State"
            className={`floating-label-field floating-label-field--s3 ${formik.touched.state && formik.errors.state ? "invalid" : ""
              }`}
            name="state"
            Options={state}
            value={formik.values.state}
            onChangeHandler={formik.handleChange}
            onBlurHandler={formik.handleBlur}
            label="State"
            fieldType="select"
            required={true}
          />
          {formik.touched.state && formik.errors.state && (
            <div className="error-text">{formik.errors.state}</div>
          )}
        </div>

        <div className="width-half">
          <Field
            id="code"
            placeholder="Zip Code"
            className={`${formik.touched.code && formik.errors.code ? "invalid" : ""
              }`}
            name="code"
            value={formik.values.code}
            onChangeHandler={formik.handleChange}
            onInputHandler={formik.handleBlur}
            onBlurHandler={formik.handleBlur}
            label="Zip Code"
            required={true}
          />
          {formik.touched.code && formik.errors.code && (
            <div className="error-text">{formik.errors.code}</div>
          )}
        </div>
      </div>

      <Field
        id="mobile"
        placeholder="Mobile"
        className={`${formik.touched.mobile && formik.errors.mobile ? "invalid" : ""
          }`}
        name="mobile"
        value={formik.values.mobile}
        onChangeHandler={formik.handleChange}
        onInputHandler={formik.handleBlur}
        onBlurHandler={formik.handleBlur}
        label="Mobile"
        required={true}
      />

      {formik.touched.mobile && formik.errors.mobile && (
        <div className="error-text">{formik.errors.mobile}</div>
      )}
      <Field
        id="email"
        placeholder="Email"
        className={`${formik.touched.email && formik.errors.email ? "invalid" : ""
          }`}
        name="email"
        value={formik.values.email}
        onChangeHandler={formik.handleChange}
        onInputHandler={formik.handleBlur}
        onBlurHandler={formik.handleBlur}
        label="Email"
        required={true}
      />

      {formik.touched.email && formik.errors.email && (
        <div className="error-text">{formik.errors.email}</div>
      )}

      <StandardGround className={`mt`} />
      <Button
        type="submit"
        ariaLabel="continue to checkout"
        id="submit"
        name="submit"
        dataTestId="Continue"
        className="submit"
      >
        Continue
      </Button>
    </form>
  );
}

ShippingForm.propTypes = {
  shippingDetailsHandler: PropTypes.func,
  setAddress: PropTypes.func
};