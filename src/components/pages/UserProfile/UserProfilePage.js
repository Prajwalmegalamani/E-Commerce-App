import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { gender } from "../../../utils/constants";
import { object, string, ref } from "yup";
import Field from "../../molecules/Field/Field";
import "./UserProfilePage.scss";
import LinkTo from "../../atoms/Link/LinkTo";
import Button from "../../atoms/Button";
import { getUserDetails } from "../../../redux/actions/getUserDetails.action";
import Loader from "../../atoms/Loader/Loader";
import { updateUser } from "../../../redux/actions/updateUserDetails.action";
import getFromStorage from "../../../utils/getFromLocalStorage";

export default function UserProfilePage() {
  const [Edit, setEdit] = useState(false);
  let data = {};

  if (localStorage.getItem("userDetails")) {
    data = getFromStorage("userDetails");
  }

  const dispatch = useDispatch();
  let { userDetails } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUserDetails(data.id));
  }, []);

  useEffect(() => {
    if (userDetails) {
      formik.setValues({
        email: userDetails.email,
        confirmEmail: userDetails.email,
        firstName: userDetails.firstName,
        lastName: userDetails.lastName,
        phone: userDetails.phone,
        birthDate: userDetails.birthDate,
        gender: userDetails.gender,
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    }
  }, [userDetails]);

  const formik = useFormik({
    initialValues: {
      email: "",
      confirmEmail: "",
      firstName: "",
      lastName: "",
      phone: "",
      birthDate: "",
      gender: "",
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    onSubmit: function (values) {
      setEdit(false);
      updateUsers(values, data.id);
    },
    enableReinitialize: true,
    validationSchema: object({
      email: string()
        .email("Email is not in proper format")
        .required("Email Address missing."),
      confirmEmail: string()
        .required("Confirm Email Address Missing.")
        .oneOf([ref("email"), null], "Email does not match"),
      firstName: string()
        .required("First Name missing")
        .matches(/^[A-Za-z]*$/, "Please enter valid FirstName")
        .min(3, "Must Contain 3 Characters")
        .max(10, "Cannot exceed 10 Characters"),
      lastName: string()
        .required("Last Name missing")
        .matches(/^[A-Za-z]*$/, "Please enter valid FirstName")
        .min(3, "Must Contain 3 Characters")
        .max(10, "Cannot exceed 10 Characters"),
      phone: string()
        .required("Phone Number missing")
        .matches(
          /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm,
          "Enter Valid Phone Number"
        ),
      birthDate: string().matches(
        /^([0-9]{4})\-([0-9]{2})\-([0-9]{2})$/,
        "Enter Date of Birth in the right format"
      ),
      gender: string(),
      oldPassword: string()
        .required("Current Password is required")
        .test(
          "Old Password Test",
          "Current password doesn't match",
          function (value) {
            if (value === userDetails.password) {
              return true;
            }
          }
        ),
      newPassword: string()
        .required("New Password is required")
        .min(6, "Must Contain 6 Characters"),
      confirmPassword: string()
        .required("Confirm Password is required")
        .oneOf([ref("newPassword"), null], "Passwords does not match"),
    }),
  });

  const updateUsers = async (values, id) => {
    await dispatch(
      updateUser(
        {
          gender: values.gender,
          email: values.email,
          phone: values.phone,
          firstName: values.firstName,
          lastName: values.lastName,
          password: values.newPassword,
          birthDate: values.birthDate,
        },
        id
      )
    );
  };

  if (userDetails.isLoading) {
    return <Loader />;
  }

  return (
    <div className="main-container">
      {Edit ? (
        <div className="edit">
          <h2 className="main-title">Overview</h2>
          <form className="registration_form" onSubmit={formik.handleSubmit}>
            <div className="personal-details-section">
              <div className="personal-details-title-div">
                <h4 className="personal-details-title">Personal Details</h4>
                <Button
                  onClickHandler={() => {
                    setEdit(false);
                  }}
                  className="personal-details-edit"
                >
                  Cancel
                </Button>
              </div>
              <div className="personal-details-content">
                <div className="name">
                  <div className="personal-details first">
                    <div className="fields_container ">
                      <span className="input-box-container">
                        <Field
                          onChangeHandler={formik.handleChange}
                          onBlurHandler={formik.handleBlur}
                          value={formik.values.firstName}
                          ariaLabel="FirstName-input-box"
                          id="firstName"
                          name="firstName"
                          label="First Name"
                          required={true}
                          className={
                            "w-100" +
                            (formik.errors.firstName && formik.touched.firstName
                              ? " input-box-error"
                              : " input-box")
                          }
                        ></Field>
                      </span>

                      {formik.errors.firstName && formik.touched.firstName && (
                        <span className="error-message">
                          {formik.errors.firstName}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="personal-details last">
                    <div className="fields_container ">
                      <span className="input-box-container">
                        <Field
                          onChangeHandler={formik.handleChange}
                          onBlurHandler={formik.handleBlur}
                          value={formik.values.lastName}
                          ariaLabel="LastName-input-box"
                          id="LastName"
                          name="lastName"
                          label="Last Name"
                          required={true}
                          className={
                            "w-100" +
                            (formik.errors.lastName && formik.touched.lastName
                              ? " input-box-error"
                              : " input-box")
                          }
                        ></Field>
                      </span>

                      {formik.errors.lastName && formik.touched.lastName && (
                        <span className="error-message">
                          {formik.errors.lastName}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="personal-details">
                  <div className="fields_container">
                    <span className="input-box-container">
                      <Field
                        inputType="email"
                        onChangeHandler={formik.handleChange}
                        onBlurHandler={formik.handleBlur}
                        value={formik.values.email}
                        ariaLabel="Email--input-box"
                        id="email"
                        name="email"
                        label="Email"
                        required={true}
                        className={
                          "w-100" +
                          (formik.errors.email && formik.touched.email
                            ? " input-box-error"
                            : " input-box")
                        }
                      ></Field>
                    </span>
                    {formik.errors.email && formik.touched.email && (
                      <span className="error-message">
                        {formik.errors.email}
                      </span>
                    )}
                  </div>
                </div>
                <div className="personal-details">
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
                        required={true}
                        className={
                          "w-50" +
                          (formik.errors.confirmEmail &&
                          formik.touched.confirmEmail
                            ? " input-box-error"
                            : " input-box")
                        }
                      ></Field>
                    </span>
                    {formik.errors.confirmEmail &&
                      formik.touched.confirmEmail && (
                        <span className="error-message">
                          {formik.errors.confirmEmail}
                        </span>
                      )}
                  </div>
                </div>
                <div className="personal-details">
                  <div className="fields_container">
                    <span className="input-box-container">
                      <Field
                        inputType="tel"
                        onChangeHandler={formik.handleChange}
                        onBlurHandler={formik.handleBlur}
                        value={formik.values.phone}
                        ariaLabel="phone-input-box"
                        id="phone"
                        name="phone"
                        label="Mobile"
                        required={true}
                        className={
                          "w-50" +
                          (formik.errors.phone && formik.touched.phone
                            ? " input-box-error"
                            : " input-box")
                        }
                      ></Field>
                    </span>
                    {formik.errors.phone && formik.touched.phone && (
                      <span className="error-message">
                        {formik.errors.phone}
                      </span>
                    )}
                  </div>
                </div>
                <div className="personal-details">
                  <div className="fields_container">
                    <span className="input-box-container">
                      <Field
                        fieldType="select"
                        onChangeHandler={formik.handleChange}
                        onBlurHandler={formik.handleBlur}
                        value={formik.values.gender}
                        ariaLabel="gender-select-box"
                        Options={gender}
                        placeholder="Choose One"
                        id="gender"
                        name="gender"
                        label="Gender"
                        className="w-100 input-box"
                      ></Field>
                    </span>
                  </div>
                </div>
                <div className="personal-details">
                  <div className="fields_container">
                    <span className="input-box-container">
                      <Field
                        inputType="tel"
                        onChangeHandler={formik.handleChange}
                        onBlurHandler={formik.handleBlur}
                        value={formik.values.birthDate}
                        ariaLabel="birthDate-input-box"
                        id="birthDate"
                        name="birthDate"
                        label="Date of Birth(YYYY-MM-DD)"
                        className=" w-100 input-box"
                      ></Field>
                      {formik.errors.birthDate && formik.touched.birthDate && (
                        <span className="error-message">
                          {formik.errors.birthDate}
                        </span>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <div className="personal-details-password">
                <h4 className="personal-details-title">Password</h4>
                <div className="personal-details">
                  <div className="fields_container">
                    <span className="input-box-container">
                      <Field
                        inputType="password"
                        onChangeHandler={formik.handleChange}
                        onBlurHandler={formik.handleBlur}
                        ariaLabel="Current Password -input-box"
                        id="oldPassword"
                        label="Current Password"
                        name="oldPassword"
                        required={true}
                        className={
                          "w-100" +
                          (formik.errors.oldPassword &&
                          formik.touched.oldPassword
                            ? "input-box-error"
                            : "input-box")
                        }
                      ></Field>
                    </span>
                    {formik.errors.oldPassword &&
                      formik.touched.oldPassword && (
                        <span className="error-message">
                          {formik.errors.oldPassword}
                        </span>
                      )}
                  </div>
                </div>
                {!formik.errors.oldPassword ? (
                  <>
                    <div className="personal-details">
                      <div className="fields_container">
                        <p className="password-instructions">
                          Your password should contain 6-20 case sensitive
                          characters, at least one numeral, at least one
                          alphabet,special characters allowed.
                          <LinkTo>Password Tips</LinkTo>
                        </p>
                        {/* Password */}
                        <span className="input-box-container">
                          <Field
                            inputType="password"
                            onChangeHandler={formik.handleChange}
                            onBlurHandler={formik.handleBlur}
                            ariaLabel="New Password -input-box"
                            id="newPassword"
                            name="newPassword"
                            label="New Password"
                            required={true}
                            className={
                              "w-100" +
                              (formik.errors.newPassword &&
                              formik.touched.newPassword
                                ? " input-box-error"
                                : " input-box")
                            }
                          ></Field>
                        </span>
                        {formik.errors.newPassword &&
                          formik.touched.newPassword && (
                            <span className="error-message">
                              {formik.errors.newPassword}
                            </span>
                          )}
                      </div>
                    </div>
                    <div className="personal-details">
                      <div className="fields_container">
                        <span className="input-box-container">
                          <Field
                            inputType="password"
                            onChangeHandler={formik.handleChange}
                            onBlurHandler={formik.handleBlur}
                            ariaLabel="Confirm Password -input-box"
                            id="confirmPassword"
                            name="confirmPassword"
                            label="Confirm Password"
                            required={true}
                            className={
                              "w-100" +
                              (formik.errors.confirmPassword &&
                              formik.touched.confirmPassword
                                ? " input-box-error"
                                : " input-box")
                            }
                          ></Field>
                        </span>
                        {formik.errors.confirmPassword &&
                          formik.touched.confirmPassword && (
                            <span className="error-message">
                              {formik.errors.confirmPassword}
                            </span>
                          )}
                      </div>
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>

            <div className="fields_container ">
              <Button type="submit" className="fill border-white w-10 save">
                Save Changes
              </Button>
            </div>
          </form>
        </div>
      ) : (
        <div className="Non-edit">
          <h2 className="main-title">Overview</h2>
          <div className="personal-details-section">
            <div className="personal-details-title-div">
              <h4 className="personal-details-title">Personal Details</h4>
              <Button
                onClickHandler={() => {
                  setEdit(true);
                }}
                className="personal-details-edit"
              >
                Edit
              </Button>
            </div>
            <div className="personal-details-content">
              <div className="name">
                <div className="personal-details first">
                  First Name
                  <div className="data">{formik.values.firstName}</div>
                </div>
                <div className="personal-details last">
                  Last Name
                  <div className="data">{formik.values.lastName}</div>
                </div>
              </div>
              <div className="personal-details">
                Email
                <div className="data">{formik.values.email}</div>
              </div>
              <div className="personal-details">
                Mobile
                <div className="data">{formik.values.phone}</div>
              </div>
              <div className="personal-details">
                Gender
                <div className="data">{formik.values.gender}</div>
              </div>
              <div className="personal-details">
                Date of Birth(YYYY-MM-DD)
                <div className="data">{formik.values.birthDate}</div>
              </div>
            </div>
            <div className="personal-details-password">
              <h4 className="personal-details-title">Password</h4>
              <div className="personal-details">
                Password
                <div className="data password">************</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
