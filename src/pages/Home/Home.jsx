import './Home.scss';
import React from "react";

//Components 
import Header from "../common/components/Header/Header";
import UserMenu from "../common/components/UserMenu/UserMenu";

export default function Home() {
    return (
        <>
            <Header />
            <main className="main-home-page-container">
                <UserMenu />
                <div className="main-home-page-main">
                </div>
            </main>
        </>
    )
}