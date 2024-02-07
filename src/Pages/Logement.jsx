import Carousel from "../components/carousel";
import logements from '../Data/Data.json';
import Error from "../Pages/Error";
import "../components/styles/logement.css";
import Collapse from "../components/collapse";
import Tags from "../components/Tags";
import { useParams } from "react-router-dom";
import Rating from "../components/Rating";

function Logement(){

    const { id } = useParams();
    const logement = logements.find(logement => logement.id === id);

    if(!logement){
        <Error />
    }

    const styleEquipement = {
        flexDirection: "column",
    }

    const styleFontSize = {
        fontSize: "18px",
    }

    return(
        <main className="logement">
            <Carousel slides={logement}/>
            <section className="mainContainer">
                <div className="drawer-1">
                    <div className="box-1">
                        <h1>{logement.title}</h1>
                        <p>{logement.location}</p>
                    </div>
                    <div className="box-2">
                        <p>{logement.host.name}</p>
                        <div className="imgPP">
                           
                        </div>
                    </div>
                </div>
                <div className="drawer-2">
                    <div className="box-3">
                        <Tags tags={"Cozy"}/>
                        <Tags tags={"Canal"}/>
                        <Tags tags={"Paris 10"}/>
                    </div>
                    <div className="box-4">
                        <Rating />
                    </div>
                </div>
                <div className="collapse">
                    <Collapse title="Description" container={logement.description} style={styleFontSize}/>
                    <Collapse style={styleEquipement} title="Equipements" container={logement.equipments}/>
                </div>
            </section>
        </main>    
    )
}

export default Logement