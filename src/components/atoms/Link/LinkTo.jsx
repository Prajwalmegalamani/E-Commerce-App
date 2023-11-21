import PropTypes from "prop-types";
import React from "react";

import { Link } from "react-router-dom";

function LinkTo({ children, to, className, onClickHandler }) {
  return (
    <Link
      to={to}
      className={`default_link ${className}`}
      onClick={onClickHandler}
    >
      {children}
    </Link>
  );
}

LinkTo.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  to: PropTypes.string,
  onClickHandler: PropTypes.func,
};
LinkTo.defaultProps = {
  to: "/",
};

export default LinkTo;
