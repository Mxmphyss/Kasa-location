import { Fragment } from "react";
import Banner from "../components/banner";
import BackgroundImg2 from "../assets/Image/imgBanniere2.png";
import Collapse from "../components/collapse";

function About() {
    return (
        <main className="mainContent">
            <Banner BackgroundImg={BackgroundImg2}/>
            <section className="aboutContent">
                <Collapse />
            </section>
        </main>
    )
}
 
export default About