import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import burgerButton from "../assets/hamburger-menu-svgrepo-com.svg";
import Login from "./Login";
import { adminVerificator } from "../utilities/verificateAdmin.utilities";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux";

import { LogOutUser } from "../redux/features/userSlice";

function Navbar() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  const LogOutGoogle = () => {
    dispatch(LogOutUser());
  };
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
          {adminVerificator(user.email) ? (
            <li>
              <Link to={"/dashboard"}>DASHBOARD</Link>
            </li>
          ) : null}

          <li>
            <button
              className="font-Almarai underline font-bold px-1"
              onClick={() => document.getElementById("my_modal_3")!.showModal()}
            >
              LOGIN
            </button>
            <dialog id="my_modal_3" className="modal flex  justify-center">
              <div className="modal-box bg-white flex items-center w-80  ">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✖️
                  </button>
                  {user.active ? (
                    <div onClick={LogOutGoogle}>
                      <button>LogOut</button>
                    </div>
                  ) : (
                    <Login />
                  )}
                </form>
              </div>
            </dialog>
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
          {adminVerificator(user.email) ? (
            <li>
              <Link to={"/dashboard"}>Dashboard</Link>
            </li>
          ) : null}
          <li>
            <button
              className="font-Almarai  "
              onClick={() => document.getElementById("my_modal_1")!.showModal()}
            >
              Login
            </button>
            <dialog id="my_modal_1" className="modal  justify-center flex ">
              <div className="modal-box bg-white flex items-center w-80   ">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✖️
                  </button>
                  {user.active ? (
                    <div onClick={LogOutGoogle}>
                      <button>LogOut</button>
                    </div>
                  ) : (
                    <Login />
                  )}
                </form>
              </div>
            </dialog>
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
