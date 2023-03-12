import './UserMenu.scss';

import React, { useState, useEffect, lazy, Suspense } from "react";

import defaultusericon from '../../../imgs/icons/default_user_icon.png';
import showbuttonicon from '../../../imgs/icons/arrowbutton.png';

import friendsicon from '../../../imgs/menu_icon/friends.png';
import group from '../../../imgs/menu_icon/group.png';
import saved from '../../../imgs/menu_icon/saved.png';
import events from '../../../imgs/menu_icon/events.png';
import watch from '../../../imgs/menu_icon/watch.png';
import Marketplace from '../../../imgs/menu_icon/marketplace.png';
import news from '../../../imgs/menu_icon/news.png';
import lastnews from '../../../imgs/menu_icon/last_news.png';
import photo from '../../../imgs/menu_icon/photo.png';
import sites from '../../../imgs/menu_icon/sites.png';

import MoreUserContent from './components/MoreUserContent';

export default function UserMenu() {
    const [isShowed, setShow] = useState(false);

    return (
        <aside className="user__menu-container">
            <div className="user__menu-body">
                <ul className="user__menu-list">
                    <li className="user__menu-item">
                        <a href="" className="user__menu-link">
                            <img className="user__menu-icon user-icon" src={defaultusericon} alt="User icon" />
                            <p className="user__menu-text">Maksims</p>
                        </a>
                    </li>
                    <li className="user__menu-item">
                        <a href="" className="user__menu-link">
                            <img className="user__link-icon" src={friendsicon} alt="Friends icon" />
                            <p className="user__menu-text">Freunde finden</p>
                        </a>
                    </li>
                    <li className="user__menu-item">
                        <a href="" className="user__menu-link">
                            <img className="user__link-icon" src={lastnews} alt="Friends icon" />
                            <p className="user__menu-text">Letzte neughkeiten</p>
                        </a>
                    </li>
                    <li className="user__menu-item">
                        <a href="" className="user__menu-link">
                            <img className="user__link-icon" src={group} alt="Friends icon" />
                            <p className="user__menu-text">Gruppen</p>
                        </a>
                    </li>
                    <li className="user__menu-item" >
                        <a href="" className="user__menu-link">
                            <img className="user__link-icon" src={Marketplace} alt="Friends icon" />
                            <p className="user__menu-text">Marketplace</p>
                        </a>
                    </li>
                    <li className="user__menu-item">
                        <a href="" className="user__menu-link">
                            <img className="user__link-icon" src={watch} alt="Friends icon" />
                            <p className="user__menu-text">Videos</p>
                        </a>
                    </li>
                    <li className="user__menu-item">
                        <a href="" className="user__menu-link">
                            <img className="user__link-icon" src={photo} alt="Friends icon" />
                            <p className="user__menu-text">Flammen</p>
                        </a>
                    </li>
                    <li className="user__menu-item">
                        <a href="" className="user__menu-link">
                            <img className="user__link-icon" src={saved} alt="Friends icon" />
                            <p className="user__menu-text">Gespeichert</p>
                        </a>
                    </li>
                    <li className="user__menu-item">
                        <a href="" className="user__menu-link">
                            <img className="user__link-icon" src={sites} alt="Friends icon" />
                            <p className="user__menu-text">Seiten</p>
                        </a>
                    </li>
                    <li className="user__menu-item">
                        <a href="" className="user__menu-link">
                            <img className="user__link-icon" src={news} alt="Friends icon" />
                            <p className="user__menu-text">News</p>
                        </a>
                    </li>
                    <li className="user__menu-item">
                        <a href="" className="user__menu-link">
                            <img className="user__link-icon" src={events} alt="Friends icon" />
                            <p className="user__menu-text">Events</p>
                        </a>
                    </li>
                </ul>
                <MoreUserContent isVisible={isShowed} />
                <div className="user__menu-link" onClick={() => setShow(isShowed ? false : true)}>
                    <img src={showbuttonicon} alt="Arrow icon" className={isShowed ? "user-icon top" : "user-icon down"} />
                    <p className="user__more-text">Mehr anzeigen</p>
                </div>
            </div>
        </aside>
    )
}