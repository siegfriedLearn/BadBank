import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

export const UserContext = createContext(null);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContext.Provider value={{ name: "Carlos" }}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  </React.StrictMode>
);
