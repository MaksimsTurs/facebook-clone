import './UserMenu.scss';

import React from "react";

import defaultusericon from '../../../imgs/icons/default_user_icon.png';
import showbuttonicon from '../../../imgs/icons/arrowbutton.png';

export default function UserMenu() {
    return (
        <aside className="user__menu-container">
            <ul className="user__menu-list">
                <li className="user__menu-item">
                    <a href="" className="user__menu-link">
                        <img className="user__menu-icon user-icon" src={defaultusericon} alt="User icon" />
                        <p className="user__menu-text">Maksims</p>
                    </a>
                </li>
                <li className="user__menu-item">
                    <a href="" className="user__menu-link">
                        <p className="user__menu-text">Freunde finden</p>
                    </a>
                </li>
                <li className="user__menu-item">
                    <a href="" className="user__menu-link">
                        <p className="user__menu-text">Letzte neughkeiten</p>
                    </a>
                </li>
                <li className="user__menu-item">
                    <a href="" className="user__menu-link">
                        <p className="user__menu-text">Gruppen</p>
                    </a>
                </li>
                <li className="user__menu-item">
                    <a href="" className="user__menu-link">
                        <p className="user__menu-text">Marketplace</p>
                    </a>
                </li>
                <li className="user__menu-item">
                    <a href="" className="user__menu-link">
                        <p className="user__menu-text">Videos</p>
                    </a>
                </li>
                <li className="user__menu-item">
                    <a href="" className="user__menu-link">
                        <p className="user__menu-text">Flammen</p>
                    </a>
                </li>
                <li className="user__menu-item">
                    <a href="" className="user__menu-link">
                        <p className="user__menu-text">Gespeichert</p>
                    </a>
                </li>
                <li className="user__menu-item">
                    <a href="" className="user__menu-link">
                        <p className="user__menu-text">Seiten</p>
                    </a>
                </li>
                <li className="user__menu-item">
                    <a href="" className="user__menu-link">
                        <p className="user__menu-text">News</p>
                    </a>
                </li>
                <li className="user__menu-item">
                    <a href="" className="user__menu-link">
                        <p className="user__menu-text">Events</p>
                    </a>
                </li>
            </ul>
            <div className="user__more-option">

            </div>
            <div className="user__show-more">
                <img src={showbuttonicon} alt="Arrow icon" className="user__button-icon" />
                <p className="user__more-text">Mehr anzeigen</p>
            </div>
        </aside>
    )
}