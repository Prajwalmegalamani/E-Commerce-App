import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  BsFillGiftFill,
  BsFillInboxFill,
  BsSuitDiamondFill,
} from "react-icons/bs";
import Button from "../../atoms/Button";
import Image from "../../atoms/Image";
import LinkTo from "../../atoms/Link";
import "./DisplayCartDetails.scss";
import { useDispatch } from "react-redux";
import { deleteFromCart } from "../../../redux/actions/deleteFromCart.action";
import { editProductFromCart } from "../../../redux/actions/editCartDetails";

export default function DisplayCartDetails({ data, cartPage }) {
  const [showEdit, setShowEdit] = useState(false);
  let dispatch = useDispatch();
  let editTimeout;
  const deleteProduct = (id) => {
    dispatch(deleteFromCart(id));
  };
  function EditProduct() {
    clearTimeout(editTimeout);
    setShowEdit(!showEdit);
  }
  useEffect(() => {
    clearTimeout(editTimeout);
    editTimeout = setTimeout(() => {
      setShowEdit(false);
    }, 3000);
  }, [showEdit]);

  const EditProductQuantity = (id, type) => {
    dispatch(editProductFromCart({ id, type }));
  };

  return (
    <div className="content">
      <div className="image-container">
        <Image src={data.thumbnail} alt="product" className={"image"} />
      </div>
      <div className="prod-details">
        <span className="brand-name"> {data.brand}</span>
        <LinkTo className="product-name">{data.title}</LinkTo>
        <p className="price-tag">
          <span className="price">${data.quantity * data.price}</span>{" "}
          <span className="price-new">
            $
            {(
              (data.quantity * data.price * (100 - data.discountPercentage)) /
              100
            ).toFixed(2)}
          </span>{" "}
          <span className="price-new">( {data.quantity} )</span>
        </p>
        <span className="discount">
          {data.discountPercentage}% off for Black Friday
        </span>
        <span className="color">Category: {data.category}</span>
        {cartPage === "cart" && (
          <div className="edit-button">
            {showEdit ? (
              <div className="edit-button box-design">
                <Button
                  className="edit-action-button"
                  dataTestId="removeItem"
                  onClickHandler={() => {
                    EditProductQuantity(data.id, "remove");
                  }}
                >
                  -
                </Button>
                <span className="price-new- quantity-style">
                  {" "}
                  {data.quantity}{" "}
                </span>
                <Button
                  className="edit-action-button"
                  dataTestId="addItem"
                  onClickHandler={() => {
                    EditProductQuantity(data.id, "add");
                  }}
                >
                  +
                </Button>
              </div>
            ) : (
              <Button
                className="underline-button"
                dataTestId="EditItem"
                onClickHandler={EditProduct}
              >
                Edit Item
              </Button>
            )}
          </div>
        )}
      </div>
      {cartPage === "cart" && (
        <div className="product-actions">
          <p className="action-allignment">
            <span>
              <span className="pickup-icon">
                <BsFillInboxFill></BsFillInboxFill>{" "}
              </span>
              <span className="pickup-content">
                Pick Up at ABC Permimeter Mall
              </span>
            </span>
            <Button className="underline-button" dataTestId="Change">
              Change
            </Button>
          </p>
          <p className="action-allignment">
            <span>
              <span className="monogram-icon">
                <BsSuitDiamondFill></BsSuitDiamondFill>{" "}
              </span>
              <span className="monogram-content">Add Your Monogram</span>
            </span>
            <Button className="underline-button" dataTestId="Add">
              Add
            </Button>
          </p>
          <p className="action-allignment">
            <span>
              <span className="gift-icon">
                <BsFillGiftFill></BsFillGiftFill>{" "}
              </span>
              <span className="gift-content">Gift Options</span>
            </span>
            <Button className="underline-button" dataTestId="Add">
              Add
            </Button>
          </p>
          <span className="add-remove-button">
            <Button
              className="action-button save-for-later"
              dataTestId="SaveForLater"
            >
              Save for Later
            </Button>
            &nbsp;
            <Button
              className="action-button remove"
              dataTestId="Remove"
              onClickHandler={() => {
                deleteProduct(data.id);
              }}
            >
              Remove
            </Button>
          </span>
        </div>
      )}
    </div>
  );
}

DisplayCartDetails.propTypes = {
  data: PropTypes.object,
  cartPage: PropTypes.string,
};
