import "./styles.css"
import { BsInstagram, BsWhatsapp } from "react-icons/bs"

const Footer = () =>{
    return(
        <div className="footer-container">
            <div className="direction-container">
                <p className="direction">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim blandit neque, ut dignissim lectus condimentum sit amet. Aenean volutpat.</p>
            </div>
            <div className="socialMedia-container">
                <ul className="socialMedia-ul">
                    <li className="socialMedia-li">
                        <BsInstagram className="instagramIcon" />
                        <p className="instagramDirection">Lorem ipsum dolor.
                        </p>
                    </li>
                    <li className="socialMedia-li">
                        <BsWhatsapp className="facebookIcon"/> 
                        <p className="facebookDirection">Lorem ipsum dolor.
                        </p> 
                    </li>
                </ul>
            </div>
            
        </div>
    )
}
export default Footer;