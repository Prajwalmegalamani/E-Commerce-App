import React from "react";
import "./Category.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ForwardArrow from "../../../assets/images/forwardArrowIcon.svg";
import NextIcon from "../../../assets/images/nextIcon.svg";
import Records from "./index";
import { Link } from "react-router-dom";
import useWindowSize from "../../../hooks/useWindowSize";

const Category = () => {
  const [width] = useWindowSize();
  return (
    <div className="categories-container">
      <header>
        <div className="category-hr">
          <h2 className="category-title">Categories</h2>
        </div>
      </header>
      <div className="container-category">
        <Carousel
          showStatus={false}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                className="gallery_prev"
                title={label}
              >
                <img src={NextIcon} alt="next-arrow" />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                className="gallery_next"
                title={label}
              >
                <img src={NextIcon} alt="next-arrow" />
              </button>
            )
          }
          swipeable={true}
          autoPlay={false}
          showArrows={true}
          showIndicators={false}
          showThumbs={false}
          centerMode={true}
          centerSlidePercentage={width < 400 ? 90 : 25}
        >
          {Records &&
            Records.map((record) => {
              return (
                <div key={record.id}>
                  <div className="item">
                    <img src={record.thumbnail} alt="category" />
                  </div>
                  <Link to={`products/${record.name}`} className="link">
                    <div className="product-name">
                      <label>{record.name}</label>
                      <img
                        src={ForwardArrow}
                        alt="arrow"
                        className="forward-icon"
                      />
                    </div>
                  </Link>
                </div>
              );
            })}
        </Carousel>
      </div>
    </div>
  );
};
export default Category;
