import "./styles/Header.css";
import Logo1 from "./assets/LOGO.png";
import { Link } from "react-router-dom";

function Header (){
    return (
            <div className="nav1">
                <div>
                    <img src={Logo1} alt="logo KASA"/>
                </div>
                <div className="nav2">
                    <Link to="/" ><span>Accueil</span></Link>
                    <Link to="" >À propos</Link>
                </div>
            </div>
    )
}

export default Header