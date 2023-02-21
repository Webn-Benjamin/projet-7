import React from "react";
import "./_header.scss";
import logoHeader from "../../assets/img/Logo.png";
import { NavLink } from "react-router-dom";

function Header() {
    return(
        <header>
            <img src={logoHeader} alt="Logo"/>
            <nav>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/a-propos">À propos</NavLink>
            </nav>
        </header>
    );
}

export default Header;