import "./styles/Rating.css";
import logements from '../Data/Data.json';
import { useParams } from "react-router-dom";
import Error from "../Pages/Error";

function Rating (){

    const { id } = useParams();
    const logement = logements.find(logement => logement.id === id);

    if(!logement){
        <Error />
    }

    const styleRed = {
        color: "#FF6060",
    }

    const ratingValue = logement.rating
    const valueInt = parseInt(ratingValue)

    

    console.log(valueInt)

    return (
        <div className="stars">
            <i style={styleRed} class="fa-solid fa-star"></i>
            <i style={styleRed} class="fa-solid fa-star"></i>
            <i style={styleRed} class="fa-solid fa-star"></i>
            <i style={styleRed} class="fa-solid fa-star"></i>
            <i style={styleRed} class="fa-solid fa-star"></i>
        </div>
    )
}

export default Rating