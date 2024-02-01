import "../components/styles/Home.css";
import Banner from "../components/banner";
import Card from "../components/Card";
import BackgroundImg from "../assets/imgBanniere.png";
import logements from '../Data/Data.json';

function Home (){
    return (
        <main className="mainContent">
            <Banner title="Chez vous, partout et ailleurs" BackgroundImg={BackgroundImg}/>
            <div className="sectionLogement">
                {logements.map((logement) => (
                    <Card logement={logement} key={logement.id} />
                ))}
            </div>
        </main>
    )
}

export default Home