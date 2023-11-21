import React from "react";
import PropTypes from "prop-types";

import "./InclusionCard.scss";
import Image from "../../atoms/Image";
function InclusionCard({ title, image }) {
    return (
        <div className="inclusion-card">
            <Image src={image} alt="Product Inclusion" width={32} height={32}/>
            <h6>{title}</h6>
        </div>
    );
}

InclusionCard.propTypes = {
  title: PropTypes.string.isRequired,
};

export default InclusionCard;
