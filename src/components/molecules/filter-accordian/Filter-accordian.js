import React from "react";
import PropTypes from "prop-types";

import "./Filter-accordian.scss";
import Label from "../../atoms/Label";
import Checkbox from "../../atoms/Checkbox";

import Accordion from "../../atoms/Accordion";
export default function FilterAccordian({ items, title, onChangeStatus }) {
  const onChangeHandler = (position) => {
    const updateCheckedStatus = items.map((item, index) => {
      return index === position
        ? { ...item, isApply: !item.isApply }
        : { ...item, isApply: item.isApply };
    });

    onChangeStatus(updateCheckedStatus);
  };

  return (
    <div className="filter-accor-wrapper">
      <Accordion title={title} titleClassName="filter-list-item">
        <ul className="options">
          {items.map((option, index) => {
            return (
              <li
                key={index}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    onChangeHandler(index);
                  }
                }}
                onClick={() => {
                  onChangeHandler(index);
                }}
              >
                <Label
                  htmlFor={`${title}_${option.name}`}
                  className="option-label"
                >
                  <Checkbox
                    className="option-checkbox"
                    name={option.name}
                    id={`${title}_${option.name}`}
                    value={option.name}
                    disabled={false}
                    checked={items[index].isApply}
                  />
                  {option.name}
                </Label>
              </li>
            );
          })}
        </ul>
      </Accordion>
      <hr className="separator" />
    </div>
  );
}

FilterAccordian.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  onChangeStatus: PropTypes.func.isRequired,
};
