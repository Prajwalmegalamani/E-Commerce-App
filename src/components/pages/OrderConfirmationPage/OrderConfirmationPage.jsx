import React, { useEffect } from "react";

import Button from "../../atoms/Button";
import Checkbox from "../../atoms/Checkbox";
import CreateAnAccount from "../../molecules/CreateAnAccount/CreateAnAccount";
import PaymentDetails from "../../molecules/PaymentDetails";
import ShippingUpdates from "../../molecules/ShippingUpdates/ShippingUpdates";
import DisplayCartDetails from "../../organisms/DisplayCartDetails/DisplayCartDetails";
import OrderSummary from "../../organisms/OrderSummary";
import "./OrderConfirmationPage.scss";
import Ellipse from "../../atoms/Icons/Ellipse";
import Vector from "../../atoms/Icons/Vector";
import { defaultAddress, defaultCart } from "../../../utils/constants";
import getFromStorage from "../../../utils/getFromLocalStorage";

function OrderConfirmationPage() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const address = getFromStorage("address") || defaultAddress;
  const checkoutData = getFromStorage("orderDetails") || defaultCart;
  return (
    <div className="align-center-content">
      <div className="max-width">
        <div className="order-confirmation">
          <div className="order-confirmation__frame">
            <div className="frame__heading">
              <div className="frame__logo">
                <Ellipse />
                <Vector />
              </div>
              <div className="frame__message">
                <div>
                  <h3 className="greetings" tabIndex={"0"}>
                    Thank you for your order!
                  </h3>
                </div>
                <div>
                  <h6 className="order-number">
                    Order Number:{" "}
                    <span className="order-number--bold">HDGHSJ767</span>
                  </h6>
                </div>
              </div>
            </div>
            <div className="frame__details">
              <div>
                <p className="frame__details__message">
                  You will receive an email confirmation shortly at
                </p>
              </div>
              <div className="frame__details__email">
                <p>{address?.email}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="large-screen-component">

          <ShippingUpdates />

          <CreateAnAccount />


        </div>
        <div className="small-screen-component">
          <div className="shipping-updates">
            <div className="shipping-updates-box">
              <div className="heading">
                <p className="">Enabling Shipping Updates?</p>
              </div>
              <div className="message">
                <div className="message-box">
                  <p className="message-box--text">
                    We'll keep you posted when your package is delivered or delayed
                  </p>
                </div>
                <div className="notify">
                  <div className="notify__message">
                    <p>Get SMS</p>
                  </div>
                  <div className="notify__btn">
                    <Checkbox className="toggle_switch" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="create-acc">
            <div className="create-acc-box">
              <div className="heading">
                <p>Make the most of your purchase</p>
              </div>
              <div className="create-acc__btn">
                <Button className={"primary full"} dataTestId="CreateAccount">
                  Create An Account
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="confirmation-page-layout">
          <div className="order-detail">
            <div className="details">
              {checkoutData.cartData &&
                checkoutData?.cartData?.map((elements) => {
                  return elements?.products?.map((product) => {
                    return (
                      <DisplayCartDetails
                        data={product}
                        key={product.id}
                        cartPage={"orderConfirmation"}
                      />
                    );
                  });
                })}
            </div>
            <OrderSummary
              pageType="orderConfirmation"
              data={checkoutData.price ? checkoutData.price : 0}
            ></OrderSummary>
          </div>
          <div className="payment">
            <PaymentDetails address={address} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmationPage;
