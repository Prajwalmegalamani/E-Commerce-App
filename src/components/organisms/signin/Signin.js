import React from "react";
import Field from "../../molecules/Field";
import "./Signin.scss";
import Button from "../../atoms/Button/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../../redux/actions/userLogin.action";
import Loader from "../../atoms/Loader";
import useModalLock from "../../../hooks/useModalLock";
import setToLocalStorage from "../../../utils/setToLocalStorage";

export default function Signin() {
  let { isLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { setModalClose } = useModalLock();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      authenticateUser(values);
    },
    validationSchema: Yup.object({
      username: Yup.string().required("User Name is required"),
      password: Yup.string().required("Password is required"),
    }),
  });

  const authenticateUser = async (values) => {
    const response = await dispatch(userLogin(values));
    if (response.status) {
      setModalClose();
      setToLocalStorage("isUserLoggedIn", true);
      setToLocalStorage("userDetails", {
        userName: response.data.firstName,
        id: response.data.id,
      });
    }
  };
  return (
    <>
      {isLoading && <Loader />}
      <div className="login-container">
        <div className="sign-in-title h2-alt">Sign In</div>
        <form onSubmit={formik.handleSubmit}>
          <legend className="sign-in-sub-title">
            Sign in with your username and password.
          </legend>
          <Field
            id="username"
            required={true}
            label="User Name"
            placeholder="User Name"
            value={formik.username}
            onChangeHandler={formik.handleChange}
            onBlurHandler={formik.handleBlur}
          ></Field>
          {formik.errors.username && formik.touched.username && (
            <span className="error">{formik.errors.username}</span>
          )}
          <Field
            id="password"
            label="Password"
            inputType="password"
            placeholder="Password"
            required={true}
            value={formik.password}
            onChangeHandler={formik.handleChange}
            onBlurHandler={formik.handleBlur}
          ></Field>
          {formik.errors.password && formik.touched.password && (
            <span className="error">{formik.errors.password}</span>
          )}
          <Button onClickHandler={formik.handleSubmit} className="signin-btn">
            Sign In
          </Button>
        </form>
      </div>
    </>
  );
}
