import PropTypes from "prop-types";
import React from "react";

function Checkbox({
  id,
  name,
  value,
  className,
  onChangeHandler,
  disabled,
  checked,
  ariaLabel,
}) {
  return (
    <input
      type="checkbox"
      className={`default_checkbox ${className}`}
      id={id}
      value={value}
      aria-label={ariaLabel}
      name={name}
      onChange={onChangeHandler}
      disabled={disabled}
      checked={checked}
    />
  );
}

Checkbox.propTypes = {
  ariaLabel: PropTypes.string,
  className: PropTypes.string,
  onChangeHandler: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
};
Checkbox.defaultProps = {
  disabled: false,
  onChangeHandler: () => {},
};

export default Checkbox;
