import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './StarRating.scss';
import Button from '../../atoms/Button';

function StarRating({
    defaultRating,
    emptyColor,
    fillColor,
    height,
    maxValue,
    onChangeHover,
    onChangeValue,
    readOnly,
    width,
}) {
    const [rating, setRating] = useState(defaultRating);
    const [hover, setHover] = useState(null);

    const setRatingFn = (value) => {
        if (readOnly) return;

        setRating(value);
        onChangeValue(value);
    }

    const setHoverFn = (value) => {
        if (readOnly) return;

        setHover(value);
        onChangeHover(value);
    }

    return (
        <div className="star-rating" tabIndex={readOnly ? -1 : undefined}>
            {[...Array(maxValue)].map((star, index) => {
                const value = index + 1;

                return (
                    <Button
                        key={index}
                        tabIndex={readOnly ? -1 : undefined}
                        className="icon"
                        onClickHandler={() => setRatingFn(value)}
                        onFocus={() => setHoverFn(value)}
                        onBlur={() => setHoverFn(null)}
                        onMouseEnter={() => setHoverFn(value)}
                        onMouseLeave={() => setHoverFn(null)}
                        ariaLabel="star rating"
                    >
                        <svg
                            data-rating={value}
                            fill={value <= (hover || rating) ? fillColor : emptyColor}
                            height={height}
                            viewBox="0 0 25 25"
                            width={width}
                        >
                            <polygon
                                strokeWidth="0"
                                points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
                            />
                        </svg>
                    </Button>
                );
            })}
        </div>
    )
}

StarRating.propTypes = {
    defaultRating: PropTypes.number,
    emptyColor: PropTypes.string,
    fillColor: PropTypes.string,
    height: PropTypes.number,
    maxValue: PropTypes.number,
    onChangeHover: PropTypes.func,
    onChangeValue: PropTypes.func,
    readOnly: PropTypes.bool,
    width: PropTypes.number,
};

StarRating.defaultProps = {
    defaultRating: 0,
    emptyColor: "grey",
    fillColor: "#1b1c1e",
    height: 24,
    maxValue: 5,
    onChangeHover: () => { },
    onChangeValue: () => { },
    readOnly: true,
    width: 24,
};

export default StarRating;