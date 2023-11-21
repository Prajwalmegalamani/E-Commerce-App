import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import "./ImagesGrid.scss";
import Image from "../../atoms/Image";
import Button from "../../atoms/Button";

function ImageGrid({ images }) {
    const { innerHeight } = window;
    const [imageLoaded, setImageLoaded] = useState(0);
    const [showMore, setShowMore] = useState({
        isDisplayShowMore: false,
        currentStatus: false,
    });
    const ref = useRef(null);

    useEffect(() => {
        //if all images loaded and all images height is more than window height
        if (imageLoaded === images.length && ref.current.clientHeight >= innerHeight) {
            setShowMore((prevShowMore) => ({
                ...prevShowMore,
                isDisplayShowMore: true,
                currentStatus: true,
            }));
        }
    }, [innerHeight, imageLoaded, images.length]);

    const handleImgLoad = () => {
        setImageLoaded((prevImgLoaded) => prevImgLoaded + 1);
    };

    return (
        <div className="images-grid-wrapper" ref={ref}>
            <div
                className={`slides ${showMore.currentStatus ? "overflow-slides" : ""}`}
                style={{
                    height: showMore.currentStatus ? innerHeight - 80 : "auto"
                }}
            >
                {images.map((src, index) => (
                    <div className="slide" key={`product-img-${index}`}>
                        <Image
                            src={src}
                            alt={`product-img-${index}`}
                            onImageLoad={handleImgLoad}
                        />
                    </div>
                ))}
            </div>

            {showMore.isDisplayShowMore && (
                <Button
                    className="empty"
                    onClickHandler={() =>
                        setShowMore((prevShowMore) => ({
                            ...prevShowMore,
                            currentStatus: !prevShowMore.currentStatus,
                        }))
                    }
                >
                    {showMore.currentStatus ? 'Show More' : 'Show Less'}
                </Button>
            )}
        </div>
    );
}

ImageGrid.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageGrid;
