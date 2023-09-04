import { createBrowserRouter } from "react-router-dom";

import { Home } from "../pages/Home";
import About from "../pages/about";
import LayoutPublic from "../layout/LayoutPublic";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic></LayoutPublic>,
    errorElement: <h1>Ups, tenemos un problema con esta página</h1>,
    children: [
      {
        path: "/",
        element: <Home />,
       
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
