import { Routes, Route } from "react-router-dom";
import { Home, Filter, Description } from "../pages";


const Router = () =>{
    return(
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Filter/:categorias" element={<Filter />} />
            <Route exact path="/Filter/:categorias/:id" element={<Description />} />
        </Routes>
    )
}
export default Router;