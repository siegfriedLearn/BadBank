import { useContext, useState } from "react";
import { UserContext } from "../main";
import { Card } from "../components/Card";

export const Balance = () => {
  const ctx = useContext(UserContext);

  return (
    <Card
      bgcolor="light"
      txtcolor="color"
      header="Balance"
      title="This is your account balance"
      text="Info"
      body={`Name ${ctx.name}`}
    />
  );
};
