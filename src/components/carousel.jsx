import "./styles/Carousel.css";
import logements from '../Data/Data.json';
import { useState } from "react";
import { useParams } from "react-router-dom";
import arrowLeft from "./../../src/assets/arrow_left.png";
import arrowRight from "./../../src/assets/arrow_right.png"

function Carrousel (){

    const [sliderIndex, setSliderIndex] = useState(0);
    const [position, setPosition] = useState(1);

    /* id de la page */

    const { id } = useParams();
    const logement = logements.find(logement => logement.id === id);

    /* index et localisation */

    const targetPictures = logement.pictures
    const targetIndex = logement.pictures[sliderIndex]
    const targetLength = logement.pictures.length

    const newTargetLength = targetLength - 1;

    const add1 = () => {

        if (position <= targetLength - 1){
            setPosition(position + 1);
        } else {
            setPosition(position)
        }
    };

    const add2 = () => {

        if (position > 1){
            setPosition(position - 1);
        } else {
            setPosition(position)
        }
    };

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

    const severalFun1 = () => {
        switchLeft();
        add1();
    }

    const severalFun2 = () => {
        switchRight();
        add2();
    }

    return (
        <div className="carrousel">
            <div className="sectionPicture">
                <img src={targetIndex} alt="image du carrousel" />
            </div>
            <div class="arrow">
                <img src={arrowLeft} alt="flèche de gauche" className={ sliderIndex === 0 ? "arrow_left disabled" : "arrow_left" } onClick={severalFun1}/>
                <img src={arrowRight} alt="flèche de droite" className={ sliderIndex >= newTargetLength ? "arrow_right disabled" : "arrow_right" } onClick={severalFun2}/>
		    </div>
            <div className="count">
                <p>{sliderIndex +1}/{targetLength}</p>
            </div>
        </div>
    )
}

export default Carrousel