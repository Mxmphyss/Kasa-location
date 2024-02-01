import "./styles/tags.css";

function Tags ({ tags }){

    /* Il manque le .map pour générer autant de tag que dans le data.json */

    return (
        <div className="tags">
            <p>{ tags }</p>
        </div>
    )
}

export default Tags