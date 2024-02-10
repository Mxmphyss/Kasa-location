import "./styles/Header.css";
import Logo1 from "../assets/LOGO.png";
import { Link } from "react-router-dom";

function Header (){
    return (
            <header className="nav1">
                <div className="imgLogo1">
                    <img src={Logo1} alt="logo KASA"/>
                </div>
                <nav className="nav2">
                    <Link to="/" >Accueil</Link>
                    <Link to="/A-propos" ><span>A propos</span></Link>
                </nav>
            </header>
    )
}

export default Header