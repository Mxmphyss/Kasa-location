import "./styles/Collapse.css";
import { useState } from "react";
import logements from '../Data/Data.json';
import { useParams } from "react-router-dom";

function Collapse ({ title, style, container }){

    const [click, setClick] = useState(0);

    const { id } = useParams();
    const logement = logements.find(logement => logement.id === id);

    const add = () => {

        const count = [0, 1]

        for ( let i = 0; i <= count.length; i++){
            setClick(click + 1)
        }

        if (click >= 2){
            setClick(click - 2)
        } else {
            setClick(click == 0)
        }
    };

    /* 

    Ce code ne fonctionne pas. Il m'affiche "Logement.map is not a function". Je ne peux pas viser directement les tags de l'id
    de la page en question
    
    {logement.forEach(function () {
            <p>{ container }</p>
        })
    };
    
    */

    return (
        <div className="mainCollapse">
            <div className={ click == 0 ? "container-1" : "container-1 onWork-1" }>
                <h2>{ title }</h2>
                <button onClick={add} className={ click == 0 ? "buttonSpin" : "buttonSpin spin" }>
                    <i class="fa-solid fa-chevron-up"></i>
                </button>
            </div>
            <div style={style} className={ click == 0 ? "container-2" : "container-2 onWork-2" }>

            </div>
        </div>
    )
}

export default Collapse