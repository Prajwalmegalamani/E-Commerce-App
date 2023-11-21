import React from "react";
import PropTypes from "prop-types";

import LinkTo from "../../atoms/Link/LinkTo";
import hero from "./HeroHeader.module.scss";

export default function HeroHeader({
  title,
  subtitleL1,
  subtitleL2,
  link,
  linkText,
}) {
  return (
    <div className={hero.mainContainer}>
    <div className={hero.heroHeaderImg}>
    <div className={hero.heroContainer}>
        <div className={hero.heroHeaderContent}>
          <p className={hero.heroHeaderContentTitle}>{title}</p>
          <p className={hero.heroHeaderContentSubtitle}>
            <span>{subtitleL1}</span>
            <span> {subtitleL2}</span>
          </p>
          <LinkTo to={link} className={hero.heroHeaderDivButton}>
            {linkText}
          </LinkTo>
        </div>
      </div>
    </div>
    </div>
  );
}

HeroHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitleL1: PropTypes.string.isRequired,
  subtitleL2: PropTypes.string,
  linkText: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
HeroHeader.defaultProps = {
  title: "Your Title",
  subtitleL1: "Your Subtitle 1",
  subtitleL2: "Your Subtitle 2",
  linkText: "Your Link text",
  link: "#",
};
