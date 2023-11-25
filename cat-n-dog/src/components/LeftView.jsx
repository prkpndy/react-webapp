import React from "react";

import "../styles/LeftView.css";

import logoGooglePlayStore from "../assets/google-play-badge@2x.png";
import logoAppleStore from "../assets/AppStoreBadge.svg";

const LeftView = (props) => {
    return (
        <div className="left-view">
            <div className="left-view__content">
                <div className="left-view__content__heading">
                    <p className="Heading">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                    </p>
                </div>
                <div className="left-view__content__paragraph">
                    <p className="Paragraph">
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen
                        book.
                    </p>
                </div>
            </div>

            <div className="left-view__store-logos">
                <a href="https://www.apple.com/in/app-store/">
                    <img
                        className="left-view__store-logos__apple-store"
                        src={logoAppleStore}
                        alt="Apple Store"
                    />
                </a>
                <a href="https://play.google.com/store">
                    <img
                        className="left-view__store-logos__play-store"
                        src={logoGooglePlayStore}
                        alt="Google Play Store"
                    />
                </a>
            </div>
        </div>
    );
};

export default LeftView;
