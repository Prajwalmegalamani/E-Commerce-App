import React from "react";
import { RxCross1 } from "react-icons/rx";
import PropTypes from "prop-types";

import "./FilterMobileContent.scss";
import Button from "../../atoms/Button";

function FilterMobileContent({ heading, onCloseClick }) {
  return (
    <div className="mobile-content">
      <span data-testid="mobile-content-heading">{heading}</span>
      <Button className="close-btn" onClickHandler={onCloseClick} ariaLabel="Close Content" dataTestId="close-content">
        <RxCross1 />
      </Button>
    </div>
  );
}

FilterMobileContent.propTypes = {
  heading: PropTypes.string.isRequired,
  onCloseClick: PropTypes.func.isRequired,
};

export default FilterMobileContent;