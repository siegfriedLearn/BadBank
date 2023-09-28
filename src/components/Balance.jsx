//import { useContext, useState } from "react";
//import { UserContext } from "../main";
import { Card } from "../components/Card";

const user = JSON.parse(localStorage.getItem("user"));

export const Balance = () => {
  //const ctx = useContext(UserContext);
  

  return (
    <Card
      bgcolor="light"
      txtcolor="color"
      header="Balance"
      title="This is your account balance"
      text="Info"
      body={
        <>
          {user && <p>Name: {user.name}</p>}
          {user && <p>Balance: {user.balance}</p>}
        </>
      }
    />
  );
};
