import React from "react";
import "./_banner.scss";

function Banner({image, texte}) {
    return(
        <div className="banner">
            <img src={image} alt="Bannière du site"/>
            <div className="banner-shadow"></div>
            <span className="banner-text">{texte}</span>
        </div>
    );
}

export default Banner;