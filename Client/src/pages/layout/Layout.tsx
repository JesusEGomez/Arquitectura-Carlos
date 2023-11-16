import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../../components";

export default function LayoutPublic() {
  return (
    <div className=" bg-black  h-screen  flex flex-col items-center m-0 p-0 box-border">
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
}
