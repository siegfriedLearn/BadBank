import { Outlet } from "react-router-dom";
import { Nav } from "../components/nav"

const LayoutPublic = (  ) => {

    return (
    <>
        <Nav/>
        <main>
            <Outlet/>
        </main>
        <footer>Fotter</footer>
    </>
    )

};

export default LayoutPublic;