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

    return (
        <div className="mainCollapse">
            <div className={ click == 0 ? "container-1" : "container-1 onWork-1" }>
                <h2>{ title }</h2>
                <button onClick={add} className={"buttonSpin"}>
                    <i className={ click == 0 ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down" }></i>
                </button>
            </div>
            <div style={style} className={ click == 0 ? "container-2" : "container-2 onWork-2" }>
                {container}
            </div>
        </div>
    )
}

export default Collapse