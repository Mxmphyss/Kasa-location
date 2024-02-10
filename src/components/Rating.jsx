import "./styles/Rating.css";
import logements from '../Data/Data.json';
import { useParams } from "react-router-dom";
import Error from "../Pages/Error";
import { useState } from "react";

function Rating (){

    const [ define, setDefine ] = useState(0)

    const { id } = useParams();
    const logement = logements.find(logement => logement.id === id);

    if(!logement){
        <Error />
    }

    const ratingValue = logement.rating
    const valueInt = parseInt(ratingValue)
    let count = 0;

    function countUp (){
        if (count <= valueInt){
            count++;
        }
    }
    console.log(valueInt)

    function changeColor (){
        do{
            if(define === 0){
                setDefine(define - 1)
                setDefine(define + 1)
            } 
        } while (count === valueInt)
    }


    return (
        <div className="stars">
            <i className={ define == 1 ? "styleRed" : "styleGrey" } class="fa-solid fa-star"></i>
            <i className={ define == 1 ? "styleRed" : "styleGrey" } class="fa-solid fa-star"></i>
            <i className={ define == 1 ? "styleRed" : "styleGrey" } class="fa-solid fa-star"></i>
            <i className={ define == 1 ? "styleRed" : "styleGrey" } class="fa-solid fa-star"></i>
            <i className={ define == 1 ? "styleRed" : "styleGrey" } class="fa-solid fa-star"></i>
        </div>
    )
}

export default Rating