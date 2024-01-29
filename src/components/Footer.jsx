import "./styles/Footer.css";
import Logo2 from "../assets/Image/LOGO-2.png";
import { Link } from "react-router-dom";

function Footer (){
    return (
        <footer>
            <div className="logo1">
                <img src={Logo2} alt="logo KASA"/>
            </div>
            <div className="scriptText">
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer