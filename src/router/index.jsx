import { createBrowserRouter } from "react-router-dom";

import { Home } from "../pages/Home";
import { Deposit } from "../pages/Deposit";

import LayoutPublic from "../layout/LayoutPublic";
import { AllData } from "../pages/AllData";
import { Balance } from "../pages/Balance";
import { CreateAccount } from "../pages/CreateAccount";
import { Login } from "../pages/Login";
import { Withdraw } from "../pages/Withdraw";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic></LayoutPublic>,
    errorElement: <h1>Ups, tenemos un problema con esta página</h1>,
    children: [
      {
        //index: true,
        path: "/",
        element: <Home />,
       
      },
      {
        path: "/alldata",
        element: <AllData/>,
      },
      {
        path: "/balance",
        element: <Balance/>,
      },
      {
        path: "/createaccount",
        element: <CreateAccount/>,
      },
      {
        path: "/deposit",
        element: <Deposit />,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/withdraw",
        element: <Withdraw />,
      },
    ],
  },
]);
