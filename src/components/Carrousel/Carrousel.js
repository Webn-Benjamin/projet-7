import React, { useState } from "react";
import "./_carrousel.scss";
import fleche from "../../assets/img/Components/Carrousel/arrow.png";

function Carrousel({images}) {

    /* Crée un Hook d'état */
    let [currentImageIndex, setCurrentImageIndex] = useState(0);
    let imageCount = images.length;

    const prevImg = () => {
        if(currentImageIndex === 0) {
            setCurrentImageIndex(imageCount - 1);
        } else {
            setCurrentImageIndex(currentImageIndex - 1);
        }
        return(setCurrentImageIndex);
    };  

    const nextImg = () => {
        if(currentImageIndex === (imageCount - 1)) {
            setCurrentImageIndex(0);
        } else {
            setCurrentImageIndex(currentImageIndex + 1);
        }
        return(setCurrentImageIndex);
    };

    return(
        <div className="carrousel">
            {
                imageCount > 1 && <img className="fleche fleche-gauche" src={fleche} alt="Contenu Précédent" onClick={prevImg}/>
            }
            {
                images.map((image, index) => {
                    return(
                        <img key={index} className={index === currentImageIndex ? 'carrousel-img actif' : 'carrousel-img'} src={image} alt="Logement"/>
                    )
                })
            }
            {
                imageCount > 1 && <img className="fleche fleche-droite" src={fleche} alt="Contenu suivant" onClick={nextImg}/>
            }
        </div>
    );
}

export default Carrousel;