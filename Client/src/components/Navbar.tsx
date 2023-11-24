import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import burgerButton from "../assets/hamburger-menu-svgrepo-com.svg";

function Navbar() {
  return (
    <div className="navbar  bg-black  m-5">
      <div className="flex-1">
        <img src={Logo} alt="Logo" className="h-20 w-fit rounded-md" />
      </div>
      <div className="flex-none max-md:hidden text-yellow-text">
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
            <Link to={"/dashboard"}>DASHBOARD</Link>
          </li>
          <li>
            <details className="z-10">
              <summary>OBRAS Y PROYECTOS</summary>
              <ul className="p-2 bg-base-100">
                <li>
                  <Link to={"/category/salud"}>SALUD</Link>
                </li>
                <li>
                  <Link to={"/category/vivienda"}>VIVIENDA</Link>
                </li>
                <li>
                  <Link to={"/category/interiores"}>INTERIORES</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      {/* <---------------------------> */}

      <details className="dropdown dropdown-end hidden  max-md:block m-2  text-yellow-text font-Almarai text-lg">
        <summary className="m-1 btn bg-transparent border-transparent ">
          <img
            src={burgerButton}
            width={50}
            className="bg-yellow-text rounded-lg"
            alt=""
          />
        </summary>
        <ul className="p-2 shadow menu dropdown-content  z-[1] bg-base-100 rounded-box w-52">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"./office"}>Estudio</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contacto</Link>
          </li>
          <li>
            <Link to={"/dashboard"}>Dashboard</Link>
          </li>
          <li>
            <details>
              <summary>Obras y Proyectos</summary>
              <ul>
                <li>
                  <Link to={"/category/salud"}>Salud</Link>
                </li>
                <li>
                  <Link to={"/category/vivienda"}>Vivienda</Link>
                </li>
                <li>
                  <Link to={"/category/interiores"}>Interiores</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </details>
    </div>
  );
}

export default Navbar;
