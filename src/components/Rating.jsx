import "./styles/Rating.css";

function Rating( {note} ){

    const stars = [1, 2, 3, 4, 5];

    return (
        <div className="stars">
            {stars.map((level) => 
                note >= level ? (
                    <i key={level.toString()} className="fa-solid fa-star styleRed"></i>
                ) : (
                    <i key={level.toString()} className="fa-solid fa-star styleGrey"></i>
                )
            )}
        </div>
    )
}

export default Rating;