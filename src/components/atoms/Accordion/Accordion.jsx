import React, { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import PropTypes from "prop-types";

const Accordion = ({
  title,
  children,
  subtitle,
  buttonClassName,
  titleClassName,
  subTitleClassName,
  contentClassName,
  defaultOpen,
}) => {
  const [isActive, setIsActive] = useState(defaultOpen);
  return (
    <div className="accordion-item">
      <button
        className={`accordion-button ${buttonClassName}`}
        data-testid="chevron"
        onClick={() => setIsActive(!isActive)}
      >
        <div className={`accordion-title ${titleClassName}`}>{title}</div>
        <div className="accordion-icon">
          <div className={`accordion-subtitle ${subTitleClassName}`}>{subtitle}</div>
          <div className={`icon-style ${titleClassName}`}>
            {isActive ? <BsChevronDown /> : <BsChevronUp />}
          </div>
        </div>
      </button>
      {isActive && (
        <div className={`accordion-content ${contentClassName}`}>
          {children}
        </div>
      )}
    </div>
  );
};
Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  titleClassName: PropTypes.string,
  subTitleClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  buttonClassName: PropTypes.string,
  defaultOpen: PropTypes.bool,
};
Accordion.defaultProps = {
  defaultOpen: false,
  buttonClassName: '',
  titleClassName: '',
  contentClassName: '',
};
export default Accordion;