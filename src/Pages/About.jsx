import Banner from "../components/banner";
import BackgroundImg2 from "../assets/imgBanniere2.png";
import Collapse from "../components/collapse";
import "../components/styles/About.css";

function About() {
    return (
        <main className="mainContent">
            <Banner BackgroundImg={BackgroundImg2}/>
            <section className="aboutContent">
                <Collapse title={"Fiabilité"} container={"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."}/>
                <Collapse title={"Respect"} container={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."}/>
                <Collapse title={"Service"} container={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."}/>
                <Collapse title={"Sécurité"} container={"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."}/>
            </section>
        </main>
    )
}
 
export default About