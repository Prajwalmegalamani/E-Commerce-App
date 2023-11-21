import React, { Fragment, useState } from "react";

import "./Footer.scss";
import Image from "../../atoms/Image";
import Accordion from "../../atoms/Accordion";
import Label from "../../atoms/Label";
import Button from "../../atoms/Button";
import Checkbox from "../../atoms/Checkbox";

import FacebookIcon from "../../../images/facebook.svg";
import InstagramIcon from "../../../images/instagram.svg";
import PinterestIcon from "../../../images/pinterest.svg";
import TwitterIcon from "../../../images/twitter.svg";
import YoutubeIcon from "../../../images/youtube.svg";
import Chevron from "../../../images/Chevron.svg";
import {
  aboutTumiArr,
  customerServiceArr,
  myAccArr,
  copyRight,
} from "../../../utils/constants";
import Link from "../../atoms/Link";

export default function Footer() {
  const [theme, setTheme] = useState("dark");

  const handleChange = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div className="footer-wrapper">
      <footer className="container row footer-inner">
        <div className="footer-social-links">
          <div>
            <Link title="Facebook Icon" to="#">
              <Image
                className="icon"
                src={FacebookIcon}
                alt="Facebook Icon"
                ariaLabel="Facebook-Icon"
              />
            </Link>
          </div>
          <div>
            <Link title="Twitter Icon" to="#">
              <Image
                className="icon"
                src={TwitterIcon}
                alt="Twitter Icon"
                ariaLabel="Twitter-Icon"
              />
            </Link>
          </div>
          <div>
            <Link title="Pinterest Icon" to="#">
              <Image
                className="icon"
                src={PinterestIcon}
                alt="Pinterest Icon"
                ariaLabel="Pinterest-Icon"
              />
            </Link>
          </div>
          <div>
            <Link title="Instagram Icon" to="#">
              <Image
                className="icon"
                src={InstagramIcon}
                alt="Instagram Icon"
                ariaLabel="Instagram-Icon"
              />
            </Link>
          </div>
          <div>
            <Link title="Youtube Icon" to="#">
              <Image
                className="icon"
                src={YoutubeIcon}
                alt="Youtube Icon"
                ariaLabel="Youtube-Icon"
              />
            </Link>
          </div>
        </div>
        <div className="footer-content">
          <div className="left-section">
            <address>
              <p className="left-section-header">
                ABC at Perimeter Mall
                <Link title="ABC at Perimeter Mall" to="#">
                  change
                </Link>
              </p>
              4400 Ashford Dunwoody Road <br />
              Atlanta, Georgia 30346
              <br />
              (770) 390-7353
            </address>
            <div className="store-details">
              <div className="store-details-mobile">
                <p>
                  See all Store Hours and Services{" "}
                  <Image
                    className="chevron-icon"
                    src={Chevron}
                    alt="Chevron"
                    ariaLabel="Chevron-Icon"
                  />
                </p>
                <p>
                  Get Directions{" "}
                  <Image
                    className="chevron-icon"
                    src={Chevron}
                    alt="Chevron"
                    ariaLabel="Chevron-Icon"
                  />
                </p>
              </div>
              <div className="store-details-desktop">
                <Button className="fill border-white">
                  Store Hours and Services{" "}
                </Button>
              </div>
            </div>
          </div>

          <div className="right-section ">
            <div className="footer-links row">
              <div className="footer-links-desktop">
                <div>
                  <Label className="label_white" htmlFor="Customer Service">
                    Customer Service
                  </Label>
                  <ul className="footer-links-list">
                    {customerServiceArr.map((data, key) => {
                      return (
                        <li key={key} className="footer-link internal-link">
                          <Link title={data} to="#">
                            {data}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="footer-links-desktop-right">
                  <Label className="label_white" htmlFor="My Account">
                    My Account
                  </Label>
                  <ul className="footer-links-list">
                    {myAccArr.map((data, key) => {
                      return (
                        <li key={key} className="footer-link internal-link">
                          <Link title={data} to="#">
                            {data}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                  <Label
                    className="about-tumi-section label_white"
                    htmlFor="About ABC"
                  >
                    About ABC
                  </Label>
                  <ul className="footer-links-list">
                    {aboutTumiArr.map((data, key) => {
                      return (
                        <li key={key} className="footer-link internal-link">
                          <Link title={data} to="#">
                            {data}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="footer-links-mobile">
                <Accordion
                  className="footer-link-accordian"
                  title="Customer Service"
                  titleClassName="color-white"
                >
                  <ul className="footer-links-list">
                    {/* customerServiceArr */}
                    {customerServiceArr.map((data, key) => {
                      return (
                        <li key={key} className="footer-link internal-link">
                          <Link title={data} to="#">
                            {data}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </Accordion>
                <Accordion title="About ABC" titleClassName="color-white">
                  <ul className="footer-links-list">
                    {aboutTumiArr.map((data, key) => {
                      return (
                        <li key={key} className="footer-link internal-link">
                          <Link title={data} to="#">
                            {data}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </Accordion>
                <Accordion title="My Account" titleClassName="color-white">
                  <ul className="footer-links-list">
                    {myAccArr.map((data, key) => {
                      return (
                        <li key={key} className="footer-link internal-link">
                          <Link title={data} to="#">
                            {data}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copy-right-wrapper">
          <p className="copy-right-section">
            &#169; 2022 ABC, Inc. |{" "}
            {copyRight.map((item, index) => {
              return (
                <Fragment key={item}>
                  <Link className="link-white" to="#">
                    {item}
                  </Link>
                  {index < copyRight.length - 1 && "|"}
                </Fragment>
              );
            })}
          </p>
          <div className="theme-section">
            <Label className="theme-label label_white" htmlFor="Theme">
              Theme :
            </Label>
            <Checkbox
              id="Theme"
              className="toggle_switch"
              value={theme}
              onChangeHandler={handleChange}
              name="theme"
              ariaLabel="theme"
              checked={theme === "dark" ? false : true}
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
