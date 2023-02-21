import React from "react";
import "./_article.scss";

function Article({id, image, titre}) {
    return(
        <div className="article" id={id}>
            <img src={image} alt="Article"/>
            <div className="article-shadow"></div>
            <span className="article-title">{titre}</span>
        </div>
    );
}

export default Article;