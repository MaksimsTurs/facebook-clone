import './scss/NavItems.scss';

import React from "react";

export default function NavItems({props, isActiveLink, activateLink}) {
    return (
        <li className="header__nav-item" onClick={activateLink}>
            <a href="#" className={isActiveLink ? "header__item-link non-hover" : "header__item-link"}>
                <div className="header__item-content">
                    <img src={props['icon']} alt="Home icon" className="header__item-icon" />
                </div>
                <span className="menu-helper">{props['helpers']}</span>
            </a>
            <div className={isActiveLink ? 'underground-active ' : 'underground-inactive'}></div>
        </li>
    )
}