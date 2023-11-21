import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { addSortBy } from "../../../redux/actions/products.action";
import Dropdown from "../../molecules/dropdown/Dropdown";
import Label from "../../atoms/Label";
import Radio from "../../atoms/Radio";
import { optionsList } from "../../../config";

export default function SortingDropdown() {
  const [selectedOption, setSelectedOption] = useState(null);
  const dispatch = useDispatch();

  const onRadioChangeHandler = (index) => {
    setSelectedOption(index);
    dispatch(addSortBy(index));
  };

  return (
    <div className="sorting-dropdown-wrapper">
      <Dropdown
        optionsList={optionsList}
        title={
          selectedOption === null
            ? "Sort By: SELECT"
            : `Sort By: ${optionsList[selectedOption]}`
        }
        selectedOption={selectedOption}
        onChangeHandler={onRadioChangeHandler}
        optionRenderer={(option, selectedOption) => {
          return (
            <Label htmlFor={option} className="option-label">
              <Radio
                ariaLabel="option-list"
                className="option-radio"
                name="sort"
                checked={option === optionsList[selectedOption]}
                value={option}
                disabled={false}
              />
              {option}
            </Label>
          );
        }}
      />
    </div>
  );
}
