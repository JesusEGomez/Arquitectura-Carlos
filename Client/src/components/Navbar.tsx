import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
function Navbar() {
  return (
    <div className="navbar  bg-black  m-5">
      <div className="flex-1">
        <img src={Logo} alt="Logo" className="h-20 w-fit rounded-md" />
      </div>
      <div className="flex-none text-yellow-text">
        <ul className="menu menu-horizontal font-Almarai underline font-bold px-1">
          <li>
            <Link to={"/"}>HOME</Link>
          </li>
          <li>
            <Link to={"./office"}>ESTUDIO</Link>
          </li>
          <li>
            <Link to={"/contact"}>CONTACTO</Link>
          </li>

          <li>
            <details className="z-10">
              <summary>OBRAS Y PROYECTOS</summary>
              <ul className="p-2 bg-base-100">
                <li>
                  <a>SALUD</a>
                </li>
                <li>
                  <a>VIVIENDA</a>
                </li>
                <li>
                  <a>INTERIORES</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
