import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import {consulta} from './helpers/consulta'

export const UserContext = createContext(null);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContext.Provider value={consulta()}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  </React.StrictMode>
);
