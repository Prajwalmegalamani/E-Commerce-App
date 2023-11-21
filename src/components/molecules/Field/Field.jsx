import React from "react";
import PropTypes from "prop-types";

import Input from "../../atoms/Input";
import Label from "../../atoms/Label";
import Select from "../../atoms/Select";

export default function Field({
  className,
  id,
  value,
  onChangeHandler,
  onInputHandler,
  onBlurHandler,
  name,
  ariaLabel,
  placeholder,
  label,
  fieldType,
  Options,
  required,
  type,
  dataTestId,
  maxlength,
  autoFocus,
  inputType,
}) {
  return (
    <div className="floating-label-wrap">
      {fieldType === "select" ? (
        <Select
          onChangeHandler={onChangeHandler}
          onBlurHandler={onBlurHandler}
          value={value}
          className={`floating-label-field ${className}`}
          name={name}
          ariaLabel={ariaLabel}
          id={id}
          Options={Options}
          placeholderVal={placeholder}
        ></Select>
      ) : (
        <Input
          type={type}
          autoFocus={autoFocus}
          type={inputType}
          id={id}
          className={`floating-label-field ${className}`}
          ariaLabel={ariaLabel}
          placeholder={placeholder}
          name={name}
          value={value}
          dataTestId={dataTestId}
          onChangeHandler={onChangeHandler}
          onInputHandler={onInputHandler}
          onBlurHandler={onBlurHandler}
          maxlength={maxlength}
        />
      )}
      <Label
        className={`floating-label ${required ? "required" : ""}`}
        htmlFor={id}
      >
        {label}
      </Label>
    </div>
  );
}
Field.propTypes = {
  ariaLabel: PropTypes.string,
  className: PropTypes.string,
  onChangeHandler: PropTypes.func,
  onBlurHandler: PropTypes.func,
  onInputHandler: PropTypes.func,
  placeholder: PropTypes.string,
  dataTestId: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  fieldType: PropTypes.string,
  Options: PropTypes.array,
  inputType: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  maxlength: PropTypes.string,
  autoFocus: PropTypes.bool,
  inputType: PropTypes.string,
};
Field.defaultProps = {
  fieldType: "input",
  inputType: "text",
  required: false,
  type: "text",
  maxlength: "",
  autoFocus: false,
};
