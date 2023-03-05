import "./styles.css"
import { useParams } from "react-router-dom";


const Description = ()=>{
    const {id} = useParams()
    
    return(
        <div className="detail-container">
            <h1 className="tittle-container">{id}</h1>
        </div>
    
    )
    
}
export default Description;