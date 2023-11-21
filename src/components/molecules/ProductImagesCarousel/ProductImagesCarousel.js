import React from 'react';
import PropTypes from 'prop-types';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import './ProductImagesCarousel.scss';
import Image from '../../atoms/Image';

function ProductImageCarousel({ images }) {

  return (
    <div className='images-wrapper'>
      <div className='image-carousel'>
        <Carousel showStatus={false} showThumbs={false} showArrows={false} autoPlay={true} infiniteLoop={true} renderIndicator={(onClickHandler, isSelected, index, label) => {
          if (isSelected) {
            return (
              <li
                className="carousel-indicator active"
                aria-label={`Selected: ${label} ${index + 1}`}
                title={`Selected: ${label} ${index + 1}`}
              />
            );
          }
          return (
            <li
              className="carousel-indicator"
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              title={`${label} ${index + 1}`}
              aria-label={`${label} ${index + 1}`}
            />
          );
        }}>
          {images.map((src, index) => <Image src={src} key={`product-img-${index}`} alt={`product-img-${index}`} />)}
        </Carousel>
      </div>
    </div>
  )
}

ProductImageCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default ProductImageCarousel;