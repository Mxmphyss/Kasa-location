import Carousel from "../components/carousel";
import logements from '../Data/Data.json';
import "../components/styles/logement.css";
import Collapse from "../components/collapse";
import Tags from "../components/Tags";

function Logement(){
    return(
        <main className="logement">
            <section className="mainContainer">
                <div className="drawer-1">
                    <div className="box-1">
                        <h1>{"Cozy loft on the Canal Saint-Martin"}</h1>
                        <p>{"Paris, Île-de-France"}</p>
                    </div>
                    <div className="box-2">
                        <p>{"Alexandre Dumas"}</p>
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
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                </div>
                <div className="collapse">
                    <Collapse title={"Description"}/>
                    <Collapse title={"Équipements"}/>
                </div>
            </section>
        </main>    
    )
}

export default Logement