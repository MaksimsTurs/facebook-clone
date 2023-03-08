import './Header.scss';

import React, { useState, useRef, useEffect } from 'react';

//Icons and IMG 
import logo from '../../../imgs/facebook_logo.png';
import homeicon from '../../../imgs/icons/home_icon.png';
import friendsicon from '../../../imgs/icons/friends_icon.png';
import marketplaceicon from '../../../imgs/icons/marketplace_icon.png';
import videoicon from '../../../imgs/icons/video_icon.png';
import defaultusericon from '../../../imgs/icons/default_user_icon.png';
import messengericon from '../../../imgs/icons/messenger_icon.png';
import notification from '../../../imgs/icons/notification_icon.png';
import plusicon from '../../../imgs/icons/plus_icon.png';
import lupeicon from '../../../imgs/icons/loupe_icon.png';
import arrowicon from '../../../imgs/icons/arrow_icon.png';

import NavItems from './components/NavItems';

export default function Header() {
    const [inputActive, setActive] = useState(false);
    const [activeLink, setActiveLink] = useState(0);

    // const [searchedValue, setValue] = useState('');
    // const [responseArray, setArryItem] = useState([]);

    const linkiconarray = [homeicon, friendsicon, marketplaceicon, videoicon]

    const searchRef = useRef();

    useEffect(() => {
        document.addEventListener('click', event => import(/* webpackChunkName: "outsideclickhandler" */ '../../helpers/outsideclickhandler.js')
        .then(module => {
            module.default(searchRef, event) ? true : setActive(false);
        }));
    })

    //? TODO: Create new array for search function
    // async function searchHandler(event) {
    //     setValue(event.target.value)
    //     const response = await fetch(`https://jsonplaceholder.typicode.com/posts?title=${searchedValue.trim().toLowerCase()}`)
    //     const data = await response.json()
    //     setArryItem(data);
    // }

    return (
        <header className="header__container">
            <div ref={searchRef} className="header__logo-container">
                <a href="/" className='header__logo-link'>
                    <img className={inputActive ?
                        'header__logo element-hidden' :
                        'header__logo'
                    } src={logo} alt="Faceboock" />
                </a>
                <img className={inputActive ?
                    'header__back-button to-left' :
                    'header__back-button to-right'
                } src={arrowicon} alt="Arrow icon" onClick={() => setActive(false)} />
                <form className="header__search-form">
                    <img className={inputActive ?
                        'header__search-icon to-left element-hidden' :
                        'header__search-icon'
                    } src={lupeicon} alt="Lupe icon" />
                    <input placeholder='Suchen in Faceboock' type="text" className="header__search-input" onClick={() => setActive(true)} /*onChange={searchHandler}*/ />
                </form>
            </div>
            <div className={inputActive ?
                'header__response-container' :
                'element-hidden'
            }>
            </div>
            <nav className="header__nav-container">
                <ul className="header__nav-list">
                    {
                        linkiconarray.map((element, index) => <NavItems isActiveLink={activeLink === index} key={index} activateLink={() => setActiveLink(index)} props={element} />)
                    }
                </ul>
            </nav>
            <div className="header__user-menu">
                <ul className="header__user-list">
                    <li className="header__user-item">
                        <img src={plusicon} alt="Plus icon" className="header__user-icon" />
                    </li>
                    <li className="header__user-item">
                        <img src={messengericon} alt="Messenger icon" className="header__user-icon" />
                    </li>
                    <li className="header__user-item">
                        <img src={notification} alt="Notification icon" className="header__user-icon" />
                    </li>
                    <li className="header__user-item">
                        <img src={defaultusericon} alt="Default user icon" className="header__user-icon" />
                    </li>
                </ul>
            </div>
        </header>
    )
}