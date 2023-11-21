import PropTypes from "prop-types";
import React, { useState } from "react";

import { imageNotFound } from "../../../utils/constants";
function Image({ src, alt, width, height, className, name, id, ariaLabel, onImageLoad }) {
  const [imageSrc, setImageSrc] = useState(src);
  function imageErrorOcurred() {
    setImageSrc(imageNotFound);
  }
  return (
    <img
      src={imageSrc}
      id={id}
      name={name}
      alt={alt}
      aria-label={ariaLabel}
      onError={() => {
        imageErrorOcurred();
      }}
      height={height}
      width={width}
      className={className}
      onLoad={() => onImageLoad()}
    />
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  onImageLoad: PropTypes.func,
};
Image.defaultProps = {
  alt: "default alternative text",
  onImageLoad: () => { },
}

export default Image;
