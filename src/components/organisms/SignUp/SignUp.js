import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

import "./style.scss";
import Button from "../../atoms/Button";
import { countries, gender, months, days } from "../../../utils/constants";
import Field from "../../molecules/Field/Field";
import { userRegistration } from "../../../redux/actions/userRegistration.action";
import { userLogin } from "../../../redux/actions/userLogin.action";
import Loader from "../../atoms/Loader";

export default function SignUp() {
  let { isLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      country: "",
      email: "",
      confirmEmail: "",
      uname: "",
      fname: "",
      lname: "",
      pno: "",
      zipcode: "",
      months: "",
      days: "",
      gender: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: function (values) {
      registerUser(values);
    },
    validationSchema: Yup.object({
      country: Yup.string().required("Country is missing."),
      email: Yup.string()
        .email("Email is not in proper format")
        .required("Email Address missing."),
      confirmEmail: Yup.string()
        .required("Confirm Email Address Missing.")
        .oneOf([Yup.ref("email"), null], "Email does not match"),
      uname: Yup.string().required("User Name missing"),
      fname: Yup.string().required("First Name missing"),
      lname: Yup.string().required("Last Name missing"),
      pno: Yup.string().matches(/^^[789]\d{9}$/, "Invalid phone number"),
      zipcode: Yup.string().matches(/^[1-9][0-9]{5}$/, "Pincode is not valid"),
      months: Yup.string(),
      days: Yup.string(),
      gender: Yup.string(),
      password: Yup.string().required("Password is required"),
      confirmPassword: Yup.string()
        .required("Confirm Password is required")
        .oneOf([Yup.ref("password"), null], "Passwords does not match"),
    }),
  });

  const registerUser = async (values) => {
    const response = await dispatch(
      userRegistration({
        country: values.country,
        email: values.email,
        firstName: values.fname,
        lastName: values.lname,
        userName: values.uname,
        phone: values.pno,
        address: {
          postalCode: values.zipcode,
        },
        birthDate: values.days + values.months,
        gender: values.gender,
        password: values.password,
      })
    );
    if (response) {
      const loginResponse = await dispatch(
        userLogin({
          username: values.uname,
          password: values.password,
        })
      );
      if (loginResponse.status) {
        localStorage.setItem("userDetails", JSON.stringify(loginResponse.data));
        navigate(-1);
      }
    }
  };
  return (
    <>
      {isLoading && <Loader />}

      <div className="registration_container">
        <h2 className="registration_header">Create Your Account</h2>
        <div className="registration_msg">
          <p>* Required</p>{" "}
        </div>
        <form className="registration_form" onSubmit={formik.handleSubmit}>
          {/* country  */}
          <div className="fields_container">
            <span className="input-box-container">
              <Field
                fieldType="select"
                onChangeHandler={formik.handleChange}
                onBlurHandler={formik.handleBlur}
                value={formik.values.country}
                ariaLabel="country-input-box"
                Options={countries}
                placeholder="Select a country"
                id="country"
                name="country"
                label="Country"
                className={
                  "w-100" +
                  (formik.errors.country && formik.touched.country
                    ? " input-box-error"
                    : " input-box")
                }
                required={true}
              ></Field>
            </span>

            {formik.errors.country && formik.touched.country && (
              <span className="error-message">{formik.errors.country}</span>
            )}
          </div>

          {/* email  */}
          <div className="fields_container">
            <span className="input-box-container">
              <Field
                inputType="email"
                onChangeHandler={formik.handleChange}
                onBlurHandler={formik.handleBlur}
                value={formik.values.email}
                ariaLabel="confirmEmail-input-box"
                id="email"
                name="email"
                label="Email"
                className={
                  "w-100" +
                  (formik.errors.email && formik.touched.email
                    ? " input-box-error"
                    : " input-box")
                }
                required={true}
              ></Field>
            </span>
            {formik.errors.email && formik.touched.email && (
              <span className="error-message">{formik.errors.email}</span>
            )}
          </div>

          {/* confirm email  */}
          <div className="fields_container">
            <span className="input-box-container">
              <Field
                inputType="email"
                onChangeHandler={formik.handleChange}
                onBlurHandler={formik.handleBlur}
                value={formik.values.confirmEmail}
                ariaLabel="confirmEmail-input-box"
                id="confirmEmail"
                name="confirmEmail"
                label="Confirm Email"
                className={
                  "w-100" +
                  (formik.errors.confirmEmail && formik.touched.confirmEmail
                    ? " input-box-error"
                    : " input-box")
                }
                required={true}
              ></Field>
            </span>
            {formik.errors.confirmEmail && formik.touched.confirmEmail && (
              <span className="error-message">
                {formik.errors.confirmEmail}
              </span>
            )}
          </div>

          {/* Username */}
          <div className="fields_container ">
            <span className="input-box-container">
              <Field
                onChangeHandler={formik.handleChange}
                onBlurHandler={formik.handleBlur}
                value={formik.values.uname}
                ariaLabel="userName"
                id="uname"
                name="uname"
                label="User Name"
                className={
                  "w-100" +
                  (formik.errors.uname && formik.touched.uname
                    ? " input-box-error"
                    : " input-box")
                }
                required={true}
              ></Field>
            </span>

            {formik.errors.uname && formik.touched.uname && (
              <span className="error-message">{formik.errors.uname}</span>
            )}
          </div>

          {/* First Name  */}
          <div className="fields_container ">
            <span className="input-box-container">
              <Field
                onChangeHandler={formik.handleChange}
                onBlurHandler={formik.handleBlur}
                value={formik.values.fname}
                ariaLabel="fname-input-box"
                id="fname"
                name="fname"
                label="First Name"
                className={
                  "w-100" +
                  (formik.errors.fname && formik.touched.fname
                    ? " input-box-error"
                    : " input-box")
                }
                required={true}
              ></Field>
            </span>

            {formik.errors.fname && formik.touched.fname && (
              <span className="error-message">{formik.errors.fname}</span>
            )}
          </div>

          {/* Last Name  */}
          <div className="fields_container">
            <span className="input-box-container">
              <Field
                onChangeHandler={formik.handleChange}
                onBlurHandler={formik.handleBlur}
                value={formik.values.lname}
                ariaLabel="fname-input-box"
                id="lname"
                name="lname"
                label="Last Name"
                className={
                  "w-100" +
                  (formik.errors.lname && formik.touched.lname
                    ? " input-box-error"
                    : " input-box")
                }
                required={true}
              ></Field>
            </span>
            {formik.errors.lname && formik.touched.lname && (
              <span className="error-message">{formik.errors.lname}</span>
            )}
          </div>

          {/* Phone Number  */}
          <div className="fields_container">
            <span className="input-box-container">
              <Field
                inputType="tel"
                onChangeHandler={formik.handleChange}
                onBlurHandler={formik.handleBlur}
                value={formik.values.pno}
                ariaLabel="pno-input-box"
                id="pno"
                name="pno"
                label="Phone Number"
                className=" w-100 input-box"
                required={false}
              ></Field>
            </span>
            {formik.errors.pno && formik.touched.pno && (
              <span className="error-message">{formik.errors.pno}</span>
            )}
          </div>

          {/*Zip Postal Code*/}
          <div className="fields_container">
            <span className="input-box-container">
              <Field
                onChangeHandler={formik.handleChange}
                onBlurHandler={formik.handleBlur}
                value={formik.values.zipcode}
                ariaLabel="pno-input-box"
                id="zipcode"
                name="zipcode"
                label="Zip/Postal Code"
                className=" w-100 input-box"
                required={false}
              ></Field>
            </span>
          </div>
          {/*Birth Date*/}
          <div className="fields_container ">
            <div className="bday input-box-container">
              <Field
                fieldType="select"
                onChangeHandler={formik.handleChange}
                onBlurHandler={formik.handleBlur}
                value={formik.values.months}
                ariaLabel="select-month-drpdown"
                Options={months}
                placeholder="MM"
                id="months"
                name="months"
                label="Birth Date"
                className="input-box"
              ></Field>
              <Field
                fieldType="select"
                label=""
                onChangeHandler={formik.handleChange}
                onBlurHandler={formik.handleBlur}
                value={formik.values.days}
                ariaLabel="select-month-drpdown"
                Options={days}
                placeholder="DD"
                id="days"
                name="days"
                className="input-box"
              ></Field>
            </div>
          </div>
          {/*Gender*/}
          <div className="fields_container">
            <span className="input-box-container">
              <Field
                fieldType="select"
                onChangeHandler={formik.handleChange}
                onBlurHandler={formik.handleBlur}
                value={formik.values.gender}
                ariaLabel="gender-input-box"
                Options={gender}
                placeholder="Choose One"
                id="gender"
                name="gender"
                label="Gender"
                className="w-100 input-box"
              ></Field>
            </span>
          </div>
          <div className="fields_container">
            <p className="password-instructions">
              Your password should contain 6-20 case sensitive characters, at
              least one numeral, at least one alphabet,special characters
              allowed.
              <Link className="password-tips">Password Tips</Link>
            </p>
            {/* Password */}
            <span className="input-box-container">
              <Field
                inputType="password"
                onChangeHandler={formik.handleChange}
                onBlurHandler={formik.handleBlur}
                value={formik.values.password}
                ariaLabel="password-input-box"
                id="password"
                name="password"
                label="Password"
                className={
                  "w-100" +
                  (formik.errors.password && formik.touched.password
                    ? " input-box-error"
                    : " input-box")
                }
                required={true}
              ></Field>
            </span>
            {formik.errors.password && formik.touched.password && (
              <span className="error-message">{formik.errors.password}</span>
            )}
          </div>
          {/* Confirm Password */}
          <div className="fields_container">
            <span className="input-box-container">
              <Field
                inputType="password"
                onChangeHandler={formik.handleChange}
                onBlurHandler={formik.handleBlur}
                value={formik.values.confirmPassword}
                ariaLabel="confirmPassword-input-box"
                id="confirmPassword"
                name="confirmPassword"
                label="Confirm Password"
                className={
                  "w-100" +
                  (formik.errors.confirmPassword &&
                  formik.touched.confirmPassword
                    ? " input-box-error"
                    : " input-box")
                }
                required={true}
              ></Field>
            </span>
            {formik.errors.confirmPassword &&
              formik.touched.confirmPassword && (
                <span className="error-message">
                  {formik.errors.confirmPassword}
                </span>
              )}
          </div>

          <div className=" fields_container ">
            <Button
              ariaLabel="Register Button"
              id="submit"
              name="submit"
              type="submit"
              onClickHandler={formik.handleSubmit}
              className="fill border-white w-100 submit"
            >
              Register
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
