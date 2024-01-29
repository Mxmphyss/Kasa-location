import dataLocation from "../Data/Data.json"

function Card (){
    console.log(dataLocation.map)
    return (
        dataLocation.map((data) => {
            <div className="Card">
                <img src={data.cover} alt={data.title} />
                <h2>{data.title}</h2>
            </div>
        })
    )

}

export default Card