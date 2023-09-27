//import { useContext, useState } from "react";
//import { UserContext } from "../main";
import { Card } from "../components/Card";

export const Balance = () => {
  //const ctx = useContext(UserContext);
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Card
      bgcolor="light"
      txtcolor="color"
      header="Balance"
      title="This is your account balance"
      text="Info"
      body={
        <>
          <p>Name: {user.name}</p>
          <p>Balance: {user.balance}</p>
        </>
      }
    />
  );
};
