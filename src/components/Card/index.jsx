import "./styles.css"

const Card = ({obras}) =>{
    return(
        <div className="card-container">
            <img 
            src={obras.image} 
            alt={obras.name}
            className="image"/>
            <h2 className="card-title">{obras.name}</h2>
        </div>
        )
    }
    export default Card;