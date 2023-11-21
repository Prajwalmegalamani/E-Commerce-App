import PropTypes from "prop-types";
import "./Input.scss";
function Input({
  type,
  className,
  placeholder,
  onChangeHandler,
  onInputHandler,
  onBlurHandler,
  dataTestId,
  id,
  name,
  ariaLabel,
  value,
  disabled,
  maxlength,
  autoFocus,
}) {
  return (
    <input
      autoFocus={autoFocus}
      type={type}
      className={`default_input_style ${className}`}
      id={id}
      aria-label={ariaLabel}
      placeholder={placeholder}
      onChange={onChangeHandler}
      onInput={onInputHandler}
      data-testid={dataTestId}
      onBlur={onBlurHandler}
      value={value}
      name={name}
      disabled={disabled}
      maxLength={maxlength}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string,
  className: PropTypes.string,
  onChangeHandler: PropTypes.func.isRequired,
  onInputHandler: PropTypes.func,
  dataTestId: PropTypes.string,
  onBlurHandler: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  maxlength: PropTypes.string,
  autoFocus: PropTypes.bool,
};
Input.defaultProps = {
  disabled: false,
  type: "text",
  maxlength: "",
  autoFocus: false,
};

export default Input;
