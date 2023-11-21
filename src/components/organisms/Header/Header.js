import React, { Fragment, useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LinkTo from "../../atoms/Link/LinkTo";
import Button from "../../atoms/Button/Button";
import { TitleCase } from "../../../utils/titleCase";
import "./Header.scss";
import { useDispatch, useSelector } from "react-redux";
import { getProductCategories } from "../../../redux/actions/getProductCategories.action";
import { productActions } from "../../../redux/action.type";
import { CloseIcon } from "../../../assets/icons/CloseIcon";
import { SearchIcon } from "../../../assets/icons/SearchIcon";
import { UserIcon } from "../../../assets/icons/UserIcon";
import { CartIcon } from "../../../assets/icons/CartIcon";
import { HamburgerIcon } from "../../../assets/icons/HamburgerIcon";
import useScrollLock from "../../../hooks/useScrollLock";
import useModalLock from "../../../hooks/useModalLock";
import useWindowSize from "../../../hooks/useWindowSize";
import Dropdown from "../../molecules/dropdown/Dropdown";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

export default function Header() {
  const { lockScroll, unlockScroll } = useScrollLock();
  const { setModalOpen } = useModalLock();
  const [showCategories, setShowCategories] = useState(4);
  const [isToggleMenuActive, setIsToggleMenuActive] = useState(false);

  const navigate = useNavigate();

  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");
  const handleCategoryChange = (category) => {
    navigate(`products/${category}`);
    unlockScroll();
    setIsToggleMenuActive(false);
  };

  const dispatch = useDispatch();
  let { productCategories } = useSelector((state) => state.products);
  const [otherCategories, setOtherCategories] = useState([]);
  useEffect(() => {
    dispatch(getProductCategories);
  }, [dispatch]);

  const handleToggle = () => {
    setIsToggleMenuActive(!isToggleMenuActive);
    if (!isToggleMenuActive) {
      lockScroll();
    } else {
      unlockScroll();
    }
  };

  const handleOpen = () => {
    dispatch({
      type: productActions.SET_MODAL_STATE,
      payload: true,
    });
    setModalOpen();
  };
  const [width, height] = useWindowSize();

  const setClasses = useCallback(() => {
    if (width >= 1024) {
      setShowCategories(4);
      setIsToggleMenuActive(false);
      unlockScroll();
    } else if (width >= 1000 && width < 1024) {
      if (productCategories.length > 0) {
        setShowCategories(productCategories.length);
      }
    }
  }, [width, productCategories.length, unlockScroll]);

  useEffect(() => {
    if (width <= 1024 && productCategories.length > 0) {
      setShowCategories(productCategories.length);
    }
    setClasses();

    let otherCatObj = productCategories.slice(4);
    otherCatObj = otherCatObj.map((category) => TitleCase(category));
    setOtherCategories(otherCatObj);
  }, [productCategories, width, height, setClasses]);

  return (
    <>
      <a href="#maincontent" className="skip" aria-label="Skip to main content">
        Skip to main content
      </a>
      <header className="header">
        <div className="header-container" id="pageHeader">
          <div className="d-flex align-items-center">
            <div className="logo">
              <LinkTo
                to="/"
                className="header-logo darkMode-focus"
                title="ABC Home"
              >
                ABC
              </LinkTo>
            </div>
            <nav
              className={`header-menu
                ${isToggleMenuActive ? "header-menu-active" : ""}
              `}
              id="collapsibleNavbar"
            >
              {productCategories.length > 0 && (
                <ul className="header-menu-nav">
                  <li className="header-menu-nav-links">
                    <LinkTo
                      onClickHandler={() => {
                        handleCategoryChange("products");
                      }}
                      to={`/products`}
                      className={`darkMode-focus ${
                        splitLocation[2] === "products" ? "active" : ""
                      }`}
                      id="products"
                    >
                      All Products
                    </LinkTo>
                  </li>
                  {productCategories.map((category, index) => {
                    return (
                      <Fragment key={category}>
                        {index < showCategories && (
                          <li className="header-menu-nav-links">
                            <LinkTo
                              onClickHandler={() => {
                                handleCategoryChange(category);
                              }}
                              to={`products/${category}`}
                              className={`darkMode-focus ${
                                splitLocation[2] === category.toLowerCase()
                                  ? "active"
                                  : ""
                              }`}
                              id={category}
                            >
                              {TitleCase(category)}
                            </LinkTo>
                          </li>
                        )}
                      </Fragment>
                    );
                  })}
                  <li key={"more category"} className="header-menu-nav-links">
                    <Dropdown
                      optionsList={otherCategories}
                      title="More Categories"
                      onChangeHandler={(index, value) => {
                        handleCategoryChange(value);
                      }}
                    ></Dropdown>
                  </li>
                </ul>
              )}
            </nav>
            <div className="nav-overlay"></div>
            <div className="ml-auto header-icons d-flex">
              <ul>
                <li>
                  <Button
                    onClickHandler={() => {
                      navigate("/search");
                    }}
                    ariaLabel="search"
                  >
                    <SearchIcon />
                  </Button>
                </li>
                <li>
                  <Button onClickHandler={handleOpen} ariaLabel="user menu">
                    <UserIcon />
                  </Button>
                </li>
                <li>
                  <Button
                    onClickHandler={() => {
                      navigate("cart");
                    }}
                    ariaLabel="cart"
                  >
                    <CartIcon />
                  </Button>
                </li>
                <li className="hamburger-icon">
                  <Button
                    ariaLabel="hamburger Menu"
                    type="submit"
                    className={`header-menu-toggle ${
                      isToggleMenuActive ? "active" : ""
                    }
                    `}
                    onClickHandler={handleToggle}
                    id="headerMenuToggle"
                  >
                    <HamburgerIcon />
                    <CloseIcon />
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
