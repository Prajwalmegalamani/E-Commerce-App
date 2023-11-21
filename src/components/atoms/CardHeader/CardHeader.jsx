import React from "react";
import PropTypes from "prop-types";
import "./CardHeader.scss";

export default function CardHeader({ stepNumber, cardHeading, className }) {
  return (
    <div className={`card-header`}>
      <span className={`stepNumber ${className === "disabled" ? "disabled disabled-border" : ""}`} data-testid="stepNumber">
        {stepNumber}
      </span>
      <h2 className={`card-heading ${className}`}>{cardHeading}</h2>
    </div>
  );
}
CardHeader.propTypes = {
  stepNumber: PropTypes.number.isRequired,
  cardHeading: PropTypes.string.isRequired,
  className: PropTypes.string
};
