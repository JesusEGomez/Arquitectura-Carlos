import "./styles.css"
import { useParams, useNavigate } from "react-router-dom";
import { OBRAS } from "../../constans/data/obras";
import { Card } from "../../components";

const  Filter = () =>{
    const {categorias} = useParams()
    const navigate = useNavigate()
    const onHandlerSelect = (obra)=>{
    navigate(`/filter/${obra.category}/${obra.name}`)
    }

    return(
        <div className="filter-container">
            <h2 className="filter-title">{categorias}</h2>
            <div className="obras-container">
                {OBRAS.map((obra)=>{
                    return <Card obras={obra.category === categorias? obra : null} onSelect={onHandlerSelect} key={obra.id}></Card>
                })}
            </div>
        </div>
    )
}
export default Filter;