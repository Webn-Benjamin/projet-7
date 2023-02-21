import React, { useState } from "react";
import "./_dropdown.scss";
import arrow from "../../assets/img/Components/Dropdown/arrow.svg";

function Dropdown({title, description}) {
    /* Crée un Hook d'état */
    const [open, setOpen] = useState(false);

    return(
        <div className="dropdown" id={`dropdown-${title}`}>
            <div className="header-dropdown">
                <div className="title-dropdown">{title}</div>
                <span className={`arrow-dropdown ${open}`} onClick={() => setOpen(!open)}>
                    <img src={arrow} alt="Ouvrir cette liste"/>
                </span>
            </div>
            {
                /* Si le dropdown est à TRUE alors il affichera la description */
                open && <div className="description-dropdown">{description}</div>
            }
        </div>
    );
}

export default Dropdown;