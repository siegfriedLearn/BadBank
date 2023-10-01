import { createBrowserRouter } from "react-router-dom";

import { Home } from "../pages/Home";
import { Deposit } from "../pages/Deposit";

import LayoutPublic from "../layout/LayoutPublic";
import { AllData } from "../pages/AllData";
import { BalancePage } from "../pages/BalancePage";
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
        //path: "/BadBank/",
        element: <Home />,
       
      },
      {
         path: "alldata",
        //path: "/BadBank/alldata",
        element: <AllData/>,
      },
      // {
      //   path: "/balance",
      //   //path: "/BadBank/balance",
      //   element: <BalancePage/>,
      // },
      {
        path: "/createaccount",
        //path: "/BadBank/createaccount",
        element: <CreateAccount/>,
      },
      {
         path: "/deposit",
        //path: "/BadBank/deposit",
        element: <Deposit />,
      },
      {
         path: "/login",
        //path: "/BadBank/login",
        element: <Login/>,
      },
      {
         path: "/withdraw",
        //path: "/BadBank/withdraw",
        element: <Withdraw />,
      },
    ],
  },
]);
