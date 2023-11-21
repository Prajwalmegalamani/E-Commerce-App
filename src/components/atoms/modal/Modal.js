import React from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";

const Modal = () =>
  ReactDOM.createPortal(
    <div className="modal-backdrop fade show"></div>,
    document.body
  );

export default Modal;
