import "./styles/Banner.css";
import imgBanner from "./assets/imgBanniere.png";
import logo1 from "./assets/LOGO.png";

function Banner (){
    return (
        <div>
            <div className="bannerBase">
                <div className="bannerPicture">
                    <img url={imgBanner} alt="image de bannière"/>
                </div>
                <div className="bannerBlur">
                </div>
                <div className="bannerTitle">
                    <p>Chez vous, partout et ailleurs</p>
                </div>
            </div>
        </div>
    )
}

export default Banner