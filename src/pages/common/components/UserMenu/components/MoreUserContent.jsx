import React from "react";

import messenger from '../../../../imgs/menu_icon/messenger.png';
import onlinegame from '../../../../imgs/menu_icon/game-control.png';
import analys from '../../../../imgs/menu_icon/bar-chart.png';
import card from '../../../../imgs/menu_icon/credit-card.png';

export default function MoreUserContent({isVisible}) {
    
    return (
        <div className={isVisible ? "user__more-option visible" : "user__more-option hidden"}>
            <ul className="user__menu-list">
                <li className="user__menu-item">
                    <a href="" className="user__menu-link">
                        <img className="user__menu-icon user-icon" src={analys} alt="User icon" />
                        <p className="user__menu-text">Analytics</p>
                    </a>
                </li>
                <li className="user__menu-item">
                    <a href="" className="user__menu-link">
                        <img className="user__menu-icon user-icon" src={messenger} alt="User icon" />
                        <p className="user__menu-text">Mesennger</p>
                    </a>
                </li>
                <li className="user__menu-item">
                    <a href="" className="user__menu-link">
                        <img className="user__menu-icon user-icon" src={onlinegame} alt="User icon" />
                        <p className="user__menu-text">Video Games</p>
                    </a>
                </li>
                <li className="user__menu-item">
                    <a href="" className="user__menu-link">
                        <img className="user__menu-icon user-icon" src={card} alt="User icon" />
                        <p className="user__menu-text">Finance Card</p>
                    </a>
                </li>
            </ul>
        </div>
    )
}