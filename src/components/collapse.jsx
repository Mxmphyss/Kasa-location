import "./styles/Collapse.css";
import { useState } from "react";

function Collapse ({ title, container }){

    const [click, setClick] = useState(0)

    const add = () => {

        const count = [0, 1]

        for ( let i = 0; i <= count.length; i++){
            setClick(click + 1)
        }

        if (click >= 2){
            setClick(click - 2)
        } else {
            setClick(click == 0)
        }
    }

    return (
        <div className="mainCollapse">
            <div className={ click == 0 ? "container-1" : "container-1 onWork-1" }>
                <h2>{ title }</h2>
                <button onClick={add} className={ click == 0 ? "buttonSpin" : "buttonSpin spin" }>
                    <i class="fa-solid fa-chevron-up"></i>
                </button>
            </div>
            <div className={ click == 0 ? "container-2" : "container-2 onWork-2" }>
                <p>{ container }</p>
            </div>
        </div>
    )
}

export default Collapse