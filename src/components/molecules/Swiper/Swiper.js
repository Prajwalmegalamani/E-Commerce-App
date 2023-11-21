import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import "./Swiper.scss";

function Swiper({ children, show, contentClassName }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [length, setLength] = useState(children.length);
    const [touchPosition, setTouchPosition] = useState(null);

    // Set the length to match current children from props
    useEffect(() => {
        setLength(children.length);
    }, [children]);

    const next = () => {
        if (currentIndex < length - show) {
            setCurrentIndex((prevState) => prevState + 1);
        }
    };

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevState) => prevState - 1);
        }
    };

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX;
        setTouchPosition(touchDown);
    };

    const handleTouchMove = (e) => {
        const touchDown = touchPosition;

        if (touchDown === null) {
            return;
        }

        const currentTouch = e.touches[0].clientX;
        const diff = touchDown - currentTouch;

        if (diff > 5) {
            next();
        }

        if (diff < -5) {
            prev();
        }

        setTouchPosition(null);
    };

    return (
        <div
            className="swiper-content-wrapper"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
        >
            <div
                className={`swiper-content show-${show} ${contentClassName ? contentClassName : ''}`}
                data-testid="swiper-content"
                style={{
                    transform: currentIndex
                        ? `translateX(-${currentIndex * (100 / show) + 25}%)`
                        : "translateX(0%)",
                }}
            >
                {children}
            </div>
        </div>
    );
}

Swiper.propTypes = {
    show: PropTypes.number.isRequired,
    contentClassName: PropTypes.string,
    children: PropTypes.node.isRequired,
};


export default Swiper;
