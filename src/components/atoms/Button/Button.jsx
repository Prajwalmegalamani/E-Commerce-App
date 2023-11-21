import React from "react";
import PropTypes from "prop-types";

function Button({
  children,
  type,
  ariaLabel,
  className,
  onClickHandler,
  name,
  id,
  disabled,
  dataTestId,
  tabIndex,
  onFocus,
  onBlur,
  onMouseEnter,
  onMouseLeave,
}) {
  return (
    <button
      type={type}
      aria-label={ariaLabel}
      disabled={disabled}
      className={`default_empty ${className}`}
      onClick={onClickHandler}
      id={id}
      name={name}
      data-testid = {dataTestId}
      onFocus={onFocus}
      onBlur={onBlur}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      tabIndex={tabIndex}
    >
      {children}
    </button>
  );
}
Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  ariaLabel: PropTypes.string,
  className: PropTypes.string,
  onClickHandler: PropTypes.func,
  name: PropTypes.string,
  id: PropTypes.string,
  disabled: PropTypes.bool,
  dataTestId: PropTypes.string,
  tabIndex: PropTypes.number,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};
Button.defaultProps = {
  disabled: false,
  type: "button",
};

export default Button;
