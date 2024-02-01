import { Link } from "react-router-dom";
import "./styles/Card.css"

function Card ( {logement} ){
    return (
            <div className="Card">
                <Link to={`/logement/${logement.id}`}>
                    <img src={logement.cover} alt={logement.title} />
                    <h2>{logement.title}</h2>
                </Link>
            </div>
    )

}

export default Card