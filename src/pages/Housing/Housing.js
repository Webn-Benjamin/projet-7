import React from "react";
import "./_Housing.scss";
import { useParams, Navigate } from "react-router-dom";
import Housing from "../../assets/api/housing.json";
import Carrousel from "../../components/Carrousel/Carrousel";
import Tag from "../../components/Tag/Tag";
import Rate from "../../components/Rate/Rate";
import Dropdown from "../../components/Dropdown/Dropdown";

function Fiche() {
  /* Récupère la bonne fiche */
  const id = useParams();
  const housing = Housing.find((housing) => housing.id === id.id);

  /* Tags */
  const tagsHousing = housing?.tags.map((tags, index) => {
    return <Tag key={index} nom={tags} />;
  });

  /* Équipements */
  const equipmentHousing = housing?.equipments.map((equipment, index) => {
    return <li key={index}>{equipment}</li>;
  });

  return (
    <>
      {housing ? (
        <div className="Article">
          <Carrousel images={housing?.pictures} />
          <div className="housing-owner">
            <div className="information-housing">
              <span className="title-housing">{housing?.title}</span>
              <span className="place-housing">{housing?.location}</span>
              <div className="tags">{tagsHousing}</div>
            </div>
            <div className="proprietaire-note">
              <div className="information-owner">
                <span className="nom-proprietaire">{housing?.host.name}</span>
                <img
                  className="photo-owner"
                  src={housing?.host.picture}
                  alt="Propriétaire"
                />
              </div>
              <Rate rating={housing.rating} />
            </div>
          </div>
          <div className="description-equipements">
            <Dropdown title="Description" description={housing?.description} />
            <Dropdown title="Équipements" description={equipmentHousing} />
          </div>
        </div>
      ) : (
        <Navigate replace to="/404" />
      )}
    </>
  );
}

export default Fiche;
