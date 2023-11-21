import React, { useState } from "react";
import { BsFillBookmarkFill, BsBookmark } from "react-icons/bs";
import PropTypes from "prop-types";

import Button from "../Button/Button";

const BookMark = ({ defaultIsBookmarked }) => {
    const [isActive, setIsActive] = useState(defaultIsBookmarked);

    return (
        <Button
            className='icon'
            ariaLabel={isActive ? 'Remove Bookmark' : 'Bookmark'}
            onClickHandler={() => setIsActive(prevIsActive => !prevIsActive)}
        >
            {isActive ? <BsFillBookmarkFill /> : <BsBookmark />}
        </Button>
    );
};

BookMark.propTypes = {
    defaultIsBookmarked: PropTypes.bool,
};

BookMark.defaultProps = {
    defaultIsBookmarked: false,
}

export default BookMark;
