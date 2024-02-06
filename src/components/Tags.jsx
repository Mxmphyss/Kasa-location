import "./styles/tags.css";
import logements from '../Data/Data.json';
import { Fragment } from "react";
import { useParams } from "react-router-dom";
import Error from "../../src/Pages/Error";

function Tags ({tags}){

    const { id } = useParams();
    const logement = logements.find(logement => logement.id === id);

    if(!logement){
        <Error />
    }

    return (

        /* Ce code ne fonctionne pas. Il m'affiche "Logement.map is not a function". Je ne peux pas viser directement les tags de l'id
        de la page en question */
        <div className="tags">
            <p>{ tags }</p>
        </div>
        /*
        <Fragment>
            {logements.map(() => (
                <div className="tags">
                    <p>{ logements.tags }</p>
                </div>
            ))}
        </Fragment>
        */

    )
}

export default Tags