import "./styles/tags.css";
import logements from '../Data/Data.json';
import { Fragment } from "react";
import { useParams } from "react-router-dom";
import Error from "../../src/Pages/Error";

function Tags (){

    const { id } = useParams();
    const logement = logements.find(logement => logement.id === id);

    if(!logement){
        <Error />
    }

    return (
            <Fragment>
                {logement.tags.map((feature, index) =>
                    <div className="tags" key={index}>
                        <p>{feature}</p>
                    </div>
                )}
            </Fragment>
    )
}

export default Tags