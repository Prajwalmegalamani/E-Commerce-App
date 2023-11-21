import PropTypes from "prop-types";
import React from "react";

function Label({ children, className, htmlFor }) {
  return (
    <label className={`default_label ${className}`} htmlFor={htmlFor}>
      {children}
    </label>
  );
}

Label.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  htmlFor: PropTypes.string.isRequired,
};

export default Label;
