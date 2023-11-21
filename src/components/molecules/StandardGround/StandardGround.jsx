import React from "react";
import PropTypes from "prop-types";
import Radio from "../../atoms/Radio";
import Label from "../../atoms/Label";
import LinkTo from "../../atoms/Link/LinkTo";

export default function StandardGround({ className }) {
  return (
    <div className={`StandardGroundCard ${className}`}>
      <div className="standard-ground">
        <div className="radio-label">
          <Radio
            checked={true}
            id="standard-ground"
            value="standard-ground"
            readOnly={true}
          />
          <Label htmlFor="standard-ground" className="label">
            <span className="displayName">Standard Ground</span>
            <div className="text-muted"> 7-10 Buisness Days</div>
          </Label>
        </div>
        <span>$0.00</span>
      </div>
      <LinkTo to="/cart">Choose faster shipping</LinkTo>
    </div>
  );
}
StandardGround.propTypes = {
  className: PropTypes.string
};