import React, { useState } from "react";
import PropTypes from "prop-types";

import Label from "../../atoms/Label";
import "./Dropdown.scss";
import FilterMobileContent from "../FilterMobileContent";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

export default function Dropdown({
  title,
  optionsList,
  optionRenderer,
  selectedOption,
  onChangeHandler,
}) {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  const setSelectedThenCloseDropdown = (index, value) => {
    onChangeHandler(index, value);
    setIsOptionsOpen(false);
  };

  const handleKeyDown = (index, value) => (e) => {
    switch (e.key) {
      case "Escape":
        e.preventDefault();
        setIsOptionsOpen(false);
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedThenCloseDropdown(
          index - 1 >= 0 ? index - 1 : optionsList.length - 1,
          value
        );
        break;
      case "ArrowDown":
        e.preventDefault();
        setSelectedThenCloseDropdown(
          index === optionsList.length - 1 ? 0 : index + 1,
          value
        );
        break;
      case "Enter":
        e.preventDefault();
        setSelectedThenCloseDropdown(index, value);
        break;
      default:
        break;
    }
  };

  return (
    <>
      {isOptionsOpen && (
        <div
          className="select-box-backdrop"
          onClick={() => setIsOptionsOpen(false)}
          data-testid="select-box-backdrop"
        ></div>
      )}
      <div className="select-box--container">
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={isOptionsOpen}
          onClick={toggleOptions}
          disabled={false}
          data-testid="toggle"
          id={title}
        >
          <span>
            {title ? title : `Sort By: ${optionsList[selectedOption]}`}
          </span>
          {isOptionsOpen ? <BsChevronUp /> : <BsChevronDown />}
        </button>
        <div className={`dropdown-content ${isOptionsOpen ? "show" : ""}`}>
          <FilterMobileContent
            heading="Sort By"
            onCloseClick={() => setIsOptionsOpen(false)}
          />
          <ul
            className={`options`}
            role="listbox"
            aria-activedescendant={optionsList[selectedOption]}
            tabIndex={-1}
            aria-label={title}
          >
            {optionsList.map((option, index) => (
              <li
                className="option"
                key={index}
                id={option}
                role="option"
                aria-selected={selectedOption === index}
                tabIndex={0}
                onKeyDown={handleKeyDown(index)}
                onClick={() => {
                  setSelectedThenCloseDropdown(index, option);
                }}
              >
                {optionRenderer ? (
                  optionRenderer(option, selectedOption)
                ) : (
                  <Label htmlFor={option} className="option-label">
                    {option}
                  </Label>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

Dropdown.prototype = {
  optionsList: PropTypes.array.isRequired,
  optionRenderer: PropTypes.func,
  selectedOption: PropTypes.number.isRequired,
  onChangeHandler: PropTypes.func,
  title: PropTypes.string,
};
