import "./styles/Banner.css";
import ImgBanner from "./assets/imgBanniere.png";
import logo1 from "./assets/LOGO.png";

function Banner (){
    return (
        <div>
            <div className="bannerBase">
                <div>
                    <img url={ImgBanner} alt="image de bannière"/>
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