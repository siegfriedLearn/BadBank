import { Outlet } from "react-router-dom";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

const LayoutPublic = () => {
  return (
    <>
      <Nav />
      <main className="d-flex justify-content-center">
        {/* Outlet maneja la ruta que se va a cargar */}
        <Outlet />
      </main>
      <Footer/>
    </>
  );
};

export default LayoutPublic;
