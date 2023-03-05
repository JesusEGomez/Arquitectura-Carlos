import "./styles.css"

const Card = ({obras, onSelect}) =>{
    if(obras !== null){
    return(
        <div className="card-container" onClick={()=>onSelect(obras)}>
            <img 
            src={obras.image} 
            alt={obras.name}
            className="image"/>
            <h2 className="card-title">{obras.name}</h2>
        </div>
        )
    }
}
    export default Card;