import React from "react";
import "./_home.scss";
import Banner from "../../components/Banniere/Banniere";
import BannerHome from "../../assets/img/Pages/Accueil/Banniere.png";
import { NavLink } from "react-router-dom";
import Article from "../../components/Article/Article";
import Housing from "../../assets/api/housing.json";

function Accueil() {
  return (
    <div className="Accueil">
      <Banner image={BannerHome} texte="Chez vous, partout et ailleurs" />
      <div className="container-housing">
        {Housing.map((housing) => (
          <NavLink key={housing.id} to={"/logement/" + housing.id + "/#"}>
            <Article
              key={housing.id}
              id={housing.id}
              image={housing.cover}
              titre={housing.title}
            />
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Accueil;
