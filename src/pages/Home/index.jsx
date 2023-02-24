import "./styles.css"
import { Card } from "../../components";
import { OBRAS } from "../../constans/data/obras";


const Home = () => {

    return(
        <div className="home-container">
            {OBRAS.map((obra)=>(
                <Card 
                className="cards" 
                obras={obra} 
                key={obra.id}/>
            ))}
        </div>
    )
};
export default Home;