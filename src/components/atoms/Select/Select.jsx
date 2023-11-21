import React from "react";
import PropTypes from "prop-types";
export default function Select({
  id,
  name,
  value,
  className,
  onChangeHandler,
  onBlurHandler,
  ariaLabel,
  Options,
  placeholderVal,
}) {
  return (
    <select
      onChange={onChangeHandler}
      value={value}
      onBlur={onBlurHandler}
      className={className}
      name={name}
      id={id}
      aria-label={ariaLabel}
    >
      <option value="" disabled={true}>
        {placeholderVal}
      </option>
      {Options?.map((value, i) => {
        return (
          <option key={i} value={value}>
            {value}
          </option>
        );
      })}
    </select>
  );
}
Select.propTypes = {
  ariaLabel: PropTypes.string,
  className: PropTypes.string,
  onChangeHandler: PropTypes.func,
  onBlurHandler: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  Options: PropTypes.array.isRequired,
  placeholderVal: PropTypes.string,
};

Select.defaultProps = {
  placeholderVal: "--options--",
};
