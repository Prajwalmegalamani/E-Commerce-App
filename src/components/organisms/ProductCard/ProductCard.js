import React from "react";
import PropTypes from "prop-types";

import Image from "../../atoms/Image";
import LinkTo from "../../atoms/Link";
import StarRating from "../../molecules/StarRating";
import "./ProductCard.scss";
export default function ProductCard({ item, show }) {
  return (
    <div className={show? "one-third column product-card m-2" : "one-third column product-card m-4"}>
      <LinkTo to={"/product/" + item.id}>
        <div>
          <section className="product-image">
            <Image src={item.thumbnail} alt={item.title} />
          </section>

          <section className="product-details">
            <h4 className="item-category">{item.category}</h4>

            <h5 className="item-title">{item.title}</h5>

            <StarRating defaultRating={item.rating} width={16} />
            <span className="item-price">${item.price}</span>
          </section>
        </div>
      </LinkTo>
    </div>
  );
}

ProductCard.propTypes = {
  item: PropTypes.object.isRequired,
};
