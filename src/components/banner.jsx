import "./styles/Banner.css";

function Banner ({title, BackgroundImg}){
    return (
            <div className="bannerBase">
                <img src={BackgroundImg} alt="image de bannière"/>
                <h1>{title}</h1>
            </div>
    )
}

export default Banner