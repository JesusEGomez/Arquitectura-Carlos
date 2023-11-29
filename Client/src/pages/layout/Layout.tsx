import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../../components";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { decodeJWT } from "../../utilities";
import { saveUser } from "../../redux/features/userSlice";

export default function LayoutPublic() {
  const dispatch = useDispatch();
  useEffect(() => {
    const credentials = localStorage.getItem("credential");
    if (credentials !== null) {
      const finalDecode = decodeJWT(credentials);
      const { email, name, picture } = finalDecode.payload;
      const user = { email, name, picture, active: true };
      dispatch(saveUser(user));
      console.log("credenciales guardadas");
    }
  });
  return (
    <div className=" bg-black  h-screen  flex flex-col items-center m-0 p-0 box-border">
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
}
