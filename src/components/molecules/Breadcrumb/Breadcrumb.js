import React from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { BsHouseDoor } from "react-icons/bs";

import "./Breadcrumb.scss";

function Breadcrumb({ routes }) {
    const location = useLocation();

    return (
        <nav className="breadcrumb-wrapper">
            <ul className="breadcrumb">
                <li>
                    <Link to="/" aria-label="Home Page Link">
                        <BsHouseDoor />
                    </Link>
                </li>
                {routes.map(({ path, text }) => (
                    <li key={path}>
                        {path === location.pathname ? text : <Link to={path}>{text}</Link>}
                    </li>
                ))}
            </ul>
        </nav>
    );
}

Breadcrumb.propTypes = {
    routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Breadcrumb;
