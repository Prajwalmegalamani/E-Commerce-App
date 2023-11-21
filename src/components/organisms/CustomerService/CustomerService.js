import React from "react";
import { Link } from "react-router-dom";

import orderStatusImage from "../../../assets/images/order-status.png";
import giftCardImage from "../../../assets/images/gift-card.png";
import lockImage from "../../../assets/images/lock.png";
import tracerImage from "../../../assets/images/tracer.png";
import rightArrow from "../../../assets/images/arrow-right.svg";
import customerServiceImage from "../../../assets/images/customer-service.webp";
import "./CustomerService.scss";

export default function CustomerService() {
  return (
    <section className="customer-service-section">
      <div className="customer-service-image-container">
        <picture className="customer-service-image">
          <source
            media="(max-width: 999px)"
            sizes="1px"
            srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAA1JREFUGFdjOGpj8x8ABUQCPUwufe4AAAAASUVORK5CYII="
          ></source>
          <source
            media="(min-width: 1000px)"
            sizes="510px"
            srcSet={customerServiceImage}
          ></source>
          <img src={customerServiceImage} alt="Customer Service" />
        </picture>
      </div>
      <div className="service-content">
        <div className="service-header-section">
          <h3 className="heading">ABC at your Service</h3>
          <p className="caption">
            World class quality meets world class customer service.
          </p>
        </div>
        <div className="services">
          <Link
            to="/customer-service/warranty"
            className="service"
            aria-label="Learn more about 5-Year Warranty in detail"
          >
            <div className="service-wrapper">
              <div className="left-section">
                <div className="service-image-wrapper">
                  <img
                    src={tracerImage}
                    width="32"
                    height="32"
                    alt="5-Year Warranty"
                    className="service-image"
                  />
                </div>
                <div className="service-description">
                  <p className="service-text">5-Year Warranty</p>
                  <p className="service-sub-text">Learn More</p>
                </div>
              </div>
              <div className="right-section">
                <img
                  src={rightArrow}
                  alt="Learn more about 5-Year Warranty in detail"
                  width="24"
                  height="24"
                  className="right-arrow"
                />
              </div>
            </div>
          </Link>
          <Link
            to="/customer-service/shop-gifts"
            className="service"
            aria-label="Shop Gifts"
          >
            <div className="service-wrapper">
              <div className="left-section">
                <div className="service-image-wrapper">
                  <img
                    src={giftCardImage}
                    width="32"
                    height="32"
                    alt="Free Gift Boxing"
                    className="service-image"
                  />
                </div>
                <div className="service-description">
                  <p className="service-text">Free Gift Boxing</p>
                  <p className="service-sub-text">Shop Gifts</p>
                </div>
              </div>
              <div className="right-section">
                <img
                  src={rightArrow}
                  alt="Shop Gifts"
                  width="24"
                  height="24"
                  className="right-arrow"
                />
              </div>
            </div>
          </Link>
          <Link
            to="/customer-service/returns"
            className="service"
            aria-label="Free Shipping & Returns"
          >
            <div className="service-wrapper">
              <div className="left-section">
                <div className="service-image-wrapper">
                  <img
                    src={orderStatusImage}
                    width="32"
                    height="32"
                    alt="Free Shipping & Returns"
                    className="service-image"
                  />
                </div>
                <div className="service-description">
                  <p className="service-text">Free Shipping & Returns</p>
                  <p className="service-sub-text">Learn More</p>
                </div>
              </div>
              <div className="right-section">
                <img
                  src={rightArrow}
                  alt="Learn more about Free Shipping & Returns in detail"
                  width="24"
                  height="24"
                  className="right-arrow"
                />
              </div>
            </div>
          </Link>
          <Link
            to="/customer-service/monogram"
            className="service"
            aria-label="Customize and Monogram"
          >
            <div className="service-wrapper">
              <div className="left-section">
                <div className="service-image-wrapper">
                  <img
                    src={lockImage}
                    width="32"
                    height="32"
                    alt="Make it Yours"
                    className="service-image"
                  />
                </div>
                <div className="service-description">
                  <p className="service-text">Make it Yours</p>
                  <p className="service-sub-text">Customize and Monogram</p>
                </div>
              </div>
              <div className="right-section">
                <img
                  src={rightArrow}
                  alt="Customize and Monogram"
                  width="24"
                  height="24"
                  className="right-arrow"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
