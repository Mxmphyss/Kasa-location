import "./styles/Carousel.css";
import logements from '../Data/Data.json';
import { useState } from "react";
import { useParams } from "react-router-dom";

function Carrousel (){

    const [sliderIndex, setSliderIndex] = useState(0);

    /* id de la page */

    const { id } = useParams();
    const logement = logements.find(logement => logement.id === id);

    const targetPictures = logement.pictures

    console.log(targetPictures)

    /* index et localisation */

    const indexPicture = {

    }

    /* Fleche gauche et droite */

    const switchLeft = () => {
        const isFirstSlide = sliderIndex === 0;
        const newIndex = isFirstSlide ? targetPictures.length - 1 : sliderIndex - 1;
        setSliderIndex(newIndex);
    };

    const switchRight = () => {
        const isLastSlide = sliderIndex === targetPictures.length - 1;
        const newIndex = isLastSlide ? 0 : sliderIndex + 1;
        setSliderIndex(newIndex);
    }

    return (
        <div className="carrousel">
            <div className="sectionPicture">
                <img src={indexPicture} alt="image du carrousel" />
            </div>
            <div class="arrow">
                <img src="./src/assets/arrow_left.png" alt="flèche de gauche" className="arrow_left" onClick={switchLeft}/>
                <img src="./assets/arrow_right.png" alt="flèche de droite" className="arrow_right" onClick={switchRight}/>
		    </div>
            <div className="count">
                <p>{""}/{""}</p>
            </div>
        </div>
    )
}

export default Carrousel