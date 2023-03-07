import './scss/NavItems.scss';

import React from "react";

export default function NavItems({props, isActiveLink, activateLink}) {
    return (
        <li className="header__nav-item" onClick={activateLink}>
            <a href="#" className="header__item-link">
                <div className="header__item-content">
                    <img src={props} alt="Home icon" className="header__item-icon" />
                </div>
            </a>
            <div className={isActiveLink ? 'underground-active ' : 'underground-inactive'}></div>
        </li>
    )
}