import React, { useState } from "react";
import PropTypes from "prop-types";
import { BsBoxSeam, BsInfoCircle, BsPaypal } from "react-icons/bs";
import { FaApplePay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import DisplayCartDetails from "../DisplayCartDetails/DisplayCartDetails";
import "./OrderSummary.scss";

export default function OrderSummary({ pageType, data, cartData, cartPage }) {
  const [promo, setPromo] = useState(0);
  const [promoCode, setPromoCode] = useState("");
  const [promoCodeError, setPromoCodeError] = useState("");
  const navigate = useNavigate();

  function checkoutOrder() {
    navigate("/checkout");
  }
  const handleChange = (event) => {
    setPromoCode(event.target.value);
  };
  function applyPromo(promoCodeValue) {
    if (promoCodeValue) {
      if (promoCodeValue.toLocaleUpperCase() === "FLAT50") {
        setPromoCodeError("");
        setPromo(50);
      } else {
        setPromo(5);
        setPromoCodeError(
          "Sorry Promo code is Invaild applying default 5$ off"
        );
      }
    }
  }
  return (
    <div className="order">
      <div className="order-summary-padding">
        <h3 className="order-summary-text">Order Summary</h3>
        {pageType !== "orderConfirmation" && (
          <>
            <p className="order-summary-compliment">
              {" "}
              <BsBoxSeam></BsBoxSeam>{" "}
              <span>Enjoy complimentary shipping and returns</span>
            </p>
            <div className="order-summary">
              <div className="promocode">
                <Input
                  type="text"
                  dataTestId="promo"
                  className="promo-input"
                  placeholder="Enter Your Promo Code"
                  onChangeHandler={(e) => handleChange(e)}
                  onBlurHandler={(e) => applyPromo(e.target.value)}
                />
              </div>
              <div className="apply-button">
                <Button
                  className="promo-button"
                  dataTestId="Apply"
                  onClickHandler={() => applyPromo(promoCode)}
                >
                  Apply
                </Button>
              </div>
            </div>
            <div className="promo-error">{promoCodeError}</div>
          </>
        )}
        <div className="order-total">
          <span className="order-subtotal">Subtotal</span>
          <span>Subtotal</span>
        </div>
        <div className="order-total">
          <span className="order-subtotal promo-discount">Promo</span>
          <span className="promo-discount">- {promo} $</span>
        </div>
        <div className="order-total">
          <span className="order-subtotal">
            Shipping{" "}
            <span className="info-icon">
              <BsInfoCircle></BsInfoCircle>
            </span>
          </span>
          <span className="">Free</span>
        </div>
        <hr />
        <div className="order-total">
          <span className="order-subtotal total">Total</span>
          <span className="total">${data - promo}</span>
        </div>
        {pageType !== "orderConfirmation" && (
          <div className="tumi-member">
            <p className="tumi-member__message">
              Become a ABC Member for faster checkout
            </p>
            <p className="tumi-member__links">
              <span className="signup">Create an account</span> or{" "}
              <span className="signin">Sign in</span>
            </p>
          </div>
        )}
        {cartPage === "cart" && (
          <div className="button-center">
            <Button
              disabled={data <= 0 ? true : false}
              className="checkout fill"
              dataTestId="CheckoutNow"
              onClickHandler={() => checkoutOrder()}
            >
              Checkout Now
            </Button>
            <Button
              disabled={data <= 0 ? true : false}
              className="checkout-apple"
              dataTestId="CheckOutApplePay"
            >
              <span className="fa-text">Check out with</span>{" "}
              <span className="fa-apple">
                <FaApplePay></FaApplePay>
              </span>
            </Button>
            <Button
              disabled={data <= 0 ? true : false}
              className="checkout-paypal"
              dataTestId="CheckOutPaypal"
            >
              <span className="bs-text">Check out with</span>{" "}
              <span className="bs-paypal">
                <BsPaypal></BsPaypal>
              </span>
            </Button>
            <p className="part-payment">
              Pay in 4 payments of ${data} with <b>Klarna</b>
            </p>
            <p className="continue-shopping">Continue Shopping</p>
          </div>
        )}
        {cartPage !== "cart" && cartData && (
          <div>
            {cartData?.map((product) => {
              return (
                <DisplayCartDetails
                  data={product}
                  key={product.id}
                  cartPage={"checkout"}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
OrderSummary.propTypes = {
  data: PropTypes.number,
  cartPage: PropTypes.string,
  cartData: PropTypes.array,
  pageType: PropTypes.string,
};
