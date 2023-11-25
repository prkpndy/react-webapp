import React from "react";

import logoFacebook from "../assets/facebook-icon@2x.png";
import logoLinkedin from "../assets/linkedin-icon@2x.png";
import logoTwitter from "../assets/twitter-icon@2x.png";

const ConnectIcons = ({ connectDivClass, connectIconClass }) => {
    const connectLinks = ["facebook", "linkedin", "twitter"];
    const connectIcons = {
        facebook: logoFacebook,
        linkedin: logoLinkedin,
        twitter: logoTwitter,
    };

    return (
        <div className={connectDivClass}>
            {connectLinks.map((value) => (
                <div key={value}>
                    <a href={"https://www." + value + ".com"}>
                        <img
                            className={connectIconClass}
                            src={connectIcons[value]}
                            alt={value}
                        />
                    </a>
                </div>
            ))}
        </div>
    );
};

export default ConnectIcons;
