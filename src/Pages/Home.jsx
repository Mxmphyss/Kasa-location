import "../components/styles/Home.css";
import { Fragment } from "react";
import Banner from "../components/banner";
import Card from "../components/Card";
import BackgroundImg from "../assets/Image/imgBanniere.png";

function Home (){
    return (
        <main className="mainContent">
            <Banner title="Chez vous, partout et ailleurs" BackgroundImg={BackgroundImg}/>
            <div className="sectionLogement">
                <Card />
            </div>
        </main>
    )
}

export default Home