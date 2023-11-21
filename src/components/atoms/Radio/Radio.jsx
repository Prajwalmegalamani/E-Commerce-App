import PropTypes from "prop-types";
import React from "react";

function Radio({
  onChangeHandler,
  checked,
  ariaLabel,
  className,
  name,
  id,
  disabled,
  value,
  readOnly,
  defaultChecked,
}) {
  return (
    <input
      type="radio"
      checked={checked}
      onChange={onChangeHandler}
      aria-label={ariaLabel}
      disabled={disabled}
      className={`default_radio ${className}`}
      id={id}
      name={name}
      value={value}
      readOnly={readOnly}
      defaultChecked={defaultChecked}
    />
  );
}

Radio.propTypes = {
  ariaLabel: PropTypes.string,
  className: PropTypes.string,
  onChangeHandler: PropTypes.func,
  name: PropTypes.string,
  id: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  readOnly: PropTypes.bool,
};
Radio.defaultProps = {
  disabled: false,
  readOnly: false,
  onChangeHandler: () => {},
};

export default Radio;
