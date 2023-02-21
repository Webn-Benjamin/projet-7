import React from "react";
import "./_tag.scss";

function Tag({nom}) {
    return(
        <span className="tag">{nom}</span>
    );
}

export default Tag;