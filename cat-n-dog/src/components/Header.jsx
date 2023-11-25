import React from "react";

import "../styles/Header.css";

import logoWebsite from "../assets/Cat-N-Dog-Logo@2x.png";

const Header = (props) => {
    const headerLinks = ["About", "Blog", "Career"];

    return (
        <div className="header">
            <img className="header__website-logo" src={logoWebsite} alt="Logo" />

            <div className="header__links">
                {headerLinks.map((value) => (
                    <div className="header__links__content" key={value}>
                        <a href="https://www.google.com">{value}</a>
                    </div>
                ))}
                <div className="header__links__content">
                    <button type="button" onClick={props.showModal}>
                        Contact
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;