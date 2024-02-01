import "./styles/Carousel.css";
import logements from '../Data/Data.json';
import { useState } from "react";

function Carrousel (){

    const [slider, setSlider] = useState(0)

    /* nombre d'image à affciher */

    const count = logements.pictures

    /* Action pour fleche de gauche et de droite */

    const switchLeft = () => {
        setSlider(slider + 1)
    }

    const switchRight = () => {
        setSlider(slider - 1 )
    }

    return (
        <div className="carrousel">
            <div className="sectionPicture">
                <ul>
                    {logements.map(() => (
                        <li>
                            <img key={logements.id} src={logements.pictures} alt="image du carrousel" />
                        </li>
                    ))}
                </ul>
            </div>
            <div class="arrow">
                <img src="./src/assets/arrow_left.png" alt="flèche de gauche" className="arrow_left" onClick={switchLeft}/>
                <img src="./assets/arrow_right.png" alt="flèche de droite" className="arrow_right" onClick={switchRight}/>
		    </div>
            <div className="count">
                <p>{""}/{count}</p>
            </div>
        </div>
    )
}

export default Carrousel