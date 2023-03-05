import "./styles.css"
import { useNavigate } from "react-router-dom";
import { Card } from "../../components";
import { OBRAS } from "../../constans/data/obras";





const Home = () => {
    const navigate = useNavigate()
    const onHandlerSelect = (obra)=>{
    navigate(`/filter/${obra.category}/${obra.name}`)
    }
    return(
        <div className="home-container">
            {OBRAS.map((obra)=>(
                <Card 
                onSelect={onHandlerSelect}
                className="cards" 
                obras={obra} 
                key={obra.id}/>
            ))}
        </div>
    )
};
export default Home;