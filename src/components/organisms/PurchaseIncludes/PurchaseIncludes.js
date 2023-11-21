import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "./PurchaseIncludes.scss";
import InclusionCard from "../../molecules/InclusionCard/InclusionCard";
import useWindowSize from "../../../hooks/useWindowSize";
import tracerImage from "../../../assets/images/tracer.png";
import orderStatusImage from "../../../assets/images/order-status.png";
import giftCardImage from "../../../assets/images/gift-card.png";
import lockImage from "../../../assets/images/lock.png";

const inclusions = [
  { title: "ABC's 5 Year Warranty", image: tracerImage },
  { title: "Free Gift Boxing Shop Gifts", image: orderStatusImage },
  { title: "Free Ship & Returns", image: giftCardImage },
  { title: "Make it Yours Cutomize and Monogram", image: lockImage },
];

function PurchaseIncludes() {
  const [width] = useWindowSize();

  return (
    <div className="purchase-includes">
      <h3>Included with this Purchase</h3>
      <p className="description">
        An outstanding ownership experience with ABC's comprehensive product
        coverage, perks and our commitment to your ongoing satisfaction.
      </p>
      <Carousel
        showStatus={false}
        swipeable={width < 750}
        autoPlay={false}
        showArrows={false}
        showIndicators={false}
        showThumbs={false}
        onClickItem={true}
        centerMode={true}
        centerSlidePercentage={
          width < 450
            ? 60
            : width > 450 && width < 550
            ? 50
            : width > 550 && width < 750
            ? 40
            : 25
        }
      >
        {inclusions.map((incl, index) => (
          <InclusionCard key={index} title={incl.title} image={incl.image} />
        ))}
      </Carousel>
    </div>
  );
}

export default PurchaseIncludes;
