import Banner from "../components/banner";
import BackgroundImg2 from "../assets/imgBanniere2.png";
import Collapse from "../components/collapse";
import "../components/styles/About.css";

function About() {
    return (
        <main className="mainContent">
            <Banner BackgroundImg={BackgroundImg2}/>
            <section className="aboutContent">
                <Collapse title={"Fiabilité"} container={""}/>
                <Collapse title={"Respect"} container={""}/>
                <Collapse title={"Service"} container={""}/>
                <Collapse title={"Sécurité"} container={""}/>
            </section>
        </main>
    )
}
 
export default About