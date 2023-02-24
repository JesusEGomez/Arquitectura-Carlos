import "./styles.css"
import logo from "./img/logo.png"
import { IoMenuSharp } from "react-icons/io5";

const navBar = ({onCLose, isOpen})=> {
    console.log(isOpen)
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
            <div className={isOpen ? "menu-container" : "menu-container isActive"}>
                <ul className="categoriesList">
                    <li className="categories">Estudio</li>
                    <li className="categories">Obras y Proyectos</li>
                    <li className="categories">Contacto</li>
                </ul>
            
            </div>
        </div>

    )
}

export default navBar;