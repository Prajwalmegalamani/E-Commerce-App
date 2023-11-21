import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CloseIcon } from "../../atoms/Icons/CloseIcon";
import { productActions, userActions } from "../../../redux/action.type";
import "./LoginModal.scss";
import Signin from "../signin/Signin";
import Button from "../../atoms/Button/Button";
import { useNavigate } from "react-router-dom";
import LinkTo from "../../atoms/Link";
import useModalLock from "../../../hooks/useModalLock";
import accoutSetting from "../../../assets/images/account-settings.png";
import { MyPurchaseIcon } from "../../../assets/icons/MyPurchaseIcon";
import { SavedItemsIcon } from "../../../assets/icons/SavedItemsIcon";
import { RepairIcon } from "../../../assets/icons/RepairIcon";
import getFromStorage from "../../../utils/getFromLocalStorage";
import removeFromLocalStorage from "../../../utils/removeFromLocalStorage";

export default function LoginModal() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { isModalOpen } = useSelector((state) => state.products);
  let { isUserLoggedIn, userDetails } = useSelector((state) => state.user);
  const { setModalClose } = useModalLock();

  const handleClose = () => {
    dispatch({
      type: productActions.SET_MODAL_STATE,
      payload: false,
    });

    setModalClose();
  };
  const handleSignOut = () => {
    removeFromLocalStorage("isUserLoggedIn");
    removeFromLocalStorage("userDetails");
    dispatch({
      type: userActions.SET_USER_LOGIN_STATUS,
      payload: false,
    });
    dispatch({
      type: userActions.SET_USER_DETAILS,
      payload: [],
    });
  };
  return (
    <div
      className={`modal fade global-modal ${isModalOpen ? "show" : ""}`}
      style={{ display: `${isModalOpen ? "block" : ""}` }}
      id="requestLoginModal"
      tabIndex="-1"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => {
                handleClose();
              }}
            >
              <span aria-hidden="true">
                <CloseIcon />
              </span>
            </button>
          </div>
          <div className="modal-body">
            {!isUserLoggedIn && isModalOpen && (
              <div className="sign-in-column-container">
                <div className="create-account-section">
                  <div className="create-account-title h2-alt">
                    Create An Account
                  </div>
                  <div className="create-account-sub-title h2-alt">
                    Create a ABC account with your email address.
                  </div>
                  <Button
                    className="create-account-btn"
                    onClickHandler={() => {
                      navigate("/userauth");
                      handleClose();
                    }}
                  >
                    create an account
                  </Button>
                </div>
                <div className="signin-section">
                  {isModalOpen && <Signin />}
                </div>
              </div>
            )}
            {isUserLoggedIn && (
              <div className="signed-in">
                <h3 className="welcome-user">
                  Welcome, {getFromStorage("userDetails")?.userName}
                </h3>
                <ul
                  className="account-list"
                  role="menu"
                  aria-label="My account navigation"
                  aria-hidden="true"
                >
                  <li>
                    <div className="content-wrapper d-flex align-items-center">
                      <div className="menu-image">
                        <img
                          src={accoutSetting}
                          alt="my settings"
                          width="32"
                          height="32"
                        />
                      </div>
                      <div className="signin-content">
                        <LinkTo
                          to="/myaccount"
                          onClickHandler={() => {
                            handleClose();
                          }}
                        >
                          My Settings
                        </LinkTo>
                      </div>
                    </div>
                  </li>
                  <li role="presentation">
                    <div className="content-wrapper d-flex align-items-center">
                      <div className="menu-image">
                        <MyPurchaseIcon />
                      </div>
                      <div className="signin-content">
                        <LinkTo
                          to="#"
                          onClickHandler={() => {
                            handleClose();
                          }}
                        >
                          My Purchases
                        </LinkTo>
                      </div>
                    </div>
                  </li>
                  <li role="presentation">
                    <div className="content-wrapper d-flex align-items-center">
                      <div className="menu-image">
                        <SavedItemsIcon />
                      </div>
                      <div className="signin-content">
                        <LinkTo
                          to="#"
                          onClickHandler={() => {
                            handleClose();
                          }}
                        >
                          My Saved Items
                        </LinkTo>
                      </div>
                    </div>
                  </li>
                  <li role="presentation">
                    <div className="content-wrapper d-flex align-items-center">
                      <div className="menu-image">
                        <RepairIcon />
                      </div>
                      <div className="signin-content">
                        <LinkTo
                          to="#"
                          onClickHandler={() => {
                            handleClose();
                          }}
                        >
                          Repair Services
                        </LinkTo>
                      </div>
                    </div>
                  </li>
                </ul>
                {/* <div
                  className="user-profile"
                  onClick={() => {
                    handleClose();
                  }}
                >
                  <LinkTo to="/myaccount">My Account</LinkTo>
                </div> */}
                <Button
                  className="create-account-btn"
                  onClickHandler={handleSignOut}
                >
                  SignOut
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
