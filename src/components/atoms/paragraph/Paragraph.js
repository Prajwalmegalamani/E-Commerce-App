import React, { Children } from "react";
import PropTypes from "prop-types";

import "./Paragraph.scss";

export default function Paragraph({ id, name, children, className }) {
  return (
    <p className={`paragraph ${className}`} id={id} name={name}>
      {children}
    </p>
  );
}

Paragraph.propTypes = {
  children: PropTypes.string.isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
};
