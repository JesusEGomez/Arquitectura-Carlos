import "./styles.css"
import logo from "./img/logo.png"
import { IoMenuSharp } from "react-icons/io5";

const navBar = ({onCLose})=> {
    return(
        <div className="container">
            <div className="logo-container">
                <img src={logo} alt="logo" className="logo" />
            </div>
            <div className="iconMenu-container">
                <IoMenuSharp 
                className="menu-icon"
                onClick={onCLose}>
                </IoMenuSharp>
                
            </div>
        </div>

    )
}

export default navBar;