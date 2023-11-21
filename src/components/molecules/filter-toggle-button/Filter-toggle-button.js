import React from "react";
import PropTypes from "prop-types";

import "./Filter-toggle-button.scss";
import Button from "../../atoms/Button";
import FilterIcon from "../../../assets/images/Union.svg";
import Image from "../../atoms/Image";

export default function FilterToggleButton({ show, setShow }) {
  return (
    <>
      <div className="filter-toggle-wraper">
        <Button
          ariaLabel="filter toggle"
          className={`filter-toggle-btn`}
          onClickHandler={() => {
            setShow(!show);
          }}
        >
          <span>{show ? "Hide" : "Show"} Filter</span>
          <Image src={FilterIcon} alt="filter" />
        </Button>
      </div>
    </>
  );
}

FilterToggleButton.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
};
