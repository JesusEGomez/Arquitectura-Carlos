import "./styles.css"
import logo from "./img/logo.png"
import { IoMenuSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const navBar = ({onCLose, isOpen, onDrop, isDropDown, OBRAS})=> {
    const categorias =["salud","vivienda","interiores"]
    return(
        <div className="container">
            <div className="logo-container">
                <img src={logo} alt="logo" className="logo" />
            </div>
            <div className="iconButton-container">
                <IoMenuSharp 
                className="menu-button"
                onClick={onCLose}>
                </IoMenuSharp>
            </div>
            <div className={isOpen ? "menu-container" : "menu-container isActive"} >
                <ul className="categoriesList">
                    <Link to ="/"><li className="categories">HOME</li></Link>
                    <li className="categories">ESTUDIO</li>
                    <div className={isDropDown ? "obrasYProyectos" : "obrasYProyectos isDown"}>
                        <li className="categories" onClick={onDrop} >OBRAS Y PROYECTOS</li>
                        {categorias.map((categoria)=>{
                            return(<Link to={`/Filter/${categoria}`} className="categories" key={categoria}><li className="categories" >{categoria}</li></Link>)
                        })}
                    </div>   
                    <li className="categories">CONTACTO</li>
                    
                </ul>
            
            </div>
        </div>

    )
}

export default navBar;