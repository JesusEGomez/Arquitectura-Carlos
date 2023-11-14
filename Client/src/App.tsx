import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { store } from "./redux";
import { Provider } from "react-redux";
const Home = lazy(() => import("./pages/Home/Home"));
const Office = lazy(() => import("./pages/Office/Office"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Project = lazy(() => import("./pages/Projects/Projects"));

function App() {
  return (
    <div className=" bg-black w-screen  h-screen flex flex-col items-center m-0 p-0 box-border">
      <Suspense
        fallback={
          <button className="btn">
            <span className="loading loading-spinner"></span>
            loading
          </button>
        }
      >
        <Provider store={store}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/office" element={<Office />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/project" element={<Project />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </Provider>
      </Suspense>
    </div>
  );
}

export default App;
